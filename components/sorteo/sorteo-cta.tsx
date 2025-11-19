"use client"

import { Button } from "@/components/ui/button"
import { Clock, Users, Gift, Zap, AlertTriangle, CheckCircle } from "lucide-react"

export function SorteoCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-red-900 via-orange-800 to-yellow-700">
      <div className="max-w-5xl mx-auto px-4">
        
        {/* Final Urgency Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 bg-red-600 text-white px-8 py-4 rounded-full mb-8 animate-bounce">
            <AlertTriangle className="h-6 w-6 animate-pulse" />
            <span className="font-black text-lg tracking-wide">
              🚨 ÚLTIMA OPORTUNIDAD - SE CIERRA EN HORAS
            </span>
          </div>
          
          <h2 className="text-4xl md:text-7xl font-black text-white mb-6 leading-tight">
            <span className="text-yellow-400">¿VAS A DEJAR</span>
            <br />
            <span className="text-red-400">QUE OTROS GANEN</span>
            <br />
            <span className="text-white">TUS $200 USD?</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Mientras tú dudas, <strong className="text-yellow-400">847 personas ya están dentro</strong> 
            del grupo esperando el sorteo. <strong className="text-white">No seas el que se queda afuera 
            viendo cómo otros ganan.</strong>
          </p>
        </div>

        {/* Decision Framework - Técnica Hormozi */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          
          {/* Si Entras */}
          <div className="bg-gradient-to-br from-green-500/20 to-emerald-600/20 backdrop-blur-sm border-2 border-green-400/50 rounded-2xl p-8">
            <div className="text-center mb-6">
              <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white">
                ✅ SI ENTRAS AL GRUPO HOY:
              </h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <div className="text-gray-200">
                  <strong className="text-white">Posibilidad real</strong> de ganar $200 USD + todo el paquete VIP
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <div className="text-gray-200">
                  <strong className="text-white">Acceso inmediato</strong> a los pasos exactos para participar
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <div className="text-gray-200">
                  <strong className="text-white">Contenido exclusivo</strong> del grupo que no está en ningún lado
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <div className="text-gray-200">
                  <strong className="text-white">Conexión directa</strong> conmigo y la comunidad VIP
                </div>
              </div>
            </div>
          </div>

          {/* Si No Entras */}
          <div className="bg-gradient-to-br from-red-500/20 to-pink-600/20 backdrop-blur-sm border-2 border-red-400/50 rounded-2xl p-8">
            <div className="text-center mb-6">
              <AlertTriangle className="h-16 w-16 text-red-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white">
                ❌ SI NO ENTRAS HOY:
              </h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs font-bold">✗</span>
                </div>
                <div className="text-gray-200">
                  <strong className="text-red-400">Pierdes para siempre</strong> la oportunidad de ganar $2,400 en premios
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs font-bold">✗</span>
                </div>
                <div className="text-gray-200">
                  <strong className="text-red-400">Te quedas afuera</strong> viendo cómo otros celebran sus ganancias
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs font-bold">✗</span>
                </div>
                <div className="text-gray-200">
                  <strong className="text-red-400">No hay segunda oportunidad</strong> - este sorteo es único
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs font-bold">✗</span>
                </div>
                <div className="text-gray-200">
                  <strong className="text-red-400">Sigues igual</strong> mientras otros avanzan con mi mentoría
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Final Value Reminder */}
        <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm border border-yellow-400/50 rounded-2xl p-8 mb-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-6">
              🎁 RECORDATORIO: ESTO ES LO QUE PUEDES GANAR
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <Gift className="h-12 w-12 text-green-400 mx-auto mb-3" />
                <div className="text-3xl font-black text-green-400">$200</div>
                <div className="text-white font-semibold">USD Reales</div>
                <div className="text-gray-300 text-sm">+ Copy Trading</div>
              </div>
              <div className="text-center">
                <Zap className="h-12 w-12 text-purple-400 mx-auto mb-3" />
                <div className="text-3xl font-black text-purple-400">1 Año</div>
                <div className="text-white font-semibold">Curso VIP</div>
                <div className="text-gray-300 text-sm">Valor: $1,200</div>
              </div>
              <div className="text-center">
                <Users className="h-12 w-12 text-orange-400 mx-auto mb-3" />
                <div className="text-3xl font-black text-orange-400">1-1</div>
                <div className="text-white font-semibold">Mentoría</div>
                <div className="text-gray-300 text-sm">Valor: $1,000</div>
              </div>
            </div>
            <div className="mt-6 text-center">
              <div className="text-4xl font-black text-yellow-400">$2,400 TOTAL</div>
              <div className="text-gray-300">En premios reales que voy a entregar</div>
            </div>
          </div>
        </div>

        {/* Final CTA - Técnica de cierre Hormozi */}
        <div className="text-center">
          <div className="mb-8">
            <div className="text-yellow-400 font-black text-2xl mb-4 animate-pulse">
              ⚡ LA DECISIÓN ES TUYA:
            </div>
            <div className="text-xl text-gray-200 mb-6">
              Puedes seguir <strong className="text-red-400">perdiendo oportunidades</strong> como siempre...
              <br />
              O puedes <strong className="text-green-400">entrar ahora</strong> y tener la posibilidad de ganar $2,400.
            </div>
          </div>
          
          <Button
            size="lg"
            className="px-20 py-10 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-black font-black rounded-2xl text-3xl transition-all duration-300 hover:scale-110 shadow-2xl mb-6"
            onClick={() => window.location.href = '/lead'}
          >
            🚀 SÍ, QUIERO ENTRAR AL GRUPO AHORA
          </Button>
          
          <div className="space-y-2">
            <div className="text-yellow-400 font-bold text-lg">
              ⚡ Los pasos para participar se explican SOLO dentro
            </div>
            <div className="text-red-400 font-semibold">
              ⚠️ Después de 24 horas, se cierra para siempre
            </div>
            <div className="text-gray-300 text-sm">
              No necesitas tarjeta de crédito • Acceso inmediato • Solo 100 cupos más
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
