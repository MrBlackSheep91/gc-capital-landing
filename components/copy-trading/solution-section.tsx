"use client"

import { Bot, Users, GraduationCap, Shield, Zap, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CopyTradingSolution() {
  const features = [
    {
      icon: Bot,
      title: "Robot de Copy Trading",
      description: "Copia automáticamente todas mis operaciones en tu cuenta, 24/7, sin intervención humana.",
      benefits: ["Ejecución instantánea", "Sin emociones", "Nunca se cansa"]
    },
    {
      icon: Users,
      title: "Comunidad VIP (37 USD/mes)",
      description: "Acceso directo a mi comunidad privada en Skool con clases en vivo y análisis diarios.",
      benefits: ["Clases prácticas", "Análisis en vivo", "Soporte directo"]
    },
    {
      icon: GraduationCap,
      title: "Mentoría Incluida",
      description: "No solo copias, también aprendes. Te explico cada operación para que entiendas el por qué.",
      benefits: ["Educación real", "Casos prácticos", "Desarrollo de criterio"]
    },
    {
      icon: Shield,
      title: "Gestión de Riesgo",
      description: "Sistema probado de gestión de capital que protege tu cuenta de pérdidas catastróficas.",
      benefits: ["Stop loss automático", "Tamaño de posición calculado", "Drawdown controlado"]
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-[#211915] to-[#1a1a1a]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#c3a455]/20 border border-[#c3a455]/30 px-4 py-2 rounded-full mb-6">
            <Zap className="h-4 w-4 text-[#c3a455]" />
            <span className="text-sm font-medium text-[#c3a455]">LA SOLUCIÓN</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            El Sistema Completo que{" "}
            <span className="bg-gradient-to-r from-[#c3a455] to-[#f7f5be] bg-clip-text text-transparent">
              Cambia Todo
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            No es solo copy trading. Es un ecosistema completo que te transforma 
            de trader frustrado a trader rentable.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-[#2d2d2d]/30 backdrop-blur-sm border border-[#c3a455]/20 rounded-2xl p-8 hover:border-[#c3a455]/40 hover:bg-[#2d2d2d]/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-[#c3a455]/20 rounded-xl flex items-center justify-center">
                    <feature.icon className="h-7 w-7 text-[#c3a455]" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-[#c3a455] flex-shrink-0" />
                        <span className="text-sm text-gray-300">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* How it Works */}
        <div className="bg-gradient-to-r from-[#c3a455]/10 to-[#9b6829]/10 border border-[#c3a455]/20 rounded-3xl p-8 md:p-12 max-w-5xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
            ¿Cómo Funciona?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#c3a455] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#211915]">1</span>
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Te Registras</h4>
              <p className="text-gray-300 text-sm">
                Completas el formulario y configuras tu cuenta de trading.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#c3a455] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#211915]">2</span>
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Robot Se Activa</h4>
              <p className="text-gray-300 text-sm">
                El sistema comienza a copiar automáticamente mis operaciones.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#c3a455] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#211915]">3</span>
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Ves Resultados</h4>
              <p className="text-gray-300 text-sm">
                Mientras aprendes en la comunidad, tu cuenta genera ganancias.
              </p>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link href="/lead">
              <Button
                size="lg"
                className="px-8 py-4 bg-gradient-to-r from-[#c3a455] to-[#9b6829] text-[#211915] font-bold rounded-xl hover:shadow-xl hover:shadow-[#c3a455]/25 transition-all duration-300"
              >
                <Bot className="mr-2 h-5 w-5" />
                Quiero Empezar Ahora
              </Button>
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
}
