import { Metadata } from 'next'
import { SwingStyleHero } from '@/components/copy-trading-alt/swing-style-hero'
import { SwingStyleBenefits } from '@/components/copy-trading-alt/swing-style-benefits'
import { SwingStyleComparison } from '@/components/copy-trading-alt/swing-style-comparison'
import { SwingStyleCTA } from '@/components/copy-trading-alt/swing-style-cta'
import { SwingStyleFooter } from '@/components/copy-trading-alt/swing-style-footer'

export const metadata: Metadata = {
  title: 'Sistema de Copy Trading Que Generó +$2.4M en Ganancias | Gustavo Contreras',
  description: 'Accede al sistema exacto que uso para generar ganancias consistentes. Robot automático + mentoría personal + comunidad VIP.',
  keywords: 'copy trading, robot trading, Gustavo Contreras, sistema automático, trading rentable',
  openGraph: {
    title: 'Sistema de Copy Trading Que Generó +$2.4M en Ganancias',
    description: 'El sistema exacto que uso para generar ganancias consistentes en trading.',
    type: 'website',
  },
}

export default function CopyTradingAltPage() {
  return (
    <main className="min-h-screen bg-white">
      <SwingStyleHero />
      <SwingStyleBenefits />
      <SwingStyleComparison />
      <SwingStyleCTA />
      <SwingStyleFooter />
    </main>
  )
}
