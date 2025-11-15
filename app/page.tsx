import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AuthoritySection } from "@/components/authority-section"
import { ProblemSolutionSection } from "@/components/problem-solution-section"
import { ProofSection } from "@/components/proof-section"
import { ValueStackSection } from "@/components/value-stack-section"
import { BotsSection } from "@/components/bots-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { CalculatorSection } from "@/components/calculator-section"
import { FAQSection } from "@/components/faq-section"
import { QualificationForm } from "@/components/qualification-form"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
        <HeroSection />
        <div id="authority">
          <AuthoritySection />
        </div>
        <div id="problem-solution">
          <ProblemSolutionSection />
        </div>
        <div id="proof">
          <ProofSection />
        </div>
        <div id="value-stack">
          <ValueStackSection />
        </div>
        <div id="bots">
          <BotsSection />
        </div>
        <div id="how-it-works">
          <HowItWorksSection />
        </div>
        <div id="calculator">
          <CalculatorSection />
        </div>
        <div id="faq">
          <FAQSection />
        </div>
        <div id="qualification">
          <QualificationForm />
        </div>
      </main>
      <Footer />
    </>
  )
}
