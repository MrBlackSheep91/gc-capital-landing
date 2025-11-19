import { SwingStyleHero } from '@/components/copy-trading-alt/swing-style-hero'
import { SwingStyleBenefits } from '@/components/copy-trading-alt/swing-style-benefits'
import { SwingStyleComparison } from '@/components/copy-trading-alt/swing-style-comparison'
import { SwingStyleCTA } from '@/components/copy-trading-alt/swing-style-cta'
import { SwingStyleFooter } from '@/components/copy-trading-alt/swing-style-footer'

export default function Home() {
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
