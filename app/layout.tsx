import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sistema de Copy Trading Que Generó +$2.4M en Ganancias | Gustavo Contreras",
  description: "Accede al sistema exacto que uso para generar ganancias consistentes. Robot automático + mentoría personal + comunidad VIP.",
  keywords: "copy trading, robot trading, Gustavo Contreras, sistema automático, trading rentable, gc capital",
  authors: [{ name: "Gustavo Contreras - GC Capital" }],
  openGraph: {
    title: "Sistema de Copy Trading Que Generó +$2.4M en Ganancias",
    description: "El sistema exacto que uso para generar ganancias consistentes en trading.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
