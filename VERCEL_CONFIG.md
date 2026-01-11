# Configuración de Vercel - Verificación

## ✅ Configuración Requerida en Vercel

Cuando estés en la pantalla de configuración del proyecto en Vercel, verifica estos campos:

### 1. **Root Directory** (Directorio Raíz)
```
frontend
```
⚠️ **IMPORTANTE**: Este campo debe ser `frontend` porque tu proyecto Angular está dentro de esa carpeta.

### 2. **Framework Preset**
```
Angular
```
(Debería detectarse automáticamente, pero si no, selecciónalo manualmente)

### 3. **Build Command** (Comando de Build)
```
npm run build
```
(Se detecta automáticamente desde el `package.json`)

### 4. **Output Directory** (Directorio de Salida)
```
dist/challenge-riu/browser
```
⚠️ **IMPORTANTE**: Para Angular 21, este es el path correcto.

### 5. **Install Command** (Comando de Instalación)
```
npm install
```
(Se detecta automáticamente)

---

## 📋 Resumen de la Configuración

Si Vercel no detecta automáticamente estos valores, configúralos manualmente:

- **Root Directory**: `frontend`
- **Framework**: Angular
- **Build Command**: `npm run build`
- **Output Directory**: `dist/challenge-riu/browser`
- **Install Command**: `npm install`

---

## 🔄 Alternativa: Usar vercel.json

El archivo `vercel.json` en la raíz del proyecto ya tiene la configuración correcta. Vercel lo detectará automáticamente, pero si ves campos para configurar, usa los valores de arriba.

---

## ✅ Checklist Antes de Deployar

- [ ] Root Directory: `frontend`
- [ ] Output Directory: `dist/challenge-riu/browser`
- [ ] Build Command: `npm run build`
- [ ] Framework: Angular (o detectado automáticamente)
- [ ] Plan: Hobby (gratis)

¡Una vez configurado, haz clic en "Deploy" o "Create"!

