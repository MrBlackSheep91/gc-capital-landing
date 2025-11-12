"use client"

import { Badge } from "@/components/ui/badge"
import { Shield, Mail, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-black text-white py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Main Footer */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-[#c2a255] to-amber-400 bg-clip-text text-transparent">
              GC Capital Global
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Copy Trading profesional con más de 10 años de experiencia en mercados financieros.
            </p>
            <Badge className="bg-emerald-600 text-white border-emerald-500">
              <Shield className="h-3 w-3 mr-1" />
              92% Meses Positivos
            </Badge>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-3">
              <a
                href="mailto:info@gccapital.com"
                className="flex items-center gap-2 text-gray-400 hover:text-[#c2a255] transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span className="text-sm">info@gccapital.com</span>
              </a>
              <a
                href="https://wa.me/59899123456"
                className="flex items-center gap-2 text-gray-400 hover:text-[#c2a255] transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                <span className="text-sm">WhatsApp Directo</span>
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Información</h4>
            <div className="space-y-2">
              <p className="text-gray-400 text-sm">
                <strong className="text-white">Gustavo Contreras</strong>
                <br />
                Trader Profesional
              </p>
              <p className="text-gray-400 text-sm">
                10+ Años de Experiencia
                <br />
                +$150k Retiros Confirmados
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom */}
        <div className="text-center">
          <p className="text-xs text-gray-500 mb-4">
            <strong>Advertencia de Riesgo:</strong> El trading de Forex y CFDs conlleva un alto nivel de riesgo.
            Los resultados pasados no garantizan resultados futuros. Solo invertí dinero que puedas permitirte perder.
          </p>
          <p className="text-xs text-gray-600">
            © 2025 GC Capital Global. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
