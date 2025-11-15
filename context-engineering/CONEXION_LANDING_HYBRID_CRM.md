# 🔗 Conexión: Landing GC Capital ↔ Hybrid-CRM + NEON

**Objetivo:** Explicar cómo se conectan los dos proyectos
**Fecha:** 2025-11-13

---

## 📦 PROYECTOS INVOLUCRADOS

### 1. **gc-capital-landing** (Frontend)
```
Ubicación: c:\Users\maico\gc-capital-landing
Puerto: 3000
Rutas principales:
├─ /youtube-lead (formulario de captura)
├─ /utm-generator (generador de links)
└─ /api/youtube-leads (proxy a hybrid-crm)
```

### 2. **hybrid-crm** (Backend + Database)
```
Ubicación: c:\Users\maico\hybrid-crm
Puerto: 3001
Base de datos: NEON (PostgreSQL)
Rutas principales:
├─ /api/youtube-leads (POST - crear lead)
├─ /api/youtube-leads (GET - obtener leads)
└─ /dashboard/youtube-leads (dashboard)
```

---

## 🔄 FLUJO DE CONEXIÓN

```
┌─────────────────────────────────┐
│   gc-capital-landing            │
│   (Frontend - Next.js 14)        │
│                                 │
│  /youtube-lead                  │
│  ├─ YouTubeLeadForm component   │
│  └─ Captura UTM parameters      │
└────────────┬────────────────────┘
             │
             │ POST /api/youtube-leads
             │ (JSON payload)
             ▼
┌─────────────────────────────────┐
│   hybrid-crm                    │
│   (Backend - Next.js 14)        │
│                                 │
│  /api/youtube-leads             │
│  ├─ Recibe datos                │
│  ├─ Calcula scores              │
│  ├─ Guarda en NEON              │
│  └─ Retorna resultado           │
└────────────┬────────────────────┘
             │
             │ Response (JSON)
             │ {leadId, score, tier}
             ▼
┌─────────────────────────────────┐
│   gc-capital-landing            │
│   (Frontend)                    │
│                                 │
│  Muestra resultado al usuario   │
│  "Score: 52/60 (🔥 HOT)"        │
└─────────────────────────────────┘
```

---

## 🚀 SETUP PASO A PASO

### **PASO 1: Instalar Dependencias**

#### En gc-capital-landing:
```bash
cd c:\Users\maico\gc-capital-landing

# Instalar sonner (para notificaciones)
npm install sonner

# Verificar que todo está bien
npm run build
```

#### En hybrid-crm:
```bash
cd c:\Users\maico\hybrid-crm

# Instalar dependencias (ya debería estar hecho)
npm install

# Generar Prisma client
npx prisma generate

# Crear migration para YouTubeLead
npx prisma migrate dev --name add_youtube_leads

# Verificar que todo está bien
npm run build
```

---

### **PASO 2: Configurar Variables de Entorno**

#### En hybrid-crm/.env:
```
# Database
DATABASE_URL="postgresql://user:password@ep-xxx.neon.tech/dbname"

# Business
DEFAULT_BUSINESS_ID="gc-capital"

# API
NEXT_PUBLIC_API_URL="http://localhost:3001"
```

#### En gc-capital-landing/.env.local:
```
# En desarrollo (local)
NEXT_PUBLIC_API_URL="http://localhost:3001"

# En producción (cambiar a URL real)
# NEXT_PUBLIC_API_URL="https://hybrid-crm.vercel.app"
```

---

### **PASO 3: Levantar Servidores**

#### Terminal 1 - hybrid-crm (Backend):
```bash
cd c:\Users\maico\hybrid-crm
npm run dev

# Debería mostrar:
# ▲ Next.js 14.2.13
# - Local: http://localhost:3001
```

#### Terminal 2 - gc-capital-landing (Frontend):
```bash
cd c:\Users\maico\gc-capital-landing
npm run dev

# Debería mostrar:
# ▲ Next.js 14.1.0
# - Local: http://localhost:3000
```

---

### **PASO 4: Testear Conexión**

#### Opción A: Desde el Navegador

1. Accede a: `http://localhost:3000/youtube-lead`
2. Completa el formulario:
   - Nombre: "Test User"
   - Email: "test@example.com"
   - Phone: "+598 99 123 456"
   - Capital: "$5000"
   - Experiencia: "Intermedio"
   - Objetivo: "10-15%"
