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
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        
        {/* Urgency Header - Estilo branding */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 px-4 py-2 rounded-full mb-6">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-red-600 font-medium text-sm">
              ATENCIÓN: TIEMPO LIMITADO
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            <span className="text-[#c3a455]">SOLO QUEDAN</span>
            <br />
            <span className="text-gray-900">24 HORAS</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Después de esto, <strong className="text-red-600">SE CIERRA PARA SIEMPRE.</strong> 
            No habrá segunda oportunidad. <strong className="text-gray-900">Los pasos para participar 
            se explican SOLO dentro del grupo secreto.</strong>
          </p>
        </div>

        {/* Countdown Timer - Estilo branding */}
        <div className="bg-gray-50 border border-[#c3a455]/30 rounded-2xl p-8 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ⏰ TIEMPO RESTANTE PARA ENTRAR:
            </h3>
            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
              <div className="bg-white border border-gray-200 rounded-xl p-4 shadow">
                <div className="text-4xl font-black text-[#c3a455]">{timeLeft.hours.toString().padStart(2, '0')}</div>
                <div className="text-gray-600 text-sm font-semibold">HORAS</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-4 shadow">
                <div className="text-4xl font-black text-[#c3a455]">{timeLeft.minutes.toString().padStart(2, '0')}</div>
                <div className="text-gray-600 text-sm font-semibold">MINUTOS</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-4 shadow">
                <div className="text-4xl font-black text-[#c3a455]">{timeLeft.seconds.toString().padStart(2, '0')}</div>
                <div className="text-gray-600 text-sm font-semibold">SEGUNDOS</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scarcity Reasons - Técnica Hormozi */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow">
            <Users className="h-12 w-12 text-[#c3a455] mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              🚫 CUPOS LIMITADOS
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Solo puedo manejar <strong className="text-gray-900">100 personas más</strong> en el grupo. 
              Después de eso, se cierra automáticamente. <strong className="text-red-600">Ya van 847 dentro.</strong>
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow">
            <Clock className="h-12 w-12 text-[#c3a455] mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              ⏰ FECHA LÍMITE REAL
            </h3>
            <p className="text-gray-600 leading-relaxed">
              El sorteo se hace el <strong className="text-gray-900">30 de Noviembre a las 8 PM</strong> en vivo. 
              Si no estás en el grupo antes, <strong className="text-red-600">no puedes participar.</strong>
            </p>
          </div>

        </div>

        {/* What Happens After - Estilo branding */}
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 mb-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              🚨 QUÉ PASA SI NO ENTRAS HOY:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-2">❌</div>
                <div className="text-red-600 font-semibold">Pierdes los $200 USD</div>
                <div className="text-gray-600 text-sm">Dinero real que no volverás a ver</div>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">🔒</div>
                <div className="text-red-600 font-semibold">Se cierra para siempre</div>
                <div className="text-gray-600 text-sm">No habrá otro sorteo así</div>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">😢</div>
                <div className="text-red-600 font-semibold">Te quedas afuera</div>
                <div className="text-gray-600 text-sm">Mientras otros ganan</div>
              </div>
            </div>
          </div>
        </div>

        {/* Urgency CTA - Estilo branding */}
        <div className="text-center">
          <div className="mb-6">
            <div className="text-[#c3a455] font-bold text-lg mb-2">
              ⚡ NO ESPERES MÁS - CADA SEGUNDO CUENTA
            </div>
            <div className="text-gray-600">
              Los pasos para participar se explican <strong className="text-gray-900">SOLO dentro del grupo</strong>
            </div>
          </div>
          
          <Button
            size="lg"
            className="px-12 py-6 bg-[#c3a455] hover:bg-[#9b6829] text-white font-bold rounded-lg text-xl transition-all duration-300 hover:scale-105"
            onClick={() => window.location.href = '/lead-simple'}
          >
            🔥 ENTRAR AL GRUPO AHORA
          </Button>
          
          <div className="mt-4 text-red-600 font-semibold text-sm">
            ⚠️ Después de 24 horas, se cierra para siempre
          </div>
        </div>

      </div>
    </section>
  )
}
