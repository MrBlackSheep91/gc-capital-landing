"use client"

import { Button } from "@/components/ui/button"
import { TrendingUp } from "lucide-react"

export function Navbar() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-[#c2a255] to-amber-600 rounded-lg flex items-center justify-center">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-[#c2a255] to-amber-600 bg-clip-text text-transparent">
              GC Capital
            </span>
          </div>

          {/* Nav Links - Desktop */}
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection('proof')}
              className="text-gray-600 hover:text-[#c2a255] transition-colors font-medium"
            >
              Resultados
            </button>
            <button
              onClick={() => scrollToSection('bots')}
              className="text-gray-600 hover:text-[#c2a255] transition-colors font-medium"
            >
              Estrategias
            </button>
            <button
              onClick={() => scrollToSection('calculator')}
              className="text-gray-600 hover:text-[#c2a255] transition-colors font-medium"
            >
              Calculadora
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="text-gray-600 hover:text-[#c2a255] transition-colors font-medium"
            >
              Cómo Funciona
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-gray-600 hover:text-[#c2a255] transition-colors font-medium"
            >
              FAQ
            </button>
            {/* Feedback Link (Internal - Solo para Gustavo) */}
            <a
              href="/feedback"
              className="text-purple-600 hover:text-purple-700 transition-colors font-medium text-sm"
              title="Formulario de Sugerencias"
            >
              💬 Feedback
            </a>
          </div>

          {/* CTA */}
          <Button
            onClick={() => scrollToSection('qualification')}
            className="bg-gradient-to-r from-[#c2a255] to-amber-600 text-white hover:shadow-lg transition-shadow"
          >
            Empezar Ahora
          </Button>
        </div>
      </div>
    </nav>
  )
}
