# 🚀 GC Capital - Landing Page Copy Trading

Landing page profesional para promocionar Copy Trading con bots de Nasdaq (GC-Tech) y Oro (GC-Gold).

**Diseño basado en:** breakandbounce.com (limpio, minimalista, conversion-focused)

## 📦 Stack Tecnológico

- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui** (componentes)
- **Lucide React** (iconos)

## 🎨 Diseño Clean

- **Paleta Manual de Marca:**
  - 🟡 Dorado: `#c2a255` (brand principal - GC Capital)
  - 🔵 Blue-600: NASDAQ/Tech
  - 🟠 Amber-600: Oro/Gold
  - 🟢 Emerald-600: Dual/Success
  - ⚪ Backgrounds: slate-50, white
  - ⚫ Textos: gray-900, gray-600, gray-500
- **Tipografía:** Inter (Google Fonts)
- **Estilo:** Minimalista, profesional, espaciado generoso
- **Responsive:** Mobile-first

## 🚀 Instalación Rápida

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Build para producción
npm run build
```

## 📁 Estructura de Componentes

```
gc-capital-landing/
├── app/
│   ├── layout.tsx          # Layout + SEO
│   ├── page.tsx            # Landing completa
│   └── globals.css         # Tailwind styles
├── components/
│   ├── navbar.tsx                  # ✅ Navbar sticky con navegación suave
│   ├── hero-section.tsx            # ✅ Hero limpio con stats
│   ├── proof-section.tsx           # ✅ Métricas y confianza
│   ├── bots-section.tsx            # ✅ GC-Tech + GC-Gold (PORTAFOLIO ÚNICO)
│   ├── how-it-works-section.tsx    # ✅ Proceso 4 pasos
│   ├── calculator-section.tsx      # ✅ Calculadora interactiva ROI
│   ├── faq-section.tsx             # ✅ Preguntas frecuentes
│   ├── qualification-form.tsx      # ✅ Formulario con S.C.O.R.E.
│   ├── footer.tsx                  # ✅ Footer profesional
│   └── ui/                         # shadcn/ui components
└── package.json
```

## ✅ Secciones de la Landing

### 1. Navbar (Navegación)
- Sticky navbar con blur backdrop
- Logo GC Capital con gradiente dorado
- Links a todas las secciones (smooth scroll)
- CTA "Empezar Ahora"
- Responsive (desktop/mobile)

### 2. HeroSection (Clean)
- Headline grande y claro
- **Desde $200 USD** destacado
- Trust indicators (92% meses positivos, 0.4% drawdown)
- Dual CTAs (primario + secundario)
- Background gradiente suave
- Scroll indicator animado

### 3. ProofSection (Métricas)
- 6 stats grid (meses positivos, drawdown, años, retiros, ROI, inversores)
- 3 performance cards (GC-Tech, GC-Gold, Dual)
- Trust badge final
- Diseño card-based limpio

### 4. BotsSection (Estrategias)
- **CORREGIDO:** Portafolio único en misma cuenta
- GC-Tech (NASDAQ): Performance detallada
- GC-Gold (XAU): Performance detallada
- **Aclaración:** Ambas estrategias operan juntas automáticamente
- Features con checkmarks
- Color-coded (blue, amber, emerald)

### 5. HowItWorksSection (Proceso)
- 4 pasos del proceso (Calificación → Conexión → Operación → Retiros)
- Iconos y colores por paso
- "¿Por Qué Funciona Tan Bien?" con checkmarks
- Explicación de portafolio diversificado
- Risk management profesional destacado

### 6. CalculatorSection ⭐ (Interactiva)
- Input de capital inicial (desde $200 USD)
- Selector de estrategia (Tech/Gold/Dual)
- Slider de período (meses)
- Proyección mensual simple
- **Proyección compuesta** (reinversión)
- Stats row con trust metrics
- Diseño dark/light mix

### 7. FAQSection (Preguntas Frecuentes)
- 3 categorías: Seguridad, Costos, Funcionamiento
- Accordion interactivo por pregunta
- **Aclaración:** Ambas estrategias en misma cuenta
- Advertencia de riesgo destacada
- Colores por categoría

### 8. QualificationForm (Lead Capture)
- Información personal (nombre, email, phone)
- Capital disponible (desde $200-$500)
- Experiencia en trading (radio)
- Estrategia de interés (radio)
- Urgencia de inicio (select)
- Fuente de conocimiento (select)
- **S.C.O.R.E. System** (0-50 puntos automáticos)
- Success state con clasificación de lead
- Próximos pasos claros

### 9. Footer (Profesional)
- Branding GC Capital
- Contacto (email, WhatsApp)
- Info de Gustavo Contreras
- Advertencia de riesgo
- Copyright y legal

## 💬 Formulario de Feedback (NUEVO)

### Ruta: `/feedback`
Formulario interno para que Gustavo pueda enviar sugerencias de mejora.

**Características:**
- Selector de sección específica a mejorar
- Tipos de feedback: Copy/Textos, Colores/Diseño, Estructura, Otro
- Campos específicos según tipo:
  - **Copy:** Texto actual + Texto sugerido
  - **Colores:** Sugerencias de paleta y diseño
  - **Estructura:** Cambios de layout
- Prioridad (Baja/Media/Alta)
- Comentarios generales
- Tips para dar feedback efectivo
- Success state con confirmación

**Acceso:**
- Navbar: Link "💬 Feedback" (solo desktop)
- URL directa: `http://localhost:3002/feedback`

