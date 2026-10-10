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
    
    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      throw new Error(data.error || `API Error: ${response.status} ${response.statusText}`);
    }

    return data;
  } catch (error) {
    console.error(`API call failed: ${url}`, error);
    if (error instanceof TypeError && error.message === 'Failed to fetch') {
      throw new Error('Unable to reach the server. Start the backend with "npm start" from the server folder.');
    }
    throw error;
  }
};
