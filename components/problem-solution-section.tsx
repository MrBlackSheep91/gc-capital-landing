"use client"

import { AlertCircle, CheckCircle2, Zap, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ProblemSolutionSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* PARTE A: Amplificación del Problema (Fórmula Bresik) */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                ¿Te Suena Familiar?
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto mb-6"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {/* Problema 1 */}
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">
                      Pierdes Dinero Constantemente
                    </h3>
                    <p className="text-gray-700">
                      Entras tarde a las señales, te paraliza la duda, y cuando finalmente decides operar
                      el mercado ya se movió en tu contra. <span className="font-bold">El timing manual te está costando caro</span>.
                    </p>
                  </div>
                </div>
              </div>

              {/* Problema 2 */}
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">
                      Vives Pegado a la Pantalla
                    </h3>
                    <p className="text-gray-700">
                      Te quedás despierto hasta tarde monitoreando trades manualmente.
                      <span className="font-bold"> Tu trading te está quitando tiempo</span> de tu familia,
                      tu salud, y tu vida.
                    </p>
                  </div>
                </div>
              </div>

              {/* Problema 3 */}
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">
                      No Sabés en Quién Confiar
                    </h3>
                    <p className="text-gray-700">
                      Señales por WhatsApp sin track record, gurús que prometen el oro pero operan demo.
                      <span className="font-bold"> No tenés forma de verificar</span> si realmente funcionan.
                    </p>
                  </div>
                </div>
              </div>

              {/* Problema 4 */}
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">
                      Emociones Fuera de Control
                    </h3>
                    <p className="text-gray-700">
                      La codicia te hace mover el stop loss, el miedo te saca de trades ganadores.
                      <span className="font-bold"> Tu peor enemigo sos vos mismo</span>.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Story Bridge (Fórmula Bresik) */}
            <div className="bg-gradient-to-r from-gray-50 to-slate-100 p-8 rounded-2xl border border-gray-200">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                <span className="font-bold text-gray-900">Ese era yo hace 5 años.</span> Perdiendo dinero,
                durmiendo 4 horas, con mi pareja preguntándome si valía la pena tanto sacrificio.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Hasta que descubrí que <span className="font-bold text-[#c2a255]">no necesitaba ser más inteligente</span>.
                Solo necesitaba un sistema probado que operara por mí, <span className="font-bold text-gray-900">sin emociones,
                sin errores humanos, 24/7</span>.
              </p>
            </div>
          </div>

          {/* PARTE B: Presentación de la Solución (Fórmula Bresik) */}
          <div>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-50 to-blue-50
                border border-emerald-200 px-6 py-3 rounded-full mb-6">
                <Zap className="h-5 w-5 text-emerald-600" />
                <span className="text-sm font-bold text-emerald-700 uppercase tracking-wide">
                  La Solución Existe
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Presentando: <span className="bg-gradient-to-r from-[#c2a255] to-amber-600 bg-clip-text text-transparent">
                  GC Capital Copy Trading
                </span>
              </h2>

              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Un sistema completamente automatizado que copia mis trades en tiempo real
                directo a tu cuenta de M4Markets.
              </p>
            </div>

            {/* Beneficios de la Solución */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Beneficio 1 */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-full
                  flex items-center justify-center mb-6">
                  <TrendingUp className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Retornos Consistentes
                </h3>
                <p className="text-gray-600 mb-4">
                  Copias estrategias con <span className="font-bold text-emerald-600">92% de meses positivos</span>
                  desde 2019 y backtests de 10+ años.
                </p>
                <div className="flex items-center gap-2 text-sm text-emerald-600">
                  <CheckCircle2 className="w-4 h-4" />
                  <span className="font-semibold">Sistema probado con capital real</span>
                </div>
              </div>

              {/* Beneficio 2 */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full
                  flex items-center justify-center mb-6">
                  <Zap className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  100% Automatizado
                </h3>
                <p className="text-gray-600 mb-4">
                  Opera <span className="font-bold text-blue-600">24/7 sin tu intervención</span>.
                  Sin estar pegado a la pantalla, sin perder tiempo.
                </p>
                <div className="flex items-center gap-2 text-sm text-blue-600">
                  <CheckCircle2 className="w-4 h-4" />
                  <span className="font-semibold">Sin errores humanos ni emociones</span>
                </div>
              </div>

              {/* Beneficio 3 */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full
                  flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Bajo Capital Inicial
                </h3>
                <p className="text-gray-600 mb-4">
                  Empezá con <span className="font-bold text-amber-600">solo $200 USD</span>
                  y escalá a tu propio ritmo según tus resultados.
                </p>
                <div className="flex items-center gap-2 text-sm text-amber-600">
                  <CheckCircle2 className="w-4 h-4" />
                  <span className="font-semibold">Riesgo controlado y transparente</span>
                </div>
              </div>
            </div>

            {/* CTA Final */}
            <div className="text-center">
              <Button
                size="lg"
                className="px-10 py-7 bg-gradient-to-r from-[#c2a255] to-amber-600 text-white
                  font-bold rounded-lg hover:shadow-2xl hover:scale-105 transition-all duration-200 text-xl"
              >
                <TrendingUp className="mr-2 h-6 w-6" />
                Quiero Empezar a Copiar Trades
              </Button>
              <p className="text-sm text-gray-500 mt-4">
                ⚡ Solo 5 spots disponibles este mes • Pre-screening obligatorio
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
