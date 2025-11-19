"use client"

import { Check, Crown, Users, Bot } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CopyTradingPricing() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#211915] to-[#1a1a1a]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#c3a455]/20 border border-[#c3a455]/30 px-4 py-2 rounded-full mb-6">
            <Crown className="h-4 w-4 text-[#c3a455]" />
            <span className="text-sm font-medium text-[#c3a455]">ACCESO COMPLETO</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Todo Incluido por{" "}
            <span className="bg-gradient-to-r from-[#c3a455] to-[#f7f5be] bg-clip-text text-transparent">
              $37/mes
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Menos de $1.25 al día por acceso completo al robot, comunidad VIP y mentoría personal.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-b from-[#c3a455]/10 to-[#9b6829]/10 border-2 border-[#c3a455]/30 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            
            {/* Background Effect */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#c3a455]/20 rounded-full blur-3xl"></div>
            
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-[#c3a455]/20 px-4 py-2 rounded-full mb-4">
                <Crown className="h-5 w-5 text-[#c3a455]" />
                <span className="text-[#c3a455] font-semibold">PLAN COMPLETO</span>
              </div>
              <div className="text-6xl font-bold text-white mb-2">$37</div>
              <div className="text-gray-300">por mes • facturado mensualmente</div>
            </div>

            {/* Features */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-[#c3a455] rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="h-4 w-4 text-[#211915]" />
                </div>
                <div className="flex items-center gap-2">
                  <Bot className="h-5 w-5 text-[#c3a455]" />
                  <span className="text-white font-semibold">Robot de Copy Trading 24/7</span>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-[#c3a455] rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="h-4 w-4 text-[#211915]" />
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-[#c3a455]" />
                  <span className="text-white font-semibold">Comunidad VIP en Skool</span>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-[#c3a455] rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="h-4 w-4 text-[#211915]" />
                </div>
                <span className="text-white">Clases en vivo semanales</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-[#c3a455] rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="h-4 w-4 text-[#211915]" />
                </div>
                <span className="text-white">Análisis de mercado diarios</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-[#c3a455] rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="h-4 w-4 text-[#211915]" />
                </div>
                <span className="text-white">Soporte directo de Gustavo</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-[#c3a455] rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="h-4 w-4 text-[#211915]" />
                </div>
                <span className="text-white">Acceso a cuentas de fondeo</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-[#c3a455] rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="h-4 w-4 text-[#211915]" />
                </div>
                <span className="text-white">Psicología de trading aplicada</span>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Link href="/lead">
                <Button
                  size="lg"
                  className="w-full px-8 py-6 bg-gradient-to-r from-[#c3a455] to-[#9b6829] text-[#211915] font-bold rounded-xl hover:shadow-xl hover:shadow-[#c3a455]/25 transition-all duration-300 text-lg"
                >
                  <Bot className="mr-2 h-5 w-5" />
                  Comenzar Ahora - $37/mes
                </Button>
              </Link>
              <p className="text-gray-400 text-sm mt-4">
                Cancela cuando quieras • Sin compromisos a largo plazo
              </p>
            </div>
          </div>
        </div>

        {/* Value Comparison */}
        <div className="text-center mt-16">
          <div className="bg-[#2d2d2d]/30 border border-[#c3a455]/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6">
              Comparado con la competencia:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-red-400 font-bold text-lg mb-2">Otros robots</div>
                <div className="text-gray-300">$200-500/mes</div>
                <div className="text-gray-400 text-sm">Solo robot, sin soporte</div>
              </div>
              <div>
                <div className="text-red-400 font-bold text-lg mb-2">Mentorías 1:1</div>
                <div className="text-gray-300">$2,000-5,000</div>
                <div className="text-gray-400 text-sm">Sin ejecución automática</div>
              </div>
              <div className="border-2 border-[#c3a455] rounded-lg p-4">
                <div className="text-[#c3a455] font-bold text-lg mb-2">GC Capital</div>
                <div className="text-white font-bold">$37/mes</div>
                <div className="text-[#c3a455] text-sm">Robot + Mentoría + Comunidad</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
