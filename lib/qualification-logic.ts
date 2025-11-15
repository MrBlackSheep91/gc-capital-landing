// ============================================
// LÓGICA DE CALIFICACIÓN DE LEADS
// ============================================

export interface FormData {
  interes: string
  tiempoDisponible: string
  objetivo: string
  experienciaPrevia: string
  inversionPrevia: string
  nivelConocimiento: string
}

export interface ProductoRecomendado {
  tipo: "copy_trading" | "mentoria" | "skool"
  razon: string
  confianza: number
}

export function calificarLead(data: FormData): ProductoRecomendado {
  let scoreCopyTrading = 0
  let scoreMentoria = 0
  let scoreSkool = 0
  
  // COPY TRADING: Sin experiencia, quiere ganar sin aprender
  if (data.interes === "ganar_dinero") scoreCopyTrading += 40
  if (data.tiempoDisponible === "0h") scoreCopyTrading += 30
  if (data.objetivo === "ingreso_pasivo") scoreCopyTrading += 20
  if (data.experienciaPrevia === "nunca" || data.experienciaPrevia === "perdi_dinero") scoreCopyTrading += 15
  if (data.nivelConocimiento === "cero" || data.nivelConocimiento === "basico") scoreCopyTrading += 10
  
  // MENTORÍA: Quiere aprender, tiene tiempo, tiene experiencia
  if (data.interes === "aprender_trading") scoreMentoria += 40
  if (data.tiempoDisponible === "5-10h" || data.tiempoDisponible === "10h+") scoreMentoria += 30
  if (data.objetivo === "trader_profesional") scoreMentoria += 20
  if (data.experienciaPrevia === "resultados_mixtos" || data.experienciaPrevia === "consistente_rentable") scoreMentoria += 15
  if (data.nivelConocimiento === "intermedio" || data.nivelConocimiento === "avanzado") scoreMentoria += 10
  
  // SKOOL: Principiante, busca educación general
  if (data.interes === "educacion_financiera") scoreSkool += 40
  if (data.tiempoDisponible === "1-3h") scoreSkool += 20
  if (data.objetivo === "aprender_decidir") scoreSkool += 20
  if (data.experienciaPrevia === "nunca") scoreSkool += 15
  if (data.nivelConocimiento === "cero" || data.nivelConocimiento === "basico") scoreSkool += 15
  
  // Determinar producto ganador
  const scores = [
    { tipo: "copy_trading" as const, score: scoreCopyTrading },
    { tipo: "mentoria" as const, score: scoreMentoria },
    { tipo: "skool" as const, score: scoreSkool },
  ]
  
  const ganador = scores.sort((a, b) => b.score - a.score)[0]
  
  // Generar razón
  let razon = ""
  if (ganador.tipo === "copy_trading") {
    razon = "Perfil ideal para Copy Trading: sin experiencia, busca ingresos pasivos sin dedicar tiempo a aprender"
  } else if (ganador.tipo === "mentoria") {
    razon = "Perfil ideal para Mentoría: quiere aprender en profundidad, tiene tiempo disponible y busca convertirse en trader profesional"
  } else {
    razon = "Perfil ideal para Comunidad: principiante que busca educación financiera general y una comunidad de apoyo"
  }
  
  return {
    tipo: ganador.tipo,
    razon,
    confianza: Math.min(ganador.score, 100)
  }
}
