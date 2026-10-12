# 📚 BiblioTech - Biblioteca Inteligente Frontend

**SPA del sistema BiblioTech: catálogo, asistente IA con voz, turnos y paneles. ([🇬🇧 English version](README.en.md))**

**[🚀 Demo en vivo](https://bibliotechjf.vercel.app) · [⚡ Backend API](https://repositorio-backend-bibliotecainteligente.onrender.com/api/health) · [📦 Repo](https://github.com/FelipeDiazAimar/repositoriofrontendbibliotech) · [📚 Monorepo](https://github.com/FelipeDiazAimar/BibliotecaInteligente)**

Una aplicación web moderna y completa para la gestión inteligente de bibliotecas, desarrollada con React y Vite. BiblioTech ofrece una experiencia de usuario fluida y funcionalidades avanzadas como asistente de IA por voz, sistema de turnos y gestión completa de catálogo.

## 🌐 Enlaces del Proyecto

### 🌐 Aplicaciones en Vivo
- **🖥️ Frontend (Vercel):** https://bibliotechjf.vercel.app
- **⚡ Backend API (Render):** https://repositorio-backend-bibliotecainteligente.onrender.com

### 📂 Repositorios de Código
- **🎨 Frontend Repository:**  https://github.com/JereMicheloud/Repositorio-Frontend-BibliotecaInteligente.git
- **⚙️ Backend Repository:** https://github.com/FelipeDiazAimar/Repositorio-Backend-BibliotecaInteligente.git

## ✨ Características Principales

### 🏛️ Para Usuarios
- **Catálogo Inteligente**: Búsqueda avanzada con filtros por categoría, autor, editorial
- **Asistente IA por Voz**: Consultas mediante reconocimiento de voz con respuestas inteligentes
- **Sistema de Turnos**: Reserva de turnos para atención personalizada con invitación a otros usuarios
- **Panel de Usuario**: Gestión personal de préstamos, historial y configuraciones
- **Diseño Responsivo**: Interfaz adaptable a dispositivos móviles y desktop

### 🔧 Para Administradores
- **Panel de Administración**: Gestión completa de libros, usuarios y turnos
- **CRUD de Libros**: Agregar, editar y eliminar libros del catálogo
- **Gestión de Usuarios**: Administración de cuentas y permisos
- **Dashboard de Turnos**: Visualización y gestión de turnos de biblioteca

### 🎨 Experiencia de Usuario
- **Modo Oscuro/Claro**: Tema dinámico para mejor experiencia visual
- **Animaciones Fluidas**: Transiciones y efectos visuales modernos
- **Navegación Intuitiva**: Diseño centrado en la usabilidad
- **Notificaciones en Tiempo Real**: Feedback inmediato de acciones

## 🛠️ Tecnologías Utilizadas

### Frontend
- **React 19** - Framework principal
- **Vite** - Build tool y dev server
- **React Router DOM 7** - Enrutamiento
- **Material-UI** - Componentes y iconos
- **EmailJS** - Envío de correos desde el cliente

### Estilos y UI
- **CSS Modules** - Estilos modulares
- **Flexbox/Grid** - Layout responsivo
- **Custom CSS** - Animaciones y efectos personalizados

### Herramientas de Desarrollo
- **ESLint** - Linting de código
- **Vite** - Hot Module Replacement
- **npm** - Gestión de dependencias

## 📁 Estructura del Proyecto

```
Biblioteca-Inteligente-Frontend/
├── public/                     # Archivos estáticos
│   ├── fondo-biblioteca.png   # Imagen de fondo principal
│   ├── fondo-biblioteca2.png  # Imagen alternativa
│   └── vite.svg               # Favicon
├── src/
│   ├── components/            # Componentes reutilizables
│   │   ├── AdminBookForm.jsx  # Formulario de administración de libros
│   │   ├── AdminTabs.jsx      # Pestañas del panel admin
│   │   ├── AsistenteIA.jsx    # Componente del asistente IA
│   │   ├── Footer.jsx         # Pie de página
│   │   ├── Header.jsx         # Cabecera principal
│   │   ├── LibroCard.jsx      # Tarjeta de libro
│   │   ├── LibroForm.jsx      # Formulario de libros
│   │   ├── Loader.jsx         # Componente de carga
│   │   ├── Navbar.jsx         # Barra de navegación
│   │   ├── RutasProtegidas.jsx # Protección de rutas
│   │   └── Turnos/            # Componentes del sistema de turnos
│   ├── pages/                 # Páginas principales
│   │   ├── AdminPanel.jsx     # Panel de administración
│   │   ├── AdminPanelTurno.jsx # Gestión de turnos (admin)
│   │   ├── BookDetail.jsx     # Detalle de libro
│   │   ├── CatalogoPage.jsx   # Página del catálogo
│   │   ├── Contacto.jsx       # Página de contacto
│   │   ├── LoginAlumno.jsx    # Login de usuarios
│   │   ├── PanelUsuario.jsx   # Panel del usuario
│   │   ├── portada.jsx        # Página de inicio
│   │   ├── RegistroUsuario.jsx # Registro de usuarios
│   │   ├── Turno.jsx          # Sistema de turnos
│   │   └── VozIA.jsx          # Asistente de voz IA
│   ├── styles/                # Archivos CSS
│   ├── context/               # Context API para estado global
│   ├── config/                # Configuración de API
│   ├── utils/                 # Utilidades y helpers
│   ├── App.jsx               # Componente principal
│   ├── main.jsx              # Punto de entrada
│   └── index.css             # Estilos globales
├── .env                      # Variables de entorno
├── .env.development          # Variables para desarrollo
├── .env.production           # Variables para producción
├── package.json              # Dependencias y scripts
├── vite.config.js           # Configuración de Vite
├── vercel.json              # Configuración de deployment
└── README.md                # Documentación
```

## 🚀 Instalación y Desarrollo

### Prerrequisitos
- Node.js (versión 18 o superior)
- npm o yarn
- Git

### Instalación Local

1. **Clonar el repositorio**
```bash
git clone [URL-DEL-REPOSITORIO]
cd Repositorio-Frontend-BibliotecaInteligente/Biblioteca-Inteligente-Frontend
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Configurar variables de entorno**
```bash
# Crear archivo .env.local con:
VITE_API_URL=https://repositorio-backend-bibliotecainteligente.onrender.com
VITE_APP_NAME=BiblioTech - Biblioteca Inteligente
VITE_EMAILJS_PUBLIC_KEY=tu_clave_emailjs
```

4. **Ejecutar en modo desarrollo**
```bash
npm run dev
```

5. **Abrir en el navegador**
```
http://localhost:5173
```

### Scripts Disponibles

```bash
npm run dev          # Servidor de desarrollo
npm run build        # Build para producción
npm run preview      # Vista previa del build
npm run lint         # Verificar código con ESLint
npm start           # Servidor de producción
```

## 🌐 Deployment en Vercel

### Configuración Automática

El proyecto está configurado para deployment automático en Vercel:

1. **Variables de entorno en Vercel:**
   - `VITE_API_URL`: URL del backend en Render
   - `VITE_APP_NAME`: Nombre de la aplicación
   - `VITE_EMAILJS_PUBLIC_KEY`: Clave pública de EmailJS

2. **Configuración en `vercel.json`:**
```json
{
  "framework": "vite",
  "buildCommand": "cd Biblioteca-Inteligente-Frontend && npm install && npm run build",
  "outputDirectory": "Biblioteca-Inteligente-Frontend/dist",
  "installCommand": "cd Biblioteca-Inteligente-Frontend && npm install",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### Deployment Manual

1. Conectar repositorio de GitHub a Vercel
2. Framework Preset: **Vite**
3. Build Command: `npm run build`
4. Output Directory: `dist`
5. Install Command: `npm install`

## 🔧 Configuración del Backend

### CORS Configuration
El backend debe tener configurado CORS para permitir requests desde:
- `https://tu-dominio.vercel.app`
- `http://localhost:5173` (desarrollo)

### Variables de Entorno Backend
```bash
# Base de datos
DB_HOST=aws-0-sa-east-1.pooler.supabase.com
DB_PORT=5432
DB_NAME=postgres
DB_USER=postgres.qazglqqykuplurfehcbz
DATABASE_URL=postgresql://[credenciales]@aws-0-sa-east-1.pooler.supabase.com:5432/postgres
```

## 📱 Funcionalidades Detalladas

### Sistema de Autenticación
- Login con DNI y contraseña
- Registro de nuevos usuarios
- Roles: Usuario y Administrador
- Protección de rutas por rol

### Catálogo Inteligente
- Búsqueda en tiempo real
- Filtros por categoría
- Paginación optimizada
- Vista detallada de libros
- Búsquedas sugeridas

### Asistente IA por Voz
- Reconocimiento de voz nativo
- Procesamiento de consultas en lenguaje natural
- Respuestas contextuales sobre la biblioteca
- Historial de conversaciones

### Sistema de Turnos
- Creación de turnos con datos básicos
- Invitación de otros usuarios
- Estados: Pendiente, Aceptado, Cancelado
- Panel de gestión para administradores

### Panel de Administración
- Dashboard con métricas
- CRUD completo de libros
- Gestión de usuarios
- Administración de turnos
- Historial de actividades

## 🎨 Temas y Diseño

### Modo Oscuro/Claro
- Alternancia automática según preferencias del sistema
- Persistencia de configuración
- Transiciones suaves entre temas

## 🔒 Seguridad

- Validación de formularios
- Sanitización de inputs
- Protección de rutas sensibles
- Manejo seguro de tokens JWT
- HTTPS en producción

## 📊 Performance

### Optimizaciones
- Lazy loading de componentes
- Code splitting automático
- Optimización de imágenes
- Minificación de assets
- Caching de API calls

### Métricas
- Tiempo de carga inicial < 3s
- First Contentful Paint < 1.5s
- Largest Contentful Paint < 2.5s
- Score de Lighthouse > 90

## 🤝 Contribución

1. Fork el proyecto
2. Crear una rama feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit los cambios (`git commit -m 'Agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abrir un Pull Request

### Estándares de Código
- Usar ESLint para mantener consistencia
- Nombrar componentes en PascalCase
- Usar hooks personalizados para lógica reutilizable
- Comentar código complejo
- Escribir commits descriptivos

## 🐛 Solución de Problemas

### Problemas Comunes

**Error de CORS:**
- Verificar configuración del backend
- Revisar variables de entorno
- Comprobar URLs en requests

**Build fallando:**
- Limpiar node_modules: `rm -rf node_modules && npm install`
- Verificar versiones de Node.js
- Revisar variables de entorno

**Deployment issues:**
- Comprobar configuración de Vercel
- Verificar paths en vercel.json
- Revisar logs de build

## 👤 Autor, contacto y licencia

**Felipe Diaz Aimar** — Desarrollo full-stack (React, Vite, MUI).
- 💼 LinkedIn: https://www.linkedin.com/in/felipe-aimar/
- 📧 Email: felipediazaimar@gmail.com
- 🐙 GitHub: https://github.com/FelipeDiazAimar
- 🌐 Demo: https://bibliotechjf.vercel.app

Colaboración: [@JereMicheloud](https://github.com/JereMicheloud). MIT.

> **English TL;DR:** BiblioTech Frontend is a React 19 + Vite + MUI + Router 7 SPA: smart catalog, voice AI assistant, room bookings with invites, user/admin panels, dark/light mode. Demo mode (`VITE_DEMO_MODE=true`) runs with zero backend (`demo@biblioteca.local` / `demo1234`, `fetchConFallback`); real mode with `VITE_API_URL`. Run inside `Biblioteca-Inteligente-Frontend/`: `npm install && npm run dev` (`:5173`). Full English docs in [README.en.md](README.en.md).
