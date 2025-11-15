"use client"

import { CheckCircle2, DollarSign, Users, Zap, LineChart, Shield, MessageCircle, BookOpen, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ValueStackSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Todo Lo Que Incluye Tu Acceso
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#c2a255] to-amber-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              No es solo copy trading. Es un ecosistema completo para <span className="font-bold text-gray-900">maximizar tus retornos</span> con el menor riesgo posible.
            </p>
          </div>

          {/* Value Stack Grid */}
          <div className="space-y-6 mb-12">
            {/* Item 1: Copy Trading Automatizado */}
            <div className="bg-gradient-to-r from-blue-50 to-slate-50 p-8 rounded-2xl border-2 border-blue-200 hover:border-blue-400 transition-all duration-200">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-2xl font-bold text-gray-900">
                      Copy Trading Automatizado NASDAQ
                    </h3>
                    <span className="text-2xl font-bold text-blue-600">$97/mes</span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Sistema completamente automatizado que replica mis trades en tiempo real en tu cuenta de M4Markets.
                    <span className="font-bold text-gray-900"> Sin intervención manual, sin errores humanos, 24/7</span>.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-blue-600">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="font-semibold">92% de meses positivos desde 2019</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Item 2: Acceso a Comunidad Privada */}
            <div className="bg-gradient-to-r from-emerald-50 to-slate-50 p-8 rounded-2xl border-2 border-emerald-200 hover:border-emerald-400 transition-all duration-200">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-2xl font-bold text-gray-900">
                      Comunidad Privada de Traders VIP
                    </h3>
                    <span className="text-2xl font-bold text-emerald-600">$47/mes</span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Grupo exclusivo en Telegram con <span className="font-bold text-gray-900">acceso directo a mí y otros 150+ traders</span>.
                    Compartimos análisis, estrategias, y resultados en tiempo real.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-emerald-600">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="font-semibold">Respuestas garantizadas en menos de 24 horas</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Item 3: Dashboard con Estadísticas */}
            <div className="bg-gradient-to-r from-purple-50 to-slate-50 p-8 rounded-2xl border-2 border-purple-200 hover:border-purple-400 transition-all duration-200">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <LineChart className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-2xl font-bold text-gray-900">
                      Dashboard con Estadísticas en Tiempo Real
                    </h3>
                    <span className="text-2xl font-bold text-purple-600">$27/mes</span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Acceso a un panel completo donde ves <span className="font-bold text-gray-900">todas las operaciones, drawdowns, equity curves, y métricas clave</span>.
                    100% transparencia sobre lo que está pasando con tu capital.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-purple-600">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="font-semibold">Actualizaciones cada 5 minutos</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Item 4: Soporte Técnico */}
            <div className="bg-gradient-to-r from-amber-50 to-slate-50 p-8 rounded-2xl border-2 border-amber-200 hover:border-amber-400 transition-all duration-200">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-2xl font-bold text-gray-900">
                      Soporte Técnico en Español
                    </h3>
                    <span className="text-2xl font-bold text-amber-600">$17/mes</span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Mi equipo te ayuda con <span className="font-bold text-gray-900">configuración, dudas técnicas, y cualquier problema</span>.
                    Respuestas rápidas en WhatsApp y Telegram.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-amber-600">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="font-semibold">Tiempo de respuesta promedio: 2 horas</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Item 5: Actualizaciones Continuas */}
            <div className="bg-gradient-to-r from-indigo-50 to-slate-50 p-8 rounded-2xl border-2 border-indigo-200 hover:border-indigo-400 transition-all duration-200">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-2xl font-bold text-gray-900">
                      Actualizaciones y Mejoras Continuas
                    </h3>
                    <span className="text-2xl font-bold text-indigo-600">$12/mes</span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    <span className="font-bold text-gray-900">Todos los upgrades incluidos</span>.
                    Cuando optimizo estrategias, agrego nuevos bots, o mejoro el sistema, lo recibís automáticamente sin pagar más.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-indigo-600">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="font-semibold">Última actualización: Enero 2025</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Item 6: Garantía de Satisfacción */}
            <div className="bg-gradient-to-r from-green-50 to-slate-50 p-8 rounded-2xl border-2 border-green-200 hover:border-green-400 transition-all duration-200">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-2xl font-bold text-gray-900">
                      Garantía de Satisfacción 30 Días
                    </h3>
                    <span className="text-2xl font-bold text-green-600">INVALUABLE</span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Si en el primer mes no ves resultados o no te convence el sistema,
                    <span className="font-bold text-gray-900"> te devuelvo el 100% de tu dinero, sin preguntas</span>.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-green-600">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="font-semibold">Cero riesgo para ti</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Value Breakdown */}
          <div className="bg-gradient-to-br from-slate-900 to-gray-800 p-10 rounded-3xl text-white mb-12">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-3xl font-bold mb-8 text-center">Valor Total del Paquete</h3>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center text-lg">
                  <span>Copy Trading Automatizado NASDAQ</span>
                  <span className="font-bold">$97/mes</span>
                </div>
                <div className="flex justify-between items-center text-lg">
                  <span>Comunidad Privada VIP</span>
                  <span className="font-bold">$47/mes</span>
                </div>
                <div className="flex justify-between items-center text-lg">
                  <span>Dashboard con Estadísticas</span>
                  <span className="font-bold">$27/mes</span>
                </div>
                <div className="flex justify-between items-center text-lg">
                  <span>Soporte Técnico</span>
                  <span className="font-bold">$17/mes</span>
                </div>
                <div className="flex justify-between items-center text-lg">
                  <span>Actualizaciones Continuas</span>
                  <span className="font-bold">$12/mes</span>
                </div>
                <div className="flex justify-between items-center text-lg border-b border-gray-600 pb-3">
                  <span>Garantía 30 Días</span>
                  <span className="font-bold">INVALUABLE</span>
                </div>

                <div className="flex justify-between items-center text-2xl font-bold pt-4">
                  <span>VALOR TOTAL:</span>
                  <span className="text-red-400 line-through">$200/mes</span>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#c2a255] to-amber-600 p-6 rounded-2xl text-center">
                <p className="text-sm uppercase tracking-wide mb-2 opacity-90">Tu Inversión Hoy</p>
                <p className="text-5xl font-black mb-2">$37/mes</p>
                <p className="text-sm opacity-90">Membresía mensual • Cancela cuando quieras • Sin permanencia</p>
              </div>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-400">
                  <span className="font-bold text-white">Ahorras $163 USD/mes</span> (81% de descuento) •
                  Precio de lanzamiento limitado
                </p>
              </div>
            </div>
          </div>

          {/* CTA Final */}
          <div className="text-center">
            <Button
              size="lg"
              className="px-12 py-8 bg-gradient-to-r from-[#c2a255] to-amber-600 text-white
                font-bold rounded-lg hover:shadow-2xl hover:scale-105 transition-all duration-200 text-2xl"
            >
              <DollarSign className="mr-2 h-7 w-7" />
              Quiero Acceso Completo Ahora
            </Button>
            <p className="text-sm text-gray-500 mt-4">
              ⚡ Solo <span className="font-bold text-[#c2a255]">5 spots disponibles</span> este mes •
              <span className="font-bold"> Garantía 30 días</span> sin preguntas
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
