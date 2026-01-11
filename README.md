# Challenge RIU - Angular 21 + Tailwind CSS 4

Maquetación de interfaz diseñada en Figma usando Angular 21 con componentes standalone y Tailwind CSS 4.

## 🚀 Inicio Rápido

### Opción 1: Con Docker (Recomendado)

**Prerequisitos:** Docker y Docker Compose instalados

```bash
# Levantar contenedor y servidor de desarrollo
docker-compose up
```

**Acceso:** http://localhost:4200

**Nota:**
- La primera vez, Docker construirá la imagen, instalará dependencias automáticamente y arrancará el servidor
- En ejecuciones siguientes, solo levantará el contenedor con las dependencias ya instaladas
- Si necesitas reconstruir la imagen, usa: `docker-compose up --build`

---

### Opción 2: Sin Docker

**Prerequisitos:** Node.js 20+ y npm instalados

```bash
# 1. Navegar a la carpeta frontend
cd frontend

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor de desarrollo
npm start
# o directamente
ng serve
```

**Acceso:** http://localhost:4200

---

## 📁 Estructura del Proyecto

```
challenger/
├── frontend/              # Proyecto Angular 21
│   ├── src/              # Código fuente
│   ├── Dockerfile        # Configuración Docker
│   └── postcss.config.js # Configuración Tailwind CSS 4
├── documentation/        # Documentación completa
│   ├── images/          # Capturas de pantalla
│   ├── CHALLENGE_REQUIREMENTS.md
│   ├── SETUP.md
│   ├── SETUP_SUMMARY.md
│   └── CHANGELOG.md
├── docker-compose.yml
└── README.md
```

## 📚 Documentación

- **[Requisitos del Challenge](./documentation/CHALLENGE_REQUIREMENTS.md)** - Especificaciones y requisitos
- **[Setup Completo](./documentation/SETUP.md)** - Guía detallada paso a paso
- **[Resumen del Setup](./documentation/SETUP_SUMMARY.md)** - Checklist y resumen rápido
- **[Breakpoints Responsive](./documentation/RESPONSIVE_BREAKPOINTS.md)** - Breakpoints y diseño responsive
- **[Diseño Responsive Detallado](./documentation/RESPONSIVE_DESIGN.md)** - Análisis completo de breakpoints
- **[Changelog](./documentation/CHANGELOG.md)** - Historial de commits y versiones

## 🛠️ Stack Tecnológico

- **Angular 21** - Framework con componentes standalone
- **Tailwind CSS 4** - Framework CSS utility-first
- **Docker** - Contenedorización del entorno (opcional)
- **Node.js 20** - Entorno de ejecución
- **SCSS** - Preprocesador CSS

## 📝 Comandos Útiles

### Con Docker
```bash
# Levantar contenedor y servidor de desarrollo
docker-compose up

# Levantar contenedor y reconstruir imagen (si hay cambios en Dockerfile)
docker-compose up --build

# Levantar en segundo plano
docker-compose up -d

# Ver logs
docker-compose logs -f angular-dev

# Ejecutar comandos dentro del contenedor
docker-compose exec angular-dev <comando>

# Generar componente
docker-compose exec angular-dev ng generate component nombre-componente

# Instalar paquete
docker-compose exec angular-dev npm install nombre-paquete
```

### Sin Docker
```bash
# Generar componente
cd frontend
ng generate component nombre-componente

# Instalar paquete
npm install nombre-paquete

# Build para producción
npm run build
```

## 🔗 Enlaces

- [Proyecto Desplegado en Vercel](https://mindata-riu-challenge.vercel.app/) - Versión en producción
- [Diseño Figma](https://www.figma.com/design/oXuQAestvw8eMPnUixWZiq/Challenge-RIU?node-id=9-637&t=6xmNIChbD3PRG8bL-1)
- [Documentación Angular](https://angular.dev)
- [Documentación Tailwind CSS 4](https://tailwindcss.com/docs)
