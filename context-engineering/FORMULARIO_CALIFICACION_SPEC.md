# 📋 Especificación: Formulario de Calificación YouTube

**Fecha:** 2025-11-13
**Objetivo:** Capturar + Calificar leads desde YouTube en un solo formulario

---

## 🎯 CONCEPTO PRINCIPAL

```
YouTube → Formulario Multi-Step → Calificación Automática → Producto Recomendado

Usuario llena 9 preguntas simples
     ↓
Sistema califica automáticamente
     ↓
Recomienda: Copy Trading / Mentoría / Comunidad Skool
```

---

## 🎨 PALETA DE COLORES (Gustavo)

```css
/* Principales */
--gold: #c2a255
--gold-light: #d4b875
--black: #1a1a1a
--gray-dark: #2d2d2d
--white: #ffffff

/* Acentos */
--green-success: #10b981
--red-urgent: #ef4444
--blue-info: #3b82f6
--purple-community: #a855f7
```

---

## 📊 ESTRUCTURA DEL FORMULARIO

### **STEP 1: Datos Básicos (3 campos)**

```typescript
{
  name: string,          // "Carlos Rodriguez"
  email: string,         // "carlos@example.com"
  whatsapp: string,      // "+598 99 123 456" (pre-rellenado por IP)
}
```

**Captura Automática:**
- País por IP (usando ipapi.co)
- Código de área automático (+598, +54, etc.)

**Validación:**
- Todos los campos requeridos
- Email formato válido
- WhatsApp con código de país

**UX:**
- Título: "Empecemos con lo Básico"
- Subtítulo: "Solo 3 preguntas rápidas para empezar..."
- Botón: "Continuar →"
- Al completar: Confetti animación 🎉

---

### **STEP 2: Intereses (3 preguntas)**

```typescript
{
  interes: "ganar_dinero" | "aprender_trading" | "educacion_financiera",
  tiempoDisponible: "0h" | "1-3h" | "5-10h" | "10h+",
  objetivo: "ingreso_pasivo" | "trader_profesional" | "aprender_decidir",
}
```

**Pregunta 1:** ¿Qué buscas principalmente?
- 💰 Ganar dinero sin aprender trading (copy trading)
- 📚 Aprender a hacer trading yo mismo
- 🎓 Recibir educación financiera general

**Pregunta 2:** ¿Cuánto tiempo tienes disponible?
- ⚡ 0 horas (quiero automatizado)
- ⏰ 1-3 horas/semana
- 📅 5-10 horas/semana
- 🚀 10+ horas/semana (dedicación completa)

**Pregunta 3:** ¿Cuál es tu objetivo principal?
- 💸 Ingreso pasivo sin esfuerzo
- 🎯 Convertirme en trader profesional
- 🤔 Aprender y luego decidir

**UX:**
- Título: "¿Qué te Interesa Más?"
- Subtítulo: "Ya casi... solo 3 preguntas más"
- Botones grandes con emojis
- Selección única (radio buttons estilizados)
- Hover effects + transiciones suaves
- Al completar: Confetti animación 🎉

---

### **STEP 3: Experiencia (3 preguntas)**

```typescript
{
  experienciaPrevia: "nunca" | "perdi_dinero" | "resultados_mixtos" | "consistente_rentable",
  inversionPrevia: "nunca" | "menos_1k" | "1k_5k" | "mas_5k",
  nivelConocimiento: "cero" | "basico" | "intermedio" | "avanzado",
}
```

**Pregunta 1:** ¿Alguna vez has operado en trading?
- ❌ Nunca
- 😓 Sí, pero perdí dinero
- 🤷 Sí, con resultados mixtos
- ✅ Sí, soy consistentemente rentable

**Pregunta 2:** ¿Has invertido dinero real en trading?
- ❌ Nunca
- 💵 Menos de $1,000
- 💰 Entre $1,000 - $5,000
- 💎 Más de $5,000

**Pregunta 3:** ¿Qué nivel de conocimiento tienes?
- 0️⃣ Cero (no sé nada)
- 📈 Básico (sé qué es un gráfico)
- 📊 Intermedio (conozco indicadores)
- 🎓 Avanzado (tengo estrategia definida)

