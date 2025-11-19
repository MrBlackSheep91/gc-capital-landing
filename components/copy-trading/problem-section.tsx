"use client"

import { AlertTriangle, Clock, TrendingDown, Brain, DollarSign } from "lucide-react"

export function CopyTradingProblem() {
  const problems = [
    {
      icon: TrendingDown,
      title: "Pierdes dinero constantemente",
      description: "Has probado señales, cursos, estrategias... pero sigues en números rojos.",
      stat: "87% de traders pierden dinero"
    },
    {
      icon: Clock,
      title: "No tienes tiempo para analizar",
      description: "Entre trabajo y familia, no puedes estar 8+ horas analizando gráficos.",
      stat: "12+ horas diarias requiere"
    },
    {
      icon: Brain,
      title: "Las emociones te traicionan",
      description: "Sabes qué hacer, pero el miedo y la codicia arruinan tus operaciones.",
      stat: "90% falla por psicología"
    },
    {
      icon: AlertTriangle,
      title: "Información confusa y contradictoria",
      description: "Cada 'gurú' dice algo diferente. No sabes en quién confiar realmente.",
      stat: "Miles de estrategias falsas"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-[#1a1a1a] to-[#211915]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            ¿Te suena familiar?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Si estás leyendo esto, probablemente has pasado por estas frustraciones...
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="bg-[#2d2d2d]/50 backdrop-blur-sm border border-red-500/20 rounded-2xl p-8 hover:border-red-500/40 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center">
                    <problem.icon className="h-6 w-6 text-red-400" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3">
                    {problem.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {problem.description}
                  </p>
                  <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 px-3 py-1 rounded-full">
                    <DollarSign className="h-4 w-4 text-red-400" />
                    <span className="text-sm text-red-400 font-medium">
                      {problem.stat}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Emotional Hook */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              "He perdido más dinero del que quiero recordar..."
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              Así me sentía hace 3 años. Había probado todo: señales de Telegram, cursos de $2,000, 
              robots que "nunca fallan"... <span className="text-[#c3a455] font-semibold">hasta que descubrí 
              el verdadero problema.</span>
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
