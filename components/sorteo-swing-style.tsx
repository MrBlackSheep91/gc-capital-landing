"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle, Clock, Users, Gift } from "lucide-react"

export function SorteoSwingStyle() {
  return (
    <div>
      {/* Hero Section - Estilo copy-trading-alt */}
      <section className="min-h-screen bg-white flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Live Badge */}
          <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 px-4 py-2 rounded-full mb-8">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-red-600 font-medium text-sm">
              SORTEO EXCLUSIVO - CUPOS LIMITADOS
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            Gana $200 USD, 1 Año VIP y{" "}
            <span className="text-[#c3a455]">
              Mentoría 1-1 Personal
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Únete al grupo exclusivo de WhatsApp donde voy a explicar 
            <strong className="text-gray-900"> paso a paso cómo participar</strong> en este sorteo especial.
          </p>

          {/* CTA Button */}
          <div className="mb-12">
            <Button
              size="lg"
              className="px-12 py-6 bg-[#c3a455] hover:bg-[#9b6829] text-white font-bold rounded-lg text-xl transition-all duration-300 hover:scale-105"
              onClick={() => window.location.href = '/lead-simple'}
            >
              ÚNETE AL GRUPO DE WHATSAPP
            </Button>
          </div>

          {/* Social Proof */}
          <div className="flex flex-wrap justify-center gap-8 text-gray-600 mb-16">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-[#c3a455]" />
              <span className="font-semibold">+847 Participantes</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-[#c3a455]" />
              <span className="font-semibold">24h Restantes</span>
            </div>
            <div className="flex items-center gap-2">
              <Gift className="h-5 w-5 text-[#c3a455]" />
              <span className="font-semibold">$2,400 en Premios</span>
            </div>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            
            {/* DÓNDE */}
            <div className="text-center">
              <div className="text-sm font-bold text-[#c3a455] mb-2">DÓNDE</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Grupo WhatsApp</div>
              <div className="text-gray-600 text-sm">
                Los pasos se explican SOLO dentro del grupo exclusivo.
              </div>
            </div>

            {/* CUÁNDO */}
            <div className="text-center">
              <div className="text-sm font-bold text-[#c3a455] mb-2">CUÁNDO</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">30 de Noviembre</div>
              <div className="text-gray-600 text-sm">
                El sorteo se realiza el 30 de Noviembre a las 8 PM. No habrá segunda oportunidad.
              </div>
            </div>

            {/* QUÉ INCLUYE */}
            <div className="text-center">
              <div className="text-sm font-bold text-[#c3a455] mb-2">QUÉ GANAS</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">$2,400 Total</div>
              <div className="text-gray-600 text-sm">
                $200 USD + 1 Año VIP + Mentoría 1-1 conmigo.
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Benefits Section - Estilo copy-trading-alt */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Entre todos los que estén dentro del grupo voy a regalar:
            </h2>
          </div>

          {/* Benefits List */}
          <div className="space-y-6 mb-16">
            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-[#c3a455] flex-shrink-0 mt-1" />
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong className="text-gray-900">200 USD</strong> + acceso a mi Copytrading Gustavo Contreras
              </p>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-[#c3a455] flex-shrink-0 mt-1" />
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong className="text-gray-900">1 año completo</strong> de acceso al Curso VIP
              </p>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-[#c3a455] flex-shrink-0 mt-1" />
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong className="text-gray-900">Mentoría 1-1</strong> conmigo con seguimiento personalizado
              </p>
            </div>
          </div>

          {/* How to Participate */}
          <div className="bg-white rounded-lg p-8 border border-gray-200 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              CÓMO PARTICIPAR
            </h3>
            <div className="text-center">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Los pasos para entrar al sorteo se van a explicar <strong className="text-gray-900">solo dentro del grupo de WhatsApp</strong>. 
                Si no estás dentro, no participas.
              </p>
              <div className="bg-[#c3a455]/10 border border-[#c3a455]/20 rounded-lg p-6">
                <p className="text-[#c3a455] font-semibold text-lg">
                  ⚠️ Cupos limitados. Ahí voy a explicar todos los pasos.
                </p>
              </div>
            </div>
          </div>

          {/* Final CTA - Botón a lead-simple */}
          <div className="text-center">
            <Button
              size="lg"
              className="px-12 py-6 bg-[#c3a455] hover:bg-[#9b6829] text-white font-bold rounded-lg text-xl transition-all duration-300 hover:scale-105"
              onClick={() => window.location.href = '/lead-simple'}
            >
              ÚNETE AL GRUPO DE WHATSAPP
            </Button>
            <div className="mt-4 text-gray-600">
              Los pasos se explican SOLO dentro del grupo
            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          
          {/* Brand */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">GUSTAVO CONTRERAS</h3>
            <p className="text-gray-600">
              Sorteo Exclusivo • $2,400 en Premios Reales
            </p>
          </div>

          {/* Disclaimer */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <p className="text-xs text-gray-500 leading-relaxed">
              <strong>AVISO LEGAL:</strong> Este sorteo es completamente gratuito y real. Los premios serán entregados 
              a los ganadores seleccionados aleatoriamente entre los participantes del grupo de WhatsApp que cumplan 
              con los requisitos explicados dentro del grupo. Solo participan mayores de 18 años.
            </p>
          </div>

          {/* Copyright */}
          <div className="text-gray-400 text-sm">
            © 2024 Gustavo Contreras. Todos los derechos reservados.
            <br />
            Sorteo válido hasta el 30 de Noviembre 2024 a las 8:00 PM (UTC-3)
          </div>

        </div>
      </footer>

    </div>
  )
}
