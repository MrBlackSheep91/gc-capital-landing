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

// Debounce helper
function debounce<T extends (...args: any[]) => any>(func: T, wait: number) {
  let timeout: NodeJS.Timeout
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

export function YouTubeLeadFormIngreso() {
  const searchParams = useSearchParams()
  const [mounted, setMounted] = useState(false)
  const initializingRef = useRef(false)

  const [currentStep, setCurrentStep] = useState(1)
  const [leadId, setLeadId] = useState<string | null>(null)
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

  // Referencias a los inputs para acceder directamente
  const nombreInputRef = useRef<HTMLInputElement>(null)
  const emailInputRef = useRef<HTMLInputElement>(null)
  const whatsappInputRef = useRef<HTMLInputElement>(null)

  // Cola de guardado para evitar race conditions
  const saveQueueRef = useRef<Array<{ field: string; value: any }>>([])
  const isSavingRef = useRef(false)
  const saveTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Procesar cola de guardado (uno por uno, sin solapamientos)
  const processSaveQueue = useCallback(async () => {
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
        // Re-agregar a la cola si falla
        saveQueueRef.current.unshift({ field, value })
      }
    } catch (error) {
      console.error("Error saving field:", error)
      // Re-agregar a la cola si falla
      saveQueueRef.current.unshift({ field, value })
    } finally {
      isSavingRef.current = false

      // Procesar siguiente item en la cola
      if (saveQueueRef.current.length > 0) {
        processSaveQueue()
      } else {
        setSaving(false)
      }
    }
  }, [leadId])

  // Agregar campo a la cola de guardado (con debounce)
  const saveFieldToNeon = useCallback((field: string, value: any) => {
    if (!leadId) {
      console.warn('❌ No leadId disponible para guardar campo:', field)
      return
    }

    if (value === null || value === undefined) {
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
    }, 500) // Debounce más corto ahora que tenemos cola
  }, [leadId, processSaveQueue])

  // Marcar como montado después del primer render
  useEffect(() => {
    setMounted(true)
  }, [])

  // Initialize lead on mount (solo una vez)
  useEffect(() => {
    // Solo ejecutar si está montado y no hay leadId
    if (!mounted || leadId || initializingRef.current) return

    initializingRef.current = true

    const initializeLead = async () => {
      try {
        // Get geolocation
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

        console.log('📋 Datos de URL detectados:', { urlNombre, urlEmail, urlWhatsapp })

        setFormData(prev => ({
          ...prev,
          nombre: urlNombre,
          email: urlEmail,
          whatsapp: urlWhatsapp
        }))

        // Create lead in NEON
        console.log('🆕 Creando nuevo lead...')
        const response = await fetch("/api/leads", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            nombre: urlNombre,
            email: urlEmail,
            whatsapp: urlWhatsapp,
            utm_source: searchParams.get("utm_source") || "ingreso",
            utm_campaign: searchParams.get("utm_campaign") || null,
            utm_medium: searchParams.get("utm_medium") || "video",
            pais: geoData.country_code,
          }),
        })

        if (response.ok) {
          const data = await response.json()
          const newLeadId = data.data?.leadId || data.leadId
          console.log('✅ Lead creado:', newLeadId)
          setLeadId(newLeadId)
        } else {
          console.error('❌ Error creando lead:', response.status)
        }
      } catch (error) {
        console.error("Error initializing lead:", error)
      } finally {
        initializingRef.current = false
      }
    }

    initializeLead()
  }, [mounted]) // Solo depende de mounted

  const handleFieldChange = (field: keyof FormData, value: any) => {
    setFormData(prev => {
      const updated = { ...prev, [field]: value }
      saveFieldToNeon(field, value)
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

  // TOTAL_STEPS ahora es 4 (sin el paso de Tiempo/Riesgo/Objetivos)
  const TOTAL_STEPS = 4

  const handleNextStep = async () => {
    if (currentStep < TOTAL_STEPS) {
      setSaving(true)
      try {
        await new Promise(resolve => setTimeout(resolve, 1200))
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
    if (leadId) {
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

  // Mark as submitted when reaching final step (step 4)
  useEffect(() => {
    async function markSubmitted() {
      if (!leadId || submittedFlag || currentStep !== TOTAL_STEPS) return

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
  }, [currentStep, leadId, submittedFlag])

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
                Nombre completo
              </label>
              <Input
                ref={nombreInputRef}
                value={formData.nombre}
                onChange={(e) => handleFieldChange("nombre", e.target.value)}
                className="bg-[#1a1a1a] border-[#c2a255]/30 text-white"
                placeholder="Tu nombre"
                autoComplete="given-name family-name"
                name="fullname"
                id="fullname"
              />
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">
                Email
              </label>
              <Input
                ref={emailInputRef}
                type="email"
                value={formData.email}
                onChange={(e) => handleFieldChange("email", e.target.value)}
                className="bg-[#1a1a1a] border-[#c2a255]/30 text-white"
                placeholder="tu@email.com"
                autoComplete="email"
                name="email"
                id="email"
              />
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">
                WhatsApp
              </label>
              <Input
                ref={whatsappInputRef}
                type="tel"
                value={formData.whatsapp}
                onChange={(e) => handleFieldChange("whatsapp", e.target.value)}
                className="bg-[#1a1a1a] border-[#c2a255]/30 text-white"
                placeholder="+598 99 123 456"
                autoComplete="tel-national"
                name="phone"
                id="phone"
              />
            </div>

            <Button
              onClick={handleNextStep}
              className="w-full bg-[#c2a255] hover:bg-[#d4b366] text-[#1a1a1a] font-semibold py-3"
            >
              Continuar
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
                <h3 className="text-2xl font-bold mb-2">¡Listo, ya guardamos tus respuestas!</h3>
                <p className="text-gray-300">
                  Ahora únete a nuestro grupo privado de WhatsApp para recibir ofertas, señales y soporte directo.
                </p>
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
