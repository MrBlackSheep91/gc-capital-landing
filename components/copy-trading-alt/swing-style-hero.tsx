"use client"

import { Button } from "@/components/ui/button"
import { Calendar, Users, TrendingUp } from "lucide-react"
import Link from "next/link"

export function SwingStyleHero() {
  return (
    <section className="min-h-screen bg-white flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Live Badge */}
        <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 px-4 py-2 rounded-full mb-8">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
          <span className="text-red-600 font-medium text-sm">
            ACCESO INMEDIATO DISPONIBLE
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
          Domina el Sistema de Copy Trading Que Generó{" "}
          <span className="text-[#c3a455]">
            +$2.4M en Ganancias
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          Accede al sistema exacto que uso para generar ganancias consistentes, 
          <strong className="text-gray-900"> completamente automático</strong>.
        </p>

        {/* CTA Button */}
        <div className="mb-12">
          <Link href="/lead">
            <Button
              size="lg"
              className="px-12 py-6 bg-[#c3a455] hover:bg-[#9b6829] text-white font-bold rounded-lg text-xl transition-all duration-300 hover:scale-105"
            >
              ACCEDER AL SISTEMA AHORA
            </Button>
          </Link>
        </div>

        {/* Social Proof */}
        <div className="flex flex-wrap justify-center gap-8 text-gray-600 mb-16">
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-[#c3a455]" />
            <span className="font-semibold">+2,847 Traders</span>
          </div>
          <div className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-[#c3a455]" />
            <span className="font-semibold">73.2% Win Rate</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-[#c3a455]" />
            <span className="font-semibold">Disponible 24/7</span>
          </div>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          
          {/* WHERE */}
          <div className="text-center">
            <div className="text-sm font-bold text-[#c3a455] mb-2">DÓNDE</div>
            <div className="text-lg font-semibold text-gray-900 mb-2">Tu Cuenta de Trading</div>
            <div className="text-gray-600 text-sm">
              El robot opera directamente en tu cuenta. Tú mantienes el control total.
            </div>
          </div>

          {/* WHEN */}
          <div className="text-center">
            <div className="text-sm font-bold text-[#c3a455] mb-2">CUÁNDO</div>
            <div className="text-lg font-semibold text-gray-900 mb-2">24/7 Automático</div>
            <div className="text-gray-600 text-sm">
              El sistema funciona las 24 horas, incluso mientras duermes.
            </div>
          </div>

          {/* WHAT */}
          <div className="text-center">
            <div className="text-sm font-bold text-[#c3a455] mb-2">QUÉ INCLUYE</div>
            <div className="text-lg font-semibold text-gray-900 mb-2">Sistema Completo</div>
            <div className="text-gray-600 text-sm">
              Robot + Mentoría + Comunidad VIP + Soporte directo.
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
