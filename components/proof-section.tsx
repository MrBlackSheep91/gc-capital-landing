"use client"

import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Shield, Users, DollarSign, Target, Award } from "lucide-react"

export function ProofSection() {
  const stats = [
    {
      icon: TrendingUp,
      value: "92%",
      label: "Meses Positivos",
      sublabel: "(Estrategia Dual)",
      color: "text-emerald-600",
      bgColor: "bg-emerald-50"
    },
    {
      icon: Shield,
      value: "0.4%",
      label: "Máx. Drawdown",
      sublabel: "(Riesgo Controlado)",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: Award,
      value: "10+",
      label: "Años",
      sublabel: "(Experiencia)",
      color: "text-[#c2a255]",
      bgColor: "bg-amber-50"
    },
    {
      icon: DollarSign,
      value: "$150k+",
      label: "Retiros",
      sublabel: "(Confirmados)",
      color: "text-emerald-600",
      bgColor: "bg-emerald-50"
    },
    {
      icon: Target,
      value: "8-10%",
      label: "ROI Mensual",
      sublabel: "(Promedio)",
      color: "text-[#c2a255]",
      bgColor: "bg-amber-50"
    },
    {
      icon: Users,
      value: "50+",
      label: "Inversores",
      sublabel: "(Activos)",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    }
  ]

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Resultados Que Hablan
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Performance comprobada y transparente en todos nuestros bots de trading
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 ${stat.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                    <Icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                  <div className="space-y-1">
                    <p className={`text-3xl font-bold ${stat.color}`}>
                      {stat.value}
                    </p>
                    <p className="text-sm font-semibold text-gray-900">
                      {stat.label}
                    </p>
                    <p className="text-xs text-gray-500">
                      {stat.sublabel}
                    </p>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Performance Highlights */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* GC-Tech Performance */}
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-bold text-blue-900 mb-2">GC-Tech (NAS100)</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-4xl font-bold text-blue-600">8-12%</p>
                  <p className="text-sm text-blue-700">Rendimiento mensual</p>
                </div>
                <div className="pt-4 border-t border-blue-200">
                  <p className="text-2xl font-semibold text-blue-600">0.3%</p>
                  <p className="text-xs text-blue-700">Riesgo por operación</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* GC-Gold Performance */}
          <Card className="bg-gradient-to-br from-amber-50 to-amber-100 border-amber-200">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-bold text-amber-900 mb-2">GC-Gold (XAU)</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-4xl font-bold text-amber-600">6-9%</p>
                  <p className="text-sm text-amber-700">Rendimiento mensual</p>
                </div>
                <div className="pt-4 border-t border-amber-200">
                  <p className="text-2xl font-semibold text-amber-600">0.25%</p>
                  <p className="text-xs text-amber-700">Riesgo por operación</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Dual Strategy */}
          <Card className="bg-gradient-to-br from-emerald-50 to-emerald-100 border-emerald-200">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-bold text-emerald-900 mb-2">Estrategia Dual</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-4xl font-bold text-emerald-600">92%</p>
                  <p className="text-sm text-emerald-700">Meses positivos</p>
                </div>
                <div className="pt-4 border-t border-emerald-200">
                  <p className="text-2xl font-semibold text-emerald-600">0.4%</p>
                  <p className="text-xs text-emerald-700">Máx. drawdown</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Trust Badge */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-slate-100 px-8 py-4 rounded-full">
            <Shield className="h-5 w-5 text-[#c2a255]" />
            <p className="text-sm font-semibold text-gray-700">
              100% Transparente • Auditado • Sin Costos Ocultos
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
