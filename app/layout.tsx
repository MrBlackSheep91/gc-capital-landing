import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sorteo Exclusivo $2,400 USD | Gustavo Contreras - GC Capital",
  description: "Participa en el sorteo más grande del año. $200 USD en efectivo + Curso VIP + Mentoría 1-1. Únete al grupo de WhatsApp para conocer los pasos. ¡Cupos limitados!",
  keywords: "sorteo, trading, gustavo contreras, gc capital, premio, whatsapp, curso trading, mentoría",
  authors: [{ name: "Gustavo Contreras - GC Capital" }],
  openGraph: {
    title: "Sorteo Exclusivo $2,400 USD | Gustavo Contreras",
    description: "$200 USD + Curso VIP + Mentoría. Únete al grupo exclusivo de WhatsApp. ¡Último día!",
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
