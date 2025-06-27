# Biblioteca Inteligente - Frontend

## Deployment en Vercel

### Variables de Entorno Requeridas en Vercel:

1. `VITE_API_URL` = `https://repositorio-backend-bibliotecainteligente.onrender.com`
2. `VITE_APP_NAME` = `BiblioTech - Biblioteca Inteligente`

### Pasos para Deploy:

1. Conectar este repositorio a Vercel
2. Configurar las variables de entorno en el dashboard de Vercel
3. Deploy automático

### Archivos importantes:
- `vercel.json` - Configuración de Vercel
- `.env.production` - Variables de producción (no se sube a git)
- `src/config/api.js` - Configuración de API centralizada

### Build local:
```bash
npm install
npm run build
```

### Desarrollo local:
```bash
npm install
npm run dev
```