**Integración Futura:**
```typescript
// En feedback-form.tsx línea 70
const response = await fetch('https://n8n.tudominio.com/webhook/gc-feedback', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(feedbackData)
})
```

## 🔧 Configuración para V0.dev

### Opción 1: Copiar componentes individuales

1. Ve a [v0.dev](https://v0.dev)
2. Copia el contenido de cualquier archivo de `components/`
3. Pégalo en v0.dev
4. Itera con prompts de IA

### Opción 2: Deploy directo

```bash
# Vercel (recomendado)
npm install -g vercel
vercel

# Railway
npm run build
# Deploy manualmente en Railway dashboard
```

## 📊 Sistema de Scoring (S.C.O.R.E.)

El formulario califica automáticamente cada lead de 0-50 puntos:

- **Capital**: 0-10 puntos (desde $200 = 3pts, $5k+ = 10pts)
- **Experiencia**: 0-10 puntos
- **Estrategia**: 0-10 puntos
- **Urgencia**: 0-10 puntos (esta semana = 10pts)
- **Fuente**: 0-10 puntos (referral = 10pts)

**Clasificación Automática:**
- 45-50: 🔥 Hot Lead (prioridad máxima)
- 35-44: 🟡 Warm Lead (seguimiento 24-48h)
- 25-34: 🔵 Cold Lead (nurturing)
- <25: ❄️ Unqualified (comunidad Skool)

## 🔗 Integración con Backend

El formulario actualmente solo hace `console.log()`. Para integrarlo:

### Opción A: N8N Webhook

```typescript
// En qualification-form.tsx, línea 50:
const response = await fetch('https://n8n.tudominio.com/webhook/gc-capital', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ score, ...formData })
})
```

### Opción B: API Route Next.js

```typescript
// Crear app/api/submit-form/route.ts
export async function POST(request: Request) {
  const data = await request.json()
  // Enviar a Todoist, Notion, Email, etc.
  return Response.json({ success: true })
}
```

## 🎯 Próximos Pasos

### Mejoras Inmediatas:
- [ ] Integrar webhook N8N para captura de leads
- [x] Agregar sección FAQ ✅
- [x] Agregar sección "Cómo Funciona" ✅
- [x] Crear navbar con navegación suave ✅
- [x] Crear footer profesional ✅
- [ ] Agregar testimonios/screenshots reales
- [ ] Implementar analytics (GA4, Meta Pixel)

### Optimizaciones:
- [ ] Lazy loading de imágenes
- [ ] Animaciones con Framer Motion
- [ ] A/B testing de headlines
- [ ] Chatbot WhatsApp integrado

## 📱 SEO y Meta Tags

Ya incluido en `layout.tsx`:
- Title optimizado
- Description con keywords
- Open Graph tags
- Lang="es"

## 🚀 Deploy Recomendado

**Vercel (Gratis + Custom Domain):**
```bash
vercel --prod
```

**Railway:**
- Conecta repo GitHub
- Auto-deploy en cada push
- Variables de entorno en dashboard

## 📞 Soporte

Creado por: Maicol Martinez
Para: Gustavo Contreras - GC Capital Global
Framework: Hormozi + Innova Marketing Grow Partner

---

**¡Listo para entregar valor inmediato a Gustavo!** 🎉
