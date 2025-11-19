/**
 * Sistema de Scoring de Leads para GC Capital
 * Califica leads de 0-100 puntos basado en múltiples factores
 */

export type LeadScore = {
  total: number
  breakdown: {
    capital: number
    experience: number
    timing: number
    objective: number
    completeness: number
  }
  classification: 'super-hot' | 'hot' | 'warm' | 'cold' | 'unqualified'
  emoji: string
  priority: 1 | 2 | 3 | 4 | 5
  actionRequired: string
}

export interface LeadData {
  // Datos básicos
  nombre?: string | null
  email?: string | null
  whatsapp?: string | null
  
  // Intereses y situación
  intereses?: string[]
  retoMayor?: string | null
  metaProximoAno?: string | null
  operaActualmente?: string | null
  
  // Experiencia y dinero
  haPerdidoDinero?: string | null
  capitalDisponible?: string | null
  gananciaMensualDeseada?: string | null
  
  // Tiempo, riesgo, objetivos
  tiempoDisponible?: string | null
  toleranciaRiesgo?: string | null
  objetivoPrincipal?: string | null
  cuandoEmpezar?: string | null
  
  // Metadata
  submitted?: boolean
}

/**
 * Calcula el score de capital (0-30 puntos)
 * Más capital = mejor lead
 */
function scoreCapital(capitalDisponible?: string | null): number {
  if (!capitalDisponible) return 0

  const capital = capitalDisponible.toLowerCase()

  // Rangos óptimos para GC Capital
  if (capital.includes('10000') || capital.includes('10,000') || capital.includes('más de 10')) {
    return 30 // $10k+ = Excelente
  }
  if (capital.includes('5000') || capital.includes('5,000') || capital.includes('5-10')) {
    return 25 // $5k-10k = Muy bueno
  }
  if (capital.includes('2000') || capital.includes('2,000') || capital.includes('2-5')) {
    return 20 // $2k-5k = Bueno
  }
  if (capital.includes('1000') || capital.includes('1,000') || capital.includes('1-2')) {
    return 15 // $1k-2k = Aceptable
  }
  if (capital.includes('500') || capital.includes('200-500')) {
    return 10 // $500-1k = Mínimo
  }
  if (capital.includes('200') || capital.includes('menos de 500')) {
    return 5 // $200-500 = Muy bajo
  }

  return 0
}

/**
 * Calcula el score de experiencia (0-20 puntos)
 * Experiencia previa + disposición a aprender = mejor lead
 */
function scoreExperience(lead: LeadData): number {
  let score = 0

  // ¿Opera actualmente?
  if (lead.operaActualmente) {
    const opera = lead.operaActualmente.toLowerCase()
    if (opera.includes('sí') || opera.includes('si') || opera.includes('actualmente')) {
      score += 8 // Ya opera = +8
    } else if (opera.includes('antes') || opera.includes('dejé') || opera.includes('deje')) {
      score += 5 // Operó antes = +5
    }
  }

  // ¿Ha perdido dinero? (Paradójicamente, puede ser bueno)
  if (lead.haPerdidoDinero) {
    const perdio = lead.haPerdidoDinero.toLowerCase()
    if (perdio.includes('sí') || perdio.includes('si') || perdio.includes('mucho')) {
      score += 6 // Perdió y busca solución = +6 (motivado a cambiar)
    } else if (perdio.includes('poco') || perdio.includes('algo')) {
      score += 4 // Perdió poco = +4
    } else if (perdio.includes('no')) {
      score += 3 // No perdió = +3 (sin experiencia o muy cauteloso)
    }
  }

  // Intereses múltiples = más serio
  if (lead.intereses && lead.intereses.length > 0) {
    score += Math.min(lead.intereses.length * 2, 6) // Max +6 por intereses
  }

  return Math.min(score, 20)
}

/**
 * Calcula el score de timing (0-15 puntos)
 * Urgencia = mejor lead
 */
function scoreTiming(cuandoEmpezar?: string | null): number {
  if (!cuandoEmpezar) return 0

  const cuando = cuandoEmpezar.toLowerCase()

  if (cuando.includes('inmediatamente') || cuando.includes('ya') || cuando.includes('hoy')) {
    return 15 // Urgente = Excelente
  }
  if (cuando.includes('esta semana') || cuando.includes('próximos días')) {
    return 12 // Esta semana = Muy bueno
  }
  if (cuando.includes('este mes') || cuando.includes('próximas semanas')) {
    return 9 // Este mes = Bueno
  }
  if (cuando.includes('próximos meses') || cuando.includes('1-3 meses')) {
    return 6 // 1-3 meses = Regular
  }
  if (cuando.includes('más adelante') || cuando.includes('solo investigo')) {
    return 3 // Más adelante = Bajo
  }

  return 0
}

/**
 * Calcula el score de objetivo (0-15 puntos)
 * Objetivos claros y alineados con GC Capital
 */
