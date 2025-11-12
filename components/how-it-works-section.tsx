"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { UserPlus, Link2, TrendingUp, DollarSign, CheckCircle2 } from "lucide-react"

export function HowItWorksSection() {
  const steps = [
    {
      number: "1",
      icon: UserPlus,
      title: "Calificación",
      description: "Completá el formulario con tus datos. Te clasificamos según tu perfil de inversión (desde $200 USD).",
      color: "blue"
    },
    {
      number: "2",
      icon: Link2,
      title: "Conexión",
      description: "Abrís tu cuenta en el broker recomendado y la conectamos al sistema de copy trading de Gustavo.",
      color: "amber"
    },
    {
      number: "3",
      icon: TrendingUp,
      title: "Operación Automática",
      description: "Ambas estrategias (GC-Tech + GC-Gold) operan juntas en tu cuenta. Todo 100% automático, vos no hacés nada.",
      color: "emerald"
    },
    {
      number: "4",
      icon: DollarSign,
      title: "Retirá Ganancias",
      description: "Retirás tus ganancias cuando quieras. Solo pagás comisión del 30% sobre ganancias netas mensuales.",
      color: "emerald"
    }
  ]

  const colorMap = {
    blue: { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-200" },
    amber: { bg: "bg-amber-50", text: "text-amber-600", border: "border-amber-200" },
    emerald: { bg: "bg-emerald-50", text: "text-emerald-600", border: "border-emerald-200" }
  }

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-amber-50 text-[#c2a255] border-amber-200">
            Proceso Simple
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            ¿Cómo Funciona?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            En 4 pasos simples estás operando con los mismos bots que generan +10% mensual promedio
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon
            const colors = colorMap[step.color as keyof typeof colorMap]

            return (
              <Card key={index} className="relative border-2 border-gray-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  {/* Number Badge */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-[#c2a255] to-amber-600 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-xl">{step.number}</span>
                  </div>

                  {/* Icon */}
                  <div className={`${colors.bg} w-16 h-16 rounded-lg flex items-center justify-center mb-4 mt-4`}>
                    <Icon className={`h-8 w-8 ${colors.text}`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Key Points */}
        <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 border-2 border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            ¿Por Qué Funciona Tan Bien?
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-gray-900 mb-1">Portafolio Diversificado</p>
                <p className="text-sm text-gray-600">
                  Ambas estrategias (NASDAQ + ORO) en la misma cuenta. Correlación negativa = estabilidad máxima.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-gray-900 mb-1">Risk Management Profesional</p>
                <p className="text-sm text-gray-600">
                  Máximo 0.3-0.4% de riesgo por operación. Stops automáticos en todas las posiciones.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-gray-900 mb-1">10+ Años de Experiencia</p>
                <p className="text-sm text-gray-600">
                  Gustavo Contreras lleva más de una década operando y enseñando trading profesional.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-gray-900 mb-1">Transparencia Total</p>
                <p className="text-sm text-gray-600">
                  Tus fondos en tu cuenta a tu nombre. Podés ver todas las operaciones en tiempo real.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
