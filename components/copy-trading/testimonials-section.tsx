"use client"

import { Star, Quote } from "lucide-react"

export function CopyTradingTestimonials() {
  const testimonials = [
    {
      name: "Carlos M.",
      location: "México",
      result: "+$4,200 en 2 meses",
      text: "Después de perder dinero con otros robots, encontré a Gustavo. Su sistema realmente funciona y él responde personalmente todas mis dudas.",
      rating: 5
    },
    {
      name: "Ana L.",
      location: "Argentina", 
      result: "+$2,800 en 6 semanas",
      text: "Lo que más me gusta es que no solo copio trades, también aprendo. La comunidad VIP vale oro, Gustavo explica cada operación.",
      rating: 5
    },
    {
      name: "Miguel R.",
      location: "Colombia",
      result: "+$6,100 en 3 meses", 
      text: "Probé M4Markets y otros brokers, pero ninguno te da el soporte personal que da Gustavo. Es como tener un mentor 24/7.",
      rating: 5
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-[#1a1a1a] to-[#211915]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 px-4 py-2 rounded-full mb-6">
            <Quote className="h-4 w-4 text-green-400" />
            <span className="text-sm font-medium text-green-400">TESTIMONIOS REALES</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Lo Que Dicen Nuestros{" "}
            <span className="bg-gradient-to-r from-[#c3a455] to-[#f7f5be] bg-clip-text text-transparent">
              Traders
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Estos son algunos de los resultados reales de personas que decidieron confiar en nuestro sistema.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-[#2d2d2d]/30 backdrop-blur-sm border border-[#c3a455]/20 rounded-2xl p-6 hover:border-[#c3a455]/40 transition-all duration-300"
            >
              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-[#c3a455] fill-current" />
                ))}
              </div>

              {/* Quote */}
              <Quote className="h-8 w-8 text-[#c3a455]/50 mb-4" />
              
              {/* Testimonial Text */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Result */}
              <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3 mb-4">
                <div className="text-green-400 font-bold text-lg">
                  {testimonial.result}
                </div>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#c3a455]/20 rounded-full flex items-center justify-center">
                  <span className="text-[#c3a455] font-bold">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="text-white font-semibold">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12">
          <p className="text-gray-400 text-sm max-w-2xl mx-auto">
            * Los testimonios son de clientes reales. Los resultados pueden variar según el capital inicial, 
            gestión de riesgo y condiciones del mercado.
          </p>
        </div>

      </div>
    </section>
  )
}