function scoreObjective(objetivoPrincipal?: string | null): number {
  if (!objetivoPrincipal) return 0

  const objetivo = objetivoPrincipal.toLowerCase()

  // Objetivos hot para GC Capital
  if (objetivo.includes('copy trading') || objetivo.includes('bot')) {
    return 15 // Copy Trading = Perfecto
  }
  if (objetivo.includes('mentoría') || objetivo.includes('aprender')) {
    return 12 // Mentoría = Muy bueno
  }
  if (objetivo.includes('señales') || objetivo.includes('signals')) {
    return 10 // Señales = Bueno
  }
  if (objetivo.includes('comunidad') || objetivo.includes('skool')) {
    return 8 // Comunidad = Regular
  }
  if (objetivo.includes('ingresos pasivos') || objetivo.includes('libertad financiera')) {
    return 10 // Ingresos pasivos = Bueno
  }
  if (objetivo.includes('no sé') || objetivo.includes('explorar')) {
    return 3 // Sin objetivo claro = Bajo
  }

  return 5 // Objetivo no estándar = Promedio
}

/**
 * Calcula el score de completitud (0-20 puntos)
 * Formulario completo = lead más serio
 */
function scoreCompleteness(lead: LeadData): number {
  let score = 0
  const totalFields = 14 // Total de campos en el formulario

  // Campos básicos (críticos)
  if (lead.nombre) score += 2
  if (lead.email) score += 2
  if (lead.whatsapp) score += 2

  // Campos de calificación
  if (lead.intereses && lead.intereses.length > 0) score += 1
  if (lead.retoMayor) score += 1
  if (lead.metaProximoAno) score += 1
  if (lead.operaActualmente) score += 1
  if (lead.haPerdidoDinero) score += 1
  if (lead.capitalDisponible) score += 1
  if (lead.gananciaMensualDeseada) score += 1
  if (lead.tiempoDisponible) score += 1
  if (lead.toleranciaRiesgo) score += 1
  if (lead.objetivoPrincipal) score += 1
  if (lead.cuandoEmpezar) score += 1

  // Bonus si está submitted
  if (lead.submitted) score += 3

  return Math.min(score, 20)
}

/**
 * Clasifica el lead según su score total
 */
function classifyLead(score: number): LeadScore['classification'] {
  if (score >= 80) return 'super-hot'
  if (score >= 60) return 'hot'
  if (score >= 40) return 'warm'
  if (score >= 20) return 'cold'
  return 'unqualified'
}

/**
 * Retorna el emoji según la clasificación
 */
function getEmoji(classification: LeadScore['classification']): string {
  switch (classification) {
    case 'super-hot':
      return '🔥'
    case 'hot':
      return '🟠'
    case 'warm':
      return '🟡'
    case 'cold':
      return '🔵'
    case 'unqualified':
      return '⚪'
  }
}

/**
 * Retorna la prioridad según la clasificación (1=más urgente)
 */
function getPriority(classification: LeadScore['classification']): LeadScore['priority'] {
  switch (classification) {
    case 'super-hot':
      return 1
    case 'hot':
      return 2
    case 'warm':
      return 3
    case 'cold':
      return 4
    case 'unqualified':
      return 5
  }
}

/**
 * Retorna la acción requerida según la clasificación
 */
function getActionRequired(classification: LeadScore['classification']): string {
  switch (classification) {
    case 'super-hot':
      return 'Contactar INMEDIATAMENTE por WhatsApp - Lead de alta conversión'
    case 'hot':
      return 'Contactar en las próximas 24 horas - Lead calificado'
    case 'warm':
      return 'Seguimiento en 48-72 horas - Enviar recursos educativos'
    case 'cold':
      return 'Nurturing largo plazo - Agregar a secuencia de emails'
    case 'unqualified':
      return 'Invitar a comunidad gratuita - No hacer seguimiento activo'
  }
}

/**
 * FUNCIÓN PRINCIPAL: Calcula el score completo de un lead
 */
export function calculateLeadScore(lead: LeadData): LeadScore {
  const breakdown = {
    capital: scoreCapital(lead.capitalDisponible),
    experience: scoreExperience(lead),
    timing: scoreTiming(lead.cuandoEmpezar),
    objective: scoreObjective(lead.objetivoPrincipal),
    completeness: scoreCompleteness(lead),
  }

  const total = Object.values(breakdown).reduce((sum, score) => sum + score, 0)
  const classification = classifyLead(total)

  return {
    total,
    breakdown,
    classification,
    emoji: getEmoji(classification),
    priority: getPriority(classification),
    actionRequired: getActionRequired(classification),
  }
}

/**
 * Función helper para obtener solo el score numérico
 */
export function getLeadScore(lead: LeadData): number {
  return calculateLeadScore(lead).total
}

/**
 * Función helper para obtener solo la clasificación
 */
export function getLeadClassification(lead: LeadData): LeadScore['classification'] {
  return calculateLeadScore(lead).classification
}