**UX:**
- Título: "¡Última Pregunta!"
- Subtítulo: "Cuéntanos sobre tu experiencia"
- Botón: "Descubrir Mi Perfil →" (cargando...)
- Al completar: EXPLOSIÓN de confetti 🎉🎊✨

---

## 🧠 LÓGICA DE CALIFICACIÓN

### **Archivo:** `lib/qualification-logic.ts`

```typescript
function calificarLead(data: FormData): ProductoRecomendado {
  // Calcular scores para cada producto
  let scoreCopyTrading = 0
  let scoreMentoria = 0
  let scoreSkool = 0
  
  // COPY TRADING
  if (data.interes === "ganar_dinero") scoreCopyTrading += 40
  if (data.tiempoDisponible === "0h") scoreCopyTrading += 30
  if (data.objetivo === "ingreso_pasivo") scoreCopyTrading += 20
  if (data.experienciaPrevia === "nunca" || "perdi_dinero") scoreCopyTrading += 15
  if (data.nivelConocimiento === "cero" || "basico") scoreCopyTrading += 10
  // Total: 0-115 pts
  
  // MENTORÍA
  if (data.interes === "aprender_trading") scoreMentoria += 40
  if (data.tiempoDisponible === "5-10h" || "10h+") scoreMentoria += 30
  if (data.objetivo === "trader_profesional") scoreMentoria += 20
  if (data.experienciaPrevia === "resultados_mixtos" || "consistente_rentable") scoreMentoria += 15
  if (data.nivelConocimiento === "intermedio" || "avanzado") scoreMentoria += 10
  // Total: 0-115 pts
  
  // SKOOL
  if (data.interes === "educacion_financiera") scoreSkool += 40
  if (data.tiempoDisponible === "1-3h") scoreSkool += 20
  if (data.objetivo === "aprender_decidir") scoreSkool += 20
  if (data.experienciaPrevia === "nunca") scoreSkool += 15
  if (data.nivelConocimiento === "cero" || "basico") scoreSkool += 15
  // Total: 0-110 pts
  
  // Determinar ganador
  const ganador = Math.max(scoreCopyTrading, scoreMentoria, scoreSkool)
  
  return {
    tipo: ganador === scoreCopyTrading ? "copy_trading" : 
          ganador === scoreMentoria ? "mentoria" : "skool",
    razon: "...",
    confianza: Math.min(ganador, 100)
  }
}
```

---

## 🎉 PANTALLA DE CONFIRMACIÓN

### **Copy Trading**

```
┌───────────────────────────────────────────────┐
│ ✅ ¡Aplicación Recibida!                      │
│                                               │
│ ✨ Copy Trading Automatizado                  │
│                                               │
│ Perfil ideal para Copy Trading: sin           │
│ experiencia, busca ingresos pasivos sin       │
│ dedicar tiempo a aprender                     │
│                                               │
│ Confianza: 85%                                │
│                                               │
│ ¿Qué sigue?                                   │
│ Gustavo revisará tu perfil y te contactará   │
│ por WhatsApp en las próximas 24 horas.       │
│                                               │
│ ✅ Sin experiencia necesaria                  │
│ ✅ 100% automatizado                          │
│ ✅ Retornos de 8-15% mensual                  │
│ ✅ Copia trades de Gustavo en tiempo real     │
│                                               │
│ [Volver al Inicio]                            │
└───────────────────────────────────────────────┘
```

### **Mentoría**

```
┌───────────────────────────────────────────────┐
│ ✅ ¡Aplicación Recibida!                      │
│                                               │
│ 🎓 Mentoría Personalizada                     │
│                                               │
│ Perfil ideal para Mentoría: quiere aprender  │
│ en profundidad, tiene tiempo y busca          │
│ convertirse en trader profesional             │
│                                               │
│ Confianza: 90%                                │
│                                               │
│ ¿Qué sigue?                                   │
│ Gustavo agendará una llamada de evaluación   │
│ para diseñar un plan personalizado.          │
│                                               │
│ ✅ Mentoría 1-on-1 con Gustavo                │
│ ✅ Estrategias avanzadas                      │
│ ✅ Análisis de tu operativa                   │
│ ✅ Convertirse en trader profesional          │
│                                               │
│ [Volver al Inicio]                            │
└───────────────────────────────────────────────┘
```

