"use client"

import { GitCompare, CheckCircle, X } from "lucide-react"

export function CopyTradingDifferentiators() {
  const comparisons = [
    {
      category: "Soporte",
      others: "Chatbot automático",
      gustavo: "Gustavo responde personalmente"
    },
    {
      category: "Educación",
      others: "Solo copias trades",
      gustavo: "Aprendes mientras copias"
    },
    {
      category: "Comunidad",
      others: "Grupo de Telegram masivo",
      gustavo: "Comunidad VIP exclusiva en Skool"
    },
    {
      category: "Transparencia",
      others: "Resultados inflados",
      gustavo: "Resultados verificados públicamente"
    },
    {
      category: "Enfoque",
      others: "Plataforma corporativa fría",
      gustavo: "Mentoría personal y cercana"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-[#211915] to-[#1a1a1a]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#c3a455]/20 border border-[#c3a455]/30 px-4 py-2 rounded-full mb-6">
            <GitCompare className="h-4 w-4 text-[#c3a455]" />
            <span className="text-sm font-medium text-[#c3a455]">COMPARACIÓN</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            ¿Por Qué Elegir{" "}
            <span className="bg-gradient-to-r from-[#c3a455] to-[#f7f5be] bg-clip-text text-transparent">
              GC Capital?
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            No todos los copy trading son iguales. Esto es lo que nos diferencia de M4Markets y otros brokers.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-[#2d2d2d]/30 backdrop-blur-sm border border-[#c3a455]/20 rounded-3xl overflow-hidden">
            
            {/* Header */}
            <div className="grid grid-cols-3 gap-4 p-6 bg-[#c3a455]/10 border-b border-[#c3a455]/20">
              <div className="text-center">
                <h3 className="text-lg font-bold text-gray-300">Característica</h3>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-bold text-red-400">Otros (M4Markets, etc.)</h3>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-bold text-[#c3a455]">GC Capital</h3>
              </div>
            </div>

            {/* Comparisons */}
            {comparisons.map((comp, index) => (
              <div key={index} className="grid grid-cols-3 gap-4 p-6 border-b border-[#2d2d2d]/50 last:border-b-0">
                <div className="text-center">
                  <span className="font-semibold text-white">{comp.category}</span>
                </div>
                <div className="text-center flex items-center justify-center gap-2">
                  <X className="h-4 w-4 text-red-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{comp.others}</span>
                </div>
                <div className="text-center flex items-center justify-center gap-2">
                  <CheckCircle className="h-4 w-4 text-[#c3a455] flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{comp.gustavo}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-[#c3a455]/10 to-[#9b6829]/10 border border-[#c3a455]/20 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              "No es solo copy trading, es mentoría personalizada"
            </h3>
            <p className="text-gray-300">
              La diferencia está en el toque humano. Mientras otros te tratan como un número, 
              yo te acompaño personalmente en tu camino hacia la rentabilidad.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
