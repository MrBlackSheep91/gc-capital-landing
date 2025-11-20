"use client"

export function SorteoFooter() {
  return (
    <footer className="py-12 bg-white border-t border-gray-200">
      <div className="max-w-4xl mx-auto px-4 text-center">
        
        {/* Brand - Estilo branding */}
        <div className="mb-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-2">
            GUSTAVO <span className="text-[#c3a455]">CONTRERAS</span>
          </h3>
          <p className="text-gray-600">
            Sorteo Exclusivo • $2,400 en Premios Reales
          </p>
        </div>

        {/* Final Urgency - Estilo branding */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-8">
          <div className="text-red-600 font-bold text-lg mb-2">
            🚨 RECORDATORIO FINAL:
          </div>
          <div className="text-gray-900 text-lg">
            El sorteo se realiza el <strong className="text-[#c3a455]">30 de Noviembre a las 8 PM</strong> en vivo.
            <br />
            Si no estás en el grupo, <strong className="text-red-600">no puedes participar.</strong>
          </div>
        </div>

        {/* Disclaimer - Estilo branding */}
        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <p className="text-xs text-gray-600 leading-relaxed">
            <strong>AVISO LEGAL:</strong> Este sorteo es completamente gratuito y real. Los premios serán entregados 
            a los ganadores seleccionados aleatoriamente entre los participantes del grupo de WhatsApp que cumplan 
            con los requisitos explicados dentro del grupo. El trading conlleva riesgos y los resultados pasados 
            no garantizan resultados futuros. Solo participan mayores de 18 años.
          </p>
        </div>

        {/* Copyright - Estilo branding */}
        <div className="text-gray-400 text-sm">
          © 2024 Gustavo Contreras. Todos los derechos reservados.
          <br />
          Sorteo válido hasta el 30 de Noviembre 2024 a las 8:00 PM (UTC-3)
        </div>

      </div>
    </footer>
  )
}
