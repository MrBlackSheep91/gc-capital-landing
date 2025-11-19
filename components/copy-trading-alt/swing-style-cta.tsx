"use client"

import { Button } from "@/components/ui/button"
import { Shield, Clock, Users } from "lucide-react"

export function SwingStyleCTA() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        
        {/* Urgency Header */}
        <div className="inline-flex items-center gap-2 bg-red-600 px-4 py-2 rounded-full mb-8">
          <Clock className="h-4 w-4" />
          <span className="font-medium text-sm">
            ACCESO LIMITADO - SOLO 50 CUPOS ESTE MES
          </span>
        </div>

        {/* Main CTA */}
        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
          ¿Listo para Dejar de Perder Dinero y Empezar a{" "}
          <span className="text-[#c3a455]">Generar Ganancias Reales?</span>
        </h2>

        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Únete a los +2,847 traders que ya están usando mi sistema para generar 
          resultados consistentes mientras aprenden.
        </p>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <Users className="h-8 w-8 text-[#c3a455] mx-auto mb-3" />
            <div className="font-semibold mb-2">+2,847 Traders Activos</div>
            <div className="text-gray-400 text-sm">Comunidad creciendo diariamente</div>
          </div>
          <div className="text-center">
            <Shield className="h-8 w-8 text-[#c3a455] mx-auto mb-3" />
            <div className="font-semibold mb-2">Garantía 30 Días</div>
            <div className="text-gray-400 text-sm">100% reembolso si no funciona</div>
          </div>
          <div className="text-center">
            <Clock className="h-8 w-8 text-[#c3a455] mx-auto mb-3" />
            <div className="font-semibold mb-2">Resultados Inmediatos</div>
            <div className="text-gray-400 text-sm">El robot empieza a trabajar hoy</div>
          </div>
        </div>

        {/* Main CTA Button */}
        <div className="mb-8">
          <Button
            size="lg"
            className="px-16 py-8 bg-[#c3a455] hover:bg-[#9b6829] text-white font-bold rounded-lg text-2xl transition-all duration-300 hover:scale-105"
            onClick={() => window.location.href = '/lead'}
          >
            ACCEDER AL SISTEMA AHORA
          </Button>
        </div>

        {/* Pricing */}
        <div className="bg-gray-800 rounded-lg p-6 max-w-md mx-auto mb-8">
          <div className="text-sm text-gray-400 mb-2">Acceso completo por solo</div>
          <div className="text-3xl font-bold text-[#c3a455] mb-2">$37/mes</div>
          <div className="text-gray-400 text-sm">
            Robot + Mentoría + Comunidad VIP + Soporte 24/7
          </div>
        </div>

        {/* Final Push */}
        <p className="text-gray-400 text-sm max-w-2xl mx-auto">
          <strong className="text-[#c3a455]">IMPORTANTE:</strong> Solo acepto un número limitado de traders por mes 
          para mantener la calidad del soporte personalizado. Los cupos se llenan rápido.
        </p>

      </div>
    </section>
  )
}
