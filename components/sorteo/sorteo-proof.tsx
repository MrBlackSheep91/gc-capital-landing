"use client"

import { Star, MessageCircle, TrendingUp, Users, CheckCircle } from "lucide-react"

export function SorteoProof() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Header - Estilo branding */}
        <div className="text-center mb-16">
          <div className="text-[#c3a455] font-bold text-lg mb-4">
            🏆 PRUEBA SOCIAL REAL
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            <span className="text-[#c3a455]">+2,847</span> Personas
            <br />
            <span className="text-gray-600">Ya Confían en Mí</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            No soy un desconocido. <strong className="text-gray-900">Miles de personas ya han ganado dinero</strong> 
            con mis sistemas. <strong className="text-[#c3a455]">Estos son algunos resultados REALES:</strong>
          </p>
        </div>

        {/* Stats Grid - Estilo branding */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow">
            <TrendingUp className="h-12 w-12 text-[#c3a455] mx-auto mb-4" />
            <div className="text-3xl font-black text-gray-900">73.2%</div>
            <div className="text-[#c3a455] font-semibold">Win Rate</div>
            <div className="text-gray-600 text-xs">Promedio mensual</div>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow">
            <Users className="h-12 w-12 text-[#c3a455] mx-auto mb-4" />
            <div className="text-3xl font-black text-gray-900">2,847</div>
            <div className="text-[#c3a455] font-semibold">Traders Activos</div>
            <div className="text-gray-600 text-xs">En mi comunidad</div>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow">
            <Star className="h-12 w-12 text-[#c3a455] mx-auto mb-4" />
            <div className="text-3xl font-black text-gray-900">4.9/5</div>
            <div className="text-[#c3a455] font-semibold">Rating</div>
            <div className="text-gray-600 text-xs">+1,200 reviews</div>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow">
            <MessageCircle className="h-12 w-12 text-[#c3a455] mx-auto mb-4" />
            <div className="text-3xl font-black text-gray-900">24/7</div>
            <div className="text-[#c3a455] font-semibold">Soporte</div>
            <div className="text-gray-600 text-xs">Respuesta real</div>
          </div>
        </div>

        {/* Testimonials - Prueba Social Hormozi */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-[#c3a455] rounded-full flex items-center justify-center text-white font-bold">
                M
              </div>
              <div className="ml-3">
                <div className="text-gray-900 font-semibold">Miguel R.</div>
                <div className="text-gray-600 text-sm">Trader desde 2023</div>
              </div>
            </div>
            <div className="flex mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 text-[#c3a455] fill-current" />
              ))}
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              "Gustavo no es como los otros. <strong className="text-gray-900">En 3 meses recuperé 
              todo lo que había perdido</strong> y ahora genero $400-600 mensuales constantes. 
              Su sistema funciona de verdad."
            </p>
            <div className="mt-4 text-[#c3a455] font-semibold text-sm">
              ✅ Ganancia verificada: +$1,847
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-[#c3a455] rounded-full flex items-center justify-center text-white font-bold">
                A
              </div>
              <div className="ml-3">
                <div className="text-gray-900 font-semibold">Ana L.</div>
                <div className="text-gray-600 text-sm">Principiante</div>
              </div>
            </div>
            <div className="flex mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 text-[#c3a455] fill-current" />
              ))}
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              "Empecé sin saber nada de trading. <strong className="text-gray-900">El robot hace todo 
              automático</strong> y Gustavo me explica cada operación. Ya llevo $280 de ganancia 
              en mi primer mes."
            </p>
            <div className="mt-4 text-[#c3a455] font-semibold text-sm">
              ✅ Ganancia verificada: +$280
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-[#c3a455] rounded-full flex items-center justify-center text-white font-bold">
                C
              </div>
              <div className="ml-3">
                <div className="text-gray-900 font-semibold">Carlos M.</div>
                <div className="text-gray-600 text-sm">Trader avanzado</div>
              </div>
            </div>
            <div className="flex mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 text-[#c3a455] fill-current" />
              ))}
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              "Probé muchos sistemas antes. <strong className="text-gray-900">Este es el único que 
              realmente funciona</strong>. La mentoría 1-1 vale oro. Gustavo sabe lo que hace."
            </p>
            <div className="mt-4 text-[#c3a455] font-semibold text-sm">
              ✅ Ganancia verificada: +$3,240
            </div>
          </div>

        </div>

        {/* Authority Building - Estilo branding */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-12 shadow">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              🎯 POR QUÉ PUEDES CONFIAR EN MÍ:
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-[#c3a455] flex-shrink-0 mt-1" />
                <div>
                  <div className="text-gray-900 font-semibold">+5 años en trading profesional</div>
                  <div className="text-gray-600 text-sm">Con resultados verificables</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-[#c3a455] flex-shrink-0 mt-1" />
                <div>
                  <div className="text-gray-900 font-semibold">+2,847 estudiantes activos</div>
                  <div className="text-gray-600 text-sm">Generando ganancias reales</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-[#c3a455] flex-shrink-0 mt-1" />
                <div>
                  <div className="text-gray-900 font-semibold">Sistema probado por 3+ años</div>
                  <div className="text-gray-600 text-sm">Con miles de operaciones exitosas</div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-[#c3a455] flex-shrink-0 mt-1" />
                <div>
                  <div className="text-gray-900 font-semibold">Transparencia total</div>
                  <div className="text-gray-600 text-sm">Todas mis operaciones son públicas</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-[#c3a455] flex-shrink-0 mt-1" />
                <div>
                  <div className="text-gray-900 font-semibold">Soporte real 24/7</div>
                  <div className="text-gray-600 text-sm">Respondo personalmente</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-[#c3a455] flex-shrink-0 mt-1" />
                <div>
                  <div className="text-gray-900 font-semibold">Resultados verificables</div>
                  <div className="text-gray-600 text-sm">Puedes ver todo en tiempo real</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Final Social Proof - Estilo branding */}
        <div className="text-center">
          <div className="text-[#c3a455] font-bold text-lg mb-4">
            🔥 ÚNETE A LOS +847 QUE YA ESTÁN DENTRO
          </div>
          <div className="text-gray-600">
            No te quedes afuera del sorteo más grande del año. 
            <strong className="text-gray-900"> Los pasos se explican SOLO dentro del grupo.</strong>
          </div>
        </div>

      </div>
    </section>
  )
}
