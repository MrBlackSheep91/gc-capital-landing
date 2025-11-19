"use client"

import { useState, useEffect } from "react"
import { Clock, Users, AlertTriangle, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SorteoEscasez() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 47,
    seconds: 32
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-20 bg-gradient-to-br from-red-900/50 to-black/80 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-4">
        
        {/* Urgency Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-red-600 text-white px-6 py-3 rounded-full mb-6 animate-pulse">
            <AlertTriangle className="h-5 w-5" />
            <span className="font-bold text-sm tracking-wide">
              ⚠️ ATENCIÓN: TIEMPO LIMITADO
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            <span className="text-red-400">SOLO QUEDAN</span>
            <br />
            <span className="text-yellow-400">24 HORAS</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Después de esto, <strong className="text-red-400">SE CIERRA PARA SIEMPRE.</strong> 
            No habrá segunda oportunidad. <strong className="text-white">Los pasos para participar 
            se explican SOLO dentro del grupo secreto.</strong>
          </p>
        </div>

        {/* Countdown Timer - Técnica de urgencia Hormozi */}
        <div className="bg-gradient-to-r from-red-600/20 to-orange-600/20 backdrop-blur-sm border-2 border-red-400/50 rounded-2xl p-8 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              ⏰ TIEMPO RESTANTE PARA ENTRAR:
            </h3>
            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
              <div className="bg-black/50 rounded-xl p-4">
                <div className="text-4xl font-black text-red-400">{timeLeft.hours.toString().padStart(2, '0')}</div>
                <div className="text-gray-300 text-sm font-semibold">HORAS</div>
              </div>
              <div className="bg-black/50 rounded-xl p-4">
                <div className="text-4xl font-black text-orange-400">{timeLeft.minutes.toString().padStart(2, '0')}</div>
                <div className="text-gray-300 text-sm font-semibold">MINUTOS</div>
              </div>
              <div className="bg-black/50 rounded-xl p-4">
                <div className="text-4xl font-black text-yellow-400">{timeLeft.seconds.toString().padStart(2, '0')}</div>
                <div className="text-gray-300 text-sm font-semibold">SEGUNDOS</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scarcity Reasons - Técnica Hormozi */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          
          <div className="bg-gradient-to-br from-red-500/10 to-pink-500/10 backdrop-blur-sm border border-red-400/30 rounded-xl p-6">
            <Users className="h-12 w-12 text-red-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-4">
              🚫 CUPOS LIMITADOS
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Solo puedo manejar <strong className="text-white">100 personas más</strong> en el grupo. 
              Después de eso, se cierra automáticamente. <strong className="text-red-400">Ya van 847 dentro.</strong>
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-500/10 to-yellow-500/10 backdrop-blur-sm border border-orange-400/30 rounded-xl p-6">
            <Clock className="h-12 w-12 text-orange-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-4">
              ⏰ FECHA LÍMITE REAL
            </h3>
            <p className="text-gray-300 leading-relaxed">
              El sorteo se hace <strong className="text-white">mañana a las 8 PM</strong> en vivo. 
              Si no estás en el grupo antes, <strong className="text-orange-400">no puedes participar.</strong>
            </p>
          </div>

        </div>

        {/* What Happens After - Fear of Missing Out */}
        <div className="bg-gradient-to-r from-black/50 to-red-900/20 backdrop-blur-sm border border-gray-600 rounded-2xl p-8 mb-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-6">
              🚨 QUÉ PASA SI NO ENTRAS HOY:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-2">❌</div>
                <div className="text-red-400 font-semibold">Pierdes los $200 USD</div>
                <div className="text-gray-400 text-sm">Dinero real que no volverás a ver</div>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">🔒</div>
                <div className="text-red-400 font-semibold">Se cierra para siempre</div>
                <div className="text-gray-400 text-sm">No habrá otro sorteo así</div>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">😢</div>
                <div className="text-red-400 font-semibold">Te quedas afuera</div>
                <div className="text-gray-400 text-sm">Mientras otros ganan</div>
              </div>
            </div>
          </div>
        </div>

        {/* Urgency CTA */}
        <div className="text-center">
          <div className="mb-6">
            <div className="text-yellow-400 font-bold text-lg mb-2 animate-pulse">
              ⚡ NO ESPERES MÁS - CADA SEGUNDO CUENTA
            </div>
            <div className="text-gray-300">
              Los pasos para participar se explican <strong className="text-white">SOLO dentro del grupo</strong>
            </div>
          </div>
          
          <Button
            size="lg"
            className="px-16 py-8 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white font-black rounded-xl text-2xl transition-all duration-300 hover:scale-110 shadow-2xl animate-pulse"
            onClick={() => window.location.href = '/lead'}
          >
            🔥 ENTRAR AL GRUPO AHORA
          </Button>
          
          <div className="mt-4 text-red-400 font-semibold text-sm">
            ⚠️ Después de 24 horas, se cierra para siempre
          </div>
        </div>

      </div>
    </section>
  )
}
