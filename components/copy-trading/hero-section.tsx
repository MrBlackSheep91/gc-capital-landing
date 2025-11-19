"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Bot, TrendingUp, Users, Zap } from "lucide-react"
import Link from "next/link"

export function CopyTradingHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#211915] via-[#1a1a1a] to-[#2d2d2d] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#c3a455]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#9b6829]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          
          {/* Pre-título con credibilidad */}
          <div className="inline-flex items-center gap-2 bg-[#c3a455]/20 border border-[#c3a455]/30 px-6 py-3 rounded-full mb-8 animate-fade-in">
            <Bot className="h-5 w-5 text-[#c3a455]" />
            <span className="text-sm font-medium text-[#c3a455]">
              +2,847 traders ya copian mis operaciones automáticamente
            </span>
          </div>

          {/* Título Principal */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
            Copia Mis Trades{" "}
            <span className="bg-gradient-to-r from-[#c3a455] to-[#f7f5be] bg-clip-text text-transparent">
              Automáticamente
            </span>
          </h1>

          {/* Subtítulo con beneficios clave */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            <span className="text-[#c3a455] font-semibold">Robot de Copy Trading</span> que ejecuta mis operaciones en tu cuenta{" "}
            <span className="text-white font-bold">las 24 horas</span>, sin que tengas que estar pegado a la pantalla.
          </p>

          {/* Beneficios rápidos */}
          <div className="flex flex-wrap justify-center gap-6 mb-10 text-gray-300">
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-[#c3a455]" />
              <span>Ejecución automática</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-[#c3a455]" />
              <span>Resultados probados</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-[#c3a455]" />
              <span>Comunidad VIP incluida</span>
            </div>
          </div>

          {/* CTAs Principales */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Link href="/lead">
              <Button
                size="lg"
                className="px-10 py-6 bg-gradient-to-r from-[#c3a455] to-[#9b6829] text-[#211915] font-bold rounded-xl hover:shadow-2xl hover:shadow-[#c3a455]/25 hover:scale-105 transition-all duration-300 text-lg"
              >
                <Bot className="mr-3 h-6 w-6" />
                Activar Copy Trading Ahora
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="px-10 py-6 border-2 border-[#c3a455] text-[#c3a455] font-bold rounded-xl hover:bg-[#c3a455]/10 transition-all duration-300 text-lg"
            >
              Ver Resultados Reales
            </Button>
          </div>

          {/* Proof Social */}
          <div className="bg-[#1a1a1a]/50 backdrop-blur-sm border border-[#c3a455]/20 rounded-2xl p-6 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-[#c3a455] mb-2">+2,847</div>
                <div className="text-gray-400">Traders activos</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#c3a455] mb-2">73.2%</div>
                <div className="text-gray-400">Trades ganadores</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#c3a455] mb-2">+127%</div>
                <div className="text-gray-400">ROI promedio anual</div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="h-6 w-6 text-[#c3a455]" />
          </div>
        </div>
      </div>
    </section>
  )
}
