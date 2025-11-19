"use client"

import { Bot, ArrowRight, Clock, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CopyTradingCTA() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#1a1a1a] to-[#211915] relative overflow-hidden">
      
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-96 h-96 bg-[#c3a455]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#9b6829]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Urgency Header */}
          <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-500/30 px-4 py-2 rounded-full mb-8">
            <Clock className="h-4 w-4 text-red-400" />
            <span className="text-sm font-medium text-red-400">ÚLTIMAS 24 HORAS</span>
          </div>

          {/* Main CTA */}
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            ¿Listo para Dejar de{" "}
            <span className="text-red-400">Perder Dinero</span>{" "}
            y Empezar a{" "}
            <span className="bg-gradient-to-r from-[#c3a455] to-[#f7f5be] bg-clip-text text-transparent">
              Generar Ganancias?
            </span>
          </h2>

          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Únete a los +2,847 traders que ya están copiando mis operaciones automáticamente 
            y generando resultados reales mientras aprenden.
          </p>

          {/* Social Proof */}
          <div className="flex flex-wrap justify-center gap-6 mb-10 text-gray-300">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-[#c3a455]" />
              <span>+2,847 traders activos</span>
            </div>
            <div className="flex items-center gap-2">
              <Bot className="h-5 w-5 text-[#c3a455]" />
              <span>Robot funcionando 24/7</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-[#c3a455]" />
              <span>Resultados desde el día 1</span>
            </div>
          </div>

          {/* Main CTA Button */}
          <div className="mb-8">
            <Link href="/lead">
              <Button
                size="lg"
                className="px-12 py-6 bg-gradient-to-r from-[#c3a455] to-[#9b6829] text-[#211915] font-bold rounded-xl hover:shadow-2xl hover:shadow-[#c3a455]/25 hover:scale-105 transition-all duration-300 text-xl"
              >
                <Bot className="mr-3 h-6 w-6" />
                Activar Copy Trading Ahora
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </Link>
          </div>

          {/* Guarantee */}
          <div className="bg-[#2d2d2d]/30 border border-[#c3a455]/20 rounded-2xl p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-bold text-white mb-3">
              ✅ Garantía de 30 días
            </h3>
            <p className="text-gray-300 text-sm">
              Si no ves resultados positivos en los primeros 30 días, 
              te devolvemos el 100% de tu dinero. Sin preguntas.
            </p>
          </div>

          {/* Final Push */}
          <div className="mt-12">
            <p className="text-gray-400 text-sm max-w-2xl mx-auto">
              <strong className="text-[#c3a455]">IMPORTANTE:</strong> Solo acepto un número limitado de traders por mes 
              para mantener la calidad del soporte. Los cupos se llenan rápido.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