3. Clickea "Enviar Aplicación"
4. Deberías ver: "Score: 42/60 (🟡 WARM)"

#### Opción B: Desde la Terminal (curl)

```bash
curl -X POST http://localhost:3001/api/youtube-leads \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "+598 99 123 456",
    "capitalDisponible": "$5000",
    "experienciaTrading": "Intermedio",
    "objetivoMensual": "10-15%",
    "utmSource": "youtube",
    "utmCampaign": "test_video",
    "utmContent": "min_5_test",
    "businessId": "gc-capital"
  }'

# Respuesta esperada:
# {
#   "success": true,
#   "leadId": "uuid-123",
#   "score": 42,
#   "tier": "warm",
#   "message": "Lead capturado exitosamente..."
# }
```

---

### **PASO 5: Verificar en Base de Datos**

#### Opción A: Prisma Studio
```bash
cd c:\Users\maico\hybrid-crm
npx prisma studio

# Se abre en http://localhost:5555
# Navega a: youtube_leads
# Deberías ver el lead que creaste
```

#### Opción B: NEON Dashboard
```
1. Accede a: https://console.neon.tech
2. Selecciona tu proyecto
3. SQL Editor
4. Ejecuta:
   SELECT * FROM youtube_leads ORDER BY created_at DESC LIMIT 10;
```

---

## 🔐 CORS Configuration

Si la landing y hybrid-crm están en **dominios diferentes**, necesitas configurar CORS.

### En hybrid-crm (app/api/youtube-leads/route.ts):

```typescript
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  // Agregar headers CORS
  const headers = {
    'Access-Control-Allow-Origin': process.env.NEXT_PUBLIC_LANDING_URL || 'http://localhost:3000',
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  }

  // Handle preflight
  if (request.method === 'OPTIONS') {
    return new NextResponse(null, { headers })
  }

  try {
    // ... resto del código
    const response = NextResponse.json({ success: true, ... })
    
    // Agregar headers CORS a la respuesta
    Object.entries(headers).forEach(([key, value]) => {
      response.headers.set(key, value)
    })
    
    return response
  } catch (error) {
    // ...
  }
}
```

---

## 📊 FLUJO DE DATOS COMPLETO

### **1. Usuario Clickea Link desde YouTube**

```
Link: https://gccapital.com/youtube-lead?utm_campaign=bots_15&utm_content=min_8_resultados
```

### **2. Landing Captura UTM Parameters**

```typescript
// components/youtube-lead-form.tsx
const searchParams = useSearchParams()

const source = {
  utmSource: searchParams.get("utm_source") || "youtube",
  utmCampaign: searchParams.get("utm_campaign"),
  utmContent: searchParams.get("utm_content"),
  referrer: document.referrer,
  deviceType: /mobile|android|iphone/i.test(navigator.userAgent) ? "mobile" : "desktop",
}

localStorage.setItem("youtube_source", JSON.stringify(source))
```

### **3. Usuario Llena Formulario**

```typescript
const formData = {
  name: "Carlos Rodriguez",
  email: "carlos@example.com",
  phone: "+598 99 123 456",
  capitalDisponible: "$5000",
  experienciaTrading: "Intermedio",
  objetivoMensual: "10-15%",
}
```

### **4. Landing Envía a API**

```typescript
const payload = {
  ...formData,
  ...source, // UTM parameters
  businessId: "gc-capital"
}

const response = await fetch("/api/youtube-leads", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(payload)
})
```

### **5. API Procesa**

```typescript
// hybrid-crm/app/api/youtube-leads/route.ts
const scoreBase = calculateBaseScore(body)        // 0-50
const contentScore = calculateContentScore(body)  // 0-10
const totalScore = scoreBase + contentScore       // 0-60
const tier = calculateTier(totalScore)            // hot, warm, cold, etc.

const lead = await prisma.youTubeLead.create({
  data: {
    ...body,
    scoreBase,
    contentScore,
    totalScore,
    tier,
  }
})
```

### **6. API Retorna Resultado**

```json
{
  "success": true,
  "leadId": "uuid-123",
  "score": 42,
  "tier": "warm",
  "message": "Lead capturado exitosamente"
}
```

### **7. Landing Muestra Resultado**

```typescript
setScore(result.score)           // 42
setTier(result.tier)             // "warm"
setSubmitted(true)               // Muestra confirmación

// Muestra: "¡Aplicación recibida! Score: 42/60 (🟡 WARM)"
```

