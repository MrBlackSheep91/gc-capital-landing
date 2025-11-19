"use client"

import { Button } from "@/components/ui/button"
import { Clock, Users, Gift, Zap } from "lucide-react"

export function SorteoHero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 via-orange-500/10 to-yellow-400/20"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        
        {/* Urgency Badge - Estado 1: Crear conciencia del problema */}
        <div className="inline-flex items-center gap-3 bg-red-600 text-white px-6 py-3 rounded-full mb-8 animate-bounce">
          <Clock className="h-5 w-5 animate-spin" />
          <span className="font-bold text-sm tracking-wide">
            ⚠️ ÚLTIMO DÍA - SORTEO CIERRA EN 24 HORAS
          </span>
        </div>

        {/* Pre-headline - Agitación del problema */}
        <div className="text-yellow-400 font-semibold text-lg mb-4 animate-pulse">
          🔥 MIENTRAS OTROS PIERDEN DINERO EN TRADING...
        </div>

        {/* Main Headline - Estado 2: Consciente del problema + Solución */}
        <h1 className="text-4xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight">
          <span className="block text-yellow-400 text-3xl md:text-5xl mb-4">
            ¡GANA $200 USD REALES!
          </span>
          <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
            + 1 AÑO VIP COMPLETO
          </span>
          <span className="block text-2xl md:text-4xl mt-4 text-gray-300">
            + Mentoría Personal Conmigo
          </span>
        </h1>

        {/* Subheadline - Estado 3: Consciente de la solución */}
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
          <strong className="text-yellow-400">EXCLUSIVO:</strong> Solo los miembros del grupo secreto de WhatsApp 
          pueden participar. <strong className="text-white">Los pasos se explican SOLO ahí dentro.</strong>
        </p>

        {/* Value Stack - Técnica Hormozi */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-sm border border-yellow-400/30 rounded-xl p-6">
            <Gift className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
            <div className="text-2xl font-bold text-white mb-2">$200 USD</div>
            <div className="text-gray-300 text-sm">Dinero real en tu cuenta</div>
          </div>
          <div className="bg-gradient-to-br from-red-500/20 to-pink-500/20 backdrop-blur-sm border border-red-400/30 rounded-xl p-6">
            <Zap className="h-12 w-12 text-red-400 mx-auto mb-4" />
            <div className="text-2xl font-bold text-white mb-2">1 Año VIP</div>
            <div className="text-gray-300 text-sm">Acceso completo a todo</div>
          </div>
          <div className="bg-gradient-to-br from-orange-500/20 to-yellow-500/20 backdrop-blur-sm border border-orange-400/30 rounded-xl p-6">
            <Users className="h-12 w-12 text-orange-400 mx-auto mb-4" />
            <div className="text-2xl font-bold text-white mb-2">Mentoría 1-1</div>
            <div className="text-gray-300 text-sm">Conmigo personalmente</div>
          </div>
        </div>

        {/* Social Proof - Técnica Hormozi */}
        <div className="flex flex-wrap justify-center gap-8 text-gray-400 mb-12">
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-yellow-400" />
            <span className="font-semibold">+847 Participantes</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-red-400" />
            <span className="font-semibold">24h Restantes</span>
          </div>
          <div className="flex items-center gap-2">
            <Gift className="h-5 w-5 text-green-400" />
            <span className="font-semibold">$2,400 en Premios</span>
          </div>
        </div>

        {/* Main CTA - Estado 4: Consciente del producto */}
        <div className="space-y-4">
          <Button
            size="lg"
            className="px-16 py-8 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-black font-black rounded-xl text-2xl transition-all duration-300 hover:scale-110 shadow-2xl"
            onClick={() => window.location.href = '/lead'}
          >
            🚀 ÚNETE AL GRUPO SECRETO AHORA
          </Button>
          <div className="text-yellow-400 font-bold text-lg animate-pulse">
            ⚡ Los pasos se explican SOLO dentro del grupo
          </div>
        </div>

        {/* Scarcity - Técnica Hormozi */}
        <div className="mt-8 text-red-400 font-semibold">
          ⚠️ CUPOS LIMITADOS - Solo acepto 100 personas más
        </div>

      </div>
    </section>
  )
}
