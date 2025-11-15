# 🎯 GC Capital - Content Tracking & Lead Attribution Strategy

**Cliente:** Gustavo Contreras
**Enfoque:** Content Creator → Lead Capture → Scoring con Atribución
**Fecha:** 2025-11-13

---

## 🎬 CONTEXTO: Estrategia de Contenido de Gustavo

### Situación Actual:
- ✅ Gustavo crea contenido en YouTube regularmente
- ✅ Usa formulario Tally para trackear rendimiento de videos
- ✅ Tiene comunidad activa que consume su contenido
- 🎯 **Objetivo:** Capturar leads y atribuirlos al contenido específico que los generó

### Desafío:
Necesitamos saber:
1. ¿Qué video generó cada lead?
2. ¿En qué momento del video se interesaron?
3. ¿Cómo califican esos leads vs. otras fuentes?
4. ¿Qué contenido convierte mejor?

---

## 📊 ARQUITECTURA PROPUESTA

### **Sistema de 3 Capas:**

```
CAPA 1: CONTENIDO                CAPA 2: CAPTURA              CAPA 3: INTELIGENCIA
─────────────────────            ────────────────────         ─────────────────────
                                                              
YouTube Video                    Landing Page                 N8N Workflow
  ├─ Descripción                   ├─ Hero adaptado             ├─ Recibe lead
  ├─ Comentarios fijados           ├─ Formulario                ├─ Extrae UTMs
  └─ Cards/End Screens             └─ Hidden fields             ├─ Calcula score
       ↓                                  ↓                     ├─ Enriquece data
  Link con UTM                     Captura metadata             ├─ Clasifica
       ↓                                  ↓                     └─ Notifica
utm_source=youtube                Lead + Origen                     ↓
utm_campaign=video_123            + Score base                  WhatsApp/CRM
utm_content=timestamp_300         + Engagement                  + Dashboard
utm_medium=video                                                + Analytics
```

---

## 🔗 MÉTODO 1: UTM Tracking (RECOMENDADO)

### Estructura de Links por Video:

#### **Ejemplo 1: Video "Cómo Generar 15% Mensual con Bots"**
```
https://gccapital.com/?utm_source=youtube&utm_medium=video&utm_campaign=bots_15_porciento&utm_content=intro
https://gccapital.com/?utm_source=youtube&utm_medium=video&utm_campaign=bots_15_porciento&utm_content=min_5_estrategia
https://gccapital.com/?utm_source=youtube&utm_medium=video&utm_campaign=bots_15_porciento&utm_content=min_10_resultados
https://gccapital.com/?utm_source=youtube&utm_medium=video&utm_campaign=bots_15_porciento&utm_content=cta_final
```

#### **Ejemplo 2: Video "Mi Track Record Real de 2024"**
```
https://gccapital.com/?utm_source=youtube&utm_medium=video&utm_campaign=track_record_2024&utm_content=descripcion
```

### Implementación en YouTube:

**En la descripción del video:**
```
🔥 ¿QUIERES COPIAR MIS TRADES?
👉 Aplica aquí: https://gccapital.com/?utm_source=youtube&utm_campaign=track_record_2024&utm_content=descripcion

⏱️ TIMESTAMPS:
0:00 - Introducción
3:45 - Resultados Reales → https://gccapital.com/?utm_campaign=track_record_2024&utm_content=min_3_resultados
8:20 - Cómo Empezar → https://gccapital.com/?utm_campaign=track_record_2024&utm_content=min_8_como_empezar
```

**En comentarios fijados:**
```
📋 FORMULARIO DE APLICACIÓN: https://gccapital.com/?utm_campaign=track_record_2024&utm_content=comentario_fijado
```

---

## 📝 FORMULARIO INTELIGENTE CON TRACKING

### Hidden Fields (automáticos):
```javascript
// Capturados automáticamente al cargar la página
{
  "utm_source": "youtube",        // De dónde viene
  "utm_medium": "video",          // Tipo de contenido
  "utm_campaign": "bots_15_porciento",  // Video específico
  "utm_content": "min_5_estrategia",    // Momento del video
  "timestamp": "2025-11-13T11:23:45Z",  // Cuándo llegó
  "landing_url": "/",             // Qué página vio
  "user_agent": "...",            // Dispositivo
  "referrer": "https://youtube.com/watch?v=XYZ"  // Referencia directa
}
```

