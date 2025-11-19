import { Metadata } from 'next'
import { SorteoSwingStyle } from '@/components/sorteo-swing-style'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'SORTEO EXCLUSIVO: Gana $200 USD + 1 Año VIP + Mentoría 1-1 | Gustavo Contreras',
  description: 'Únete al grupo exclusivo de WhatsApp donde explico paso a paso cómo participar en este sorteo especial. Cupos limitados.',
  keywords: 'sorteo, Gustavo Contreras, 200 USD, mentoría, copy trading, curso VIP, WhatsApp exclusivo',
  openGraph: {
    title: 'SORTEO EXCLUSIVO: Gana $200 USD + 1 Año VIP + Mentoría 1-1',
    description: 'Únete al grupo exclusivo de WhatsApp donde explico paso a paso cómo participar en este sorteo especial.',
    type: 'website',
  },
}

export default function SorteoAltPage() {
  return (
    <main className="min-h-screen bg-white">
      <SorteoSwingStyle />
    </main>
  )
}
