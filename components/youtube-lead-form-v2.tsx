"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import confetti from "canvas-confetti"
import { toast } from "sonner"
import { CheckCircle, Loader2, Sparkles, TrendingUp, GraduationCap, Target, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { calificarLead, type FormData as QualificationData, type ProductoRecomendado } from "@/lib/qualification-logic"

interface FormData extends QualificationData {
  name: string
  email: string
  whatsapp: string
}

interface SourceData {
  utmSource?: string
  utmMedium?: string
  utmCampaign?: string
  utmContent?: string
  referrer?: string
  landingUrl?: string
  deviceType?: string
  paisDetectado?: string
  ipAddress?: string
}

export function YouTubeLeadFormV2() {
  const searchParams = useSearchParams()
  const [mounted, setMounted] = useState(false)
  
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    whatsapp: "",
    interes: "",
    tiempoDisponible: "",
    objetivo: "",
    experienciaPrevia: "",
    inversionPrevia: "",
    nivelConocimiento: "",
  })
  
  const [sourceData, setSourceData] = useState<SourceData>({})
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [productoRecomendado, setProductoRecomendado] = useState<ProductoRecomendado | null>(null)
  
  const applicantsCount = 1247
  const spotsLeft = 5

  useEffect(() => {
    setMounted(true)
    
    async function captureData() {
      const source: SourceData = {
        utmSource: searchParams.get("utm_source") || "youtube",
        utmMedium: searchParams.get("utm_medium") || "video",
        utmCampaign: searchParams.get("utm_campaign") || undefined,
        utmContent: searchParams.get("utm_content") || undefined,
        referrer: document.referrer,
        landingUrl: window.location.pathname,
        deviceType: /mobile|android|iphone/i.test(navigator.userAgent) ? "mobile" : "desktop",
      }

      try {
        const geoResponse = await fetch("https://ipapi.co/json/")
        const geoData = await geoResponse.json()
        source.paisDetectado = geoData.country_code
        source.ipAddress = geoData.ip
        
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

      setSourceData(source)
      localStorage.setItem("youtube_source", JSON.stringify(source))
    }

    captureData()
  }, [searchParams])

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleNextStep = () => {
    if (currentStep === 1) {
      if (!formData.name || !formData.email || !formData.whatsapp) {
        toast.error("Por favor completa todos los campos")
        return
      }
      
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 }
      })
    }
    
    if (currentStep === 2) {
      if (!formData.interes || !formData.tiempoDisponible || !formData.objetivo) {
        toast.error("Por favor selecciona todas las opciones")
        return
      }
      
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      })
    }
    
    setCurrentStep(prev => prev + 1)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handlePrevStep = () => {
    setCurrentStep(prev => prev - 1)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleSubmit = async () => {
    if (!formData.experienciaPrevia || !formData.inversionPrevia || !formData.nivelConocimiento) {
      toast.error("Por favor completa todas las preguntas")
      return
    }
    
    setLoading(true)

    try {
      const producto = calificarLead(formData)
      setProductoRecomendado(producto)
      
      const payload = {
        name: formData.name,
        email: formData.email,
        whatsapp: formData.whatsapp,
        interes: formData.interes,
        tiempoDisponible: formData.tiempoDisponible,
        objetivo: formData.objetivo,
        experienciaPrevia: formData.experienciaPrevia,
        inversionPrevia: formData.inversionPrevia,
        nivelConocimiento: formData.nivelConocimiento,
        productoRecomendado: producto.tipo,
        razonCalificacion: producto.razon,
        scoreConfianza: producto.confianza,
        ...sourceData,
        businessId: "gc-capital",
      }

      console.log("📤 Enviando lead:", payload)

      const response = await fetch("/api/youtube-leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        throw new Error("Error al enviar el formulario")
      }

      const result = await response.json()

      confetti({
        particleCount: 200,
        spread: 100,
        origin: { y: 0.5 }
      })
      
      setTimeout(() => {
        confetti({
          particleCount: 150,
          angle: 60,
          spread: 55,
          origin: { x: 0 }
        })
      }, 200)
      
      setTimeout(() => {
        confetti({
          particleCount: 150,
          angle: 120,
          spread: 55,
          origin: { x: 1 }
        })
      }, 400)

      toast.success("¡Aplicación recibida exitosamente!")
      setSubmitted(true)

      console.log("✅ Lead creado:", result)
    } catch (error) {
      console.error("❌ Error:", error)
      toast.error("Error al enviar el formulario. Intenta de nuevo.")
    } finally {
      setLoading(false)
    }
  }

  const progress = (currentStep / 3) * 100

  if (submitted && productoRecomendado) {
    return (
      <div className="w-full max-w-2xl mx-auto">
        <div className="bg-gradient-to-br from-[#c2a255]/10 to-amber-50 rounded-2xl p-8 border-2 border-[#c2a255]">
          <div className="text-center">
            <CheckCircle className="h-20 w-20 text-[#c2a255] mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ¡Aplicación Recibida!
            </h2>
            
            <div className="bg-white rounded-xl p-6 mb-6">
              <Sparkles className="h-12 w-12 text-[#c2a255] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {productoRecomendado.tipo === "copy_trading" && "Copy Trading Automatizado"}
                {productoRecomendado.tipo === "mentoria" && "Mentoría Personalizada"}
                {productoRecomendado.tipo === "skool" && "Comunidad Premium Skool"}
              </h3>
              <p className="text-gray-600 mb-4">
                {productoRecomendado.razon}
              </p>
              <div className="text-sm text-gray-500">
                Confianza de la recomendación: {productoRecomendado.confianza}%
              </div>
            </div>

            {productoRecomendado.tipo === "copy_trading" && (
              <div className="space-y-4">
                <p className="text-gray-700">
                  <strong>¿Qué sigue?</strong><br />
                  Gustavo revisará tu perfil y te contactará por WhatsApp en las próximas 24 horas
                  para explicarte cómo funciona el Copy Trading.
                </p>
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                  <p className="text-emerald-800 font-semibold">
                    ✅ Sin experiencia necesaria<br />
                    ✅ 100% automatizado<br />
                    ✅ Retornos de 8-15% mensual<br />
                    ✅ Copia trades de Gustavo en tiempo real
                  </p>
                </div>
              </div>
            )}

            {productoRecomendado.tipo === "mentoria" && (
              <div className="space-y-4">
                <p className="text-gray-700">
                  <strong>¿Qué sigue?</strong><br />
                  Gustavo revisará tu perfil y agendará una llamada de evaluación
                  para diseñar un plan de mentoría personalizado.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-blue-800 font-semibold">
                    ✅ Mentoría 1-on-1 con Gustavo<br />
                    ✅ Estrategias avanzadas<br />
                    ✅ Análisis de tu operativa<br />
                    ✅ Convertirse en trader profesional
                  </p>
                </div>
              </div>
            )}

            {productoRecomendado.tipo === "skool" && (
              <div className="space-y-4">
                <p className="text-gray-700">
                  <strong>¿Qué sigue?</strong><br />
                  Te enviaremos un email con acceso a la Comunidad Premium Skool
                  donde aprenderás desde cero con otros miembros.
                </p>
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <p className="text-purple-800 font-semibold">
                    ✅ Aprende desde cero<br />
                    ✅ Comunidad de apoyo<br />
                    ✅ Recursos exclusivos<br />
                    ✅ Acceso de por vida
                  </p>
                </div>
              </div>
            )}

            <Button
              onClick={() => window.location.href = "/"}
              className="mt-6 bg-[#c2a255] hover:bg-[#d4b875] text-white px-8 py-3 rounded-lg font-semibold"
            >
              Volver al Inicio
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="mb-8 text-center">
        <div className="inline-flex items-center gap-2 bg-[#c2a255]/15 border-2 border-[#c2a255] rounded-full px-4 py-2 mb-4">
          <Zap className="h-4 w-4 text-[#c2a255]" />
          <span className="text-sm font-bold text-[#c2a255]">
            ⚡ Solo {spotsLeft} cupos disponibles esta semana
          </span>
        </div>
        
        <h2 className="text-4xl font-black text-[#1a1a1a] mb-3">
          Descubre Tu Perfil de Inversor
        </h2>
        <p className="text-lg text-[#2d2d2d] font-medium">
          {mounted ? applicantsCount.toLocaleString() : "1247"} personas ya aplicaron · Solo 2 minutos
        </p>
      </div>

      <div className="mb-8">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-bold text-[#1a1a1a]">
            Paso {currentStep} de 3
          </span>
          <span className="text-sm font-bold text-[#c2a255] bg-[#c2a255]/10 px-3 py-1 rounded-full">
            {Math.round(progress)}% Completado
          </span>
        </div>
        <div className="w-full h-4 bg-[#2d2d2d]/20 rounded-full overflow-hidden border border-[#c2a255]/30">
          <div
            className="h-full bg-gradient-to-r from-[#c2a255] via-[#d4b875] to-[#c2a255] transition-all duration-500 ease-out shadow-lg"
            style={{ width: `${progress}%` }}
          />
        </div>
        {currentStep < 3 && (
          <p className="text-sm font-bold text-[#1a1a1a] mt-3 bg-[#c2a255]/10 p-3 rounded-lg">
            🏆 Estás a {(3 - currentStep) * 3} preguntas de descubrir tu perfil ideal
          </p>
        )}
      </div>

      <div className="bg-white rounded-2xl p-8 shadow-2xl border-2 border-[#c2a255]/30">
        {currentStep === 1 && (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <Target className="h-12 w-12 text-[#c2a255] mx-auto mb-3" />
              <h3 className="text-2xl font-black text-[#1a1a1a]">
                Empecemos con lo Básico
              </h3>
              <p className="text-[#2d2d2d] font-medium mt-2">
                Solo 3 preguntas rápidas para empezar...
              </p>
            </div>

            <div>
              <label className="block text-sm font-bold text-[#1a1a1a] mb-2">
                ¿Cómo te llamas? *
              </label>
              <Input
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                placeholder="Tu nombre completo"
                className="w-full text-lg p-4 border-2 border-[#c2a255]/30 focus:border-[#c2a255] focus:ring-2 focus:ring-[#c2a255]/20"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-[#1a1a1a] mb-2">
                ¿Cuál es tu email? *
              </label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="tu@email.com"
                className="w-full text-lg p-4 border-2 border-[#c2a255]/30 focus:border-[#c2a255] focus:ring-2 focus:ring-[#c2a255]/20"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-[#1a1a1a] mb-2">
                ¿Cuál es tu WhatsApp? *
              </label>
              <Input
                type="tel"
                value={formData.whatsapp}
                onChange={(e) => handleInputChange("whatsapp", e.target.value)}
                placeholder="+598 99 123 456"
                className="w-full text-lg p-4 border-2 border-[#c2a255]/30 focus:border-[#c2a255] focus:ring-2 focus:ring-[#c2a255]/20"
              />
              <p className="text-xs font-medium text-[#2d2d2d] mt-2">
                ✓ Gustavo te contactará por aquí
              </p>
            </div>

            <Button
              onClick={handleNextStep}
              className="w-full bg-gradient-to-r from-[#c2a255] to-amber-600 text-white font-bold py-4 rounded-lg text-lg hover:shadow-lg transition-all"
            >
              Continuar →
            </Button>
          </div>
        )}

        {currentStep === 2 && (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <TrendingUp className="h-12 w-12 text-[#c2a255] mx-auto mb-3" />
              <h3 className="text-2xl font-black text-[#1a1a1a]">
                ¿Qué te Interesa Más?
              </h3>
              <p className="text-[#2d2d2d] font-medium mt-2">
                Ya casi... solo 3 preguntas más
              </p>
            </div>

            <div>
              <label className="block text-sm font-bold text-[#1a1a1a] mb-3">
                1. ¿Qué buscas principalmente? *
              </label>
              <div className="space-y-3">
                {[
                  { value: "ganar_dinero", label: "💰 Ganar dinero sin aprender trading (copy trading)" },
                  { value: "aprender_trading", label: "📚 Aprender a hacer trading yo mismo" },
                  { value: "educacion_financiera", label: "🎓 Recibir educación financiera general" },
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleInputChange("interes", option.value)}
                    className={`w-full p-4 rounded-lg border-2 text-left font-semibold transition-all ${
                      formData.interes === option.value
                        ? "border-[#c2a255] bg-[#c2a255]/15 text-[#1a1a1a] shadow-md"
                        : "border-[#c2a255]/20 text-[#2d2d2d] hover:border-[#c2a255]/50 hover:bg-[#c2a255]/5"
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-[#1a1a1a] mb-3">
                2. ¿Cuánto tiempo tienes disponible? *
              </label>
              <div className="space-y-3">
                {[
                  { value: "0h", label: "⚡ 0 horas (quiero automatizado)" },
                  { value: "1-3h", label: "⏰ 1-3 horas/semana" },
                  { value: "5-10h", label: "📅 5-10 horas/semana" },
                  { value: "10h+", label: "🚀 10+ horas/semana (dedicación completa)" },
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleInputChange("tiempoDisponible", option.value)}
                    className={`w-full p-4 rounded-lg border-2 text-left font-semibold transition-all ${
                      formData.tiempoDisponible === option.value
                        ? "border-[#c2a255] bg-[#c2a255]/15 text-[#1a1a1a] shadow-md"
                        : "border-[#c2a255]/20 text-[#2d2d2d] hover:border-[#c2a255]/50 hover:bg-[#c2a255]/5"
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-[#1a1a1a] mb-3">
                3. ¿Cuál es tu objetivo principal? *
              </label>
              <div className="space-y-3">
                {[
                  { value: "ingreso_pasivo", label: "💸 Ingreso pasivo sin esfuerzo" },
                  { value: "trader_profesional", label: "🎯 Convertirme en trader profesional" },
                  { value: "aprender_decidir", label: "🤔 Aprender y luego decidir" },
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleInputChange("objetivo", option.value)}
                    className={`w-full p-4 rounded-lg border-2 text-left font-semibold transition-all ${
                      formData.objetivo === option.value
                        ? "border-[#c2a255] bg-[#c2a255]/15 text-[#1a1a1a] shadow-md"
                        : "border-[#c2a255]/20 text-[#2d2d2d] hover:border-[#c2a255]/50 hover:bg-[#c2a255]/5"
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              <Button
                onClick={handlePrevStep}
                className="flex-1 py-4 border-2 border-[#c2a255] text-[#c2a255] bg-white hover:bg-[#c2a255]/5 font-bold rounded-lg transition-all"
              >
                ← Atrás
              </Button>
              <Button
                onClick={handleNextStep}
                className="flex-1 bg-gradient-to-r from-[#c2a255] to-[#d4b875] text-white font-bold py-4 rounded-lg hover:shadow-lg transition-all text-lg"
              >
                Continuar →
              </Button>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <GraduationCap className="h-12 w-12 text-[#c2a255] mx-auto mb-3" />
              <h3 className="text-2xl font-black text-[#1a1a1a]">
                ¡Últimas Preguntas!
              </h3>
              <p className="text-[#2d2d2d] font-medium mt-2">
                Cuéntanos sobre tu experiencia
              </p>
            </div>

            <div>
              <label className="block text-sm font-bold text-[#1a1a1a] mb-3">
                1. ¿Alguna vez has operado en trading? *
              </label>
              <div className="space-y-3">
                {[
                  { value: "nunca", label: "❌ Nunca" },
                  { value: "perdi_dinero", label: "😓 Sí, pero perdí dinero" },
                  { value: "resultados_mixtos", label: "🤷 Sí, con resultados mixtos" },
                  { value: "consistente_rentable", label: "✅ Sí, soy consistentemente rentable" },
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleInputChange("experienciaPrevia", option.value)}
                    className={`w-full p-4 rounded-lg border-2 text-left font-semibold transition-all ${
                      formData.experienciaPrevia === option.value
                        ? "border-[#c2a255] bg-[#c2a255]/15 text-[#1a1a1a] shadow-md"
                        : "border-[#c2a255]/20 text-[#2d2d2d] hover:border-[#c2a255]/50 hover:bg-[#c2a255]/5"
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-[#1a1a1a] mb-3">
                2. ¿Has invertido dinero real en trading? *
              </label>
              <div className="space-y-3">
                {[
                  { value: "nunca", label: "❌ Nunca" },
                  { value: "menos_1k", label: "💵 Menos de $1,000" },
                  { value: "1k_5k", label: "💰 Entre $1,000 - $5,000" },
                  { value: "mas_5k", label: "💎 Más de $5,000" },
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleInputChange("inversionPrevia", option.value)}
                    className={`w-full p-4 rounded-lg border-2 text-left font-semibold transition-all ${
                      formData.inversionPrevia === option.value
                        ? "border-[#c2a255] bg-[#c2a255]/15 text-[#1a1a1a] shadow-md"
                        : "border-[#c2a255]/20 text-[#2d2d2d] hover:border-[#c2a255]/50 hover:bg-[#c2a255]/5"
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-[#1a1a1a] mb-3">
                3. ¿Qué nivel de conocimiento tienes? *
              </label>
              <div className="space-y-3">
                {[
                  { value: "cero", label: "0️⃣ Cero (no sé nada)" },
                  { value: "basico", label: "📈 Básico (sé qué es un gráfico)" },
                  { value: "intermedio", label: "📊 Intermedio (conozco indicadores)" },
                  { value: "avanzado", label: "🎓 Avanzado (tengo estrategia definida)" },
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleInputChange("nivelConocimiento", option.value)}
                    className={`w-full p-4 rounded-lg border-2 text-left font-semibold transition-all ${
                      formData.nivelConocimiento === option.value
                        ? "border-[#c2a255] bg-[#c2a255]/15 text-[#1a1a1a] shadow-md"
                        : "border-[#c2a255]/20 text-[#2d2d2d] hover:border-[#c2a255]/50 hover:bg-[#c2a255]/5"
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              <Button
                onClick={handlePrevStep}
                className="flex-1 py-4 border-2 border-[#c2a255] text-[#c2a255] bg-white hover:bg-[#c2a255]/5 font-bold rounded-lg transition-all"
              >
                ← Atrás
              </Button>
              <Button
                onClick={handleSubmit}
                disabled={loading}
                className="flex-1 bg-gradient-to-r from-[#c2a255] to-[#d4b875] text-white font-bold py-4 rounded-lg hover:shadow-lg transition-all text-lg"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Calificando...
                  </>
                ) : (
                  "Descubrir Mi Perfil 🎯"
                )}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