### **8. Lead Guardado en NEON**

```sql
-- En tabla youtube_leads
INSERT INTO youtube_leads (
  name, email, phone, capital_disponible, experiencia_trading,
  objetivo_mensual, utm_source, utm_campaign, utm_content,
  score_base, content_score, total_score, tier, business_id
) VALUES (
  'Carlos Rodriguez', 'carlos@example.com', '+598 99 123 456',
  '$5000', 'Intermedio', '10-15%', 'youtube', 'bots_15', 'min_8_resultados',
  30, 12, 42, 'warm', 'gc-capital'
)
```

---

## 🛠️ DEBUGGING

### Si el formulario no envía:

1. **Abre DevTools (F12)**
2. **Ve a Console**
3. Busca errores como:
   - `Failed to fetch` → API no está disponible
   - `CORS error` → Problema de CORS
   - `JSON.parse error` → Respuesta no es JSON válido

### Si el API no recibe datos:

1. **En hybrid-crm, agrega logs:**
```typescript
export async function POST(request: NextRequest) {
  const body = await request.json()
  console.log("📤 Datos recibidos:", body)  // ← Aquí verás qué llega
  // ...
}
```

2. **Ejecuta en terminal:**
```bash
npm run dev

# Verás los logs en la terminal
```

### Si los datos no se guardan en NEON:

1. **Verifica DATABASE_URL:**
```bash
cd c:\Users\maico\hybrid-crm
echo $env:DATABASE_URL  # PowerShell
# Debería mostrar: postgresql://...
```

2. **Prueba conexión:**
```bash
npx prisma db execute --stdin < test.sql
```

3. **Revisa logs de Prisma:**
```bash
npx prisma db execute --stdin
SELECT * FROM youtube_leads LIMIT 1;
```

---

## 📱 TESTING COMPLETO

### Checklist de Verificación:

- [ ] Ambos servidores levantados (3000 y 3001)
- [ ] Accedo a http://localhost:3000/youtube-lead
- [ ] Veo el formulario
- [ ] Completo el formulario
- [ ] Clickeo "Enviar Aplicación"
- [ ] Veo respuesta con score y tier
- [ ] Accedo a Prisma Studio (http://localhost:5555)
- [ ] Veo el lead en tabla youtube_leads
- [ ] Datos coinciden con lo que envié

---

## 🚀 DEPLOYMENT

### En Producción:

#### 1. Desplegar hybrid-crm a Vercel:
```bash
cd c:\Users\maico\hybrid-crm
vercel deploy

# Obtiene URL: https://hybrid-crm-xxx.vercel.app
```

#### 2. Actualizar gc-capital-landing:
```bash
# En gc-capital-landing/.env.local
NEXT_PUBLIC_API_URL="https://hybrid-crm-xxx.vercel.app"
```

#### 3. Desplegar gc-capital-landing a Netlify:
```bash
cd c:\Users\maico\gc-capital-landing
netlify deploy

# Obtiene URL: https://gc-capital.netlify.app
```

#### 4. Actualizar CORS en hybrid-crm:
```typescript
// En app/api/youtube-leads/route.ts
'Access-Control-Allow-Origin': 'https://gc-capital.netlify.app'
```

---

## 📞 TROUBLESHOOTING RÁPIDO

| Problema | Solución |
|----------|----------|
| "Cannot POST /api/youtube-leads" | Verifica que hybrid-crm está levantado en 3001 |
| "CORS error" | Configura CORS en hybrid-crm/app/api/youtube-leads/route.ts |
| "Database connection failed" | Verifica DATABASE_URL en .env |
| "Prisma client not found" | Ejecuta `npx prisma generate` |
| "Lead no se guarda" | Verifica que la migration se ejecutó: `npx prisma migrate deploy` |
| "Score es 0" | Verifica que los campos del formulario se envían |

---

## ✅ PRÓXIMOS PASOS

1. **Instalar sonner:**
   ```bash
   cd c:\Users\maico\gc-capital-landing
   npm install sonner
   ```

2. **Crear migration:**
   ```bash
   cd c:\Users\maico\hybrid-crm
   npx prisma migrate dev --name add_youtube_leads
   ```

3. **Testear flujo completo**

4. **Agregar WhatsApp notifications**

5. **Agregar Email notifications**

6. **Crear dashboard**

---

**Última actualización:** 2025-11-13
