# 🎯 Plan Completo: Finalizar Funnels GC Capital

**Fecha:** 19 de Noviembre 2025  
**Cliente:** Gustavo Contreras  
**Estado:** En Progreso  

---

## 📊 Estado Actual del Proyecto

### ✅ Lo que ya tenemos implementado:

1. **Landing Page Principal** (`/`)
   - Hero section con CTA
   - Secciones: Authority, Problem-Solution, Proof, Value Stack, Bots, How It Works, Calculator, FAQ
   - Formulario de calificación integrado
   - Diseño profesional con colores de GC Capital (#c2a255)

2. **Formulario de Captura con Auto-Save** (`/lead`)
   - Componente: `youtube-lead-form-autosave-v2.tsx`
   - Sistema de auto-guardado cada 500ms (debounce)
   - 4 steps: Datos básicos → Intereses → Experiencia → Tiempo/Objetivos
   - 14 campos capturados con UTM tracking
   - Conexión con backend funcionando

3. **Dashboard de Leads** (`/leads`)
   - Vista de todos los leads capturados
   - Filtros: Completados/Incompletos
   - Búsqueda por nombre, email, WhatsApp
   - Descarga CSV
   - Estadísticas básicas

4. **Backend API** (hybrid-crm)
   - Endpoint `/api/external/gc-capital`
   - POST: Crear lead
   - PATCH: Actualizar campos individuales
   - GET: Obtener lista de leads
   - Base de datos NEON PostgreSQL configurada
   - Tabla `gustavo_leads_captura_continua`

5. **Formularios Adicionales**
   - `/onboarding` - Para Gustavo llenar datos de su negocio
   - `/feedback` - Para dar feedback sobre la landing

---

## 🚧 Lo que falta implementar

### 🔴 PRIORIDAD ALTA - Completar esta semana

#### 1. Sistema de Calificación Automática de Leads
**Problema:** Actualmente los leads no tienen scoring/calificación automática.

**Solución:**
- Implementar sistema S.C.O.R.E. (0-100 puntos)
- Factores de scoring:
  - **Capital disponible** (0-30 pts): Más capital = mayor score
  - **Experiencia trading** (0-20 pts): Ha perdido dinero pero quiere aprender = mejor lead
  - **Timing** (0-15 pts): "Cuándo empezar" → "Inmediatamente" = 15pts
  - **Objetivo claro** (0-15 pts): Copy Trading/Mentoría = 15pts
  - **Completitud** (0-20 pts): Formulario 100% completo = 20pts

**Clasificación:**
- 🔥 **Super Hot** (80-100): Contactar inmediatamente
- 🟠 **Hot** (60-79): Contactar en 24h
- 🟡 **Warm** (40-59): Seguimiento en 48-72h
- 🔵 **Cold** (20-39): Nurturing largo plazo
- ⚪ **Unqualified** (<20): Comunidad gratuita

**Archivos a crear/modificar:**
- `lib/lead-scoring.ts` - Lógica de scoring
- `app/api/leads/route.ts` - Agregar cálculo de score en POST/PATCH
- Backend: `app/api/external/gc-capital/route.ts` - Calcular score antes de guardar

---

#### 2. Página de Gracias Dinámica con Próximos Pasos
**Problema:** Después de completar el formulario, el usuario solo ve un mensaje genérico.

**Solución:**
- Crear `/gracias/[leadId]` con información personalizada según score
- Mostrar próximos pasos específicos:
  - **Super Hot/Hot**: "Te contactaremos en las próximas 24 horas"
  - **Warm**: "Revisa tu email para siguientes pasos"
  - **Cold**: "Únete a nuestra comunidad gratuita"

**Contenido dinámico:**
- Badge de score visual (🔥/🟠/🟡/🔵)
- Link al grupo de WhatsApp (condicional según score)
- Video de bienvenida de Gustavo
- Botón "Agendar llamada" para Hot leads
- Descarga de PDF con estrategias (lead magnet)

**Archivos a crear:**
- `app/gracias/[leadId]/page.tsx`
- `components/thank-you-super-hot.tsx`
- `components/thank-you-warm.tsx`
- `components/thank-you-cold.tsx`

---

#### 3. Optimizar Auto-Save del Formulario
**Problema actual:** El auto-save funciona pero podría ser más robusto.

**Mejoras necesarias:**
- **Indicador visual de guardado**: "Guardando..." / "✓ Guardado"
- **Manejo de errores**: Si falla el save, reintentar automáticamente
- **Persistencia offline**: Guardar en localStorage si no hay conexión
- **Validación en tiempo real**: Marcar campos inválidos sin bloquear
- **Progress bar**: Mostrar % de completitud del formulario

**Archivos a modificar:**
- `components/youtube-lead-form-autosave-v2.tsx`
- Agregar componente `components/auto-save-indicator.tsx`

---

### 🟡 PRIORIDAD MEDIA - Próxima semana

#### 4. Sistema de Notificaciones Automáticas

**A. WhatsApp para Gustavo (Leads Hot)**
- Usar Evolution API o Twilio
- Mensaje inmediato cuando llega lead con score >60:
```
🔥 ¡NUEVO LEAD CALIENTE!

Nombre: [nombre]
WhatsApp: [numero]
Capital: [capital]
Score: [score]/100
Objetivo: [objetivo]

Link: [dashboard_url]/leads?id=[leadId]
```

**B. Email automático al Lead**
- Usar Resend o SendGrid
- Plantillas según clasificación:
  - **Super Hot**: Email con link para agendar llamada + WhatsApp directo
  - **Warm**: Email con recursos educativos + acceso a comunidad
  - **Cold**: Email de nurturing con serie de 5 emails

**Archivos a crear:**
- `lib/notifications/whatsapp.ts`
- `lib/notifications/email.ts`
- `lib/notifications/send-lead-notification.ts`
- Email templates en `emails/lead-hot.tsx`, `emails/lead-warm.tsx`

---

#### 5. Flujo de Recuperación para Leads Incompletos

**Problema:** Los leads que abandonan el formulario (40-60% típicamente) se pierden.

**Solución: Secuencia de recuperación automática**

**A. Email de recuperación (24h después)**
```
Subject: [Nombre], ¿te ayudo a completar tu perfil?

Hola [Nombre],

Vi que empezaste a completar tu perfil de inversor pero no lo terminaste.

Te toma solo 2 minutos más y podrás:
✅ Ver si calificas para Copy Trading
✅ Acceder a estrategias exclusivas
✅ Hablar directo conmigo por WhatsApp

Completar ahora: [link_con_leadId]

Gustavo Contreras
GC Capital
```

**B. WhatsApp de seguimiento (48h después)**
- Solo para leads con whatsapp y score >30
- Mensaje personalizado por parte de Gustavo

**C. Re-targeting con Ads**
- Pixel de Facebook/Instagram
- Mostrar anuncios solo a quienes abandonaron
- Ofrecer bonus por completar: "Ebook gratis"

**Archivos a crear:**
- `app/api/cron/recover-incomplete-leads/route.ts` (Cron job)
- `lib/email-sequences/incomplete-lead.ts`
- `emails/recovery-24h.tsx`

---

#### 6. Mejorar Dashboard de Leads

**Mejoras necesarias:**

**A. Filtros avanzados:**
- Por score (Super Hot, Hot, Warm, Cold)
- Por fuente (utm_source)
- Por país
- Por capital disponible (rangos)
- Por fecha de creación

**B. Analytics y métricas:**
- Tasa de conversión por fuente
- Tiempo promedio de completitud
- Campos más abandonados
- Gráfico de leads por día/semana
- Embudo de conversión visual

**C. Acciones rápidas:**
- Botón "Contactar por WhatsApp" (abre WhatsApp Web)
- Botón "Enviar Email"
- Marcar como "Contactado" / "Cerrado" / "No calificado"
- Agregar notas sobre el lead

**D. Exportación avanzada:**
- CSV con todos los campos
- Segmentación para campañas de email
- Integración con Google Sheets

**Archivos a modificar:**
- `app/leads/page.tsx`
- Crear `components/lead-analytics.tsx`
- Crear `components/lead-filters-advanced.tsx`
- Crear `components/lead-actions.tsx`

---

### 🟢 PRIORIDAD BAJA - Futuro

#### 7. A/B Testing del Formulario
- Probar diferentes headlines
- Probar diferentes ordenamientos de preguntas
- Probar formulario corto (5 preguntas) vs largo (12 preguntas)
- Medir conversión de cada variante

#### 8. Chatbot de Pre-calificación
- Widget en la landing principal
- Hace 3-4 preguntas clave antes del formulario
- Solo manda a formulario completo a leads calificados

#### 9. Video Sales Letter (VSL)
- Página `/vsl` con video de Gustavo
- Formulario al final del video
- Tracking de % de video visto

#### 10. Webinar Funnel
- Página de registro a webinar en vivo
- Secuencia de emails pre-webinar
- Replay con urgencia (disponible 48h)

---

## 🛠️ Stack Tecnológico

### Frontend (gc-capital-landing)
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui components
- Lucide icons
- Canvas confetti

### Backend (hybrid-crm-gc-capital)
- Next.js 14 API Routes
- Prisma ORM
- PostgreSQL (NEON)
- TypeScript

### Integraciones necesarias:
- **Email**: Resend o SendGrid
- **WhatsApp**: Evolution API o Twilio
- **Analytics**: Google Analytics 4 + Meta Pixel
- **A/B Testing**: Vercel Edge Config o Growthbook
- **Cron Jobs**: Vercel Cron o Inngest

---

## 📋 Checklist de Implementación

### Esta semana (Prioridad Alta)
- [ ] Implementar sistema de scoring de leads
- [ ] Crear lógica de calificación automática
- [ ] Agregar campo `score` a la tabla en NEON
- [ ] Crear página de gracias dinámica
- [ ] Agregar indicador visual de auto-save
- [ ] Mejorar manejo de errores en auto-save
- [ ] Testing completo del flujo end-to-end

### Próxima semana (Prioridad Media)
- [ ] Configurar Resend/SendGrid para emails
- [ ] Crear plantillas de email (Hot, Warm, Cold)
- [ ] Implementar notificación WhatsApp para Gustavo
- [ ] Crear sistema de recuperación de leads incompletos
- [ ] Mejorar dashboard con filtros avanzados
- [ ] Agregar analytics básicos al dashboard

### Futuro (Prioridad Baja)
- [ ] A/B testing framework
- [ ] Chatbot de pre-calificación
- [ ] Video Sales Letter page
- [ ] Webinar funnel

---

## 🎯 Métricas de Éxito

### KPIs Principales:
- **Tasa de conversión landing → formulario**: >25%
- **Tasa de completitud del formulario**: >60%
- **% de leads Hot/Super Hot**: >30%
- **Tiempo de respuesta a leads Hot**: <4 horas
- **Tasa de recuperación de incompletos**: >15%

### Objetivos de Gustavo:
- Capturar mínimo 50 leads/mes
- Cerrar mínimo 5 clientes/mes
- ROI positivo en campañas de ads en 60 días

---

## 📞 Próximos Pasos Inmediatos

1. **Hoy**: Implementar sistema de scoring
2. **Mañana**: Crear página de gracias
3. **Esta semana**: Optimizar auto-save y testing
4. **Próxima semana**: Notificaciones automáticas

---

## 🤝 Preguntas para Gustavo

Antes de continuar, necesitamos confirmar:

1. **Capital mínimo real**: ¿Cuál es el capital mínimo que aceptas?
2. **Rangos de capital**: ¿Qué rangos son más atractivos? ($200-500, $500-1000, etc.)
3. **Proceso de onboarding**: ¿Cuáles son los pasos exactos después del lead?
4. **WhatsApp**: ¿Prefieres que te notifiquemos por WhatsApp o email?
5. **Grupo de WhatsApp**: ¿Link del grupo que querés compartir con leads calificados?
6. **Email de seguimiento**: ¿Querés revisar las plantillas antes de enviar?

---

**Última actualización:** 2025-11-19  
**Próxima revisión:** Post-implementación de scoring
