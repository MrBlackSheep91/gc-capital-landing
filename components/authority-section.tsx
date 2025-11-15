"use client"

import { Badge, CheckCircle2, Trophy, Users } from "lucide-react"
import Image from "next/image"

export function AuthoritySection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              ¿Quién Soy Para Hablarte de Esto?
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#c2a255] to-amber-600 mx-auto mb-6"></div>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Image & Stats */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-amber-50 rounded-2xl p-8 text-center">
                {/* Placeholder for Gustavo's photo */}
                <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#c2a255] to-amber-600 flex items-center justify-center">
                  <Users className="w-24 h-24 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Gustavo Contreras
                </h3>
                <p className="text-blue-600 font-semibold mb-6">
                  Trader Profesional & Especialista en Copy Trading
                </p>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-4 mt-8">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-[#c2a255]">10+</p>
                    <p className="text-xs text-gray-600">Años Trading</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-[#c2a255]">150+</p>
                    <p className="text-xs text-gray-600">Traders Ayudados</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-[#c2a255]">$150k+</p>
                    <p className="text-xs text-gray-600">Retiros</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Authority Copy */}
            <div className="space-y-6">
              <div className="prose prose-lg">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Soy <span className="font-bold text-gray-900">Gustavo Contreras</span>, trader profesional con{" "}
                  <span className="font-bold text-[#c2a255]">más de 10 años</span> en mercados financieros y especialista en{" "}
                  <span className="font-bold text-gray-900">copy trading automatizado</span>.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  He ayudado a más de <span className="font-bold text-[#c2a255]">150 traders</span>{" "}
                  (desde principiantes hasta intermedios) a generar{" "}
                  <span className="font-bold text-gray-900">retornos consistentes</span> copiando estrategias probadas,{" "}
                  sin necesidad de pasar horas frente a la pantalla.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  Todo mi sistema fue construido con{" "}
                  <span className="font-bold text-gray-900">mi propio capital primero</span>.{" "}
                  Si funciona para mí con cientos de miles en juego,{" "}
                  <span className="font-bold text-[#c2a255]">funciona para ti</span>.
                </p>
              </div>

              {/* Proof Points */}
              <div className="space-y-4 pt-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">
                    <span className="font-semibold">Track record verificable:</span> Más de $150,000 USD en retiros confirmados
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">
                    <span className="font-semibold">Resultados reales:</span> 92% de meses positivos desde 2019
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">
                    <span className="font-semibold">Sistema probado:</span> Backtests de 10+ años en NASDAQ y Oro
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Trophy className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">
                    <span className="font-semibold">Transparencia total:</span> Acceso a todas las operaciones en tiempo real
                  </p>
                </div>
              </div>

              {/* Final Trust Badge */}
              <div className="bg-gradient-to-r from-blue-50 to-amber-50 p-6 rounded-xl border border-blue-200 mt-8">
                <p className="text-sm text-gray-700 leading-relaxed">
                  <span className="font-bold text-gray-900">"No soy un gurú de internet.</span>{" "}
                  Soy un trader con piel en el juego que opera con su propio dinero todos los días.{" "}
                  Lo que funciona para mí, <span className="font-bold text-[#c2a255]">funciona para mis clientes</span>."
                </p>
                <p className="text-xs text-gray-500 mt-2 italic">— Gustavo Contreras, Fundador GC Capital</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
