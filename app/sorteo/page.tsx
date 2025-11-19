import { Metadata } from 'next'
import { SorteoHero } from '@/components/sorteo/sorteo-hero'
import { SorteoPremios } from '@/components/sorteo/sorteo-premios'
import { SorteoEscasez } from '@/components/sorteo/sorteo-escasez'
import { SorteoProof } from '@/components/sorteo/sorteo-proof'
import { SorteoCTA } from '@/components/sorteo/sorteo-cta'
import { SorteoFooter } from '@/components/sorteo/sorteo-footer'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'SORTEO EXCLUSIVO: Gana $200 USD + 1 Año VIP + Mentoría 1-1 | Gustavo Contreras',
  description: '🔥 ÚLTIMO DÍA para entrar al sorteo más grande del año. $200 USD reales + acceso VIP completo + mentoría personal conmigo. Solo para miembros del grupo exclusivo.',
  keywords: 'sorteo, Gustavo Contreras, 200 USD, mentoría, copy trading, curso VIP, WhatsApp exclusivo',
  openGraph: {
    title: 'SORTEO EXCLUSIVO: Gana $200 USD + 1 Año VIP + Mentoría 1-1',
    description: '🔥 ÚLTIMO DÍA para entrar al sorteo más grande del año. Solo para miembros del grupo exclusivo.',
    type: 'website',
  },
}

export default function SorteoPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-red-900 via-red-800 to-black">
      <SorteoHero />
      <SorteoPremios />
      <SorteoEscasez />
      <SorteoProof />
      <SorteoCTA />
      <SorteoFooter />
    </main>
  )
}
