"use client"

export function SorteoFooter() {
  return (
    <footer className="py-12 bg-black border-t border-gray-800">
      <div className="max-w-4xl mx-auto px-4 text-center">
        
        {/* Brand */}
        <div className="mb-8">
          <h3 className="text-3xl font-bold text-white mb-2">
            <span className="text-yellow-400">GUSTAVO</span> CONTRERAS
          </h3>
          <p className="text-gray-400">
            Sorteo Exclusivo • $2,400 en Premios Reales
          </p>
        </div>

        {/* Final Urgency */}
        <div className="bg-gradient-to-r from-red-900/50 to-orange-900/50 backdrop-blur-sm border border-red-600/30 rounded-xl p-6 mb-8">
          <div className="text-red-400 font-bold text-lg mb-2">
            🚨 RECORDATORIO FINAL:
          </div>
          <div className="text-white text-lg">
            El sorteo se realiza <strong className="text-yellow-400">mañana a las 8 PM</strong> en vivo.
            <br />
            Si no estás en el grupo, <strong className="text-red-400">no puedes participar.</strong>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="bg-gray-900/50 rounded-lg p-6 mb-8">
          <p className="text-xs text-gray-500 leading-relaxed">
            <strong>AVISO LEGAL:</strong> Este sorteo es completamente gratuito y real. Los premios serán entregados 
            a los ganadores seleccionados aleatoriamente entre los participantes del grupo de WhatsApp que cumplan 
            con los requisitos explicados dentro del grupo. El trading conlleva riesgos y los resultados pasados 
            no garantizan resultados futuros. Solo participan mayores de 18 años.
          </p>
        </div>

        {/* Copyright */}
        <div className="text-gray-500 text-sm">
          © 2024 Gustavo Contreras. Todos los derechos reservados.
          <br />
          Sorteo válido hasta el 20 de Noviembre 2024 a las 8:00 PM (UTC-3)
        </div>

      </div>
    </footer>
  )
}
