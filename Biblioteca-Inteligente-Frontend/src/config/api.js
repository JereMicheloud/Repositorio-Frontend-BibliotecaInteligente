// Configuración de la API
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export const apiConfig = {
  baseURL: API_BASE_URL,
  endpoints: {
    // Auth
    login: '/api/auth/login',
    register: '/api/auth/register',
    logout: '/api/auth/logout',
    
    // Usuarios
    usuarios: '/api/usuarios',
    usuarioById: (id) => `/api/usuarios/${id}`,
    usuarioByDni: (dni) => `/api/usuarios/dni/${dni}`,
    
    // Libros
    libros: '/api/libros',
    libroById: (id) => `/api/libros/${id}`,
    libroPortada: (id) => `/api/libros/${id}/portada`,
    buscarLibros: '/api/libros/buscar',
    
    // Búsquedas
    busquedas: '/api/busquedas',
    busquedaById: (id) => `/api/busquedas/${id}`,
    
    // Asistente IA
    asistenteAsk: '/api/asistente/ask',
    asistenteHistorial: '/api/asistente/historial',
    
    // Turnos
    turnos: '/api/turnos',
    turnosFull: '/api/turnos/full/all',
    
    // Invitaciones
    invitadosPendientes: (userId) => `/api/invitados/usuario/${userId}/pendientes`,
    invitadoById: (id) => `/api/invitados/${id}`,
    
    // Salas
    salas: '/api/salas'
  }
};

// Helper function para construir URLs completas
export const buildApiUrl = (endpoint) => {
  return `${API_BASE_URL}${endpoint}`;
};

// Helper function para hacer requests con configuración común
export const apiRequest = async (endpoint, options = {}) => {
  const url = buildApiUrl(endpoint);
  const token = localStorage.getItem('token');
  
  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.headers
    }
  };
  
  return fetch(url, { ...defaultOptions, ...options });
};

export default apiConfig;
