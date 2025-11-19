"use client"

import { Button } from "@/components/ui/button"
import { Clock, Users, Gift, Zap } from "lucide-react"

export function SorteoHero() {
  return (
    <section className="min-h-screen bg-white flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Live Badge - Estilo copy-trading-alt */}
        <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 px-4 py-2 rounded-full mb-8">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
          <span className="text-red-600 font-medium text-sm">
            SORTEO EXCLUSIVO - ÚLTIMO DÍA
          </span>
        </div>

        {/* Main Headline - Estilo copy-trading-alt */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
          Gana $200 USD, 1 Año VIP y{" "}
          <span className="text-[#c3a455]">
            Mentoría 1-1 Personal
          </span>
        </h1>

        {/* Subheadline - Estilo copy-trading-alt */}
        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          Únete al grupo exclusivo de WhatsApp donde voy a explicar 
          <strong className="text-gray-900"> paso a paso cómo participar</strong> en este sorteo especial.
        </p>

        {/* CTA Button - Estilo copy-trading-alt */}
        <div className="mb-12">
          <Button
            size="lg"
            className="px-12 py-6 bg-[#c3a455] hover:bg-[#9b6829] text-white font-bold rounded-lg text-xl transition-all duration-300 hover:scale-105"
            onClick={() => window.location.href = '/lead'}
          >
            ÚNETE AL GRUPO DE WHATSAPP
          </Button>
        </div>

        {/* Social Proof - Estilo copy-trading-alt */}
        <div className="flex flex-wrap justify-center gap-8 text-gray-600 mb-16">
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-[#c3a455]" />
            <span className="font-semibold">+847 Participantes</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-[#c3a455]" />
            <span className="font-semibold">24h Restantes</span>
          </div>
          <div className="flex items-center gap-2">
            <Gift className="h-5 w-5 text-[#c3a455]" />
            <span className="font-semibold">$2,400 en Premios</span>
          </div>
        </div>

        {/* Details Grid - Estilo copy-trading-alt */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          
          {/* DÓNDE */}
          <div className="text-center">
            <div className="text-sm font-bold text-[#c3a455] mb-2">DÓNDE</div>
            <div className="text-lg font-semibold text-gray-900 mb-2">Grupo WhatsApp</div>
            <div className="text-gray-600 text-sm">
              Los pasos se explican SOLO dentro del grupo exclusivo.
            </div>
          </div>

          {/* CUÁNDO */}
          <div className="text-center">
            <div className="text-sm font-bold text-[#c3a455] mb-2">CUÁNDO</div>
            <div className="text-lg font-semibold text-gray-900 mb-2">Último Día</div>
            <div className="text-gray-600 text-sm">
              El sorteo se cierra en 24 horas. No habrá segunda oportunidad.
            </div>
          </div>

          {/* QUÉ INCLUYE */}
          <div className="text-center">
            <div className="text-sm font-bold text-[#c3a455] mb-2">QUÉ GANAS</div>
            <div className="text-lg font-semibold text-gray-900 mb-2">$2,400 Total</div>
            <div className="text-gray-600 text-sm">
              $200 USD + 1 Año VIP + Mentoría 1-1 conmigo.
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
