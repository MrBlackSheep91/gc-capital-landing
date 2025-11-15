# 🎯 Integración Landing + YouTube Tracking + NEON CRM

**Fecha:** 2025-11-13
**Cliente:** Gustavo Contreras
**Objetivo:** Sistema completo de captura de leads desde YouTube con scoring automático

---

## 📊 ARQUITECTURA COMPLETA

```
┌─────────────────────────────────────────────────────────────────┐
│                    GUSTAVO EN YOUTUBE                           │
│  Video: "Cómo Generar 15% Mensual con Bots"                    │
└──────────────────┬──────────────────────────────────────────────┘
                   │
                   ▼
┌─────────────────────────────────────────────────────────────────┐
│            DESCRIPCIÓN CON LINKS UTM GENERADOS                  │
│                                                                 │
│  ⏱️ TIMESTAMPS:                                                 │
│  3:45 - Estrategia                                              │
│  → https://gccapital.com/youtube-lead?utm_campaign=bots_15...  │
│                                                                 │
│  8:20 - Resultados Reales                                       │
│  → https://gccapital.com/youtube-lead?utm_campaign=bots_15...  │
└──────────────────┬──────────────────────────────────────────────┘
                   │
                   ▼
┌─────────────────────────────────────────────────────────────────┐
│         USUARIO CLICKEA → LANDING GC CAPITAL                    │
│                                                                 │
│  ✓ Captura automática de UTM parameters                        │
│  ✓ Captura referrer, dispositivo, timestamp                    │
│  ✓ Muestra formulario personalizado                            │
└──────────────────┬──────────────────────────────────────────────┘
                   │
                   ▼
┌─────────────────────────────────────────────────────────────────┐
│        USUARIO LLENA FORMULARIO (2 minutos)                     │
│                                                                 │
│  Nombre, Email, WhatsApp                                        │
│  Capital disponible                                             │
│  Experiencia trading                                            │
│  Objetivo mensual                                               │
└──────────────────┬──────────────────────────────────────────────┘
                   │
                   ▼
┌─────────────────────────────────────────────────────────────────┐
│      API ENDPOINT: /api/youtube-leads (POST)                    │
│                                                                 │
│  ✓ Recibe datos del formulario + UTM parameters                │
│  ✓ Calcula Score Base (0-50 pts)                               │
│  ✓ Calcula Content Score (0-10 pts)                            │
│  ✓ Calcula Total Score (0-60 pts)                              │
│  ✓ Clasifica en tier (super_hot, hot, warm, cold, unqualified) │
└──────────────────┬──────────────────────────────────────────────┘
                   │
                   ▼
┌─────────────────────────────────────────────────────────────────┐
│         PRISMA + NEON DATABASE                                  │
│                                                                 │
│  Tabla: youtube_leads                                           │
│  ├─ Datos personales                                            │
│  ├─ Datos de trading                                            │
│  ├─ Origen YouTube (UTM parameters)                             │
│  ├─ Scores (base, content, total)                              │
│  ├─ Tier (clasificación)                                        │
│  └─ Timestamps                                                  │
└──────────────────┬──────────────────────────────────────────────┘
                   │
                   ▼
┌─────────────────────────────────────────────────────────────────┐
│         NOTIFICACIONES EN TIEMPO REAL                           │
│                                                                 │
│  🔥 HOT LEAD (score >= 45):                                     │
│  ├─ WhatsApp a Gustavo (Evolution API)                         │
│  ├─ Email al lead                                              │
│  └─ Dashboard actualizado                                       │
│                                                                 │
│  🟡 WARM LEAD (score 35-44):                                    │
│  ├─ Email a Gustavo                                            │
│  └─ Guardado en CRM para seguimiento                           │
│                                                                 │
│  🔵 COLD LEAD (score 25-34):                                    │
│  └─ Nurturing sequence automática                              │
└─────────────────────────────────────────────────────────────────┘
```

---

## 🔧 COMPONENTES IMPLEMENTADOS

### 1. **Prisma Schema** (hybrid-crm)
```
Archivo: c:\Users\maico\hybrid-crm\prisma\schema.prisma

Modelo: YouTubeLead
├─ Datos personales (name, email, phone, whatsapp)
├─ Datos de trading (capital, experiencia, objetivo)
├─ Origen YouTube (utm_source, utm_campaign, utm_content, referrer)
├─ Scoring (scoreBase, contentScore, totalScore, tier)
└─ Auditoría (createdAt, updatedAt, isConverted)
```

