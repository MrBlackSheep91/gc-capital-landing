import { YouTubeLeadFormIngreso } from "@/components/youtube-lead-form-ingreso"
import { Suspense } from "react"

export const metadata = {
  title: "Descubre Tu Perfil de Inversor - GC Capital",
  description: "Completa este formulario rápido y descubre si eres candidato ideal para nuestros servicios.",
}

function IngresoFormContent() {
  return (
    <div className="min-h-screen">
      <Suspense fallback={
        <div className="flex items-center justify-center min-h-screen bg-[#1a1a1a]">
          <div className="text-white text-xl font-semibold">Cargando...</div>
        </div>
      }>
        <YouTubeLeadFormIngreso />
      </Suspense>
    </div>
  )
}

export default function IngresoPage() {
  return <IngresoFormContent />
}
