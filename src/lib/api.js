// Centralized API configuration
// Uses environment variable VITE_API_URL for production
// Falls back to localhost:5000 for development

export const getApiUrl = () => {
  // If VITE_API_URL is set (production), use it
  if (import.meta.env.VITE_API_URL) {
    return import.meta.env.VITE_API_URL;
  }
  
  // Development fallback
  const isDev = import.meta.env.MODE === 'development';
  if (isDev) {
    return 'http://localhost:5000/api';
  }
  
  // Production fallback - use current origin
  return `${window.location.origin}/api`;
};

export const fetchApi = async (endpoint, options = {}) => {
  const apiUrl = getApiUrl();
  const url = `${apiUrl}${endpoint}`;
  
  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });
    
    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error(`API call failed: ${url}`, error);
    throw error;
  }
};
