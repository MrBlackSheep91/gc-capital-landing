# 🚀 Deployment a Netlify - GC Capital Landing

## 📋 Pre-requisitos

- Cuenta de Netlify
- Repositorio en GitHub (gustavo-gc-capital/landing)
- Variables de entorno configuradas

---

## 🔧 Variables de Entorno

Configurar en Netlify:

```env
NEXT_PUBLIC_API_URL=https://tu-crm-backend.vercel.app
NEXT_PUBLIC_WHATSAPP_GROUP_LINK=https://chat.whatsapp.com/FKt1s873osJDnubIxrdKIT
```

---

## 📦 Configuración de Build

### netlify.toml

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"

[build.environment]
  NODE_VERSION = "18"
  NPM_FLAGS = "--legacy-peer-deps"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

## 🎯 URLs del Sistema

### **Frontend (Landing Page)**
- Producción: `https://gc-capital.netlify.app` (o tu dominio)
- Formulario: `https://gc-capital.netlify.app/lead`

### **Backend (CRM)**
- Producción: `https://tu-crm-backend.vercel.app`
- API Leads: `https://tu-crm-backend.vercel.app/api/external/gc-capital`

### **Base de Datos**
- NEON PostgreSQL: `ep-empty-smoke-acn9em4h`
- Prisma Studio: Acceso local via `npx prisma studio`

---

## 🔗 Links UTM para Videos de YouTube

### Formato de Links

```
https://gc-capital.netlify.app/lead?utm_source=youtube&utm_campaign=video-[nombre]&utm_medium=video
```

### Ejemplos:

1. **Video de Copy Trading:**
```
https://gc-capital.netlify.app/lead?utm_source=youtube&utm_campaign=video-copy-trading&utm_medium=video
```

2. **Video de Mentoría:**
```
https://gc-capital.netlify.app/lead?utm_source=youtube&utm_campaign=video-mentoria&utm_medium=video
```

3. **Video de Estrategia:**
```
https://gc-capital.netlify.app/lead?utm_source=youtube&utm_campaign=video-estrategia&utm_medium=video
```

---

## 📊 Tracking

### ¿Qué se captura?

✅ **Parámetros UTM:**
- `utm_source` (origen: youtube, instagram, facebook)
- `utm_campaign` (campaña específica)
- `utm_medium` (medio: video, post, story)

✅ **Datos de usuario:**
- País (detectado automáticamente por IP)
- Todos los campos del formulario
- Timestamp de cada campo guardado

✅ **Interacciones:**
- Click en grupo de WhatsApp
- Timestamp de acceso al grupo
- Progreso en el formulario

---

## 🚀 Pasos de Deployment

### 1. **Conectar con GitHub**

```bash
cd c:\Users\maico\gc-capital-landing
git add .
git commit -m "feat: sistema de captura de leads con auto-save"
git push origin main
```

### 2. **Importar a Netlify**

1. Ir a https://app.netlify.com
2. Click en "Add new site" → "Import an existing project"
3. Conectar con GitHub
4. Seleccionar repositorio `gustavo-gc-capital/landing`
5. Configurar build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Agregar variables de entorno
7. Click "Deploy"

### 3. **Configurar Dominio (Opcional)**

1. En settings → Domain management
2. Agregar dominio personalizado
3. Configurar DNS según instrucciones

---

## 🧪 Testing en Producción

### 1. **Probar Formulario**
```
https://gc-capital.netlify.app/lead
```

### 2. **Probar con UTM**
```
https://gc-capital.netlify.app/lead?utm_source=youtube&utm_campaign=test&utm_medium=video
```

### 3. **Verificar en CRM**
- Ver los leads en: `https://tu-crm-backend.vercel.app/dashboard/gustavo/leads`
- Verificar que se capturen los UTM correctamente

---

## 🔍 Verificación

### Checklist Post-Deployment:

- [ ] ✅ Formulario carga correctamente
- [ ] ✅ Auto-save funciona (campos se guardan automáticamente)
- [ ] ✅ UTM se capturan correctamente
- [ ] ✅ WhatsApp link funciona
- [ ] ✅ Leads aparecen en el CRM
- [ ] ✅ País se detecta correctamente
- [ ] ✅ Autocompletado de campos básicos funciona

---

## 📝 Notas Importantes

### **Backend (CRM)**
El CRM debe estar desplegado PRIMERO en Vercel/Railway antes de desplegar el frontend.

### **Base de Datos**
NEON está configurado con el proyecto `ep-empty-smoke-acn9em4h` en branch `main`.

### **CORS**
El CRM debe tener configurado el CORS para permitir requests desde el dominio de Netlify.

---

## 🆘 Troubleshooting

### Error: "Failed to fetch"
- Verificar `NEXT_PUBLIC_API_URL` en variables de entorno
- Verificar CORS en el backend

### Leads no aparecen en CRM
- Verificar conexión a NEON
- Verificar API endpoint `/api/external/gc-capital`
- Revisar logs en Netlify Functions

### UTM no se capturan
- Verificar que el link incluya los parámetros correctamente
- Verificar en backend que los campos UTM estén mapeados

---

## 📧 Contacto

Para dudas o soporte: Gustavo Contreras
