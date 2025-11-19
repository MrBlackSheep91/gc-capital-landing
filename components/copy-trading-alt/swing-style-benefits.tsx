"use client"

import { CheckCircle } from "lucide-react"

export function SwingStyleBenefits() {
  const benefits = [
    "Cómo usar el Sistema de Copy Trading para detectar operaciones antes de que el mercado se mueva",
    "Opera con claridad y control: sin emociones, sin dudas",
    "Construye un sistema diario simple para encontrar setups rentables cada semana",
    "Entiende la estructura del mercado como un profesional sin complicar los gráficos"
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Lo Que Obtendrás:
          </h2>
        </div>

        {/* Benefits List */}
        <div className="space-y-6 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-[#c3a455] flex-shrink-0 mt-1" />
              <p className="text-lg text-gray-700 leading-relaxed">
                {benefit}
              </p>
            </div>
          ))}
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* With This System */}
          <div className="bg-white rounded-lg p-8 border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Con Este Sistema
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">
                  Sabrás exactamente cómo se ve un setup de alta probabilidad antes de que suceda
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">
                  Operarás menos, ganarás más, y ejecutarás cada movimiento con total confianza
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">
                  Seguirás un proceso claro y repetible que lleva a resultados consistentes
                </p>
              </div>
            </div>
          </div>

          {/* Without This System */}
          <div className="bg-white rounded-lg p-8 border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Sin Este Sistema
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 border-2 border-red-500 rounded-full flex-shrink-0 mt-0.5 flex items-center justify-center">
                  <div className="w-2 h-0.5 bg-red-500"></div>
                </div>
                <p className="text-gray-700">
                  Sigues adivinando entradas y perdiendo oportunidades reales
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 border-2 border-red-500 rounded-full flex-shrink-0 mt-0.5 flex items-center justify-center">
                  <div className="w-2 h-0.5 bg-red-500"></div>
                </div>
                <p className="text-gray-700">
                  Saltas entre estrategias, esperando que una finalmente funcione
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 border-2 border-red-500 rounded-full flex-shrink-0 mt-0.5 flex items-center justify-center">
                  <div className="w-2 h-0.5 bg-red-500"></div>
                </div>
                <p className="text-gray-700">
                  Sobre-analizas gráficos pero aún careces de claridad y dirección
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
