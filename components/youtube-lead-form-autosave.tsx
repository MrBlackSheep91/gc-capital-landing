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
  
  // Step 2: Intereses y situación
  intereses: string[]
  retoMayor: string
  metaProximoAno: string
  operaActualmente: string
  
  // Step 3: Experiencia y dinero
  dondeOpera: string
  haPerdidoDinero: string
  capitalDisponible: string
  gananciaMensualDeseada: string
  
  // Step 4: Tiempo, riesgo, objetivos
  tiempoDisponible: string
  toleranciaRiesgo: string
  objetivoPrincipal: string
  cuandoEmpezar: string
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

export function YouTubeLeadFormAutoSave() {
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
    metaProximoAno: "",
    operaActualmente: "",
    dondeOpera: "",
    haPerdidoDinero: "",
    capitalDisponible: "",
    gananciaMensualDeseada: "",
    tiempoDisponible: "",
    toleranciaRiesgo: "",
    objetivoPrincipal: "",
    cuandoEmpezar: "",
  })
  
  const [paisDetectado, setPaisDetectado] = useState("")
  const [saving, setSaving] = useState(false)
  const [submittedFlag, setSubmittedFlag] = useState(false)

  // Auto-save function (optimizado con debounce más largo)
  const saveFieldToNeon = useCallback(
    debounce(async (field: string, value: any) => {
      if (!leadId) {
        console.warn('❌ No leadId disponible para guardar campo:', field)
        return
      }
      
      // Solo guardar si el valor no es null/undefined (permitir strings vacíos y otros valores falsy)
      if (value === null || value === undefined) {
        return
      }
      
      console.log('💾 Guardando campo:', field, '=', value, 'para leadId:', leadId)
      setSaving(true)
      try {
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
        setSaving(false)
      }
    }, 1000), // Aumentar debounce a 1 segundo para reducir llamadas
    [leadId]
  )

  // Initialize lead on mount (solo una vez)
  useEffect(() => {
    if (leadId || initializingRef.current) return // Si ya tenemos leadId o estamos inicializando, no crear otro
    
    initializingRef.current = true // Marcar que estamos inicializando

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
        setFormData(prev => ({ ...prev, whatsapp: dialCode }))

        // Create lead in NEON (solo si no existe leadId)
        if (!leadId) {
          const response = await fetch("/api/leads", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              nombre: "",
              email: "",
              whatsapp: dialCode,
              utm_source: searchParams.get("utm_source") || "youtube",
              utm_campaign: searchParams.get("utm_campaign") || null,
              utm_medium: searchParams.get("utm_medium") || "video",
              pais: geoData.country_code,
            }),
          })

          if (response.ok) {
            const data = await response.json()
            console.log('✅ Lead creado:', data)
            setLeadId(data.data?.leadId || data.leadId)
          }
        }
      } catch (error) {
        console.log("Error initializing lead:", error)
      } finally {
        initializingRef.current = false // Reset flag al terminar
      }
    }

    initializeLead()
    setMounted(true)
  }, [])

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

  const handleNextStep = async () => {
    if (currentStep < 5) {
      // Guardar TODOS los campos pendientes antes de cambiar de paso
      setSaving(true)
      try {
        // Dar tiempo para que el debounce complete
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
    // Trackear que el lead hizo clic en WhatsApp
    if (leadId) {
      try {
        // Primero marcar que accedió al grupo
        await fetch("/api/leads", {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            leadId,
            field: "whatsappGroupAccessed",
            value: true,
          }),
        })
        
        // Luego marcar la fecha
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
    // Abrir el link
    window.open(WHATSAPP_GROUP_LINK, "_blank")
  }

  // Mark as submitted when reaching step 5
  useEffect(() => {
    async function markSubmitted() {
      if (!leadId || submittedFlag || currentStep !== 5) return

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
        
        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium text-[#c2a255]">
              Paso {currentStep} de 5
            </span>
            <span className="text-sm text-gray-400">
              {Math.round((currentStep / 5) * 100)}% completado
            </span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div
              className="bg-[#c2a255] h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / 5) * 100}%` }}
            />
          </div>
          {saving && <p className="text-xs text-gray-400 mt-2">Guardando...</p>}
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
                value={formData.nombre}
                onChange={(e) => handleFieldChange("nombre", e.target.value)}
                className="bg-[#1a1a1a] border-[#c2a255]/30 text-white"
                placeholder="Tu nombre"
                autoComplete="name"
                name="name"
              />
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">
                Email
              </label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => handleFieldChange("email", e.target.value)}
                className="bg-[#1a1a1a] border-[#c2a255]/30 text-white"
                placeholder="tu@email.com"
                autoComplete="email"
                name="email"
              />
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">
                WhatsApp
              </label>
              <Input
                type="tel"
                value={formData.whatsapp}
                onChange={(e) => handleFieldChange("whatsapp", e.target.value)}
                className="bg-[#1a1a1a] border-[#c2a255]/30 text-white"
                placeholder="+598 99 123 456"
                autoComplete="tel"
                name="tel"
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

        {/* STEP 2: Intereses y Situación */}
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
                  { value: "copy_trading", label: "Invertir en automático (copy trading)" },
                  { value: "comunidad", label: "Unirme a una comunidad" },
                  { value: "mentoria", label: "Obtener una mentoría" },
                  { value: "estrategia", label: "Encontrar una estrategia ganadora" },
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

            <div>
              <label className="block text-white font-semibold mb-2">
                Si pudieras lograr UNA cosa en el próximo año, ¿cuál sería?
              </label>
              <textarea
                value={formData.metaProximoAno}
                onChange={(e) => handleFieldChange("metaProximoAno", e.target.value)}
                className="w-full bg-[#1a1a1a] border-[#c2a255]/30 text-white rounded-lg p-3 min-h-[100px]"
                placeholder="Escribe tu meta aquí..."
              />
            </div>

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
                ¿Dónde has operado? (Si aplica)
              </label>
              <Input
                value={formData.dondeOpera}
                onChange={(e) => handleFieldChange("dondeOpera", e.target.value)}
                className="bg-[#1a1a1a] border-[#c2a255]/30 text-white"
                placeholder="Ej: Broker XYZ, Cuenta de fondeo ABC"
              />
            </div>

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

        {/* STEP 4: Tiempo, Riesgo, Objetivos */}
        {currentStep === 4 && (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white mb-6">
              Tiempo, riesgo y objetivos
            </h2>
            
            <div>
              <label className="block text-white font-semibold mb-2">
                ¿Tienes TIEMPO para estudiar/practicar?
              </label>
              <select
                value={formData.tiempoDisponible}
                onChange={(e) => handleFieldChange("tiempoDisponible", e.target.value)}
                className="w-full bg-[#1a1a1a] border-[#c2a255]/30 text-white rounded-lg p-3"
              >
                <option value="">Selecciona una opción</option>
                <option value="mucho">Mucho (más de 10 hrs/semana)</option>
                <option value="algo">Algo (3-10 hrs/semana)</option>
                <option value="poco">Poco (1-3 hrs/semana)</option>
                <option value="nada">Nada (menos de 1 hr/semana)</option>
              </select>
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">
                ¿Cuánto RIESGO estás dispuesto a aceptar?
              </label>
              <select
                value={formData.toleranciaRiesgo}
                onChange={(e) => handleFieldChange("toleranciaRiesgo", e.target.value)}
                className="w-full bg-[#1a1a1a] border-[#c2a255]/30 text-white rounded-lg p-3"
              >
                <option value="">Selecciona una opción</option>
                <option value="bajo">Bajo (máximo -5%)</option>
                <option value="moderado">Moderado (máximo -10%)</option>
                <option value="alto">Alto (máximo -15%)</option>
                <option value="muy_alto">Muy alto (acepto volatilidad)</option>
              </select>
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">
                ¿Cuál es tu OBJETIVO principal?
              </label>
              <select
                value={formData.objetivoPrincipal}
                onChange={(e) => handleFieldChange("objetivoPrincipal", e.target.value)}
                className="w-full bg-[#1a1a1a] border-[#c2a255]/30 text-white rounded-lg p-3"
              >
                <option value="">Selecciona una opción</option>
                <option value="educacion">Educación/Aprender</option>
                <option value="ingresos_pasivos">Ingresos pasivos</option>
                <option value="jubilacion">Jubilación anticipada</option>
                <option value="libertad_financiera">Libertad financiera</option>
              </select>
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">
                ¿Cuándo necesitas EMPEZAR?
              </label>
              <select
                value={formData.cuandoEmpezar}
                onChange={(e) => handleFieldChange("cuandoEmpezar", e.target.value)}
                className="w-full bg-[#1a1a1a] border-[#c2a255]/30 text-white rounded-lg p-3"
              >
                <option value="">Selecciona una opción</option>
                <option value="esta_semana">Esta semana</option>
                <option value="este_mes">Este mes</option>
                <option value="este_trimestre">Este trimestre</option>
                <option value="cuando_dinero">Cuando tenga el dinero</option>
                <option value="investigando">Solo investigando</option>
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

        {/* STEP 5: Confirmación */}
        {currentStep === 5 && (
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
