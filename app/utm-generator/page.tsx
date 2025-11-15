"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Copy, Check } from "lucide-react"
import { toast } from "sonner"

export default function UTMGeneratorPage() {
  const [videoTitle, setVideoTitle] = useState("")
  const [timestamp, setTimestamp] = useState("")
  const [generatedUrl, setGeneratedUrl] = useState("")
  const [copied, setCopied] = useState(false)

  const baseUrl = typeof window !== "undefined" ? window.location.origin : ""

  const generateLink = () => {
    if (!videoTitle.trim()) {
      toast.error("Por favor ingresa el título del video")
      return
    }

    // Crear slug del video (convertir a minúsculas y reemplazar espacios)
    const videoSlug = videoTitle
      .toLowerCase()
      .replace(/\s+/g, "_")
      .replace(/[^a-z0-9_]/g, "")

    // Construir URL con UTM parameters
    const params = new URLSearchParams({
      utm_source: "youtube",
      utm_medium: "video",
      utm_campaign: videoSlug,
      utm_content: timestamp || "descripcion",
    })

    const url = `${baseUrl}/lead?${params.toString()}`
    setGeneratedUrl(url)
    toast.success("Link generado exitosamente")
  }

  const copyToClipboard = () => {
    if (!generatedUrl) return

    navigator.clipboard.writeText(generatedUrl)
    setCopied(true)
    toast.success("Link copiado al portapapeles")

    setTimeout(() => setCopied(false), 2000)
  }

  const timestampExamples = [
    { label: "Descripción del video", value: "descripcion" },
    { label: "Comentario fijado", value: "comentario_fijado" },
    { label: "Minuto 3 - Estrategia", value: "min_3_estrategia" },
    { label: "Minuto 5 - Resultados", value: "min_5_resultados" },
    { label: "Minuto 8 - Cómo empezar", value: "min_8_como_empezar" },
    { label: "Minuto 10 - CTA Final", value: "min_10_cta_final" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-blue-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Generador de Links UTM
          </h1>
          <p className="text-xl text-gray-600">
            Crea links personalizados para cada video de YouTube
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-lg border border-gray-200 shadow-lg p-8 space-y-8">
          {/* Input Section */}
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Título del Video
              </label>
              <Input
                type="text"
                value={videoTitle}
                onChange={(e) => setVideoTitle(e.target.value)}
                placeholder="Ej: Cómo Generar 15% Mensual con Bots"
                className="w-full text-lg"
              />
              <p className="text-xs text-gray-500 mt-1">
                Este título se convertirá en el utm_campaign
              </p>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Momento del Video (Timestamp)
              </label>
              <div className="grid grid-cols-2 gap-2 mb-4">
                {timestampExamples.map((example) => (
                  <button
                    key={example.value}
                    onClick={() => setTimestamp(example.value)}
                    className={`p-2 rounded-lg text-sm font-medium transition-all ${
                      timestamp === example.value
                        ? "bg-[#c2a255] text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {example.label}
                  </button>
                ))}
              </div>
              <Input
                type="text"
                value={timestamp}
                onChange={(e) => setTimestamp(e.target.value)}
                placeholder="Ej: min_8_resultados"
                className="w-full"
              />
              <p className="text-xs text-gray-500 mt-1">
                Describe dónde en el video está este link (para tracking)
              </p>
            </div>

            <Button
              onClick={generateLink}
              className="w-full bg-gradient-to-r from-[#c2a255] to-amber-600 text-white font-semibold py-3 rounded-lg hover:shadow-lg transition-all"
            >
              Generar Link
            </Button>
          </div>

          {/* Generated URL */}
          {generatedUrl && (
            <div className="space-y-4 border-t border-gray-200 pt-8">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Link Generado
                </label>
                <div className="flex gap-2">
                  <div className="flex-1 bg-gray-50 border border-gray-200 rounded-lg p-3 overflow-x-auto">
                    <code className="text-sm text-gray-700 break-all">
                      {generatedUrl}
                    </code>
                  </div>
                  <Button
                    onClick={copyToClipboard}
                    variant="outline"
                    size="sm"
                    className="flex-shrink-0"
                  >
                    {copied ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>

              {/* Instructions */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">
                  ¿Cómo usar este link?
                </h3>
                <ol className="text-sm text-gray-700 space-y-2 list-decimal list-inside">
                  <li>Copia el link (botón arriba)</li>
                  <li>
                    Pégalo en la descripción de tu video de YouTube en el minuto
                    que corresponda
                  </li>
                  <li>
                    También puedes agregarlo en comentarios fijados o cards
                  </li>
                  <li>
                    Cuando alguien clickee, veremos exactamente de qué video y
                    qué momento vino
                  </li>
                </ol>
              </div>

              {/* Stats Preview */}
              <div className="bg-gradient-to-r from-[#c2a255]/10 to-amber-600/10 border border-[#c2a255]/20 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-3">
                  Qué Trackearemos
                </h3>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <p className="text-gray-600">Video</p>
                    <p className="font-semibold text-gray-900">
                      {videoTitle || "Tu video"}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600">Momento</p>
                    <p className="font-semibold text-gray-900">
                      {timestamp || "Descripción"}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600">Dispositivo</p>
                    <p className="font-semibold text-gray-900">Mobile/Desktop</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Hora</p>
                    <p className="font-semibold text-gray-900">Automático</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Help Section */}
          <div className="border-t border-gray-200 pt-8 space-y-4">
            <h3 className="font-semibold text-gray-900">Ejemplos de Uso</h3>

            <div className="space-y-3 text-sm">
              <div className="bg-gray-50 rounded-lg p-3">
                <p className="font-medium text-gray-900 mb-1">
                  En la descripción del video:
                </p>
                <code className="text-xs bg-white p-2 rounded block overflow-x-auto">
                  ⏱️ TIMESTAMPS:
                  <br />
                  3:45 - Estrategia → [tu-link-aqui]
                  <br />
                  8:20 - Resultados → [tu-link-aqui]
                </code>
              </div>

              <div className="bg-gray-50 rounded-lg p-3">
                <p className="font-medium text-gray-900 mb-1">
                  En comentario fijado:
                </p>
                <code className="text-xs bg-white p-2 rounded block overflow-x-auto">
                  📋 ¿QUIERES APLICAR?
                  <br />
                  👉 [tu-link-aqui]
                </code>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-8 text-sm text-gray-600">
          <p>
            Cada link generado será rastreado automáticamente en nuestro
            dashboard.
          </p>
          <p>Verás exactamente qué videos generan más leads y conversiones.</p>
        </div>
      </div>
    </div>
  )
}