### Visible Fields (rellenados por el lead):
```javascript
{
  "nombre": "Carlos Rodriguez",
  "email": "carlos@example.com",
  "whatsapp": "+598 99 123 456",
  "capital_disponible": "$5000",
  "experiencia_trading": "Intermedio",
  "objetivo_mensual": "10-15%",
  "como_conociste": "YouTube de Gustavo"  // Confirmación manual
}
```

---

## 🎯 SCORING MEJORADO CON ATRIBUCIÓN

### Sistema S.C.O.R.E. Expandido (0-60 puntos):

#### **A. Base Score (0-50 puntos) - ACTUAL**
- Capital: 0-15 pts
- Experiencia: 0-10 pts
- Objetivo: 0-10 pts
- Timing: 0-10 pts
- Fit: 0-5 pts

#### **B. Content Engagement Score (0-10 pts) - NUEVO**

**+10 puntos:** Lead desde timestamp específico en video largo (>10 min)
- Indica que vio contenido completo y se interesó en momento clave

**+7 puntos:** Lead desde descripción de video reciente (<7 días)
- Early adopter, sigue contenido activamente

**+5 puntos:** Lead desde comentario fijado
- Engagement alto, leyó comentarios

**+3 puntos:** Lead desde descripción de video antiguo (>30 días)
- Contenido evergreen funcionando

**+0 puntos:** Lead sin UTM (tráfico directo o ads)
- Origen desconocido

#### **C. Score Total: 0-60 puntos**
- **55-60 pts:** 🔥🔥 **Super Hot Lead** - Contacto inmediato + Llamada prioritaria
- **45-54 pts:** 🔥 **Hot Lead** - WhatsApp automático en <1 hora
- **35-44 pts:** 🟡 **Warm Lead** - Email + Follow-up en 24-48h
- **25-34 pts:** 🔵 **Cold Lead** - Nurturing sequence
- **<25 pts:** ❄️ **Unqualified** - Comunidad gratuita

---

## 📊 DASHBOARD PARA GUSTAVO

### Vista: "Content Performance"

**Tabla: Videos Rankeados por Conversión**
```
┌─────────────────────────────────┬───────┬────────┬──────────┬──────────┐
│ Video                           │ Views │ Clicks │ Leads    │ Conv %   │
├─────────────────────────────────┼───────┼────────┼──────────┼──────────┤
│ Cómo Generar 15% con Bots       │ 12.5K │ 320    │ 45       │ 14.06%   │
│ Mi Track Record Real 2024       │ 8.2K  │ 180    │ 28       │ 15.56%   │
│ 5 Errores que Perdí $10K        │ 15.1K │ 250    │ 22       │ 8.80%    │
│ Copy Trading vs. Señales        │ 6.8K  │ 95     │ 12       │ 12.63%   │
└─────────────────────────────────┴───────┴────────┴──────────┴──────────┘
```

**Insight Automático:**
```
🎯 Mejor video: "Mi Track Record Real 2024" (15.56% conversión)
💡 Recomendación: Crea más contenido de transparencia y track records
```

**Tabla: Timestamps Más Efectivos**
```
┌───────────────────────┬──────────────────┬────────┬─────────┐
│ Video                 │ Timestamp        │ Leads  │ Avg Score│
├───────────────────────┼──────────────────┼────────┼─────────┤
│ Bots 15%             │ min_5_estrategia │ 18     │ 52 pts  │
│ Bots 15%             │ min_10_resultados│ 14     │ 48 pts  │
│ Bots 15%             │ descripcion      │ 8      │ 38 pts  │
│ Bots 15%             │ cta_final        │ 5      │ 35 pts  │
└───────────────────────┴──────────────────┴────────┴─────────┘
```

**Insight:**
```
🔥 Mejor momento: Minuto 5 (explicación de estrategia)
💡 Recomendación: Coloca CTAs en momentos de "revelación de estrategia"
```

