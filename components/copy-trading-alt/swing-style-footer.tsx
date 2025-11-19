"use client"

export function SwingStyleFooter() {
  return (
    <footer className="py-12 bg-white border-t border-gray-200">
      <div className="max-w-4xl mx-auto px-4 text-center">
        
        {/* Brand */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">GC CAPITAL</h3>
          <p className="text-gray-600">
            Sistema de Copy Trading creado por <strong>Gustavo Contreras</strong>
          </p>
        </div>

        {/* Disclaimer */}
        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <p className="text-xs text-gray-500 leading-relaxed">
            <strong>AVISO LEGAL:</strong> El trading de divisas y CFDs conlleva un alto nivel de riesgo y puede no ser adecuado para todos los inversores. 
            Existe la posibilidad de que puedas sufrir una pérdida de parte o la totalidad de tu inversión inicial. 
            Los resultados pasados no garantizan resultados futuros. Los resultados individuales varían y no se garantiza que logres 
            ganancias o pérdidas similares a las mostradas. Siempre consulta con un profesional financiero antes de tomar decisiones de inversión.
          </p>
        </div>

        {/* Copyright */}
        <div className="text-gray-400 text-sm">
          © 2024 GC Capital. Todos los derechos reservados.
        </div>

      </div>
    </footer>
  )
}
