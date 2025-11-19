"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export function SwingStyleComparison() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        
        {/* Header */}
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
          Si esto te suena familiar, estás en el lugar correcto
        </h2>

        <div className="max-w-2xl mx-auto mb-12">
          <p className="text-lg text-gray-600 leading-relaxed">
            Has probado señales de Telegram, robots que "nunca fallan", cursos de $2,000... 
            pero sigues perdiendo dinero y tiempo. <strong className="text-gray-900">El problema no eres tú.</strong>
          </p>
        </div>

        {/* Problem Points */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-3xl mx-auto">
          <div className="text-left">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              ❌ Lo que NO funciona:
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Señales sin explicación</li>
              <li>• Robots sin soporte</li>
              <li>• Cursos teóricos sin práctica</li>
              <li>• Comunidades masivas sin atención</li>
            </ul>
          </div>
          <div className="text-left">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              ✅ Lo que SÍ funciona:
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Sistema automático probado</li>
              <li>• Mentoría personal directa</li>
              <li>• Comunidad VIP exclusiva</li>
              <li>• Soporte 24/7 de Gustavo</li>
            </ul>
          </div>
        </div>

        {/* Value Proposition */}
        <div className="bg-gray-50 rounded-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            La Diferencia: No Solo Copias, También Aprendes
          </h3>
          <p className="text-lg text-gray-600 mb-6">
            Mientras otros te dan un robot y te dejan solo, yo te explico cada operación, 
            te enseño a leer el mercado, y te acompaño hasta que seas rentable por ti mismo.
          </p>
          <div className="text-[#c3a455] font-semibold text-lg">
            Robot Automático + Mentoría Personal + Comunidad VIP = $37/mes
          </div>
        </div>

        {/* CTA */}
        <Link href="/lead">
          <Button
            size="lg"
            className="px-12 py-6 bg-[#c3a455] hover:bg-[#9b6829] text-white font-bold rounded-lg text-xl transition-all duration-300 hover:scale-105"
          >
            ACCEDER AL SISTEMA AHORA
          </Button>
        </Link>

      </div>
    </section>
  )
}