---

## 🛠️ IMPLEMENTACIÓN TÉCNICA

### **1. Frontend: Landing Page con UTM Capture**

#### Componente: `UTMCapture.tsx`
```typescript
"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"

export function UTMCapture() {
  const searchParams = useSearchParams()
  const [utmData, setUtmData] = useState({})

  useEffect(() => {
    const data = {
      utm_source: searchParams.get('utm_source') || 'direct',
      utm_medium: searchParams.get('utm_medium') || 'none',
      utm_campaign: searchParams.get('utm_campaign') || 'none',
      utm_content: searchParams.get('utm_content') || 'none',
      referrer: document.referrer,
      timestamp: new Date().toISOString(),
      landing_url: window.location.pathname
    }
    
    setUtmData(data)
    
    // Guardar en localStorage para persistir en el formulario
    localStorage.setItem('lead_source', JSON.stringify(data))
    
    // Opcional: Enviar evento a analytics
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', 'page_view_with_utm', data)
    }
  }, [searchParams])

  return null // Componente invisible
}
```

#### Integración en Landing:
```typescript
// app/page.tsx
import { UTMCapture } from "@/components/utm-capture"

export default function HomePage() {
  return (
    <>
      <UTMCapture />
      <HeroSection />
      {/* ... resto de secciones */}
    </>
  )
}
```

---

### **2. Formulario con Hidden Fields**

#### Actualizar `qualification-form.tsx`:
```typescript
"use client"

import { useEffect, useState } from "react"

export function QualificationForm() {
  const [sourceData, setSourceData] = useState({})

  useEffect(() => {
    // Recuperar datos de origen guardados por UTMCapture
    const stored = localStorage.getItem('lead_source')
    if (stored) {
      setSourceData(JSON.parse(stored))
    }
  }, [])

  const handleSubmit = async (formData: any) => {
    const payload = {
      // Datos visibles del formulario
      ...formData,
      
      // Datos de origen (hidden)
      source: sourceData,
      
      // Score calculado en frontend (se recalcula en backend)
      preliminary_score: calculateScore(formData)
    }

    // Enviar a N8N webhook
    await fetch('https://n8n.tudominio.com/webhook/gc-capital-lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* Hidden fields para tracking */}
      <input type="hidden" name="utm_source" value={sourceData.utm_source} />
      <input type="hidden" name="utm_campaign" value={sourceData.utm_campaign} />
      <input type="hidden" name="utm_content" value={sourceData.utm_content} />
      
      {/* Campos visibles... */}
    </form>
  )
}
```

---

### **3. N8N Workflow: Procesamiento de Leads**

#### Nodos del Workflow:

**1. Webhook Trigger**
```
Recibe POST desde el formulario
Payload incluye: lead data + source data
```

**2. Content Engagement Score**
```javascript
// Calcular bonus por origen
const source = $json.source

let contentScore = 0

// Desde video con timestamp específico
if (source.utm_content.includes('min_')) {
  contentScore += 10
}

// Video reciente (checar contra tabla de videos)
if (videoIsRecent(source.utm_campaign)) {
  contentScore += 7
}

// Desde comentario fijado
if (source.utm_content === 'comentario_fijado') {
  contentScore += 5
}

// Agregar al score base
const baseScore = calculateBaseScore($json)
const totalScore = baseScore + contentScore

return { ...$json, totalScore, contentScore }
```

**3. Clasificación de Lead**
```javascript
const score = $json.totalScore

let tier = 'unqualified'
if (score >= 55) tier = 'super_hot'
else if (score >= 45) tier = 'hot'
else if (score >= 35) tier = 'warm'
else if (score >= 25) tier = 'cold'

return { ...$json, tier }
```

**4. Enriquecimiento con Video Data**
```javascript
// Buscar metadata del video en tabla de tracking
const videoId = $json.source.utm_campaign
const videoData = await getVideoData(videoId)

return {
  ...$json,
  video: {
    title: videoData.title,
    url: videoData.url,
    publish_date: videoData.date,
    total_views: videoData.views
  }
}
```

