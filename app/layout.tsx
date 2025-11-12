import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "GC Capital - Copy Trading Dual Strategy | Nasdaq & Oro",
  description: "Haz crecer tu capital en piloto automático con los mismos bots que generan +10% mensual para traders profesionales. Estrategias probadas en Nasdaq y Oro.",
  keywords: "copy trading, bot trading, nasdaq, oro, xau, trading automatizado, GC Capital, Gustavo Contreras",
  authors: [{ name: "GC Capital Global" }],
  openGraph: {
    title: "GC Capital - Copy Trading Dual Strategy",
    description: "Bots probados en Nasdaq y Oro. 10+ años de experiencia, 92% meses positivos.",
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
