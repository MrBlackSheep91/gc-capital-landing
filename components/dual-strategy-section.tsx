import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, TrendingUp, TrendingDown, Scale } from "lucide-react"

export function DualStrategySection() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#211915] to-[#1a1411]">
      <div className="container px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Por Qué Operar Ambas Estrategias Te Da{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c2a255] to-[#d4af37]">
              Ventaja Injusta
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            No se trata de elegir uno u otro. Se trata de dominar ambos mercados simultáneamente.
          </p>
        </div>

        {/* Main Explanation */}
        <div className="max-w-5xl mx-auto mb-16">
          <Card className="bg-gradient-to-br from-[#2a2018] to-[#1a1411] border-2 border-[#c2a255]/30">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-3 gap-8">
                {/* Scenario 1 */}
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-green-500/20 flex items-center justify-center">
                    <TrendingUp className="h-8 w-8 text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Mercados Alcistas
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Cuando hay optimismo y tecnología sube
                  </p>
                  <div className="pt-4 border-t border-[#c2a255]/20">
                    <p className="text-[#c2a255] font-semibold">GC-Tech capitaliza</p>
                    <p className="text-xs text-gray-500 mt-1">Nasdaq en máximos</p>
                  </div>
                </div>

                {/* Scenario 2 */}
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-red-500/20 flex items-center justify-center">
                    <TrendingDown className="h-8 w-8 text-red-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Mercados Bajistas
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Cuando hay miedo y buscan refugio
                  </p>
                  <div className="pt-4 border-t border-[#c2a255]/20">
                    <p className="text-[#c2a255] font-semibold">GC-Gold protege</p>
                    <p className="text-xs text-gray-500 mt-1">Oro como reserva</p>
                  </div>
                </div>

                {/* Result */}
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-[#c2a255]/20 flex items-center justify-center">
                    <Scale className="h-8 w-8 text-[#c2a255]" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Resultado
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Correlación negativa = equilibrio
                  </p>
                  <div className="pt-4 border-t border-[#c2a255]/20">
                    <p className="text-[#c2a255] font-semibold">Portafolio balanceado</p>
                    <p className="text-xs text-gray-500 mt-1">Menor volatilidad</p>
                  </div>
                </div>
              </div>

              {/* Arrow Flow */}
              <div className="flex items-center justify-center gap-4 mt-12">
                <div className="text-center">
                  <p className="text-sm text-gray-400">Optimismo</p>
                  <ArrowRight className="h-6 w-6 text-[#c2a255] mx-auto mt-2" />
                </div>
                <div className="text-center px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                  <p className="text-blue-400 font-semibold">NASDAQ sube</p>
                </div>
                <div className="text-center">
                  <ArrowRight className="h-6 w-6 text-[#c2a255]" />
                </div>
                <div className="text-center px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-lg">
                  <p className="text-green-400 font-semibold">GC-Tech capitaliza</p>
                </div>
              </div>

              <div className="flex items-center justify-center gap-4 mt-6">
                <div className="text-center">
                  <p className="text-sm text-gray-400">Miedo</p>
                  <ArrowRight className="h-6 w-6 text-[#c2a255] mx-auto mt-2" />
                </div>
                <div className="text-center px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                  <p className="text-yellow-400 font-semibold">ORO sube</p>
                </div>
                <div className="text-center">
                  <ArrowRight className="h-6 w-6 text-[#c2a255]" />
                </div>
                <div className="text-center px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-lg">
                  <p className="text-green-400 font-semibold">GC-Gold protege</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Performance Comparison */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
            Comparación de Consistencia
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-[#2a2018] border-[#c2a255]/20">
              <CardContent className="p-6 text-center">
                <p className="text-gray-400 mb-4">Solo NAS100</p>
                <div className="flex items-center justify-center gap-1 mb-2">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className="w-4 h-4 bg-blue-500 rounded-sm" />
                  ))}
                  {[...Array(2)].map((_, i) => (
                    <div key={i} className="w-4 h-4 bg-gray-700 rounded-sm" />
                  ))}
                </div>
                <p className="text-2xl font-bold text-white">80%</p>
                <p className="text-sm text-gray-500">meses positivos</p>
              </CardContent>
            </Card>

            <Card className="bg-[#2a2018] border-[#c2a255]/20">
              <CardContent className="p-6 text-center">
                <p className="text-gray-400 mb-4">Solo XAU</p>
                <div className="flex items-center justify-center gap-1 mb-2">
                  {[...Array(7)].map((_, i) => (
                    <div key={i} className="w-4 h-4 bg-yellow-500 rounded-sm" />
                  ))}
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-4 h-4 bg-gray-700 rounded-sm" />
                  ))}
                </div>
                <p className="text-2xl font-bold text-white">75%</p>
                <p className="text-sm text-gray-500">meses positivos</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-[#c2a255]/20 to-[#d4af37]/10 border-2 border-[#c2a255] relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#c2a255] text-[#211915] px-3 py-1 text-xs font-bold rounded-bl-lg">
                RECOMENDADO
              </div>
              <CardContent className="p-6 text-center">
                <p className="text-gray-300 mb-4 font-semibold">DUAL STRATEGY</p>
                <div className="flex items-center justify-center gap-1 mb-2">
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className="w-4 h-4 bg-[#c2a255] rounded-sm" />
                  ))}
                  {[...Array(1)].map((_, i) => (
                    <div key={i} className="w-4 h-4 bg-gray-700 rounded-sm" />
                  ))}
                </div>
                <p className="text-3xl font-bold text-[#c2a255]">92%</p>
                <p className="text-sm text-gray-400">meses positivos</p>
              </CardContent>
            </Card>
          </div>

          {/* Final Statement */}
          <div className="mt-12 text-center">
            <div className="inline-block bg-gradient-to-r from-[#c2a255]/20 to-[#d4af37]/20 border border-[#c2a255]/30 rounded-xl p-6">
              <p className="text-xl md:text-2xl font-bold text-white mb-2">
                Rendimientos más consistentes con menor volatilidad
              </p>
              <p className="text-gray-400">
                Esa es la ventaja de la diversificación estratégica
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
