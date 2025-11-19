"use client"

import { DollarSign, Crown, Users, Target, TrendingUp, Zap } from "lucide-react"

export function SorteoPremios() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Header - Estilo copy-trading-alt */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Lo Que Obtendrás:
          </h2>
        </div>

        {/* Premios Grid - Estilo branding */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          {/* Premio 1 - Dinero Real */}
          <div className="bg-white border-2 border-[#c3a455]/30 rounded-2xl p-8 text-center relative overflow-hidden shadow-lg">
            <div className="absolute top-4 right-4 bg-[#c3a455] text-white px-3 py-1 rounded-full text-xs font-bold">
              DINERO REAL
            </div>
            <DollarSign className="h-16 w-16 text-[#c3a455] mx-auto mb-6" />
            <div className="text-4xl font-black text-gray-900 mb-4">$200 USD</div>
            <div className="text-[#c3a455] font-bold text-lg mb-4">+ Copy Trading Gustavo Contreras</div>
            <div className="text-gray-600 text-sm leading-relaxed">
              • Dinero real transferido a tu cuenta<br/>
              • Acceso completo a mi sistema de Copy Trading<br/>
              • Robot automático configurado para ti<br/>
              • <strong className="text-gray-900">Valor: $200 USD</strong>
            </div>
          </div>

          {/* Premio 2 - Curso VIP */}
          <div className="bg-white border-2 border-[#c3a455]/30 rounded-2xl p-8 text-center relative overflow-hidden shadow-lg">
            <div className="absolute top-4 right-4 bg-[#c3a455] text-white px-3 py-1 rounded-full text-xs font-bold">
              1 AÑO COMPLETO
            </div>
            <Crown className="h-16 w-16 text-[#c3a455] mx-auto mb-6" />
            <div className="text-4xl font-black text-gray-900 mb-4">Curso VIP</div>
            <div className="text-[#c3a455] font-bold text-lg mb-4">Acceso de por vida</div>
            <div className="text-gray-600 text-sm leading-relaxed">
              • Todas las estrategias avanzadas<br/>
              • Actualizaciones mensuales<br/>
              • Comunidad VIP exclusiva<br/>
              • <strong className="text-gray-900">Valor: $1,200 USD</strong>
            </div>
          </div>

          {/* Premio 3 - Mentoría 1-1 */}
          <div className="bg-white border-2 border-[#c3a455]/30 rounded-2xl p-8 text-center relative overflow-hidden shadow-lg">
            <div className="absolute top-4 right-4 bg-[#c3a455] text-white px-3 py-1 rounded-full text-xs font-bold">
              EXCLUSIVO
            </div>
            <Users className="h-16 w-16 text-[#c3a455] mx-auto mb-6" />
            <div className="text-4xl font-black text-gray-900 mb-4">Mentoría 1-1</div>
            <div className="text-[#c3a455] font-bold text-lg mb-4">Conmigo personalmente</div>
            <div className="text-gray-600 text-sm leading-relaxed">
              • 4 sesiones privadas conmigo<br/>
              • Seguimiento personalizado<br/>
              • Acceso directo por WhatsApp<br/>
              • <strong className="text-gray-900">Valor: $1,000 USD</strong>
            </div>
          </div>

        </div>

        {/* Value Breakdown - Estilo branding */}
        <div className="bg-white border border-[#c3a455]/30 rounded-2xl p-8 mb-12 shadow-lg">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              🧮 DESGLOSE DE VALOR REAL
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-[#c3a455]">$200</div>
                <div className="text-gray-600 text-sm">Dinero + Copy Trading</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#c3a455]">$1,200</div>
                <div className="text-gray-600 text-sm">Curso VIP 1 Año</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#c3a455]">$1,000</div>
                <div className="text-gray-600 text-sm">Mentoría Personal</div>
              </div>
              <div className="border-l-2 border-[#c3a455] pl-6">
                <div className="text-4xl font-black text-[#c3a455]">$2,400</div>
                <div className="text-gray-900 font-bold">VALOR TOTAL</div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Proof Numbers - Estilo branding */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow">
            <Target className="h-8 w-8 text-[#c3a455] mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">847</div>
            <div className="text-gray-600 text-sm">Participantes</div>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow">
            <TrendingUp className="h-8 w-8 text-[#c3a455] mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">$2,400</div>
            <div className="text-gray-600 text-sm">En Premios</div>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow">
            <Zap className="h-8 w-8 text-[#c3a455] mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">24h</div>
            <div className="text-gray-600 text-sm">Restantes</div>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow">
            <Crown className="h-8 w-8 text-[#c3a455] mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">3</div>
            <div className="text-gray-600 text-sm">Ganadores</div>
          </div>
        </div>

      </div>
    </section>
  )
}
