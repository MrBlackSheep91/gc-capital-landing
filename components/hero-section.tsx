"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Sparkles, TrendingUp } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-slate-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 px-4 py-2 rounded-full mb-8 animate-fade-in">
            <Sparkles className="h-4 w-4 text-blue-600" />
            <span className="text-sm font-semibold text-blue-700">
              10+ Años de Experiencia • +$150k Retiros Confirmados
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Haz Crecer Tu Capital{" "}
            <span className="bg-gradient-to-r from-[#c2a255] to-amber-600 bg-clip-text text-transparent">
              En Piloto Automático
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Con bots profesionales que generan <span className="font-bold text-gray-900">+10% mensual</span> promedio.
            Nasdaq y Oro. Desde $200 USD. Transparencia total.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="px-8 py-6 bg-gradient-to-r from-[#c2a255] to-amber-600 text-white font-semibold rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-200 text-lg"
            >
              <TrendingUp className="mr-2 h-5 w-5" />
              Calcular Mis Ganancias
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-6 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-[#c2a255] hover:text-[#c2a255] transition-all duration-200 text-lg"
            >
              Ver Resultados Reales
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <p className="text-4xl font-bold text-[#c2a255] mb-2">92%</p>
              <p className="text-sm text-gray-600">Meses Positivos</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-[#c2a255] mb-2">0.4%</p>
              <p className="text-sm text-gray-600">Máx. Drawdown</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-[#c2a255] mb-2">10+</p>
              <p className="text-sm text-gray-600">Años Trading</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-[#c2a255] mb-2">$150k+</p>
              <p className="text-sm text-gray-600">Retiros</p>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-16 animate-bounce">
            <ArrowDown className="mx-auto text-gray-400" size={32} />
          </div>
        </div>
      </div>
    </section>
  )
}
