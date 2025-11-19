"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const WHATSAPP_GROUP_LINK = "https://chat.whatsapp.com/FKt1s873osJDnubIxrdKIT"

export function SorteoFormSimple() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsSubmitting(true)

    try {
      // Guardar lead en la base de datos
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          source: "sorteo",
          interest: ["sorteo"],
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
            value={formData.telefono}
            onChange={(e) =>
              setFormData({ ...formData, telefono: e.target.value })
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
