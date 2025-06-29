// Configuración de la API
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

// Debug: Log para verificar la URL en desarrollo Y producción (temporal)
console.log('=== API CONFIG DEBUG ===');
console.log('Environment:', import.meta.env.MODE);
console.log('API_BASE_URL:', API_BASE_URL);
console.log('VITE_API_URL:', import.meta.env.VITE_API_URL);
console.log('import.meta.env keys:', Object.keys(import.meta.env));

if (import.meta.env.DEV) {
  console.log('Development mode detected');
} else {
  console.log('Production mode detected');
}

export const apiConfig = {
  baseURL: API_BASE_URL,
  endpoints: {
    // Auth
    login: '/api/auth/login',
    register: '/api/auth/register',
    authRegister: '/api/auth/register',
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
    turnosFullAll: '/api/turnos/full/all',
    turnosConSala: '/api/turnos/con-sala',
    
    // Invitaciones
    invitados: '/api/invitados',
    invitadosPendientes: (userId) => `/api/invitados/usuario/${userId}/pendientes`,
    invitadoById: (id) => `/api/invitados/${id}`,
    
    // Salas
    salas: '/api/salas'
  }
};

// Helper function para construir URLs completas
export const buildApiUrl = (endpoint) => {
  console.log('=== buildApiUrl DEBUG ===');
  console.log('Input endpoint:', endpoint);
  console.log('Endpoint type:', typeof endpoint);
  console.log('API_BASE_URL:', API_BASE_URL);
  
  if (!endpoint) {
    console.error('❌ Endpoint is undefined:', endpoint);
    console.error('Available endpoints:', Object.keys(apiConfig.endpoints));
    return API_BASE_URL;
  }
  
  const fullUrl = `${API_BASE_URL}${endpoint}`;
  console.log('✅ Built URL:', fullUrl);
  return fullUrl;
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

// Debug function to verify all endpoints
export const debugEndpoints = () => {
  console.log('=== ENDPOINTS DEBUG ===');
  console.log('All endpoints:', apiConfig.endpoints);
  console.log('asistenteAsk:', apiConfig.endpoints.asistenteAsk);
  console.log('asistenteHistorial:', apiConfig.endpoints.asistenteHistorial);
  console.log('buildApiUrl(asistenteAsk):', buildApiUrl(apiConfig.endpoints.asistenteAsk));
  console.log('buildApiUrl(asistenteHistorial):', buildApiUrl(apiConfig.endpoints.asistenteHistorial));
};
