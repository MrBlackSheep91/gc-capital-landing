"use client"

import { Button } from "@/components/ui/button"
import { Clock, Users, Gift, Zap, AlertTriangle, CheckCircle } from "lucide-react"

export function SorteoCTA() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        
        {/* Final Urgency Header - Estilo branding */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 px-4 py-2 rounded-full mb-8">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-red-600 font-medium text-sm">
              🚨 ÚLTIMA OPORTUNIDAD - SE CIERRA EN HORAS
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="text-[#c3a455]">¿VAS A DEJAR</span>
            <br />
            <span className="text-red-600">QUE OTROS GANEN</span>
            <br />
            <span className="text-gray-900">TUS $200 USD?</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Mientras tú dudas, <strong className="text-[#c3a455]">847 personas ya están dentro</strong> 
            del grupo esperando el sorteo. <strong className="text-gray-900">No seas el que se queda afuera 
            viendo cómo otros ganan.</strong>
          </p>
        </div>

        {/* Decision Framework - Técnica Hormozi */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          
          {/* Si Entras - Estilo branding */}
          <div className="bg-white border-2 border-[#c3a455]/30 rounded-2xl p-8 shadow-lg">
            <div className="text-center mb-6">
              <CheckCircle className="h-16 w-16 text-[#c3a455] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900">
                ✅ SI ENTRAS AL GRUPO HOY:
              </h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#c3a455] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <div className="text-gray-600">
                  <strong className="text-gray-900">Posibilidad real</strong> de ganar $200 USD + todo el paquete VIP
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#c3a455] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <div className="text-gray-600">
                  <strong className="text-gray-900">Acceso inmediato</strong> a los pasos exactos para participar
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#c3a455] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <div className="text-gray-600">
                  <strong className="text-gray-900">Contenido exclusivo</strong> del grupo que no está en ningún lado
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#c3a455] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <div className="text-gray-600">
                  <strong className="text-gray-900">Conexión directa</strong> conmigo y la comunidad VIP
                </div>
              </div>
            </div>
          </div>

          {/* Si No Entras - Estilo branding */}
          <div className="bg-white border-2 border-red-200 rounded-2xl p-8 shadow-lg">
            <div className="text-center mb-6">
              <AlertTriangle className="h-16 w-16 text-red-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900">
                ❌ SI NO ENTRAS HOY:
              </h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs font-bold">✗</span>
                </div>
                <div className="text-gray-600">
                  <strong className="text-red-600">Pierdes para siempre</strong> la oportunidad de ganar $2,400 en premios
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs font-bold">✗</span>
                </div>
                <div className="text-gray-600">
                  <strong className="text-red-600">Te quedas afuera</strong> viendo cómo otros celebran sus ganancias
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs font-bold">✗</span>
                </div>
                <div className="text-gray-600">
                  <strong className="text-red-600">No hay segunda oportunidad</strong> - este sorteo es único
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs font-bold">✗</span>
                </div>
                <div className="text-gray-600">
                  <strong className="text-red-600">Sigues igual</strong> mientras otros avanzan con mi mentoría
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Final Value Reminder - Estilo branding */}
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 mb-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              🎁 RECORDATORIO: ESTO ES LO QUE PUEDES GANAR
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <Gift className="h-12 w-12 text-[#c3a455] mx-auto mb-3" />
                <div className="text-3xl font-black text-[#c3a455]">$200</div>
                <div className="text-gray-900 font-semibold">USD Reales</div>
                <div className="text-gray-600 text-sm">+ Copy Trading</div>
              </div>
              <div className="text-center">
                <Zap className="h-12 w-12 text-[#c3a455] mx-auto mb-3" />
                <div className="text-3xl font-black text-[#c3a455]">1 Año</div>
                <div className="text-gray-900 font-semibold">Curso VIP</div>
                <div className="text-gray-600 text-sm">Valor: $1,200</div>
              </div>
              <div className="text-center">
                <Users className="h-12 w-12 text-[#c3a455] mx-auto mb-3" />
                <div className="text-3xl font-black text-[#c3a455]">1-1</div>
                <div className="text-gray-900 font-semibold">Mentoría</div>
                <div className="text-gray-600 text-sm">Valor: $1,000</div>
              </div>
            </div>
            <div className="mt-6 text-center">
              <div className="text-4xl font-black text-[#c3a455]">$2,400 TOTAL</div>
              <div className="text-gray-600">En premios reales que voy a entregar</div>
            </div>
          </div>
        </div>

        {/* Final CTA - Botón a lead-simple */}
        <div className="text-center">
          <div className="mb-8">
            <div className="text-[#c3a455] font-bold text-2xl mb-4">
              ⚡ LA DECISIÓN ES TUYA:
            </div>
            <div className="text-xl text-gray-600 mb-6">
              Puedes seguir <strong className="text-red-600">perdiendo oportunidades</strong> como siempre...
              <br />
              O puedes <strong className="text-[#c3a455]">entrar ahora</strong> y tener la posibilidad de ganar $2,400.
            </div>
          </div>
          
          <Button
            size="lg"
            className="px-12 py-6 bg-[#c3a455] hover:bg-[#9b6829] text-white font-bold rounded-lg text-xl transition-all duration-300 hover:scale-105 mb-6"
            onClick={() => window.location.href = '/lead-simple'}
          >
            🚀 SÍ, QUIERO ENTRAR AL GRUPO AHORA
          </Button>
          
          <div className="space-y-2">
            <div className="text-[#c3a455] font-bold text-lg">
              ⚡ Los pasos para participar se explican SOLO dentro
            </div>
            <div className="text-red-600 font-semibold">
              ⚠️ Después de 24 horas, se cierra para siempre
            </div>
            <div className="text-gray-600 text-sm">
              No necesitas tarjeta de crédito • Acceso inmediato • Solo 100 cupos más
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
