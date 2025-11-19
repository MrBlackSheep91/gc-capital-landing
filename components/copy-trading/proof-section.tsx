"use client"

import { TrendingUp, Calendar, DollarSign, Award } from "lucide-react"

export function CopyTradingProof() {
  const results = [
    {
      period: "Enero 2024",
      return: "+23.7%",
      trades: "47 trades",
      winRate: "74.5%"
    },
    {
      period: "Febrero 2024", 
      return: "+18.2%",
      trades: "52 trades",
      winRate: "71.2%"
    },
    {
      period: "Marzo 2024",
      return: "+31.4%",
      trades: "39 trades",
      winRate: "79.5%"
    },
    {
      period: "Abril 2024",
      return: "+26.8%",
      trades: "44 trades",
      winRate: "75.0%"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-[#1a1a1a] to-[#211915]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 px-4 py-2 rounded-full mb-6">
            <Award className="h-4 w-4 text-green-400" />
            <span className="text-sm font-medium text-green-400">RESULTADOS REALES</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Los Números No Mienten
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Estos son mis resultados reales de los últimos meses. 
            <span className="text-[#c3a455] font-semibold"> Cada operación está verificada y documentada.</span>
          </p>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
          {results.map((result, index) => (
            <div 
              key={index}
              className="bg-[#2d2d2d]/30 backdrop-blur-sm border border-green-500/20 rounded-2xl p-6 text-center hover:border-green-500/40 transition-all duration-300"
            >
              <div className="flex items-center justify-center gap-2 mb-3">
                <Calendar className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-400">{result.period}</span>
              </div>
              <div className="text-3xl font-bold text-green-400 mb-2">
                {result.return}
              </div>
              <div className="space-y-1 text-sm text-gray-300">
                <div>{result.trades}</div>
                <div className="text-[#c3a455]">{result.winRate} ganadores</div>
              </div>
            </div>
          ))}
        </div>

        {/* Key Stats */}
        <div className="bg-gradient-to-r from-[#c3a455]/10 to-[#9b6829]/10 border border-[#c3a455]/20 rounded-3xl p-8 md:p-12 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <TrendingUp className="h-12 w-12 text-[#c3a455] mx-auto mb-4" />
              <div className="text-4xl font-bold text-white mb-2">+127%</div>
              <div className="text-gray-300">ROI Anual Promedio</div>
              <div className="text-sm text-gray-400 mt-1">Últimos 3 años</div>
            </div>
            <div>
              <DollarSign className="h-12 w-12 text-[#c3a455] mx-auto mb-4" />
              <div className="text-4xl font-bold text-white mb-2">73.2%</div>
              <div className="text-gray-300">Trades Ganadores</div>
              <div className="text-sm text-gray-400 mt-1">Promedio histórico</div>
            </div>
            <div>
              <Award className="h-12 w-12 text-[#c3a455] mx-auto mb-4" />
              <div className="text-4xl font-bold text-white mb-2">-12.3%</div>
              <div className="text-gray-300">Drawdown Máximo</div>
              <div className="text-sm text-gray-400 mt-1">Riesgo controlado</div>
            </div>
          </div>
        </div>

        {/* Verification */}
        <div className="text-center mt-12">
          <p className="text-gray-400 text-sm max-w-2xl mx-auto">
            * Todos los resultados están verificados por terceros y disponibles para revisión. 
            Los resultados pasados no garantizan resultados futuros. El trading conlleva riesgos.
          </p>
        </div>

      </div>
    </section>
  )
}
