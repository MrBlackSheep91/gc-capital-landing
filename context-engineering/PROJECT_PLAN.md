# 🎯 GC Capital Landing - Project Plan con MCP

**Cliente:** Gustavo Contreras
**Proyecto:** Landing Page Copy Trading Profesional
**Framework:** Context Engineering + MCP Architecture
**Stack:** Next.js 14 + TypeScript + Tailwind + shadcn/ui

---

## 📋 FASE 0: Discovery & Data Collection (ACTUAL)

### ✅ Completado:
- [x] Estructura base del proyecto Next.js 14
- [x] 9 secciones de landing implementadas (Hero, Proof, Bots, HowItWorks, Calculator, FAQ, Form, Footer)
- [x] Formulario onboarding `/onboarding` para capturar datos de Gustavo
- [x] Repo GitHub creado: https://github.com/MrBlackSheep91/gc-capital-landing
- [x] Servidor local funcionando en http://localhost:3000

### 🔄 En Progreso:
- [ ] **Deploy a Netlify** (pendiente conectar GitHub en dashboard)
- [ ] **Gustavo completa el formulario /onboarding** con datos reales de su negocio

### 📊 Datos Necesarios de Gustavo:
El formulario captura:
1. **Datos Personales** (nombre, email, teléfono, YouTube, Skool)
2. **Modelo de Negocio** (ingresos, miembros, pricing, retención)
3. **Bot #1** (nombre, estrategia, asset, win rate, drawdown, ROI)
4. **Bot #2** (opcional - segundo bot si existe)
5. **Track Record** (años trading, estudiantes, tasa de éxito)
6. **Propuesta de Valor** (3 beneficios principales, enfoque único)
7. **Objetivos** (clientes objetivo, meta de ingresos, capital mínimo)
8. **Social Proof** (2 testimonios con nombres, texto, resultados)
9. **Proceso** (4 pasos para empezar) + **FAQs** (3 preguntas frecuentes)

---

## 📐 ARQUITECTURA MCP: Context Engineering

### Estructura de Carpetas:
```
gc-capital-landing/
├── app/                          # Next.js App Router
│   ├── page.tsx                  # Landing principal
│   ├── onboarding/               # Formulario discovery Gustavo
│   └── feedback/                 # Formulario feedback Gustavo
├── components/                   # Componentes React
│   ├── navbar.tsx
│   ├── hero-section.tsx
│   ├── proof-section.tsx
│   ├── bots-section.tsx
│   ├── how-it-works-section.tsx
│   ├── calculator-section.tsx
│   ├── faq-section.tsx
│   ├── qualification-form.tsx
│   └── footer.tsx
├── context-engineering/          # 🆕 MCP Architecture
│   ├── PROJECT_PLAN.md          # Este archivo
│   ├── INITIAL/                 # Especificaciones de features
│   ├── PRPs/                    # Pseudo-Requirement Prompts generados
│   ├── examples/                # Código de referencia
│   ├── documentation/           # Docs externas relevantes
│   └── rules/                   # Reglas específicas del proyecto
├── lib/                         # Utilidades
└── public/                      # Assets estáticos
```

---

## 🎯 FASE 1: Personalización con Datos Reales

**Objetivo:** Reemplazar todos los placeholders con datos reales de Gustavo.

### Tareas:
1. **Recibir datos del formulario /onboarding**
   - Gustavo completa el formulario
   - Datos se guardan (N8N webhook o JSON local)

2. **Actualizar componentes con datos reales:**
   - `hero-section.tsx` → Headline personalizado, stats reales
   - `proof-section.tsx` → Métricas reales (meses positivos, drawdown, años, etc.)
   - `bots-section.tsx` → Datos de GC-Tech y GC-Gold (o nombres reales de sus bots)
   - `how-it-works-section.tsx` → Proceso real de onboarding
   - `calculator-section.tsx` → ROI basado en performance real
   - `faq-section.tsx` → FAQs reales de Gustavo
   - `qualification-form.tsx` → Ajustar capital mínimo real

3. **SEO y Meta Tags:**
   - Actualizar `layout.tsx` con keywords reales
   - Open Graph images con branding de Gustavo

### Criterios de Éxito:
- ✅ Zero placeholders
- ✅ Todos los números son reales
- ✅ Testimonios auténticos con nombres reales
- ✅ FAQs basadas en preguntas reales de sus clientes

---

## 🎯 FASE 2: Integración de Leads (N8N + CRM)

**Objetivo:** Capturar y clasificar leads automáticamente.

### Tareas:
1. **Webhook N8N:**
   - Crear workflow N8N para recibir submissions del formulario
   - Calcular S.C.O.R.E. automático (0-50 puntos)
   - Clasificar lead: 🔥 Hot / 🟡 Warm / 🔵 Cold / ❄️ Unqualified

2. **Notificaciones:**
   - WhatsApp a Gustavo para Hot Leads (>45 puntos)
   - Email automático al lead con próximos pasos
   - Guardar en CRM (Todoist, Notion, o Google Sheets)

