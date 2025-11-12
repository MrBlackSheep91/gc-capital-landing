"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Sparkles } from "lucide-react"

export function QualificationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    capital: "",
    experience: "",
    strategy: "",
    urgency: "",
    source: ""
  })
  const [submitted, setSubmitted] = useState(false)
  const [score, setScore] = useState(0)

  const calculateScore = () => {
    let total = 0

    // Capital (0-10)
    const cap = parseInt(formData.capital)
    if (cap >= 5000) total += 10
    else if (cap >= 2000) total += 9
    else if (cap >= 1000) total += 7
    else if (cap >= 500) total += 5
    else if (cap >= 200) total += 3

    // Experience (0-10)
    if (formData.experience === "5+") total += 10
    else if (formData.experience === "3-5") total += 9
    else if (formData.experience === "1-2") total += 7
    else if (formData.experience === "none") total += 5

    // Strategy (0-10)
    if (formData.strategy === "dual") total += 10
    else if (formData.strategy === "tech" || formData.strategy === "gold") total += 7

    // Urgency (0-10)
    if (formData.urgency === "week") total += 10
    else if (formData.urgency === "month") total += 8
    else if (formData.urgency === "next") total += 5
    else if (formData.urgency === "research") total += 2

    // Source (0-10)
    if (formData.source === "referral") total += 10
    else if (formData.source === "skool") total += 9
    else if (formData.source === "youtube") total += 8
    else if (formData.source === "instagram") total += 6
    else total += 5

    return total
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const finalScore = calculateScore()
    setScore(finalScore)
    setSubmitted(true)

    // Aquí integrar webhook N8N o API Route
    console.log("Form submitted:", { ...formData, score: finalScore })
  }

  const getQualification = (score: number) => {
    if (score >= 45) return { level: "🔥 Hot Lead", color: "text-emerald-600", bg: "bg-emerald-50" }
    if (score >= 35) return { level: "🟡 Warm Lead", color: "text-amber-600", bg: "bg-amber-50" }
    if (score >= 25) return { level: "🔵 Cold Lead", color: "text-blue-600", bg: "bg-blue-50" }
    return { level: "❄️ Unqualified", color: "text-gray-600", bg: "bg-gray-50" }
  }

  if (submitted) {
    const qual = getQualification(score)
    return (
      <section className="py-20 px-4 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto max-w-2xl">
          <Card className="border-2 border-emerald-200 bg-gradient-to-br from-emerald-50 to-white">
            <CardHeader className="text-center">
              <CheckCircle2 className="h-16 w-16 text-emerald-600 mx-auto mb-4" />
              <CardTitle className="text-3xl text-emerald-900">¡Solicitud Recibida!</CardTitle>
              <CardDescription className="text-lg text-gray-700 mt-2">
                Gracias {formData.name}, hemos recibido tu información
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className={`${qual.bg} border border-emerald-200 p-6 rounded-lg text-center`}>
                <p className="text-sm text-gray-600 mb-2">Tu Clasificación</p>
                <p className={`text-3xl font-bold ${qual.color} mb-2`}>{qual.level}</p>
                <p className="text-sm text-gray-600">Score: {score}/50</p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-3">Próximos Pasos:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Recibirás un email de confirmación en {formData.email}</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Un asesor se contactará vía WhatsApp en las próximas 24-48h</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Te enviaremos acceso a reportes de performance en tiempo real</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    )
  }

  return (
    <section id="qualification" className="py-20 px-4 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-amber-50 text-[#c2a255] border-amber-200">
            <Sparkles className="h-3 w-3 mr-1 inline" />
            Proceso de Calificación
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Solicitá Tu Acceso
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Completá el formulario y recibí una evaluación personalizada en 24-48h
          </p>
        </div>

        <Card className="border-2 border-gray-200 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">Información de Contacto</CardTitle>
            <CardDescription>
              Todos los campos son requeridos para procesar tu solicitud
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Info */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre Completo</Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Juan Pérez"
                    className="border-gray-300 focus:border-[#c2a255]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="juan@email.com"
                    className="border-gray-300 focus:border-[#c2a255]"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">WhatsApp (con código de país)</Label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+54 9 11 1234-5678"
                  className="border-gray-300 focus:border-[#c2a255]"
                />
              </div>

              {/* Capital */}
              <div className="space-y-2">
                <Label htmlFor="capital">Capital Disponible para Invertir (USD)</Label>
                <Select value={formData.capital} onValueChange={(value) => setFormData({ ...formData, capital: value })}>
                  <SelectTrigger className="border-gray-300 focus:border-[#c2a255]">
                    <SelectValue placeholder="Seleccioná un rango" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="200-500">$200 - $500</SelectItem>
                    <SelectItem value="500-1000">$500 - $1,000</SelectItem>
                    <SelectItem value="1000-2000">$1,000 - $2,000</SelectItem>
                    <SelectItem value="2000-5000">$2,000 - $5,000</SelectItem>
                    <SelectItem value="5000+">$5,000+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Experience */}
              <div className="space-y-3">
                <Label>Experiencia en Trading/Inversiones</Label>
                <RadioGroup value={formData.experience} onValueChange={(value) => setFormData({ ...formData, experience: value })}>
                  <div className="flex items-center space-x-2 bg-gray-50 p-3 rounded-lg border border-gray-200">
                    <RadioGroupItem value="none" id="exp-none" />
                    <Label htmlFor="exp-none" className="cursor-pointer flex-1">Ninguna (Quiero empezar)</Label>
                  </div>
                  <div className="flex items-center space-x-2 bg-gray-50 p-3 rounded-lg border border-gray-200">
                    <RadioGroupItem value="1-2" id="exp-1-2" />
                    <Label htmlFor="exp-1-2" className="cursor-pointer flex-1">1-2 años</Label>
                  </div>
                  <div className="flex items-center space-x-2 bg-gray-50 p-3 rounded-lg border border-gray-200">
                    <RadioGroupItem value="3-5" id="exp-3-5" />
                    <Label htmlFor="exp-3-5" className="cursor-pointer flex-1">3-5 años</Label>
                  </div>
                  <div className="flex items-center space-x-2 bg-gray-50 p-3 rounded-lg border border-gray-200">
                    <RadioGroupItem value="5+" id="exp-5+" />
                    <Label htmlFor="exp-5+" className="cursor-pointer flex-1">Más de 5 años</Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Strategy */}
              <div className="space-y-3">
                <Label>¿Qué Estrategia Te Interesa?</Label>
                <RadioGroup value={formData.strategy} onValueChange={(value) => setFormData({ ...formData, strategy: value })}>
                  <div className="flex items-center space-x-2 bg-blue-50 p-3 rounded-lg border border-blue-200">
                    <RadioGroupItem value="tech" id="strategy-tech" />
                    <Label htmlFor="strategy-tech" className="cursor-pointer flex-1">GC-Tech (NASDAQ) - Agresivo</Label>
                  </div>
                  <div className="flex items-center space-x-2 bg-amber-50 p-3 rounded-lg border border-amber-200">
                    <RadioGroupItem value="gold" id="strategy-gold" />
                    <Label htmlFor="strategy-gold" className="cursor-pointer flex-1">GC-Gold (XAU) - Conservador</Label>
                  </div>
                  <div className="flex items-center space-x-2 bg-emerald-50 p-3 rounded-lg border border-emerald-200">
                    <RadioGroupItem value="dual" id="strategy-dual" />
                    <Label htmlFor="strategy-dual" className="cursor-pointer flex-1">Estrategia Dual (Ambos) - Recomendado ⭐</Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Urgency */}
              <div className="space-y-2">
                <Label htmlFor="urgency">¿Cuándo Querés Empezar?</Label>
                <Select value={formData.urgency} onValueChange={(value) => setFormData({ ...formData, urgency: value })}>
                  <SelectTrigger className="border-gray-300 focus:border-[#c2a255]">
                    <SelectValue placeholder="Seleccioná un plazo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="week">Esta semana</SelectItem>
                    <SelectItem value="month">Este mes</SelectItem>
                    <SelectItem value="next">Próximo mes</SelectItem>
                    <SelectItem value="research">Estoy investigando</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Source */}
              <div className="space-y-2">
                <Label htmlFor="source">¿Cómo Nos Conociste?</Label>
                <Select value={formData.source} onValueChange={(value) => setFormData({ ...formData, source: value })}>
                  <SelectTrigger className="border-gray-300 focus:border-[#c2a255]">
                    <SelectValue placeholder="Seleccioná una opción" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="referral">Recomendación de alguien</SelectItem>
                    <SelectItem value="skool">Comunidad Skool</SelectItem>
                    <SelectItem value="youtube">YouTube</SelectItem>
                    <SelectItem value="instagram">Instagram</SelectItem>
                    <SelectItem value="other">Otro</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Submit */}
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-[#c2a255] to-amber-600 hover:from-amber-600 hover:to-[#c2a255] text-white font-semibold text-lg py-6"
              >
                Enviar Solicitud
              </Button>

              <p className="text-xs text-gray-500 text-center">
                Al enviar este formulario, aceptás ser contactado vía email y WhatsApp.
                Tus datos están protegidos y no serán compartidos con terceros.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
