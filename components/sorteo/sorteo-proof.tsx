"use client"

import { Star, MessageCircle, TrendingUp, Users, CheckCircle } from "lucide-react"

export function SorteoProof() {
  return (
    <section className="py-20 bg-black/30 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-yellow-400 font-bold text-lg mb-4">
            🏆 PRUEBA SOCIAL REAL
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            <span className="text-yellow-400">+2,847</span> Personas
            <br />
            <span className="text-gray-300">Ya Confían en Mí</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            No soy un desconocido. <strong className="text-white">Miles de personas ya han ganado dinero</strong> 
            con mis sistemas. <strong className="text-yellow-400">Estos son algunos resultados REALES:</strong>
          </p>
        </div>

        {/* Stats Grid - Credibilidad Hormozi */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-gradient-to-br from-green-500/20 to-emerald-600/20 backdrop-blur-sm border border-green-400/30 rounded-xl p-6 text-center">
            <TrendingUp className="h-12 w-12 text-green-400 mx-auto mb-4" />
            <div className="text-3xl font-black text-white">73.2%</div>
            <div className="text-green-400 font-semibold">Win Rate</div>
            <div className="text-gray-400 text-xs">Promedio mensual</div>
          </div>
          <div className="bg-gradient-to-br from-blue-500/20 to-cyan-600/20 backdrop-blur-sm border border-blue-400/30 rounded-xl p-6 text-center">
            <Users className="h-12 w-12 text-blue-400 mx-auto mb-4" />
            <div className="text-3xl font-black text-white">2,847</div>
            <div className="text-blue-400 font-semibold">Traders Activos</div>
            <div className="text-gray-400 text-xs">En mi comunidad</div>
          </div>
          <div className="bg-gradient-to-br from-purple-500/20 to-pink-600/20 backdrop-blur-sm border border-purple-400/30 rounded-xl p-6 text-center">
            <Star className="h-12 w-12 text-purple-400 mx-auto mb-4" />
            <div className="text-3xl font-black text-white">4.9/5</div>
            <div className="text-purple-400 font-semibold">Rating</div>
            <div className="text-gray-400 text-xs">+1,200 reviews</div>
          </div>
          <div className="bg-gradient-to-br from-orange-500/20 to-red-600/20 backdrop-blur-sm border border-orange-400/30 rounded-xl p-6 text-center">
            <MessageCircle className="h-12 w-12 text-orange-400 mx-auto mb-4" />
            <div className="text-3xl font-black text-white">24/7</div>
            <div className="text-orange-400 font-semibold">Soporte</div>
            <div className="text-gray-400 text-xs">Respuesta real</div>
          </div>
        </div>

        {/* Testimonials - Prueba Social Hormozi */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-600 rounded-xl p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                M
              </div>
              <div className="ml-3">
                <div className="text-white font-semibold">Miguel R.</div>
                <div className="text-gray-400 text-sm">Trader desde 2023</div>
              </div>
            </div>
            <div className="flex mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              "Gustavo no es como los otros. <strong className="text-white">En 3 meses recuperé 
              todo lo que había perdido</strong> y ahora genero $400-600 mensuales constantes. 
              Su sistema funciona de verdad."
            </p>
            <div className="mt-4 text-green-400 font-semibold text-sm">
              ✅ Ganancia verificada: +$1,847
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-600 rounded-xl p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                A
              </div>
              <div className="ml-3">
                <div className="text-white font-semibold">Ana L.</div>
                <div className="text-gray-400 text-sm">Principiante</div>
              </div>
            </div>
            <div className="flex mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              "Empecé sin saber nada de trading. <strong className="text-white">El robot hace todo 
              automático</strong> y Gustavo me explica cada operación. Ya llevo $280 de ganancia 
              en mi primer mes."
            </p>
            <div className="mt-4 text-green-400 font-semibold text-sm">
              ✅ Ganancia verificada: +$280
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-600 rounded-xl p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                C
              </div>
              <div className="ml-3">
                <div className="text-white font-semibold">Carlos M.</div>
                <div className="text-gray-400 text-sm">Trader avanzado</div>
              </div>
            </div>
            <div className="flex mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              "Probé muchos sistemas antes. <strong className="text-white">Este es el único que 
              realmente funciona</strong>. La mentoría 1-1 vale oro. Gustavo sabe lo que hace."
            </p>
            <div className="mt-4 text-green-400 font-semibold text-sm">
              ✅ Ganancia verificada: +$3,240
            </div>
          </div>

        </div>

        {/* Authority Building - Técnica Hormozi */}
        <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 backdrop-blur-sm border border-yellow-400/30 rounded-2xl p-8 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              🎯 POR QUÉ PUEDES CONFIAR EN MÍ:
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <div className="text-white font-semibold">+5 años en trading profesional</div>
                  <div className="text-gray-400 text-sm">Con resultados verificables</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <div className="text-white font-semibold">+2,847 estudiantes activos</div>
                  <div className="text-gray-400 text-sm">Generando ganancias reales</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <div className="text-white font-semibold">Sistema probado por 3+ años</div>
                  <div className="text-gray-400 text-sm">Con miles de operaciones exitosas</div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <div className="text-white font-semibold">Transparencia total</div>
                  <div className="text-gray-400 text-sm">Todas mis operaciones son públicas</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <div className="text-white font-semibold">Soporte real 24/7</div>
                  <div className="text-gray-400 text-sm">Respondo personalmente</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <div className="text-white font-semibold">Resultados verificables</div>
                  <div className="text-gray-400 text-sm">Puedes ver todo en tiempo real</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Final Social Proof */}
        <div className="text-center">
          <div className="text-yellow-400 font-bold text-lg mb-4">
            🔥 ÚNETE A LOS +847 QUE YA ESTÁN DENTRO
          </div>
          <div className="text-gray-300">
            No te quedes afuera del sorteo más grande del año. 
            <strong className="text-white"> Los pasos se explican SOLO dentro del grupo.</strong>
          </div>
        </div>

      </div>
    </section>
  )
}
