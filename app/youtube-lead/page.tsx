import { Suspense } from "react"
import { YouTubeLeadFormV2 } from "@/components/youtube-lead-form-v2"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { TrendingUp, CheckCircle2, Zap } from "lucide-react"

export const metadata = {
  title: "Aplicar para Copy Trading - GC Capital",
  description: "Aplica ahora para copiar trades automatizados y generar retornos consistentes.",
}

export default function YouTubeLeadPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-blue-50 flex flex-col">
      <Navbar />

      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 px-6 py-3 rounded-full mb-6">
              <Zap className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">
                Aplicación Rápida - 2 Minutos
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Aplica Ahora para{" "}
              <span className="bg-gradient-to-r from-[#c2a255] to-amber-600 bg-clip-text text-transparent">
                Copiar Trades Automáticos
              </span>
            </h1>

            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Completa este formulario rápido y Gustavo revisará tu perfil en las próximas 24-48 horas.
              Si calificas, te contactaremos por WhatsApp.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Left: Benefits */}
            <div className="md:col-span-1 space-y-6">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">¿Por Qué Aplicar?</h3>
              </div>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">100% Automatizado</h4>
                    <p className="text-sm text-gray-600">
                      Los bots operan 24/7 sin que hagas nada
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Risk Management</h4>
                    <p className="text-sm text-gray-600">
                      Drawdown máximo controlado y diversificado
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Retornos Consistentes</h4>
                    <p className="text-sm text-gray-600">
                      8-15% mensual promedio (backtestado 10+ años)
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Soporte 24/7</h4>
                    <p className="text-sm text-gray-600">
                      Gustavo y su equipo disponibles en español
                    </p>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="bg-white rounded-lg border border-gray-200 p-6 mt-8">
                <div className="text-center mb-4">
                  <TrendingUp className="h-8 w-8 text-[#c2a255] mx-auto mb-2" />
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#c2a255] mb-1">92%</div>
                  <p className="text-sm text-gray-600">Win Rate Promedio</p>
                </div>
                <div className="border-t border-gray-200 mt-4 pt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900 mb-1">0.4%</div>
                    <p className="text-sm text-gray-600">Max Drawdown</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="md:col-span-2">
              <div className="bg-white rounded-lg border border-gray-200 shadow-lg p-8">
                <Suspense fallback={<p className="text-center text-sm text-gray-500">Cargando formulario...</p>}>
                  <YouTubeLeadFormV2 />
                </Suspense>
              </div>

              {/* FAQ */}
              <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-4">Preguntas Frecuentes</h4>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-medium text-gray-900">¿Cuál es el capital mínimo?</p>
                    <p className="text-gray-600">$500 USD mínimo para empezar.</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">¿Cuánto tarda en activarse?</p>
                    <p className="text-gray-600">24-48 horas después de la aprobación.</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">¿Puedo retirar dinero?</p>
                    <p className="text-gray-600">Sí, retiros libres desde el primer día.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
