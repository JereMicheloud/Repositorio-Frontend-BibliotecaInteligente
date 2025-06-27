# Guía de Deployment en Vercel - BiblioTech Frontend

## Estado del Proyecto ✅

✅ **Build exitoso**: El proyecto compila sin errores  
✅ **Configuración de Vercel**: Archivos configurados correctamente  
✅ **Variables de entorno**: Configuradas para producción  
✅ **Funciones de logout**: Corregidas y funcionando  
✅ **Importaciones**: Todas las rutas relativas corregidas  

## Configuración de Vercel

### 1. Configuración del Proyecto en Vercel

Usar estas configuraciones en el dashboard de Vercel:

- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`
- **Development Command**: `npm run dev`
- **Root Directory**: `Biblioteca-Inteligente-Frontend`

### 2. Variables de Entorno en Vercel

Configurar estas variables en la sección "Environment Variables" del proyecto:

```
VITE_API_URL=https://repositorio-backend-bibliotecainteligente.onrender.com
VITE_APP_NAME=BiblioTech - Biblioteca Inteligente
VITE_EMAILJS_PUBLIC_KEY=R4sHYJJWxUgNJQY0w
```

### 3. Archivos de Configuración

#### vercel.json
```json
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "dist"
      }
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ],
  "env": {
    "VITE_API_URL": "@vite_api_url"
  }
}
```

#### .env.production
```bash
# Variables de entorno para producción
VITE_API_URL=https://repositorio-backend-bibliotecainteligente.onrender.com
VITE_APP_NAME=BiblioTech - Biblioteca Inteligente
VITE_EMAILJS_PUBLIC_KEY=R4sHYJJWxUgNJQY0w
```

## Problemas Resueltos

### 1. Errores de Importación ✅
- **Problema**: Rutas relativas incorrectas en imports de `api.js`
- **Solución**: Cambiadas todas las rutas relativas a `../config/api` en componentes de Turnos

### 2. Función handleLogout no definida ✅
- **Problema**: Componentes esperaban `handleLogout` pero solo existía `logout`
- **Solución**: Creado alias `handleLogout = logout` en App.jsx

### 3. Header no recibía función de logout ✅
- **Problema**: Header esperaba prop `onLogout` pero recibía `handleLogout`
- **Solución**: Corregida la función en Header.jsx para usar `onLogout`

### 4. Componentes sin función de logout ✅
- **Problema**: Algunos componentes no recibían la función de logout
- **Solución**: Pasada función `logout` a todos los componentes que la necesiten

## Estructura de Rutas Protegidas

```jsx
// Rutas que requieren autenticación de usuario
<Route path="/panel" element={
  <RequireAuth usuario={usuario}>
    <PanelUsuario usuario={usuario} logout={logout} handleLogout={handleLogout} />
  </RequireAuth>
} />

<Route path="/turnos" element={
  <RequireAuth usuario={usuario}>
    <Turno usuario={usuario} logout={logout} handleLogout={handleLogout} />
  </RequireAuth>
} />

// Rutas que requieren autenticación de admin
<Route path="/admin" element={
  <RequireAuth usuario={usuario} adminOnly={true}>
    <AdminPanel usuario={usuario} logout={logout} handleLogout={handleLogout} />
  </RequireAuth>
} />

<Route path="/admin-turnos" element={
  <RequireAuth usuario={usuario} adminOnly={true}>
    <AdminPanelTurno usuario={usuario} logout={logout} handleLogout={handleLogout} />
  </RequireAuth>
} />
```

## Función de Logout

La función de logout está implementada en `App.jsx` y:

1. Hace una petición POST al endpoint `/api/auth/logout`
2. Conserva las últimas 3 búsquedas del catálogo
3. Limpia el localStorage (token, userId, usuario)
4. Resetea el estado del usuario
5. Redirige al login

```jsx
async function logout() {
  const token = localStorage.getItem('token');
  if (token) {
    try {
      await fetch(buildApiUrl(apiConfig.endpoints.logout), {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` }
      });
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  }

  // Conserva solo las últimas 3 búsquedas en el historial del catálogo
  const busquedas = JSON.parse(localStorage.getItem('busquedasCatalogo') || '[]');
  const ultimas3 = busquedas.slice(-3);

  // Borra solo los datos de sesión
  localStorage.removeItem('token');
  localStorage.removeItem('userId');
  localStorage.removeItem('usuario');

  // Borra el historial completo del catálogo y restaura solo las últimas 3 búsquedas
  localStorage.removeItem('busquedasCatalogo');
  if (ultimas3.length > 0) {
    localStorage.setItem('busquedasCatalogo', JSON.stringify(ultimas3));
  }

  // Actualiza el estado del usuario
  setUsuario(null);
  
  // Redirige al login
  window.location.href = '/login';
}
```

## Próximos Pasos

1. **Deploy en Vercel**: Subir el código y configurar las variables de entorno
2. **Probar en producción**: Verificar que la conexión con el backend funcione
3. **Probar logout**: Asegurar que el logout funcione en todos los paneles
4. **Monitorear logs**: Revisar los logs de Vercel para cualquier error en producción

## Comandos Útiles

```bash
# Desarrollo local
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview

# Verificar el build
npm run vercel-build
```

## Notas Importantes

- El backend debe estar funcionando en: `https://repositorio-backend-bibliotecainteligente.onrender.com`
- Las rutas están configuradas para SPA (Single Page Application)
- Todas las rutas no encontradas redirigen a `index.html`
- El proyecto usa Vite como bundler
- React Router maneja la navegación del lado del cliente
