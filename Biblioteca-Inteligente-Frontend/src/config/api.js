// Configuración de API para el frontend
const API_CONFIG = {
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000',
  endpoints: {
    auth: {
      login: '/api/auth/login',
      register: '/api/auth/register'
    },
    libros: {
      base: '/api/libros',
      buscar: '/api/libros/buscar',
      portada: (id) => `/api/libros/${id}/portada`
    },
    usuarios: '/api/usuarios',
    turnos: {
      base: '/api/turnos',
      full: '/api/turnos/full/all'
    },
    asistente: {
      ask: '/api/asistente/ask',
      historial: '/api/asistente/historial'
    },
    busquedas: '/api/busquedas'
  }
};

// Función helper para construir URLs completas
export const buildApiUrl = (endpoint) => {
  return `${API_CONFIG.baseURL}${endpoint}`;
};

export default API_CONFIG;