**5. Notificación a Gustavo**
```
IF tier === 'super_hot' OR tier === 'hot':
  - Enviar WhatsApp con Evolution API
  - Incluir: nombre, score, video de origen, timestamp
  
IF tier === 'warm':
  - Email a Gustavo con resumen
  
IF tier === 'cold' OR 'unqualified':
  - Guardar en CRM para nurturing
```

**6. Guardar en CRM (Google Sheets / Notion / Airtable)**
```
Columnas:
- Timestamp
- Nombre
- Email
- WhatsApp
- Capital
- Score Base
- Content Score
- Score Total
- Tier
- UTM Source
- UTM Campaign (Video ID)
- UTM Content (Timestamp)
- Video Title
- Fecha de Contacto
- Estado (Nuevo/Contactado/Calificado/Cerrado)
```

**7. Auto-respuesta al Lead**
```
Email automático:
"Gracias {nombre}, recibimos tu aplicación desde el video '{video_title}'.
Gustavo revisará tu perfil en las próximas {24-48} horas..."
```

---

## 📹 MÉTODO 2: YouTube Analytics API (Opcional - Futuro)

### Caso de Uso:
Si Gustavo quiere datos oficiales de YouTube (no solo UTMs).

### Implementación:
```javascript
// N8N Node: YouTube Analytics API
const { google } = require('googleapis')

const youtube = google.youtubeAnalytics('v2')

const report = await youtube.reports.query({
  ids: 'channel==UCxxxxxx', // ID del canal de Gustavo
  startDate: '2025-11-01',
  endDate: '2025-11-13',
  metrics: 'views,estimatedMinutesWatched,averageViewDuration,subscribersGained',
  dimensions: 'video',
  sort: '-views'
})

// Correlacionar con leads capturados
// Generar insights automáticos
```

**Ventaja:** Datos oficiales + Demographics
**Desventaja:** No trackea timestamps ni clicks específicos

---

## 🎨 ADAPTACIÓN DE LA LANDING POR ORIGEN

### Hero Dinámico según UTM:

#### Si viene de YouTube:
```jsx
<HeroSection 
  preTitle="🎬 Gracias por ver el video sobre {video_title}"
  headline="Aplica Ahora para Copiar las Estrategias que Viste"
  cta="Sí, Quiero Aplicar Ahora"
/>
```

#### Si viene de tráfico directo:
```jsx
<HeroSection 
  preTitle="Para traders serios cansados de perder con señales manuales"
  headline="Copia Trades de un Sistema Probado"
  cta="Quiero Copiar Trades Ahora"
/>
```

#### Implementación:
```typescript
// components/hero-section.tsx
export function HeroSection({ source }: { source?: SourceData }) {
  const isFromYouTube = source?.utm_source === 'youtube'
  const videoTitle = source?.utm_campaign?.replace(/_/g, ' ') || ''

  return (
    <section>
      {isFromYouTube ? (
        <div className="bg-red-50 border-red-200">
          <Youtube className="h-4 w-4" />
          <span>Gracias por ver: {videoTitle}</span>
        </div>
      ) : (
        <div className="bg-blue-50 border-blue-200">
          <Sparkles className="h-4 w-4" />
          <span>Para traders serios...</span>
        </div>
      )}
    </section>
  )
}
```

---

## 📊 MIGRACIÓN DESDE TALLY

### Plan de Transición:

**Paso 1: Mantener Tally + Agregar Tracking**
- Seguir usando Tally pero con links UTM
- Comparar conversión Tally vs. Landing propia

**Paso 2: A/B Test (2 semanas)**
- 50% tráfico a Tally (con UTM)
- 50% tráfico a Landing GC Capital
- Comparar: conversion rate, lead quality, score promedio

**Paso 3: Migración Completa**
- Si Landing GC Capital convierte mejor → migrar 100%
- Si Tally es mejor → usar Landing solo como página de contenido
- Híbrido: Landing para contenido + Tally para aplicación

