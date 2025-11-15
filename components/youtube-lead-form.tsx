"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Loader2, CheckCircle, AlertCircle } from "lucide-react"
import { toast } from "sonner"

interface FormData {
  name: string
  email: string
  phone: string
  whatsapp?: string
  capitalDisponible?: string
  experienciaTrading?: string
  objetivoMensual?: string
}

interface SourceData {
  utmSource?: string
  utmMedium?: string
  utmCampaign?: string
  utmContent?: string
  referrer?: string
  landingUrl?: string
  deviceType?: string
}

export function YouTubeLeadForm() {
  const searchParams = useSearchParams()
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    whatsapp: "",
    capitalDisponible: "",
    experienciaTrading: "",
    objetivoMensual: "",
  })

  const [sourceData, setSourceData] = useState<SourceData>({})
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [score, setScore] = useState<number | null>(null)
  const [tier, setTier] = useState<string | null>(null)

  // Capturar UTM parameters al montar
  useEffect(() => {
    const source: SourceData = {
      utmSource: searchParams.get("utm_source") || "youtube",
      utmMedium: searchParams.get("utm_medium") || "video",
      utmCampaign: searchParams.get("utm_campaign") || undefined,
      utmContent: searchParams.get("utm_content") || undefined,
      referrer: document.referrer,
      landingUrl: window.location.pathname,
      deviceType: /mobile|android|iphone/i.test(navigator.userAgent) ? "mobile" : "desktop",
    }

    setSourceData(source)

    // Guardar en localStorage para persistencia
    localStorage.setItem("youtube_source", JSON.stringify(source))

    // Log para debugging
    console.log("📊 UTM Data capturado:", source)
  }, [searchParams])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Validar datos requeridos
      if (!formData.name || !formData.email || !formData.phone) {
        toast.error("Por favor completa todos los campos requeridos")
        setLoading(false)
        return
      }

      // Preparar payload
      const payload = {
        ...formData,
        ...sourceData,
        businessId: "gc-capital", // Gustavo's business ID
      }

      console.log("📤 Enviando lead:", payload)

      // Enviar a API
      const response = await fetch("/api/youtube-leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        throw new Error("Error al enviar el formulario")
      }

      const result = await response.json()

      // Mostrar resultado
      setScore(result.score)
      setTier(result.tier)
      setSubmitted(true)

      toast.success(`¡Aplicación recibida! Score: ${result.score}/60 (${result.tier})`)

      console.log("✅ Lead creado:", result)

      // Limpiar formulario después de 3 segundos
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          whatsapp: "",
          capitalDisponible: "",
          experienciaTrading: "",
          objetivoMensual: "",
        })
        setSubmitted(false)
      }, 3000)
    } catch (error) {
      console.error("❌ Error:", error)
      toast.error("Error al enviar el formulario. Intenta de nuevo.")
    } finally {
      setLoading(false)
    }
  }

  if (submitted && score !== null) {
    return (
      <div className="w-full max-w-md mx-auto p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200">
        <div className="text-center">
          <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-gray-900 mb-2">¡Aplicación Recibida!</h3>
          <p className="text-gray-600 mb-4">Gustavo revisará tu perfil en las próximas 24-48 horas.</p>

          <div className="bg-white rounded-lg p-4 mb-4">
            <div className="text-3xl font-bold text-[#c2a255] mb-1">{score}/60</div>
            <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
              {tier === "super_hot" && "🔥🔥 Super Hot Lead"}
              {tier === "hot" && "🔥 Hot Lead"}
              {tier === "warm" && "🟡 Warm Lead"}
              {tier === "cold" && "🔵 Cold Lead"}
              {tier === "unqualified" && "❄️ Unqualified"}
            </div>
          </div>

          <p className="text-sm text-gray-600">
            {tier === "super_hot" || tier === "hot"
              ? "¡Eres un candidato prioritario! Espera contacto de Gustavo por WhatsApp."
              : "Tu perfil ha sido guardado. Te contactaremos cuando haya oportunidades."}
          </p>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto space-y-4">
      {/* Datos Personales */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Nombre Completo *
        </label>
        <Input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Tu nombre"
          required
          className="w-full"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email *
        </label>
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="tu@email.com"
          required
          className="w-full"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Teléfono *
        </label>
        <Input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          placeholder="+598 99 123 456"
          required
          className="w-full"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          WhatsApp (opcional)
        </label>
        <Input
          type="tel"
          name="whatsapp"
          value={formData.whatsapp}
          onChange={handleInputChange}
          placeholder="+598 99 123 456"
          className="w-full"
        />
      </div>

      {/* Datos de Trading */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Capital Disponible
        </label>
        <Select value={formData.capitalDisponible} onValueChange={(value) => handleSelectChange("capitalDisponible", value)}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Selecciona tu capital" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="$500">$500 - $1,000</SelectItem>
            <SelectItem value="$2000">$2,000 - $5,000</SelectItem>
            <SelectItem value="$5000">$5,000 - $10,000</SelectItem>
            <SelectItem value="$10000">$10,000+</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Experiencia en Trading
        </label>
        <Select value={formData.experienciaTrading} onValueChange={(value) => handleSelectChange("experienciaTrading", value)}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Selecciona tu nivel" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Principiante">Principiante (sin experiencia)</SelectItem>
            <SelectItem value="Intermedio">Intermedio (1-3 años)</SelectItem>
            <SelectItem value="Avanzado">Avanzado (3+ años)</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Objetivo de Retorno Mensual
        </label>
        <Select value={formData.objetivoMensual} onValueChange={(value) => handleSelectChange("objetivoMensual", value)}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Selecciona tu objetivo" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="5-10%">5-10% mensual</SelectItem>
            <SelectItem value="10-15%">10-15% mensual</SelectItem>
            <SelectItem value="15-20%">15-20% mensual</SelectItem>
            <SelectItem value="20%+">20%+ mensual</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Hidden fields para tracking */}
      <input type="hidden" name="utm_source" value={sourceData.utmSource} />
      <input type="hidden" name="utm_campaign" value={sourceData.utmCampaign} />
      <input type="hidden" name="utm_content" value={sourceData.utmContent} />

      {/* Info de origen */}
      {sourceData.utmCampaign && (
        <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg text-sm text-blue-700">
          <AlertCircle className="h-4 w-4 inline mr-2" />
          Vimos que vienes del video: <strong>{sourceData.utmCampaign.replace(/_/g, " ")}</strong>
        </div>
      )}

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={loading}
        className="w-full bg-gradient-to-r from-[#c2a255] to-amber-600 text-white font-semibold py-3 rounded-lg hover:shadow-lg transition-all"
      >
        {loading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Enviando...
          </>
        ) : (
          "Enviar Aplicación"
        )}
      </Button>

      <p className="text-xs text-gray-500 text-center">
        Tus datos son seguros y nunca serán compartidos con terceros.
      </p>
    </form>
  )
}
