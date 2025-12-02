"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { useSearchParams } from "next/navigation"
import confetti from "canvas-confetti"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const WHATSAPP_GROUP_LINK = "https://chat.whatsapp.com/FKt1s873osJDnubIxrdKIT"

interface FormData {
  // Datos básicos
  nombre: string
  email: string
  whatsapp: string

  // Step 2: Intereses y situación (SIN metaProximoAno)
  intereses: string[]
  retoMayor: string
  operaActualmente: string

  // Step 3: Experiencia y dinero
  haPerdidoDinero: string
  capitalDisponible: string
  gananciaMensualDeseada: string
}

export function YouTubeLeadFormIngreso() {
  const searchParams = useSearchParams()
  const [mounted, setMounted] = useState(false)

  const [currentStep, setCurrentStep] = useState(1)
  const [leadId, setLeadId] = useState<string | null>(null)
  const [isExistingLead, setIsExistingLead] = useState(false) // TRUE = duplicado, no guardar más datos
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    email: "",
    whatsapp: "",
    intereses: [],
    retoMayor: "",
    operaActualmente: "",
    haPerdidoDinero: "",
    capitalDisponible: "",
    gananciaMensualDeseada: "",
  })

  const [paisDetectado, setPaisDetectado] = useState("")
  const [saving, setSaving] = useState(false)
  const [submittedFlag, setSubmittedFlag] = useState(false)
  const [creatingLead, setCreatingLead] = useState(false)

  // Cola de guardado para evitar race conditions
  const saveQueueRef = useRef<Array<{ field: string; value: any }>>([])
  const isSavingRef = useRef(false)
  const saveTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Estado de validación
  const [errors, setErrors] = useState<Record<string, string>>({})

  // Procesar cola de guardado (solo si no es lead existente)
  const processSaveQueue = useCallback(async () => {
    // Si es lead existente, no guardar nada más
    if (isExistingLead) {
      saveQueueRef.current = []
      setSaving(false)
      return
    }

    if (isSavingRef.current || !leadId || saveQueueRef.current.length === 0) {
      return
    }

    isSavingRef.current = true
    const { field, value } = saveQueueRef.current.shift()!

    try {
      console.log('💾 Guardando campo:', field, '=', value, 'para leadId:', leadId)
      const response = await fetch("/api/leads", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          leadId,
          field,
          value,
        }),
      })

      if (response.ok) {
        console.log('✅ Campo guardado exitosamente:', field)
      } else {
        console.error('❌ Error al guardar campo:', response.status)
      }
    } catch (error) {
      console.error("Error saving field:", error)
    } finally {
      isSavingRef.current = false

      // Procesar siguiente item en la cola
      if (saveQueueRef.current.length > 0) {
        processSaveQueue()
      } else {
        setSaving(false)
      }
    }
  }, [leadId, isExistingLead])

  // Agregar campo a la cola de guardado (solo si no es lead existente)
  const saveFieldToNeon = useCallback((field: string, value: any) => {
    // Si es lead existente, no guardar
    if (isExistingLead) {
      console.log('⏭️ Lead existente, omitiendo guardado de:', field)
      return
    }

    if (value === null || value === undefined || value === '') {
      return
    }

    if (!leadId) {
      console.log('⏳ leadId no disponible, omitiendo:', field)
      return
    }

    // Limpiar timeout anterior
    if (saveTimeoutRef.current) {
      clearTimeout(saveTimeoutRef.current)
    }

    // Agregar a la cola
    saveQueueRef.current.push({ field, value })
    setSaving(true)

    // Procesar después de debounce
    saveTimeoutRef.current = setTimeout(() => {
      processSaveQueue()
    }, 500)
  }, [leadId, isExistingLead, processSaveQueue])

  // Marcar como montado después del primer render
  useEffect(() => {
    setMounted(true)
  }, [])

  // Detectar geolocalización al montar (sin crear lead)
  useEffect(() => {
    if (!mounted) return

    const detectGeo = async () => {
      try {
        const geoResponse = await fetch("https://ipapi.co/json/")
        const geoData = await geoResponse.json()
        setPaisDetectado(geoData.country_code)

        const countryDialCodes: Record<string, string> = {
          UY: "+598 ",
          AR: "+54 ",
          CL: "+56 ",
          BR: "+55 ",
          MX: "+52 ",
          CO: "+57 ",
          ES: "+34 ",
          US: "+1 ",
        }

        const dialCode = countryDialCodes[geoData.country_code] || ""

        // Pre-llenar datos si vienen en URL
        const urlNombre = searchParams.get("nombre") || ""
        const urlEmail = searchParams.get("email") || ""
        const urlWhatsapp = searchParams.get("phone") || searchParams.get("whatsapp") || dialCode

        setFormData(prev => ({
          ...prev,
          nombre: urlNombre,
          email: urlEmail,
          whatsapp: urlWhatsapp
        }))
      } catch (error) {
        console.error("Error detecting geo:", error)
      }
    }

    detectGeo()
  }, [mounted, searchParams])

  const handleFieldChange = (field: keyof FormData, value: any) => {
    setFormData(prev => {
      const updated = { ...prev, [field]: value }
      // Solo guardar automáticamente si ya tenemos leadId y no es existente
      if (leadId && !isExistingLead) {
        saveFieldToNeon(field, value)
      }
      return updated
    })
  }

  const handleInteresToggle = (interes: string) => {
    const newIntereses = formData.intereses.includes(interes)
      ? formData.intereses.filter(i => i !== interes)
      : [...formData.intereses, interes]

    handleFieldChange("intereses", newIntereses)
  }

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    })
  }

  // Validar campos del Step 1
  const validateStep1 = (): boolean => {
    const newErrors: Record<string, string> = {}

    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es requerido'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Ingresa un email válido'
    }

    if (!formData.whatsapp.trim() || formData.whatsapp.trim().length < 8) {
      newErrors.whatsapp = 'El WhatsApp es requerido (mínimo 8 dígitos)'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Crear lead al avanzar del Step 1 (con detección de duplicados)
  const createLeadOnStep1 = async (): Promise<boolean> => {
    setCreatingLead(true)

    try {
      console.log('🆕 Creando lead con datos:', {
        nombre: formData.nombre,
        email: formData.email,
        whatsapp: formData.whatsapp
      })

      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre: formData.nombre.trim(),
          email: formData.email.trim(),
          whatsapp: formData.whatsapp.trim(),
          utm_source: searchParams.get("utm_source") || "ingreso",
          utm_campaign: searchParams.get("utm_campaign") || null,
          utm_medium: searchParams.get("utm_medium") || "video",
          pais: paisDetectado,
        }),
      })

      const data = await response.json()

      if (response.ok && data.success) {
        const newLeadId = data.data?.leadId || data.leadId
        const existing = data.data?.isExisting || data.isExisting || false

        console.log('✅ Respuesta del servidor:', { leadId: newLeadId, isExisting: existing })

        setLeadId(newLeadId)
        setIsExistingLead(existing)

        if (existing) {
          console.log('🔄 Lead ya existía, no se guardarán más datos')
        }

        return true
      } else {
        console.error('❌ Error creando lead:', data.error)
        setErrors(prev => ({ ...prev, general: data.error || 'Error al registrar' }))
        return false
      }
    } catch (error) {
      console.error("Error creating lead:", error)
      setErrors(prev => ({ ...prev, general: 'Error de conexión' }))
      return false
    } finally {
      setCreatingLead(false)
    }
  }

  // TOTAL_STEPS ahora es 4 (sin el paso de Tiempo/Riesgo/Objetivos)
  const TOTAL_STEPS = 4

  const handleNextStep = async () => {
    // Validar y crear lead en Step 1
    if (currentStep === 1) {
      if (!validateStep1()) {
        return // No avanzar si hay errores de validación
      }

      // Crear lead (o detectar duplicado)
      const success = await createLeadOnStep1()
      if (!success) {
        return // No avanzar si hubo error
      }
    }

    if (currentStep < TOTAL_STEPS) {
      setSaving(true)
      try {
        await new Promise(resolve => setTimeout(resolve, 500))
      } finally {
        setSaving(false)
      }

      setCurrentStep(prev => prev + 1)
      triggerConfetti()
    }
  }

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1)
    }
  }

  const handleWhatsAppClick = async () => {
    // Solo trackear si es lead nuevo (no existente)
    if (leadId && !isExistingLead) {
      try {
        await fetch("/api/leads", {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            leadId,
            field: "whatsappGroupAccessed",
            value: true,
          }),
        })

        await fetch("/api/leads", {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            leadId,
            field: "whatsappAccessedAt",
            value: new Date().toISOString(),
          }),
        })
      } catch (error) {
        console.error("Error tracking WhatsApp click:", error)
      }
    }
    window.open(WHATSAPP_GROUP_LINK, "_blank")
  }

  // Mark as submitted when reaching final step (step 4) - only for new leads
  useEffect(() => {
    async function markSubmitted() {
      // No marcar como submitted si es lead existente
      if (!leadId || submittedFlag || currentStep !== TOTAL_STEPS || isExistingLead) return

      try {
        await fetch("/api/leads", {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            leadId,
            field: "submitted",
            value: true,
            submitted: true,
          }),
        })
        setSubmittedFlag(true)
        triggerConfetti()
      } catch (error) {
        console.error("Error marcando como enviado:", error)
      }
    }

    markSubmitted()
  }, [currentStep, leadId, submittedFlag, isExistingLead])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a] flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-[#2d2d2d]/50 backdrop-blur-sm rounded-2xl p-8 border border-[#c2a255]/20">

        {/* Progress bar - ahora de 4 pasos */}
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium text-[#c2a255]">
              Paso {currentStep} de {TOTAL_STEPS}
            </span>
            <span className="text-sm text-gray-400">
              {Math.round((currentStep / TOTAL_STEPS) * 100)}% completado
            </span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div
              className="bg-[#c2a255] h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / TOTAL_STEPS) * 100}%` }}
            />
          </div>
        </div>

        {/* STEP 1: Datos Básicos */}
        {currentStep === 1 && (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white mb-6">
              Cuéntanos sobre ti
            </h2>

            <div>
              <label className="block text-white font-semibold mb-2">
                Nombre completo <span className="text-red-400">*</span>
              </label>
              <Input
                ref={nombreInputRef}
                value={formData.nombre}
                onChange={(e) => {
                  handleFieldChange("nombre", e.target.value)
                  if (errors.nombre) setErrors(prev => ({ ...prev, nombre: '' }))
                }}
                className={`bg-[#1a1a1a] border-[#c2a255]/30 text-white ${errors.nombre ? 'border-red-500' : ''}`}
                placeholder="Tu nombre"
                autoComplete="given-name family-name"
                name="fullname"
                id="fullname"
              />
              {errors.nombre && <p className="text-red-400 text-sm mt-1">{errors.nombre}</p>}
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">
                Email <span className="text-red-400">*</span>
              </label>
              <Input
                ref={emailInputRef}
                type="email"
                value={formData.email}
                onChange={(e) => {
                  handleFieldChange("email", e.target.value)
                  if (errors.email) setErrors(prev => ({ ...prev, email: '' }))
                }}
                className={`bg-[#1a1a1a] border-[#c2a255]/30 text-white ${errors.email ? 'border-red-500' : ''}`}
                placeholder="tu@email.com"
                autoComplete="email"
                name="email"
                id="email"
              />
              {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">
                WhatsApp <span className="text-red-400">*</span>
              </label>
              <Input
                ref={whatsappInputRef}
                type="tel"
                value={formData.whatsapp}
                onChange={(e) => {
                  handleFieldChange("whatsapp", e.target.value)
                  if (errors.whatsapp) setErrors(prev => ({ ...prev, whatsapp: '' }))
                }}
                className={`bg-[#1a1a1a] border-[#c2a255]/30 text-white ${errors.whatsapp ? 'border-red-500' : ''}`}
                placeholder="+598 99 123 456"
                autoComplete="tel-national"
                name="phone"
                id="phone"
              />
              {errors.whatsapp && <p className="text-red-400 text-sm mt-1">{errors.whatsapp}</p>}
            </div>

            {errors.general && (
              <p className="text-red-400 text-sm text-center bg-red-900/20 p-3 rounded-lg">
                {errors.general}
              </p>
            )}

            <Button
              onClick={handleNextStep}
              disabled={creatingLead}
              className="w-full bg-[#c2a255] hover:bg-[#d4b366] text-[#1a1a1a] font-semibold py-3 disabled:opacity-50"
            >
              {creatingLead ? 'Registrando...' : 'Continuar'}
            </Button>
          </div>
        )}

        {/* STEP 2: Intereses y Situación (SIN la pregunta "UNA cosa") */}
        {currentStep === 2 && (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white mb-6">
              ¿Qué te interesa?
            </h2>

            <div>
              <label className="block text-white font-semibold mb-4">
                Selecciona todo lo que aplique:
              </label>
              <div className="space-y-3">
                {[
                  { value: "aprender", label: "Aprender a operar" },
                  { value: "copy_trading", label: "Copy Trading" },
                  { value: "mentoria", label: "Mentoría 1-1" },
                ].map((option) => (
                  <label
                    key={option.value}
                    className={`flex items-center p-4 rounded-lg cursor-pointer border-2 transition-all ${
                      formData.intereses.includes(option.value)
                        ? "border-[#c2a255] bg-[#c2a255]/10"
                        : "border-gray-600 bg-[#1a1a1a] hover:border-[#c2a255]/50"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={formData.intereses.includes(option.value)}
                      onChange={() => handleInteresToggle(option.value)}
                      className="mr-3 h-5 w-5"
                    />
                    <span className="text-white font-medium">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">
                ¿Cuál es tu mayor reto con el trading hoy?
              </label>
              <select
                value={formData.retoMayor}
                onChange={(e) => handleFieldChange("retoMayor", e.target.value)}
                className="w-full bg-[#1a1a1a] border-[#c2a255]/30 text-white rounded-lg p-3"
              >
                <option value="">Selecciona una opción</option>
                <option value="estrategia">No encuentro una estrategia que funcione</option>
                <option value="tiempo">No tengo tiempo para estudiar/operar</option>
                <option value="perdidas">He perdido dinero y necesito recuperarme</option>
                <option value="empezar">No sé por dónde empezar</option>
              </select>
            </div>

            {/* ELIMINADO: pregunta "Si pudieras lograr UNA cosa en el próximo año" */}

            <div>
              <label className="block text-white font-semibold mb-2">
                ¿Actualmente estás operando?
              </label>
              <select
                value={formData.operaActualmente}
                onChange={(e) => handleFieldChange("operaActualmente", e.target.value)}
                className="w-full bg-[#1a1a1a] border-[#c2a255]/30 text-white rounded-lg p-3"
              >
                <option value="">Selecciona una opción</option>
                <option value="si_activamente">Sí, opero activamente</option>
                <option value="si_poco">Sí, pero poco</option>
                <option value="no_operado">No, pero he operado antes</option>
                <option value="nunca">No, nunca he operado</option>
              </select>
            </div>

            <div className="flex gap-4">
              <Button
                onClick={handlePrevStep}
                className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-semibold"
              >
                Atrás
              </Button>
              <Button
                onClick={handleNextStep}
                className="flex-1 bg-[#c2a255] hover:bg-[#d4b366] text-[#1a1a1a] font-semibold"
              >
                Continuar
              </Button>
            </div>
          </div>
        )}

        {/* STEP 3: Experiencia y Dinero */}
        {currentStep === 3 && (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white mb-6">
              Experiencia y dinero
            </h2>

            <div>
              <label className="block text-white font-semibold mb-2">
                ¿Has perdido dinero en trading?
              </label>
              <select
                value={formData.haPerdidoDinero}
                onChange={(e) => handleFieldChange("haPerdidoDinero", e.target.value)}
                className="w-full bg-[#1a1a1a] border-[#c2a255]/30 text-white rounded-lg p-3"
              >
                <option value="">Selecciona una opción</option>
                <option value="si_mucho">Sí, perdí mucho</option>
                <option value="si_algo">Sí, perdí algo</option>
                <option value="no_gane">No, he ganado</option>
                <option value="nunca">Nunca he operado</option>
              </select>
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">
                ¿Cuánto capital tienes disponible para invertir HOY?
              </label>
              <select
                value={formData.capitalDisponible}
                onChange={(e) => handleFieldChange("capitalDisponible", e.target.value)}
                className="w-full bg-[#1a1a1a] border-[#c2a255]/30 text-white rounded-lg p-3"
              >
                <option value="">Selecciona una opción</option>
                <option value="menos_200">Menos de $200</option>
                <option value="200_500">$200-$500</option>
                <option value="500_1k">$500-$1,000</option>
                <option value="1k_5k">$1,000-$5,000</option>
                <option value="5k_10k">$5,000-$10,000</option>
                <option value="mas_10k">Más de $10,000</option>
              </select>
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">
                ¿Cuánto te gustaría GANAR mensualmente?
              </label>
              <select
                value={formData.gananciaMensualDeseada}
                onChange={(e) => handleFieldChange("gananciaMensualDeseada", e.target.value)}
                className="w-full bg-[#1a1a1a] border-[#c2a255]/30 text-white rounded-lg p-3"
              >
                <option value="">Selecciona una opción</option>
                <option value="menos_500">Menos de $500/mes</option>
                <option value="500_1k">$500-$1,000/mes</option>
                <option value="1k_5k">$1,000-$5,000/mes</option>
                <option value="5k_10k">$5,000-$10,000/mes</option>
                <option value="mas_10k">Más de $10,000/mes</option>
              </select>
            </div>

            <div className="flex gap-4">
              <Button
                onClick={handlePrevStep}
                className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-semibold"
              >
                Atrás
              </Button>
              <Button
                onClick={handleNextStep}
                className="flex-1 bg-[#c2a255] hover:bg-[#d4b366] text-[#1a1a1a] font-semibold"
              >
                Continuar
              </Button>
            </div>
          </div>
        )}

        {/* ELIMINADO: STEP 4 de Tiempo, Riesgo, Objetivos */}

        {/* STEP 4 (antes era 5): Confirmación */}
        {currentStep === 4 && (
          <div className="space-y-6">
            <div className="space-y-4 text-white">
              <div className="bg-[#1a1a1a] rounded-lg p-6 border border-[#c2a255]/30">
                <CheckCircle className="w-10 h-10 text-[#c2a255] mb-3" />
                {isExistingLead ? (
                  <>
                    <h3 className="text-2xl font-bold mb-2">¡Bienvenido de nuevo!</h3>
                    <p className="text-gray-300">
                      Ya estás registrado. Accede al grupo de WhatsApp para continuar conectado.
                    </p>
                  </>
                ) : (
                  <>
                    <h3 className="text-2xl font-bold mb-2">¡Listo, ya guardamos tus respuestas!</h3>
                    <p className="text-gray-300">
                      Ahora únete a nuestro grupo privado de WhatsApp para recibir ofertas, señales y soporte directo.
                    </p>
                  </>
                )}
              </div>

              <div className="bg-[#1a1a1a] rounded-lg p-6 border border-[#c2a255]/30">
                <p className="text-gray-400 text-sm mb-2">Grupo exclusivo</p>
                <p className="text-white text-lg font-semibold mb-4">Copy Trading + Comunidad GC Capital</p>
                <Button
                  onClick={handleWhatsAppClick}
                  className="w-full bg-[#c2a255] hover:bg-[#d4b366] text-[#1a1a1a] font-semibold"
                >
                  Unirme al grupo de WhatsApp
                </Button>
              </div>

              <p className="text-gray-300 text-sm text-center">
                Si el botón no funciona, copia este enlace manualmente:<br />
                <span className="text-[#c2a255] break-all">{WHATSAPP_GROUP_LINK}</span>
              </p>
            </div>

            <div className="flex gap-4">
              <Button
                onClick={handlePrevStep}
                className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-semibold"
              >
                Atrás
              </Button>
              <Button
                onClick={handleWhatsAppClick}
                className="flex-1 bg-[#c2a255] hover:bg-[#d4b366] text-[#1a1a1a] font-semibold"
              >
                Abrir WhatsApp
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