### 2. **API Endpoint** (hybrid-crm)
```
Archivo: c:\Users\maico\hybrid-crm\app\api\youtube-leads\route.ts

POST /api/youtube-leads
├─ Recibe: datos del formulario + UTM parameters
├─ Calcula: scores automáticos
├─ Guarda: en NEON database
└─ Retorna: leadId, score, tier

GET /api/youtube-leads
├─ Parámetros: businessId, tier, limit
├─ Retorna: lista de leads + estadísticas
└─ Uso: dashboard de Gustavo
```

### 3. **Formulario de Captura** (gc-capital-landing)
```
Archivo: c:\Users\maico\gc-capital-landing\components\youtube-lead-form.tsx

Funcionalidades:
├─ Captura automática de UTM parameters
├─ Formulario con validación
├─ Envío a API de hybrid-crm
├─ Muestra score y tier en tiempo real
└─ Toast notifications con sonner
```

### 4. **Página de Captura** (gc-capital-landing)
```
Archivo: c:\Users\maico\gc-capital-landing\app\youtube-lead\page.tsx

Ruta: /youtube-lead
├─ Landing optimizada para conversión
├─ Beneficios y stats
├─ Formulario integrado
├─ FAQ
└─ Responsive design
```

### 5. **Generador de Links UTM** (gc-capital-landing)
```
Archivo: c:\Users\maico\gc-capital-landing\app\utm-generator\page.tsx

Ruta: /utm-generator
├─ Interfaz para crear links UTM
├─ Ejemplos de timestamps
├─ Copia automática
└─ Instrucciones de uso
```

---

## 📈 SISTEMA DE SCORING

### **Score Base (0-50 puntos)**

#### Capital Disponible
- $10,000+: **15 pts** ⭐
- $5,000-$10,000: **12 pts**
- $2,000-$5,000: **8 pts**
- $500-$2,000: **4 pts**

#### Experiencia Trading
- Avanzado (3+ años): **10 pts** ⭐
- Intermedio (1-3 años): **6 pts**
- Principiante: **2 pts**

#### Objetivo Mensual
- 20%+: **10 pts** ⭐
- 15-20%: **8 pts**
- 10-15%: **6 pts**
- 5-10%: **3 pts**

#### Timing (Velocidad de respuesta)
- Rellena en <5 min: **5 pts** (automático)

#### Fit (Alineación)
- Base: **3 pts** (automático)

**Total Base: 0-50 puntos**

---

### **Content Score (0-10 puntos)**

#### Origen YouTube
- **+10 pts:** Desde timestamp específico (min_X_Y)
  - Indica que vio contenido completo y se interesó en momento clave
  
- **+7 pts:** Desde descripción de video reciente
  - Early adopter, sigue contenido activamente
  
- **+5 pts:** Desde comentario fijado
  - Engagement alto, leyó comentarios
  
- **+3 pts:** Desde CTA final o video antiguo
  - Contenido evergreen funcionando

**Total Content: 0-10 puntos**

---

### **Score Total y Tier (0-60 puntos)**

```
Total Score = Score Base + Content Score

Clasificación:
├─ 55-60 pts: 🔥🔥 SUPER_HOT (Contacto inmediato + Llamada)
├─ 45-54 pts: 🔥 HOT (WhatsApp en <1 hora)
├─ 35-44 pts: 🟡 WARM (Email + Follow-up en 24-48h)
├─ 25-34 pts: 🔵 COLD (Nurturing sequence)
└─ <25 pts:  ❄️ UNQUALIFIED (Comunidad gratuita)
```

---

## 🚀 FLUJO DE USO

### **Para Gustavo (Content Creator)**

#### Paso 1: Generar Links
```
1. Accede a: https://gccapital.com/utm-generator
2. Ingresa título del video: "Cómo Generar 15% Mensual con Bots"
3. Selecciona timestamp: "min_8_resultados"
4. Copia el link generado
```

#### Paso 2: Poner Links en YouTube
```
En descripción del video:
⏱️ TIMESTAMPS:
3:45 - Estrategia → [link-generado]
8:20 - Resultados → [link-generado]

En comentario fijado:
📋 ¿QUIERES APLICAR?
👉 [link-generado]
```

