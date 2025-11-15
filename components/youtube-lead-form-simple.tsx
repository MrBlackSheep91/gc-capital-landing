"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import confetti from "canvas-confetti"
import { CheckCircle, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface FormData {
  // Datos básicos
  nombre: string
  email: string
  whatsapp: string
  
  // Intereses (múltiple selección)
  intereses: string[]
  
  // Reto y meta
  retoMayor: string
  metaProximoAno: string
  
  // Experiencia y disponibilidad
  experiencia: string
  tiempoDisponible: string
  capitalDisponible: string
}

export function YouTubeLeadFormSimple() {
  const searchParams = useSearchParams()
  const [mounted, setMounted] = useState(false)
  
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    email: "",
    whatsapp: "",
    intereses: [],
    retoMayor: "",
    metaProximoAno: "",
    experiencia: "",
    tiempoDisponible: "",
    capitalDisponible: "",
  })
  
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [paisDetectado, setPaisDetectado] = useState("")

  // Capturar UTM params y geo
  useEffect(() => {
    setMounted(true)
    
    async function captureData() {
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
        setFormData(prev => ({ ...prev, whatsapp: dialCode }))
      } catch (error) {
        console.log("No se pudo detectar país")
      }
    }

    captureData()
  }, [searchParams])

  const handleInteresToggle = (interes: string) => {
    setFormData(prev => {
      const intereses = prev.intereses.includes(interes)
        ? prev.intereses.filter(i => i !== interes)
        : [...prev.intereses, interes]
      return { ...prev, intereses }
    })
  }

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    })
  }

  const handleNextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(prev => prev + 1)
      triggerConfetti()
    }
  }

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1)
    }
  }

  const handleSubmit = async () => {
    setLoading(true)
    
    try {
      const payload = {
        ...formData,
        utm_source: searchParams.get("utm_source") || "youtube",
        utm_campaign: searchParams.get("utm_campaign") || null,
        utm_medium: searchParams.get("utm_medium") || "video",
        pais: paisDetectado,
      }

      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      if (response.ok) {
        setSubmitted(true)
        triggerConfetti()
      } else {
        alert("Error al enviar. Por favor intenta de nuevo.")
      }
    } catch (error) {
      console.error("Error:", error)
      alert("Error al enviar. Por favor intenta de nuevo.")
    } finally {
      setLoading(false)
    }
  }

  if (!mounted) return null

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a] flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-[#2d2d2d]/50 backdrop-blur-sm rounded-2xl p-8 border border-[#c2a255]/20 text-center">
          <CheckCircle className="w-16 h-16 text-[#c2a255] mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-4">
            ¡Gracias por completar el formulario!
          </h2>
          <p className="text-gray-300 mb-6">
            Hemos recibido tu información y pronto nos pondremos en contacto contigo.
          </p>
          <Button
            onClick={() => window.location.href = "/"}
            className="bg-[#c2a255] hover:bg-[#d4b366] text-[#1a1a1a] font-semibold"
          >
            Volver al inicio
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a] flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-[#2d2d2d]/50 backdrop-blur-sm rounded-2xl p-8 border border-[#c2a255]/20">
        
        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium text-[#c2a255]">
              Paso {currentStep} de 4
            </span>
            <span className="text-sm text-gray-400">
              {Math.round((currentStep / 4) * 100)}% completado
            </span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div
              className="bg-[#c2a255] h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / 4) * 100}%` }}
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
                value={formData.nombre}
                onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                className="bg-[#1a1a1a] border-[#c2a255]/30 text-white"
                placeholder="Tu nombre"
              />
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">
                Email
              </label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-[#1a1a1a] border-[#c2a255]/30 text-white"
                placeholder="tu@email.com"
              />
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">
                WhatsApp
              </label>
              <Input
                value={formData.whatsapp}
                onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                className="bg-[#1a1a1a] border-[#c2a255]/30 text-white"
                placeholder="+598 99 123 456"
              />
            </div>

            <Button
              onClick={handleNextStep}
              disabled={!formData.nombre || !formData.email || !formData.whatsapp}
              className="w-full bg-[#c2a255] hover:bg-[#d4b366] text-[#1a1a1a] font-semibold py-3"
            >
              Continuar
            </Button>
          </div>
        )}

        {/* STEP 2: Intereses y Objetivos */}
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
                onChange={(e) => setFormData({ ...formData, retoMayor: e.target.value })}
                className="w-full bg-[#1a1a1a] border-[#c2a255]/30 text-white rounded-lg p-3"
              >
                <option value="">Selecciona una opción</option>
                <option value="estrategia">No encuentro una estrategia que funcione</option>
                <option value="tiempo">No tengo tiempo para estudiar/operar</option>
                <option value="perdidas">He perdido dinero y necesito recuperarme</option>
                <option value="empezar">No sé por dónde empezar</option>
                <option value="otro">Otro</option>
              </select>
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">
                Si pudieras lograr UNA cosa en el próximo año, ¿cuál sería?
              </label>
              <textarea
                value={formData.metaProximoAno}
                onChange={(e) => setFormData({ ...formData, metaProximoAno: e.target.value })}
                className="w-full bg-[#1a1a1a] border-[#c2a255]/30 text-white rounded-lg p-3 min-h-[100px]"
                placeholder="Escribe tu meta aquí..."
              />
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
                disabled={formData.intereses.length === 0 || !formData.retoMayor}
                className="flex-1 bg-[#c2a255] hover:bg-[#d4b366] text-[#1a1a1a] font-semibold"
              >
                Continuar
              </Button>
            </div>
          </div>
        )}

        {/* STEP 3: Experiencia y Capital */}
        {currentStep === 3 && (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white mb-6">
              Experiencia y capital
            </h2>
            
            <div>
              <label className="block text-white font-semibold mb-2">
                ¿Tienes experiencia en trading?
              </label>
              <select
                value={formData.experiencia}
                onChange={(e) => setFormData({ ...formData, experiencia: e.target.value })}
                className="w-full bg-[#1a1a1a] border-[#c2a255]/30 text-white rounded-lg p-3"
              >
                <option value="">Selecciona una opción</option>
                <option value="nunca">Nunca he operado</option>
                <option value="demo">He operado en demo</option>
                <option value="real">Opero con dinero real</option>
                <option value="profesional">Soy trader profesional</option>
              </select>
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">
                ¿Tienes tiempo para estudiar/practicar?
              </label>
              <select
                value={formData.tiempoDisponible}
                onChange={(e) => setFormData({ ...formData, tiempoDisponible: e.target.value })}
                className="w-full bg-[#1a1a1a] border-[#c2a255]/30 text-white rounded-lg p-3"
              >
                <option value="">Selecciona una opción</option>
                <option value="mucho">Mucho tiempo (más de 10 hrs/semana)</option>
                <option value="algo">Algo de tiempo (3-10 hrs/semana)</option>
                <option value="poco">Poco tiempo (1-3 hrs/semana)</option>
                <option value="nada">No tengo tiempo</option>
              </select>
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">
                ¿Cuánto capital tienes disponible para invertir?
              </label>
              <select
                value={formData.capitalDisponible}
                onChange={(e) => setFormData({ ...formData, capitalDisponible: e.target.value })}
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

            <div className="flex gap-4">
              <Button
                onClick={handlePrevStep}
                className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-semibold"
              >
                Atrás
              </Button>
              <Button
                onClick={handleNextStep}
                disabled={!formData.experiencia || !formData.tiempoDisponible || !formData.capitalDisponible}
                className="flex-1 bg-[#c2a255] hover:bg-[#d4b366] text-[#1a1a1a] font-semibold"
              >
                Continuar
              </Button>
            </div>
          </div>
        )}

        {/* STEP 4: Confirmación */}
        {currentStep === 4 && (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white mb-6">
              Confirma tus datos
            </h2>
            
            <div className="bg-[#1a1a1a] rounded-lg p-6 space-y-4">
              <div>
                <p className="text-gray-400 text-sm">Nombre</p>
                <p className="text-white font-semibold">{formData.nombre}</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Email</p>
                <p className="text-white font-semibold">{formData.email}</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">WhatsApp</p>
                <p className="text-white font-semibold">{formData.whatsapp}</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Intereses</p>
                <p className="text-white font-semibold">
                  {formData.intereses.join(", ")}
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Button
                onClick={handlePrevStep}
                className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-semibold"
              >
                Atrás
              </Button>
              <Button
                onClick={handleSubmit}
                disabled={loading}
                className="flex-1 bg-[#c2a255] hover:bg-[#d4b366] text-[#1a1a1a] font-semibold"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  "Enviar"
                )}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