3. **Follow-up Automation:**
   - Secuencia de emails automática según clasificación
   - Recordatorios para Gustavo de leads pendientes

### Criterios de Éxito:
- ✅ Lead llega a N8N en <5 segundos
- ✅ Gustavo recibe notificación de Hot Leads al instante
- ✅ Lead recibe email de confirmación automático
- ✅ Datos guardados en CRM centralizado

---

## 🎯 FASE 3: Optimización de Conversión

**Objetivo:** A/B testing y mejoras basadas en datos.

### Tareas:
1. **Analytics:**
   - Implementar Google Analytics 4
   - Meta Pixel para Facebook/Instagram Ads
   - Hotjar para heatmaps y session recordings

2. **A/B Testing:**
   - Probar 2-3 headlines diferentes
   - Probar 2 colores de CTA (dorado vs. verde)
   - Probar orden de secciones (Calculator antes o después de Bots)

3. **Optimizaciones:**
   - Lazy loading de imágenes
   - Animaciones suaves con Framer Motion
   - Mejoras de velocidad (Lighthouse score >90)

### Criterios de Éxito:
- ✅ Conversion rate >15% (visitantes → leads)
- ✅ Lighthouse score >90
- ✅ Datos de analytics mostrando secciones más efectivas

---

## 🎯 FASE 4: Escalabilidad y Automación

**Objetivo:** Escalar sin aumentar carga de trabajo manual.

### Tareas:
1. **Chatbot WhatsApp:**
   - Integrar Evolution API
   - Responder preguntas frecuentes automáticamente
   - Agendar llamadas de calificación

2. **Dashboard para Gustavo:**
   - Ver leads en tiempo real
   - Estadísticas de conversión
   - Performance de ads/tráfico

3. **Multi-idioma (opcional):**
   - Inglés para mercado USA
   - Portugués para Brasil

### Criterios de Éxito:
- ✅ 80% de preguntas respondidas por bot
- ✅ Gustavo puede ver leads sin acceder a N8N
- ✅ Sistema funciona 24/7 sin intervención manual

---

## 🔧 WORKFLOW CON MCP (Context Engineering)

### Paso 1: Crear INITIAL.md para cada feature
```markdown
## FEATURE:
[Descripción específica del cambio]

## CONTEXT:
- Datos de Gustavo ya capturados en formulario /onboarding
- Stack: Next.js 14, TypeScript, Tailwind, shadcn/ui
- Referencias: breakandbounce.com (diseño limpio)

## EXAMPLES:
- components/hero-section.tsx (actual con placeholders)
- components/proof-section.tsx (estructura actual)

## ACCEPTANCE CRITERIA:
- [ ] Zero placeholders
- [ ] Datos reales de Gustavo
- [ ] TypeScript sin errores
- [ ] Mobile responsive
```

### Paso 2: Generar PRP con `/generate-prp`
```bash
/generate-prp context-engineering/INITIAL/personalizar-hero.md
```

### Paso 3: Ejecutar PRP con `/execute-prp`
```bash
/execute-prp context-engineering/PRPs/personalizar-hero.md
```

### Paso 4: Validar y iterar
- Verificar localmente en http://localhost:3000
- Gustavo da feedback en `/feedback`
- Iterar hasta cumplir criterios

---

## 📊 MÉTRICAS DE ÉXITO

### KPIs Técnicos:
- ✅ Build time <2 minutos
- ✅ Lighthouse score >90
- ✅ Zero TypeScript errors
- ✅ Zero runtime errors en producción

### KPIs de Negocio:
- 🎯 Conversion rate >15% (visitantes → leads)
- 🎯 >50% de leads calificados (score >35)
- 🎯 <24h tiempo de respuesta a Hot Leads
- 🎯 >70% satisfacción de Gustavo con el sistema

---

## 🚀 PRÓXIMOS PASOS INMEDIATOS

### Hoy (Prioridad Alta):
1. ✅ Conectar GitHub con Netlify → Deploy automático
2. 📝 Enviar link `/onboarding` a Gustavo → Llenar formulario
3. 🔍 Revisar datos completados → Validar coherencia
4. 🎨 Comenzar personalización con datos reales (FASE 1)

### Esta Semana:
- Completar FASE 1 (personalización)
- Crear webhook N8N para captura de leads
- Probar todo el flujo end-to-end

### Próximas 2 Semanas:
- FASE 2 completa (integración CRM)
- Primeros leads reales capturados
- Feedback de Gustavo sobre el sistema

---

## 📞 CONTACTO Y SOPORTE

**Desarrollador:** Maicol Martinez
**Cliente:** Gustavo Contreras
**Repo:** https://github.com/MrBlackSheep91/gc-capital-landing
**Local:** http://localhost:3000
**Producción:** TBD (post-deploy Netlify)

---

**Última actualización:** 2025-11-12
**Próxima revisión:** Post-deploy Netlify
