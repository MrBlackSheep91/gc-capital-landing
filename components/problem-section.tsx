import { AlertCircle, Clock, TrendingDown, Brain, Dices } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function ProblemSection() {
  const problems = [
    {
      icon: Clock,
      title: "Pasas horas frente a la pantalla",
      description: "Operando manualmente sin poder descansar ni vivir tu vida"
    },
    {
      icon: TrendingDown,
      title: "Perdiste dinero con robots 'milagrosos'",
      description: "Que prometen 500% pero explotan tu cuenta en semanas"
    },
    {
      icon: AlertCircle,
      title: "No tienes tiempo para analizar 24/7",
      description: "El mercado no duerme, pero tú sí necesitas hacerlo"
    },
    {
      icon: Brain,
      title: "Tus emociones arruinan tu trading",
      description: "FOMO, miedo, revenge trading... El enemigo está en tu cabeza"
    },
    {
      icon: Dices,
      title: "No confías en dejar tu capital en un bot",
      description: "Has visto muchas estafas y no sabes en quién confiar"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-[#211915] to-[#1a1411]">
      <div className="container px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            ¿Te Suena Familiar Alguna de{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c2a255] to-[#d4af37]">
              Estas Situaciones?
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Si respondiste "sí" a alguna, sigue leyendo...
          </p>
        </div>

        {/* Problem Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {problems.map((problem, index) => (
            <Card
              key={index}
              className="bg-[#2a2018] border-[#c2a255]/20 hover:border-[#c2a255]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#c2a255]/20"
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center">
                      <problem.icon className="h-6 w-6 text-red-400" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-white text-lg">
                      {problem.title}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Agitation Text */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-xl p-8 space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Cada mes que operas manual es un mes de:
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-red-400 mr-2 mt-1">✗</span>
                <span>Oportunidades perdidas mientras duermes o trabajas</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-2 mt-1">✗</span>
                <span>Decisiones emocionales que destrozan tu cuenta</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-2 mt-1">✗</span>
                <span>Estrés constante monitoreando posiciones</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-2 mt-1">✗</span>
                <span>Vivir pegado a la pantalla sin libertad real</span>
              </li>
            </ul>

            <div className="pt-6 border-t border-red-500/20">
              <p className="text-lg text-gray-300">
                <span className="font-bold text-white">Mientras tanto, </span>
                traders profesionales usan bots probados para:
              </p>
              <ul className="space-y-2 mt-4 text-[#c2a255]">
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Operar 24/7 sin emociones</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Ejecutar estrategias con disciplina perfecta</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Diversificar en múltiples activos simultáneamente</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Vivir su vida mientras su capital trabaja para ellos</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
