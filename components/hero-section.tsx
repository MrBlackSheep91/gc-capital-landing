"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Sparkles, TrendingUp } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-slate-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center max-w-5xl mx-auto">
          {/* PRE-TÍTULO: Audiencia Específica (Fórmula Bresik) */}
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 px-6 py-3 rounded-full mb-6 animate-fade-in">
            <Sparkles className="h-4 w-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-700">
              Para traders serios cansados de perder dinero con señales manuales
            </span>
          </div>

          {/* TÍTULO: Promesa Poderosa (Fórmula Bresik) */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Copia Trades de un Sistema Probado{" "}
            <span className="bg-gradient-to-r from-[#c2a255] to-amber-600 bg-clip-text text-transparent">
              y Genera Retornos Consistentes
            </span>
          </h1>

          {/* SUBTÍTULO: Reforzar Promesa (Fórmula Bresik) */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Sin experiencia previa, sin errores humanos, sin estar pegado a la pantalla.
            <span className="font-bold text-gray-900"> Con algoritmos backtestados +10 años</span>,
            una comunidad de traders exitosos, y soporte en español 24/7.
          </p>

          {/* CTA Buttons - Optimizado con Bresik (Urgencia + Exclusividad) */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              size="lg"
              className="px-8 py-6 bg-gradient-to-r from-[#c2a255] to-amber-600 text-white font-semibold rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-200 text-lg"
            >
              <TrendingUp className="mr-2 h-5 w-5" />
              Quiero Copiar Trades Ahora
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-6 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-[#c2a255] hover:text-[#c2a255] transition-all duration-200 text-lg"
            >
              Ver Casos de Éxito Reales
            </Button>
          </div>

          {/* Urgencia y Exclusividad */}
          <p className="text-sm text-gray-500 mb-12">
            ⚡ Solo <span className="font-bold text-[#c2a255]">$37/mes</span> • Precio de lanzamiento •
            Inversión mínima $200 USD •
            <span className="font-bold">Pre-screening obligatorio</span>
          </p>

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