### **Comunidad Skool**

```
┌───────────────────────────────────────────────┐
│ ✅ ¡Aplicación Recibida!                      │
│                                               │
│ 👥 Comunidad Premium Skool                    │
│                                               │
│ Perfil ideal para Comunidad: principiante     │
│ que busca educación financiera general y      │
│ una comunidad de apoyo                        │
│                                               │
│ Confianza: 75%                                │
│                                               │
│ ¿Qué sigue?                                   │
│ Te enviaremos un email con acceso a la       │
│ Comunidad Premium Skool.                     │
│                                               │
│ ✅ Aprende desde cero                         │
│ ✅ Comunidad de apoyo                         │
│ ✅ Recursos exclusivos                        │
│ ✅ Acceso de por vida                         │
│                                               │
│ [Volver al Inicio]                            │
└───────────────────────────────────────────────┘
```

---

## 🚀 ESTRATEGIAS DE CONVERSIÓN

### **1. Gamificación**
```
Barra de progreso visual
[████████░░░░░░░░] 40% Completado
🏆 Estás a 6 preguntas de descubrir tu perfil ideal
```

### **2. Urgencia + Escasez**
```
⚡ Solo 5 cupos disponibles esta semana
👥 1,247 personas ya aplicaron
```

### **3. Prueba Social**
```
"1,247 personas ya aplicaron"
"Solo 2 minutos"
```

### **4. Micro-Compromisos**
```
Step 1: "Solo 3 preguntas rápidas para empezar..."
Step 2: "Ya casi... solo 3 preguntas más"
Step 3: "¡Última pregunta!"
```

### **5. Validación Instantánea**
```
Al completar cada step:
✅ Confetti animation
✅ Progress bar sube
✅ Mensaje de ánimo
```

### **6. Beneficio Visible**
```
"Descubre tu perfil de inversor en 2 minutos"
"Conoce qué producto es perfecto para ti"
```

---

## 📦 DEPENDENCIAS NUEVAS

```json
{
  "dependencies": {
    "canvas-confetti": "^1.9.2",
    "sonner": "^1.3.1"
  }
}
```

**canvas-confetti:** Animaciones de confetti
**sonner:** Toast notifications

---

## 🗄️ SCHEMA PRISMA ACTUALIZADO

```prisma
model YouTubeLead {
  // ... campos existentes
  
  // =========== CALIFICACIÓN ===========
  interes              String? // "ganar_dinero", "aprender_trading", "educacion_financiera"
  tiempoDisponible     String? @map("tiempo_disponible")
  objetivo             String?
  experienciaPrevia    String? @map("experiencia_previa")
  inversionPrevia      String? @map("inversion_previa")
  nivelConocimiento    String? @map("nivel_conocimiento")
  
  // =========== RESULTADO ===========
  productoRecomendado  String? @map("producto_recomendado") // "copy_trading", "mentoria", "skool"
  razonCalificacion    String? @map("razon_calificacion")
  scoreConfianza       Int @default(0) @map("score_confianza") // 0-100
  
  // =========== GEO ===========
  paisDetectado        String? @map("pais_detectado") // "UY", "AR"
  ipAddress            String? @map("ip_address")
}
```

---

## 🔧 API ENDPOINT ACTUALIZADO

### **POST /api/youtube-leads**