#### Paso 3: Ver Dashboard
```
1. Accede a: https://hybrid-crm.com/dashboard/youtube-leads
2. Ve todos los leads capturados
3. Filtra por tier (hot, warm, cold)
4. Ve estadísticas por video
```

---

### **Para Visitante (Prospecto)**

#### Paso 1: Ver Video en YouTube
```
Gustavo publica video con links en descripción
```

#### Paso 2: Clickear Link
```
Clickea link en minuto 8:20 (donde habla de resultados)
→ Llega a: https://gccapital.com/youtube-lead?utm_campaign=bots_15&utm_content=min_8_resultados
```

#### Paso 3: Llenar Formulario
```
Formulario pre-rellenado con origen del video
Completa en 2 minutos:
- Nombre, Email, WhatsApp
- Capital disponible
- Experiencia
- Objetivo
```

#### Paso 4: Recibir Confirmación
```
Muestra score y tier en tiempo real
"¡Aplicación recibida! Score: 52/60 (🔥 HOT LEAD)"
```

#### Paso 5: Contacto de Gustavo
```
Si es HOT LEAD:
- Gustavo recibe WhatsApp en <1 hora
- Lead recibe email de confirmación
- Agendamiento de llamada
```

---

## 🔗 ENDPOINTS API

### **POST /api/youtube-leads**

**Request:**
```json
{
  "name": "Carlos Rodriguez",
  "email": "carlos@example.com",
  "phone": "+598 99 123 456",
  "whatsapp": "+598 99 123 456",
  "capitalDisponible": "$5000",
  "experienciaTrading": "Intermedio",
  "objetivoMensual": "10-15%",
  "utmSource": "youtube",
  "utmMedium": "video",
  "utmCampaign": "bots_15_porciento",
  "utmContent": "min_8_resultados",
  "referrer": "https://youtube.com/watch?v=XYZ",
  "landingUrl": "/youtube-lead",
  "deviceType": "mobile",
  "businessId": "gc-capital"
}
```

**Response (201):**
```json
{
  "success": true,
  "leadId": "uuid-123",
  "score": 52,
  "tier": "hot",
  "message": "Lead capturado exitosamente. Score: 52/60 (hot)"
}
```

---

### **GET /api/youtube-leads**

**Query Parameters:**
```
?businessId=gc-capital&tier=hot&limit=50
```

**Response:**
```json
{
  "success": true,
  "leads": [
    {
      "id": "uuid-123",
      "name": "Carlos Rodriguez",
      "email": "carlos@example.com",
      "totalScore": 52,
      "tier": "hot",
      "utmCampaign": "bots_15_porciento",
      "utmContent": "min_8_resultados",
      "createdAt": "2025-11-13T11:45:23Z"
    }
  ],
  "stats": [
    { "tier": "hot", "_count": 12 },
    { "tier": "warm", "_count": 8 },
    { "tier": "cold", "_count": 5 }
  ],
  "total": 25
}
```

---

## 📊 DASHBOARD PARA GUSTAVO

### Vista: Content Performance

**Tabla: Videos Rankeados por Conversión**
```
Video                          | Views | Clicks | Leads | Conv % | Avg Score
─────────────────────────────────────────────────────────────────────────────
Cómo Generar 15% con Bots     | 12.5K | 320    | 45    | 14.06% | 52
Mi Track Record Real 2024     | 8.2K  | 180    | 28    | 15.56% | 51
5 Errores que Perdí $10K      | 15.1K | 250    | 22    | 8.80%  | 38
Copy Trading vs. Señales      | 6.8K  | 95     | 12    | 12.63% | 45
```

**Tabla: Timestamps Más Efectivos**
```
Video                  | Timestamp            | Leads | Avg Score | Conv %
────────────────────────────────────────────────────────────────────────
Bots 15%              | min_8_resultados     | 18    | 52        | 18%
Bots 15%              | min_5_estrategia     | 14    | 48        | 14%
Bots 15%              | descripcion          | 8     | 38        | 8%
Track Record 2024     | comentario_fijado    | 12    | 46        | 12%
```