### Ventajas de Landing Propia vs. Tally:
- ✅ Tracking completo (UTMs, analytics, heatmaps)
- ✅ Diseño 100% customizado con marca de Gustavo
- ✅ Scoring automático en tiempo real
- ✅ Integración directa con N8N/CRM
- ✅ No depende de plataforma externa
- ✅ Carga más rápida (hosted en Netlify)

---

## 🚀 ROADMAP DE IMPLEMENTACIÓN

### **Sprint 1: Tracking Básico (Esta Semana)**
- [x] Landing page base (ya existe)
- [ ] Componente UTMCapture
- [ ] Hidden fields en formulario
- [ ] N8N webhook básico (sin content score)
- [ ] Google Sheet para guardar leads
- [ ] Gustavo comienza a usar links UTM

### **Sprint 2: Content Score (Próxima Semana)**
- [ ] Tabla de videos en Notion/Airtable
- [ ] N8N: Content Engagement Score
- [ ] Dashboard básico en Google Sheets
- [ ] WhatsApp automático para Hot Leads

### **Sprint 3: Analytics & Optimization (2 Semanas)**
- [ ] Google Analytics 4 con eventos custom
- [ ] Dashboard visual (Metabase / Looker Studio)
- [ ] A/B test: Tally vs. Landing
- [ ] Hero dinámico según origen

### **Sprint 4: Advanced Features (1 Mes)**
- [ ] YouTube Analytics API (opcional)
- [ ] Chatbot WhatsApp con Evolution API
- [ ] Predictive scoring con ML (opcional)
- [ ] Multi-idioma (EN/PT)

---

## 💰 IMPACTO EN MODELO DE NEGOCIO

### Datos que Gustavo Podrá Tomar Decisiones:

**1. Qué contenido crear:**
- "Mi video de Track Record convierte 3x mejor → Hacer más videos de transparencia"

**2. Dónde invertir en Ads:**
- "Leads de YouTube tienen score promedio de 48 vs. Facebook Ads 32 → Priorizar YouTube"

**3. Cuándo publicar:**
- "Videos publicados los martes generan más leads que sábados"

**4. Qué ofrecer:**
- "Leads que llegaron al minuto 10 (donde hablo de diversificación) son más calificados"

### ROI Esperado:
- **Sin tracking:** Gustavo no sabe qué funciona → Desperdicia tiempo en contenido que no convierte
- **Con tracking:** Gustavo duplica producción de contenido top performer → 2-3x más leads calificados

---

## 🔥 PROPUESTA CONCRETA PARA GUSTAVO

### Qué Necesitas Hacer HOY:

1. **Completa el formulario /onboarding** con tus datos reales
2. **Lista tus últimos 10 videos de YouTube** (título + URL)
3. **Define los "momentos clave"** de 2-3 videos (timestamps donde hablas de resultados, estrategias, etc.)
4. **Decide:** ¿Seguir con Tally o migrar a landing propia?

### Qué Recibe a Cambio:

- 🎯 Landing personalizada con tracking completo
- 📊 Dashboard que muestra qué videos convierten mejor
- 🤖 Leads clasificados automáticamente (Hot/Warm/Cold)
- 📱 WhatsApp automático para Hot Leads
- 📈 Data para optimizar tu estrategia de contenido

---

## ❓ PREGUNTAS PARA DEFINIR

### Para Gustavo:
1. ¿Cuántos videos de YouTube subes por mes? (para estimar volumen de tracking)
2. ¿Qué plataforma usas más? (YouTube / Instagram / TikTok)
3. ¿Actualmente trackeas algo o todo es manual?
4. ¿Tally te está funcionando? ¿Qué te gusta/no te gusta?
5. ¿Tienes Google Analytics o Meta Pixel actualmente?
6. ¿Cuántos leads recibes por mes actualmente?
7. ¿Cuál es tu mejor video hasta ahora? (el que más leads generó)

### Para Definir Técnicamente:
- ¿Usamos Tally como iframe en la landing o formulario custom?
- ¿CRM preferido? (Google Sheets / Notion / Airtable / HubSpot)
- ¿Quién gestiona el canal de YouTube? (para API access)

---

**Última actualización:** 2025-11-13
**Próximo paso:** Agendar call para definir preguntas abiertas