**Request:**
```json
{
  // Datos básicos
  "name": "Carlos Rodriguez",
  "email": "carlos@example.com",
  "whatsapp": "+598 99 123 456",
  
  // Calificación
  "interes": "ganar_dinero",
  "tiempoDisponible": "0h",
  "objetivo": "ingreso_pasivo",
  "experienciaPrevia": "nunca",
  "inversionPrevia": "menos_1k",
  "nivelConocimiento": "cero",
  
  // Resultado (calculado en frontend)
  "productoRecomendado": "copy_trading",
  "razonCalificacion": "Perfil ideal para Copy Trading...",
  "scoreConfianza": 85,
  
  // Geo
  "paisDetectado": "UY",
  "ipAddress": "190.123.45.67",
  
  // UTM
  "utmSource": "youtube",
  "utmCampaign": "bots_15_porciento",
  
  // Business
  "businessId": "gc-capital"
}
```

**Response:**
```json
{
  "success": true,
  "leadId": "uuid-123",
  "productoRecomendado": "copy_trading",
  "message": "Lead capturado exitosamente"
}
```

---

## 📱 FLUJO COMPLETO

```
1. Usuario llega desde YouTube
   → URL: /youtube-lead?utm_campaign=bots_15

2. Landing captura automáticamente:
   → utm_campaign
   → País por IP
   → Dispositivo

3. Usuario ve Step 1 (Datos Básicos)
   → WhatsApp pre-rellenado con código de país
   → Completa 3 campos
   → Click "Continuar"
   → ✨ Confetti

4. Usuario ve Step 2 (Intereses)
   → 3 preguntas con botones grandes
   → Selección rápida
   → Click "Continuar"
   → ✨ Confetti

5. Usuario ve Step 3 (Experiencia)
   → 3 preguntas finales
   → Click "Descubrir Mi Perfil"
   → 🎉 EXPLOSIÓN de confetti

6. Sistema califica automáticamente
   → Ejecuta función calificarLead()
   → Determina: copy_trading / mentoria / skool
   → Genera razón + confianza

7. Envía a API
   → POST /api/youtube-leads
   → Guarda en NEON

8. Muestra pantalla de confirmación
   → Personalizada por producto recomendado
   → Beneficios específicos
   → ¿Qué sigue?
   → Botón "Volver al Inicio"

9. Notificaciones automáticas
   → WhatsApp a Gustavo (si es HOT)
   → Email al lead
   → Dashboard actualizado
```

---

## ✅ CHECKLIST DE IMPLEMENTACIÓN

### **Backend (hybrid-crm):**
- [x] Actualizar schema Prisma con campos de calificación
- [ ] Crear migration: `npx prisma migrate dev --name add_qualification_fields`
- [ ] Actualizar API /api/youtube-leads para recibir nuevos campos
- [ ] Actualizar lógica para guardar producto recomendado

### **Frontend (gc-capital-landing):**
- [x] Instalar dependencias: `npm install canvas-confetti sonner`
- [x] Crear `lib/qualification-logic.ts` con lógica de calificación
- [ ] Crear componente `components/youtube-lead-form-v2.tsx`
- [ ] Actualizar página `/youtube-lead` para usar nuevo formulario
- [ ] Testear flujo completo

### **Testing:**
- [ ] Testear Step 1 (datos básicos)
- [ ] Testear Step 2 (intereses)
- [ ] Testear Step 3 (experiencia)
- [ ] Testear calificación → copy_trading
- [ ] Testear calificación → mentoria
- [ ] Testear calificación → skool
- [ ] Testear geolocalización por IP
- [ ] Testear confetti animations

---

## 🎯 PRÓXIMOS PASOS

1. **Terminar componente en Claude**
   - Copiar especificación completa
   - Implementar JSX/TSX del formulario
   - Testear localmente

2. **Crear migration Prisma**
   ```bash
   cd c:\Users\maico\hybrid-crm
   npx prisma migrate dev --name add_qualification_fields
   ```

3. **Actualizar API endpoint**
   - Agregar campos nuevos en POST
   - Actualizar función de creación de lead

4. **Testing end-to-end**
   - Llenar formulario completo
   - Verificar guardado en NEON
   - Verificar producto recomendado correcto

5. **Implementar notificaciones**
   - WhatsApp a Gustavo (Evolution API)
   - Email al lead (SendGrid/Resend)

---

**Última actualización:** 2025-11-13
**Para continuar en Claude:** Copiar este documento + código base del formulario
