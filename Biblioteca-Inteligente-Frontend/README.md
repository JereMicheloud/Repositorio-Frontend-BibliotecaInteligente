# Biblioteca Inteligente - Frontend

## Configuración para Vercel

### Variables de entorno necesarias:
- `VITE_API_URL`: URL del backend en Render

### Deployment en Vercel:
1. Conecta tu repositorio de GitHub
2. Framework Preset: Vite
3. Build Command: `npm run build`
4. Output Directory: `dist`
5. Install Command: `npm install`

### Configuración del Backend:
Asegúrate de que tu backend en Render tenga configurado CORS para permitir requests desde tu dominio de Vercel.

### Estructura del proyecto:
- `/src/config/api.js` - Configuración centralizada de la API
- `/.env` - Variables de entorno para desarrollo
- `/.env.production` - Variables de entorno para producción
- `/vercel.json` - Configuración de deployment para Vercel

## Desarrollo local

```bash
npm install
npm run dev
```

## Build para producción

```bash
npm run build
```

---

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
