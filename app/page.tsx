import { SorteoHero } from "@/components/sorteo/sorteo-hero"
import { SorteoPremios } from "@/components/sorteo/sorteo-premios"
import { SorteoEscasez } from "@/components/sorteo/sorteo-escasez"
import { SorteoProof } from "@/components/sorteo/sorteo-proof"
import { SorteoCTA } from "@/components/sorteo/sorteo-cta"
import { SorteoFooter } from "@/components/sorteo/sorteo-footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <SorteoHero />
      <SorteoPremios />
      <SorteoEscasez />
      <SorteoProof />
      <SorteoCTA />
      <SorteoFooter />
    </main>
  )
}
