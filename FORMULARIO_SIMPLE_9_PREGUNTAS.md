# 🎯 Formulario Simple - 9 Preguntas + Datos Básicos

**Objetivo:** Capturar leads de forma simple y rápida, guardar en NEON

---

## 📋 ESTRUCTURA DEL FORMULARIO

### **STEP 1: Datos Básicos (3 campos)**

```
1. Nombre completo
   - Campo de texto

2. Email
   - Campo de email

3. WhatsApp
   - Campo de teléfono (con código país)
```

---

### **STEP 2: Intereses y Objetivos (3 preguntas)**

```
4. ¿Qué te interesa? (MÚLTIPLE SELECCIÓN)
   □ Aprender a operar
   □ Invertir en automático (copy trading)
   □ Unirme a una comunidad
   □ Obtener una mentoría
   □ Encontrar una estrategia ganadora

5. ¿Cuál es tu mayor reto con el trading hoy?
   ○ No encuentro una estrategia que funcione
   ○ No tengo tiempo para estudiar/operar
   ○ He perdido dinero y necesito recuperarme
   ○ No sé por dónde empezar
   ○ Otro: _______

6. Si pudieras lograr UNA cosa en el próximo año, ¿cuál sería?
   - Campo de texto largo (meta principal)
```

---

### **STEP 3: Experiencia y Capital (3 preguntas)**

```
7. ¿Tienes experiencia en trading?
   ○ Nunca he operado
   ○ He operado en demo
   ○ Opero con dinero real
   ○ Soy trader profesional

8. ¿Tienes tiempo para estudiar/practicar?
   ○ Mucho tiempo (más de 10 hrs/semana)
   ○ Algo de tiempo (3-10 hrs/semana)
   ○ Poco tiempo (1-3 hrs/semana)
   ○ No tengo tiempo

9. ¿Cuánto capital tienes disponible para invertir?
   ○ Menos de $200
   ○ $200-$500
   ○ $500-$1,000
   ○ $1,000-$5,000
   ○ $5,000-$10,000
   ○ Más de $10,000
```

---

### **STEP 4: Confirmación (Confetti + Guardar)**

```
✅ ¡Gracias por completar el formulario!

Hemos recibido tu información y pronto nos pondremos en contacto contigo.

[Botón: Volver al inicio]
```

---

## 💾 Tabla en NEON

```sql
CREATE TABLE gustavo_leads_simple (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  
  -- Datos básicos
  nombre VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  whatsapp VARCHAR(20),
  
  -- Intereses (array)
  intereses TEXT[],  -- ['aprender', 'copy_trading', 'comunidad', 'mentoria', 'estrategia']
  
  -- Reto
  reto_mayor VARCHAR(255),
  meta_proxima_ano TEXT,
  
  -- Experiencia
  experiencia VARCHAR(50),
  tiempo_disponible VARCHAR(50),
  capital_disponible VARCHAR(50),
  
  -- UTM
  utm_source VARCHAR(50),
  utm_campaign VARCHAR(255),
  utm_medium VARCHAR(50),
  
  -- Metadata
  pais VARCHAR(50),
  ip_address VARCHAR(50),
  
  -- Timestamps
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Índices
CREATE INDEX idx_gustavo_leads_email ON gustavo_leads_simple(email);
CREATE INDEX idx_gustavo_leads_created ON gustavo_leads_simple(created_at);
CREATE INDEX idx_gustavo_leads_utm_source ON gustavo_leads_simple(utm_source);
```

---

## 🎯 Implementación

**Archivos a modificar:**
1. `components/youtube-lead-form-v2.tsx` - Actualizar con 9 preguntas
2. `app/api/leads/route.ts` - Guardar en NEON usando MCP
3. `lib/qualification-logic.ts` - NO usar (solo capturar)

---

**¿Empezamos a implementar?**
