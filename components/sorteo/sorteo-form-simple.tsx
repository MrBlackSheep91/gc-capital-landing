"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const WHATSAPP_GROUP_LINK = "https://chat.whatsapp.com/FKt1s873osJDnubIxrdKIT"

export function SorteoFormSimple() {
  const searchParams = useSearchParams()

  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    whatsapp: "",
  })
  const [paisDetectado, setPaisDetectado] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")

  // Capturar UTM params de la URL
  const [utmData, setUtmData] = useState({
    utm_source: "sorteo",
    utm_medium: "landing",
    utm_campaign: null as string | null,
  })

  // Captura de UTM params y país
  useEffect(() => {
    // Capturar UTMs de la URL (si vienen de un video de YouTube, etc.)
    const urlSource = searchParams.get("utm_source")
    const urlMedium = searchParams.get("utm_medium")
    const urlCampaign = searchParams.get("utm_campaign")

    setUtmData({
      utm_source: urlSource || "sorteo",
      utm_medium: urlMedium || "landing",
      utm_campaign: urlCampaign,
    })

    // Log para debugging
    if (urlCampaign) {
      console.log("📍 UTM Campaign detectada:", urlCampaign)
    }

    // Detectar país
    const detectCountry = async () => {
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
        if (dialCode) {
          setFormData(prev => ({ ...prev, whatsapp: dialCode }))
        }
      } catch (error) {
        console.error("Error detectando país:", error)
      }
    }

    detectCountry()
  }, [searchParams])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsSubmitting(true)

    try {
      // Guardar lead en la base de datos con UTMs dinámicos
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          pais: paisDetectado,
          utm_source: utmData.utm_source,
          utm_medium: utmData.utm_medium,
          utm_campaign: utmData.utm_campaign,
          intereses: ["sorteo"],
        }),
      })

      if (!response.ok) {
        throw new Error("Error al guardar el lead")
      }

      // Redirigir al grupo de WhatsApp
      window.location.href = WHATSAPP_GROUP_LINK
    } catch (err) {
      setError("Hubo un error. Por favor, intenta de nuevo.")
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-md mx-auto bg-white border-2 border-[#c3a455]/30 rounded-2xl p-8 shadow-lg">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          🎁 Completa para Entrar al Grupo
        </h3>
        <p className="text-gray-600 text-sm">
          Solo 3 datos y accedes inmediatamente
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Input
            type="text"
            placeholder="Tu Nombre Completo"
            value={formData.nombre}
            onChange={(e) =>
              setFormData({ ...formData, nombre: e.target.value })
            }
            required
            className="border-gray-300 focus:border-[#c3a455]"
          />
        </div>

        <div>
          <Input
            type="email"
            placeholder="Tu Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
            className="border-gray-300 focus:border-[#c3a455]"
          />
        </div>

        <div>
          <Input
            type="tel"
            placeholder="Tu WhatsApp (con código de país)"
            value={formData.whatsapp}
            onChange={(e) =>
              setFormData({ ...formData, whatsapp: e.target.value })
            }
            required
            className="border-gray-300 focus:border-[#c3a455]"
          />
        </div>

        {error && (
          <div className="text-red-600 text-sm text-center">{error}</div>
        )}

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-6 bg-[#c3a455] hover:bg-[#9b6829] text-white font-bold rounded-lg text-lg transition-all duration-300 hover:scale-105"
        >
          {isSubmitting ? "Procesando..." : "🚀 ACCEDER AL GRUPO AHORA"}
        </Button>

        <div className="text-center text-gray-500 text-xs">
          Al continuar aceptas recibir información sobre el sorteo
        </div>
      </form>
    </div>
  )
}