**Insights Automáticos:**
```
🎯 Mejor video: "Mi Track Record Real 2024" (15.56% conversión)
💡 Recomendación: Crea más videos de transparencia y track records

🔥 Mejor momento: Minuto 8 (donde hablas de resultados)
💡 Recomendación: Coloca CTAs en momentos de "revelación"

📈 Tendencia: Videos de 10-15 min convierten mejor que videos cortos
💡 Recomendación: Aumenta duración promedio de videos
```

---

## 🛠️ SETUP TÉCNICO

### **1. Actualizar Prisma Schema**
```bash
cd c:\Users\maico\hybrid-crm

# Ya está hecho, pero si necesitas regenerar:
npx prisma generate
npx prisma db push
```

### **2. Instalar Dependencias en Landing**
```bash
cd c:\Users\maico\gc-capital-landing

npm install sonner
```

### **3. Variables de Entorno**

**En hybrid-crm/.env:**
```
DATABASE_URL="postgresql://user:password@ep-xxx.neon.tech/dbname"
DEFAULT_BUSINESS_ID="gc-capital"
```

**En gc-capital-landing/.env.local:**
```
NEXT_PUBLIC_API_URL="http://localhost:3001"  # En desarrollo
# En producción: https://hybrid-crm.vercel.app
```

### **4. Conectar Landing a API**

En `youtube-lead-form.tsx`, la URL del API es:
```typescript
const response = await fetch("/api/youtube-leads", {
  method: "POST",
  ...
})
```

**Nota:** Esto asume que ambos proyectos están en el mismo dominio o con CORS configurado.

---

## 🔄 FLUJO DE DATOS

```
Landing (gc-capital-landing)
    ↓
    └─→ POST /api/youtube-leads
        ↓
    hybrid-crm API
        ↓
        ├─→ Calcula scores
        ├─→ Guarda en NEON
        ├─→ Envía notificaciones
        └─→ Retorna resultado
        ↓
    Landing (muestra score y tier)
```

---

## 📱 INTEGRACIONES FUTURAS

### **1. WhatsApp Automático** (Evolution API)
```javascript
// Cuando score >= 45
await whatsapp.sendMessage({
  to: gustavo.whatsapp,
  message: `🔥 HOT LEAD!\n${lead.name}\nScore: ${lead.totalScore}/60\nVideo: ${lead.utmCampaign}`
})
```

### **2. Email Automático**
```javascript
// Al lead
await email.send({
  to: lead.email,
  subject: "Tu aplicación fue recibida",
  template: "lead-confirmation"
})

// A Gustavo (si score >= 45)
await email.send({
  to: gustavo.email,
  subject: `🔥 HOT LEAD: ${lead.name}`,
  template: "hot-lead-notification"
})
```

### **3. Dashboard Visual**
```
Ruta: /dashboard/youtube-leads
├─ Gráficos de conversión por video
├─ Tabla de leads en tiempo real
├─ Filtros por tier, video, fecha
└─ Exportar a CSV/Excel
```

### **4. YouTube Analytics API**
```javascript
// Correlacionar datos oficiales de YouTube
const youtubeStats = await youtube.getVideoStats(videoId)
// views, watchTime, engagement, demographics
```

---

## ✅ CHECKLIST DE IMPLEMENTACIÓN

### **Completado:**
- [x] Modelo YouTubeLead en Prisma
- [x] API endpoint POST /api/youtube-leads
- [x] Componente YouTubeLeadForm
- [x] Página /youtube-lead
- [x] Generador de links UTM
- [x] Sistema de scoring
- [x] Captura de UTM parameters

### **Pendiente:**
- [ ] Instalar sonner en landing (`npm install sonner`)
- [ ] Configurar CORS entre landing y hybrid-crm
- [ ] Crear migration de Prisma (`npx prisma migrate dev`)
- [ ] Integración WhatsApp (Evolution API)
- [ ] Integración Email (SendGrid/Resend)
- [ ] Dashboard de analytics
- [ ] Tests E2E

---

## 🚀 PRÓXIMOS PASOS

### **Hoy:**
1. Instalar sonner en landing
2. Crear migration de Prisma
3. Testear flujo completo (formulario → API → NEON)

### **Mañana:**
1. Integración WhatsApp
2. Integración Email
3. Dashboard básico

### **Esta Semana:**
1. Gustavo genera links para sus videos
2. Primeros leads capturados
3. Validar scoring y tiers

---

**Última actualización:** 2025-11-13
**Próxima revisión:** Post-implementación de WhatsApp
