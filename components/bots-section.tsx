"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Shield, Zap, Target, CheckCircle2 } from "lucide-react"

export function BotsSection() {
  const bots = [
    {
      name: "GC-Tech",
      market: "NASDAQ 100",
      subtitle: "El Motor Tecnológico",
      monthlyReturn: "8-12%",
      risk: "0.3%",
      maxDrawdown: "0.4%",
      color: "blue",
      gradient: "from-blue-50 to-blue-100",
      border: "border-blue-200",
      textColor: "text-blue-900",
      accentColor: "text-blue-600",
      features: [
        "Ideal para crecimiento agresivo",
        "Desde $200 USD para empezar",
        "Perfil: Moderado-Alto riesgo",
        "Mercado tecnológico USA"
      ]
    },
    {
      name: "GC-Gold",
      market: "ORO (XAU/USD)",
      subtitle: "La Reserva Estable",
      monthlyReturn: "6-9%",
      risk: "0.25%",
      maxDrawdown: "0.3%",
      color: "amber",
      gradient: "from-amber-50 to-amber-100",
      border: "border-amber-200",
      textColor: "text-amber-900",
      accentColor: "text-amber-600",
      features: [
        "Estabilidad y consistencia",
        "Diversificación de cartera",
        "Protección en mercados bajistas",
        "Activo refugio tradicional"
      ]
    }
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-50 text-blue-700 border-blue-200">
            Portafolio Diversificado
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Dos Estrategias en Una Misma Cuenta
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ambos bots operan juntos automáticamente en tu cuenta para máxima estabilidad y consistencia
          </p>
        </div>

        {/* Bots Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {bots.map((bot, index) => (
            <Card key={index} className={`border-2 ${bot.border} bg-gradient-to-br ${bot.gradient} hover:shadow-xl transition-all duration-300`}>
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <CardTitle className={`text-3xl ${bot.textColor}`}>{bot.name}</CardTitle>
                    <CardDescription className={`text-base ${bot.accentColor} font-semibold mt-1`}>
                      {bot.market} - {bot.subtitle}
                    </CardDescription>
                  </div>
                  {index === 1 ? <Shield className={`h-8 w-8 ${bot.accentColor}`} /> : <Zap className={`h-8 w-8 ${bot.accentColor}`} />}
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Performance Metrics */}
                <div className="grid grid-cols-3 gap-4 bg-white/60 p-4 rounded-lg">
                  <div className="text-center">
                    <TrendingUp className={`h-5 w-5 ${bot.accentColor} mx-auto mb-1`} />
                    <p className={`text-2xl font-bold ${bot.accentColor}`}>{bot.monthlyReturn}</p>
                    <p className="text-xs text-gray-600">ROI Mensual</p>
                  </div>
                  <div className="text-center border-x border-gray-200">
                    <Target className={`h-5 w-5 ${bot.accentColor} mx-auto mb-1`} />
                    <p className={`text-2xl font-bold ${bot.accentColor}`}>{bot.risk}</p>
                    <p className="text-xs text-gray-600">Riesgo/Op</p>
                  </div>
                  <div className="text-center">
                    <Shield className={`h-5 w-5 ${bot.accentColor} mx-auto mb-1`} />
                    <p className={`text-2xl font-bold ${bot.accentColor}`}>{bot.maxDrawdown}</p>
                    <p className="text-xs text-gray-600">Max DD</p>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3">
                  {bot.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className={`h-5 w-5 ${bot.accentColor} flex-shrink-0 mt-0.5`} />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Button className="w-full bg-white text-gray-900 hover:bg-gray-50 border-2 border-gray-200 font-semibold">
                  Más Información
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Dual Strategy Explanation */}
        <Card className="bg-gradient-to-br from-emerald-50 to-emerald-100 border-2 border-emerald-200 max-w-4xl mx-auto">
          <CardContent className="p-8">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-emerald-900 mb-4">
                Portafolio Único, Máxima Estabilidad
              </h3>
              <p className="text-lg text-emerald-700 mb-6">
                NO tenés que elegir una estrategia. <span className="font-bold">Ambas operan juntas en tu misma cuenta</span> automáticamente.
                Esto logra <span className="font-bold">92% de meses positivos</span> gracias a la correlación negativa entre NASDAQ y ORO.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white/60 p-4 rounded-lg border border-emerald-200">
                  <p className="text-3xl font-bold text-blue-600 mb-1">GC-Tech</p>
                  <p className="text-gray-600">Agresivo • NASDAQ</p>
                </div>
                <div className="bg-white/60 p-4 rounded-lg border border-emerald-200">
                  <p className="text-3xl font-bold text-amber-600 mb-1">GC-Gold</p>
                  <p className="text-gray-600">Conservador • XAU</p>
                </div>
              </div>
              <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white p-6 rounded-lg">
                <p className="text-2xl font-bold mb-2">= Portafolio Balanceado ⚖️</p>
                <p className="text-emerald-100">92% de meses positivos • Drawdown 0.4%</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
