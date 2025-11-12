"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, HelpCircle, Shield, DollarSign, Zap, AlertTriangle } from "lucide-react"

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      category: "Seguridad",
      icon: Shield,
      color: "emerald",
      questions: [
        {
          q: "¿Es seguro? ¿Cómo protegen mis fondos?",
          a: "Absolutamente seguro. Tus fondos permanecen en TU propia cuenta a tu nombre. Gustavo NUNCA tiene acceso a tu dinero. Solo se copian las operaciones automáticamente. Puedes retirar tus fondos cuando quieras."
        },
        {
          q: "¿Qué pasa si hay pérdidas?",
          a: "Como toda inversión, hay riesgos. Por eso usamos stops automáticos y nunca arriesgamos más del 0.3-0.4% por operación. Históricamente mantenemos 92% de meses positivos con drawdown máximo de 0.4%. Además, podés pausar el copy trading cuando quieras."
        }
      ]
    },
    {
      category: "Costos",
      icon: DollarSign,
      color: "amber",
      questions: [
        {
          q: "¿Cuáles son TODOS los costos involucrados?",
          a: "CERO costos fijos. Solo comisión del 30% sobre GANANCIAS netas mensuales. Si no hay ganancias, no pagás nada. No hay setup fees, no hay mensualidades, no hay costos ocultos. 100% transparente."
        },
        {
          q: "¿Cómo y cuándo se cobra la comisión?",
          a: "La comisión se calcula mensualmente solo sobre ganancias NETAS. Ejemplo: si terminaste el mes con +$300 de ganancia, pagás $90 (30%). Si terminás en pérdidas o break even, pagás $0. Se debita automáticamente al final del mes."
        }
      ]
    },
    {
      category: "Funcionamiento",
      icon: Zap,
      color: "blue",
      questions: [
        {
          q: "¿Cómo funciona el copy trading automático?",
          a: "Una vez conectadas las cuentas, cada operación que hace Gustavo se replica automáticamente en tu cuenta en tiempo real. Mismas entradas, mismas salidas, mismo risk management. No necesitás hacer nada manual, todo es 100% automático."
        },
        {
          q: "¿Qué estrategias se usan? ¿Tengo que elegir?",
          a: "NO tenés que elegir. Ambas estrategias (GC-Tech NASDAQ + GC-Gold ORO) operan juntas en la MISMA cuenta como un portafolio diversificado. Esto es lo que logra el 92% de meses positivos gracias a la correlación negativa entre ambos activos."
        },
        {
          q: "¿Necesito experiencia previa en trading?",
          a: "No necesitás experiencia. De hecho, muchos de nuestros mejores inversores nunca habían hecho trading. El copy trading está diseñado para que cualquiera pueda participar sin conocimientos técnicos. Desde $200 USD podés empezar."
        }
      ]
    }
  ]

  const colorMap = {
    emerald: { bg: "bg-emerald-50", text: "text-emerald-600", border: "border-emerald-200" },
    amber: { bg: "bg-amber-50", text: "text-amber-600", border: "border-amber-200" },
    blue: { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-200" }
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-50 text-blue-700 border-blue-200">
            <HelpCircle className="h-3 w-3 mr-1 inline" />
            Preguntas Frecuentes
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Resolvemos Tus Dudas
          </h2>
          <p className="text-xl text-gray-600">
            Todo lo que necesitás saber sobre GC Capital y el copy trading
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {faqs.map((category, catIndex) => {
            const Icon = category.icon
            const colors = colorMap[category.color as keyof typeof colorMap]

            return (
              <div key={catIndex}>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`${colors.bg} rounded-lg p-2`}>
                    <Icon className={`h-5 w-5 ${colors.text}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{category.category}</h3>
                </div>

                {/* Questions */}
                <div className="space-y-3">
                  {category.questions.map((faq, qIndex) => {
                    const globalIndex = catIndex * 100 + qIndex
                    const isOpen = openIndex === globalIndex

                    return (
                      <Card
                        key={qIndex}
                        className={`border-2 ${isOpen ? colors.border : 'border-gray-200'} transition-all`}
                      >
                        <CardContent className="p-0">
                          <button
                            onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                            className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-50 transition-colors"
                          >
                            <span className="text-base font-semibold text-gray-900 pr-4">
                              {faq.q}
                            </span>
                            <ChevronDown
                              className={`h-5 w-5 text-gray-500 flex-shrink-0 transition-transform ${
                                isOpen ? 'rotate-180' : ''
                              }`}
                            />
                          </button>

                          {isOpen && (
                            <div className="px-6 pb-4 text-gray-600 leading-relaxed">
                              {faq.a}
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>

        {/* Risk Warning */}
        <div className="mt-12 bg-red-50 border-2 border-red-200 rounded-lg p-6">
          <div className="flex items-start gap-4">
            <div className="bg-red-100 rounded-lg p-2 flex-shrink-0">
              <AlertTriangle className="h-6 w-6 text-red-600" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-red-800 mb-2">
                Advertencia de Riesgo
              </h4>
              <p className="text-red-700 text-sm leading-relaxed">
                <strong>El trading de Forex y CFDs conlleva un alto nivel de riesgo</strong> y puede no ser adecuado para todos los inversores.
                Existe la posibilidad de que puedas perder parte o todo tu capital. Los resultados pasados no garantizan
                resultados futuros. Solo invertí dinero que puedas permitirte perder.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
