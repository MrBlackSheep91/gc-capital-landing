import { Metadata } from 'next'
import { CopyTradingHero } from '@/components/copy-trading/hero-section'
import { CopyTradingProblem } from '@/components/copy-trading/problem-section'
import { CopyTradingSolution } from '@/components/copy-trading/solution-section'
import { CopyTradingProof } from '@/components/copy-trading/proof-section'
import { CopyTradingDifferentiators } from '@/components/copy-trading/differentiators-section'
import { CopyTradingTestimonials } from '@/components/copy-trading/testimonials-section'
import { CopyTradingPricing } from '@/components/copy-trading/pricing-section'
import { CopyTradingCTA } from '@/components/copy-trading/cta-section'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Copy Trading Automático - Gustavo Contreras | GC Capital',
  description: 'Copia automáticamente los trades de Gustavo Contreras. Robot de trading + mentoría + comunidad VIP. Resultados reales sin estar pegado a la pantalla.',
  keywords: 'copy trading, robot trading, Gustavo Contreras, trading automático, forex, inversiones',
  openGraph: {
    title: 'Copy Trading Automático - Gustavo Contreras',
    description: 'Copia automáticamente los trades de Gustavo Contreras. Robot + mentoría + comunidad.',
    type: 'website',
  },
}

export default function CopyTradingPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-[#211915] via-[#1a1a1a] to-[#211915]">
        <CopyTradingHero />
        <CopyTradingProblem />
        <CopyTradingSolution />
        <CopyTradingProof />
        <CopyTradingDifferentiators />
        <CopyTradingTestimonials />
        <CopyTradingPricing />
        <CopyTradingCTA />
      </main>
      <Footer />
    </>
  )
}
