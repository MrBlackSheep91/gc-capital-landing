"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, MessageSquare, Palette, FileText, Lightbulb } from "lucide-react"

export function FeedbackForm() {
  const [formData, setFormData] = useState({
    name: "Gustavo Contreras",
    section: "",
    feedbackType: "",
    priority: "",
    currentText: "",
    suggestedText: "",
    colorFeedback: "",
    generalComments: ""
  })
  const [submitted, setSubmitted] = useState(false)

  const sections = [
    { value: "hero", label: "Hero Section (Inicio)" },
    { value: "proof", label: "Proof Section (Métricas)" },
    { value: "bots", label: "Bots Section (Estrategias)" },
    { value: "how-it-works", label: "Cómo Funciona" },
    { value: "calculator", label: "Calculadora" },
    { value: "faq", label: "FAQ" },
    { value: "form", label: "Formulario de Calificación" },
    { value: "footer", label: "Footer" },
    { value: "general", label: "General / Toda la Landing" }
  ]

  const feedbackTypes = [
    { value: "copy", label: "📝 Copy/Textos", icon: FileText },
    { value: "colors", label: "🎨 Colores/Diseño", icon: Palette },
    { value: "structure", label: "🏗️ Estructura/Layout", icon: Lightbulb },
    { value: "other", label: "💬 Otro", icon: MessageSquare }
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Aquí integrar webhook N8N
    const feedbackData = {
      timestamp: new Date().toISOString(),
      ...formData,
      source: "GC Capital Landing Feedback"
    }

    console.log("Feedback enviado:", feedbackData)

    // TODO: Enviar a N8N webhook
    // fetch('https://n8n.tudominio.com/webhook/gc-feedback', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(feedbackData)
    // })

    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-white py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <Card className="border-2 border-emerald-200 bg-gradient-to-br from-emerald-50 to-white">
            <CardHeader className="text-center">
              <CheckCircle2 className="h-16 w-16 text-emerald-600 mx-auto mb-4" />
              <CardTitle className="text-3xl text-emerald-900">¡Feedback Recibido!</CardTitle>
              <CardDescription className="text-lg text-gray-700 mt-2">
                Gracias Gustavo, tu sugerencia ha sido registrada
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button
                onClick={() => {
                  setSubmitted(false)
                  setFormData({
                    name: "Gustavo Contreras",
                    section: "",
                    feedbackType: "",
                    priority: "",
                    currentText: "",
                    suggestedText: "",
                    colorFeedback: "",
                    generalComments: ""
                  })
                }}
                className="bg-[#c2a255] hover:bg-amber-600 text-white"
              >
                Enviar Otra Sugerencia
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    )
  }

  return (
    <section className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-purple-50 text-purple-700 border-purple-200">
            <MessageSquare className="h-3 w-3 mr-1 inline" />
            Feedback Internal
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Sugerencias para GC Capital Landing
          </h1>
          <p className="text-xl text-gray-600">
            Gustavo, usá este formulario para enviarnos tus ideas de mejora en copy, diseño, colores, estructura, etc.
          </p>
        </div>

        <Card className="border-2 border-gray-200 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">Formulario de Feedback</CardTitle>
            <CardDescription>
              Todos los campos son opcionales. Completá solo lo que quieras sugerir.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nombre */}
              <div className="space-y-2">
                <Label htmlFor="name">Tu Nombre</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="border-gray-300"
                  disabled
                />
              </div>

              {/* Sección */}
              <div className="space-y-2">
                <Label htmlFor="section">¿Qué Sección Querés Mejorar?</Label>
                <Select
                  value={formData.section}
                  onValueChange={(value) => setFormData({ ...formData, section: value })}
                >
                  <SelectTrigger className="border-gray-300">
                    <SelectValue placeholder="Seleccioná una sección" />
                  </SelectTrigger>
                  <SelectContent>
                    {sections.map((section) => (
                      <SelectItem key={section.value} value={section.value}>
                        {section.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Tipo de Feedback */}
              <div className="space-y-3">
                <Label>Tipo de Feedback</Label>
                <RadioGroup
                  value={formData.feedbackType}
                  onValueChange={(value) => setFormData({ ...formData, feedbackType: value })}
                >
                  {feedbackTypes.map((type) => {
                    const Icon = type.icon
                    return (
                      <div
                        key={type.value}
                        className="flex items-center space-x-2 bg-gray-50 p-4 rounded-lg border border-gray-200 hover:border-[#c2a255] transition-colors"
                      >
                        <RadioGroupItem value={type.value} id={type.value} />
                        <Label htmlFor={type.value} className="cursor-pointer flex-1 flex items-center gap-2">
                          <Icon className="h-4 w-4 text-gray-600" />
                          {type.label}
                        </Label>
                      </div>
                    )
                  })}
                </RadioGroup>
              </div>

              {/* Prioridad */}
              <div className="space-y-2">
                <Label htmlFor="priority">Prioridad</Label>
                <Select
                  value={formData.priority}
                  onValueChange={(value) => setFormData({ ...formData, priority: value })}
                >
                  <SelectTrigger className="border-gray-300">
                    <SelectValue placeholder="¿Qué tan importante es este cambio?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">🟢 Baja - Nice to have</SelectItem>
                    <SelectItem value="medium">🟡 Media - Mejoraría conversión</SelectItem>
                    <SelectItem value="high">🔴 Alta - Crítico para conversión</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Feedback específico de Copy */}
              {formData.feedbackType === "copy" && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="currentText">Texto Actual (que querés cambiar)</Label>
                    <Textarea
                      id="currentText"
                      value={formData.currentText}
                      onChange={(e) => setFormData({ ...formData, currentText: e.target.value })}
                      placeholder="Ej: 'Haz Crecer Tu Capital En Piloto Automático'"
                      className="border-gray-300 h-20"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="suggestedText">Texto Sugerido (tu propuesta)</Label>
                    <Textarea
                      id="suggestedText"
                      value={formData.suggestedText}
                      onChange={(e) => setFormData({ ...formData, suggestedText: e.target.value })}
                      placeholder="Ej: 'Generá Ingresos Pasivos Con Copy Trading Profesional'"
                      className="border-gray-300 h-20"
                    />
                  </div>
                </>
              )}

              {/* Feedback específico de Colores */}
              {formData.feedbackType === "colors" && (
                <div className="space-y-2">
                  <Label htmlFor="colorFeedback">Sugerencias de Colores/Diseño</Label>
                  <Textarea
                    id="colorFeedback"
                    value={formData.colorFeedback}
                    onChange={(e) => setFormData({ ...formData, colorFeedback: e.target.value })}
                    placeholder="Ej: 'El dorado #c2a255 debería ser más fuerte', 'Los botones necesitan más contraste', etc."
                    className="border-gray-300 h-24"
                  />
                </div>
              )}

              {/* Comentarios Generales */}
              <div className="space-y-2">
                <Label htmlFor="generalComments">Comentarios Generales / Contexto</Label>
                <Textarea
                  id="generalComments"
                  value={formData.generalComments}
                  onChange={(e) => setFormData({ ...formData, generalComments: e.target.value })}
                  placeholder="Cualquier contexto adicional, ejemplos de otras landings, razón del cambio, etc."
                  className="border-gray-300 h-32"
                />
              </div>

              {/* Submit */}
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-[#c2a255] to-amber-600 hover:from-amber-600 hover:to-[#c2a255] text-white font-semibold text-lg py-6"
              >
                Enviar Sugerencia
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Helper Info */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="font-semibold text-blue-900 mb-2">💡 Tips para dar feedback efectivo:</h3>
          <ul className="text-sm text-blue-700 space-y-1">
            <li>• <strong>Copy:</strong> Si un texto no te convence, sugiere una alternativa específica</li>
            <li>• <strong>Colores:</strong> Menciona si algo necesita más/menos contraste, o si un color no te representa</li>
            <li>• <strong>Estructura:</strong> Si una sección debería ir antes/después, o si falta algo importante</li>
            <li>• <strong>Referencias:</strong> Si viste algo en otra landing que te gustó, compartí el link</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
