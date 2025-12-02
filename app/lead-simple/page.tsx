import { Metadata } from 'next'
import { Suspense } from 'react'
import { SorteoFormSimple } from '@/components/sorteo/sorteo-form-simple'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'Únete al Sorteo Exclusivo | Gustavo Contreras',
  description: 'Completa este breve formulario para acceder al grupo exclusivo de WhatsApp donde se explican los pasos para participar en el sorteo.',
  keywords: 'sorteo, registro rápido, WhatsApp, Gustavo Contreras',
  openGraph: {
    title: 'Únete al Sorteo Exclusivo | Gustavo Contreras',
    description: 'Completa este breve formulario para acceder al grupo exclusivo',
    type: 'website',
  },
}

export default function LeadSimplePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center px-4 py-20">
      <div className="max-w-2xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 px-4 py-2 rounded-full mb-6">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-red-600 font-medium text-sm">
              ÚLTIMO DÍA - CUPOS LIMITADOS
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            ¡Estás a <span className="text-[#c3a455]">Un Paso</span> del Sorteo!
          </h1>
          
          <p className="text-xl text-gray-600 mb-8">
            Completa estos 3 datos para acceder al grupo exclusivo de WhatsApp 
            donde se explican <strong className="text-gray-900">todos los pasos para participar</strong>.
          </p>
        </div>

        {/* Formulario Simple */}
        <Suspense fallback={
          <div className="flex items-center justify-center p-8">
            <div className="text-gray-500">Cargando formulario...</div>
          </div>
        }>
          <SorteoFormSimple />
        </Suspense>

        {/* Beneficios */}
        <div className="mt-12 bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">
            🎁 Al unirte al grupo tendrás acceso a:
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-[#c3a455] text-xl">✓</span>
              <span className="text-gray-700">Pasos exactos para participar en el sorteo de $2,400</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#c3a455] text-xl">✓</span>
              <span className="text-gray-700">Contenido exclusivo que solo comparto en el grupo</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#c3a455] text-xl">✓</span>
              <span className="text-gray-700">Conexión directa conmigo y la comunidad VIP</span>
            </li>
          </ul>
        </div>

        {/* Footer Info */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>🔒 Tus datos están seguros y protegidos</p>
          <p className="mt-2">⚡ Acceso inmediato al grupo tras completar el formulario</p>
        </div>

      </div>
    </main>
  )
}
