import axios from 'axios';
import { getToken } from '@clerk/clerk-react';

// Create axios instance with base URL
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor to add auth token
api.interceptors.request.use(async (config) => {
  // Get the Clerk token
  const token = await getToken();
  
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  
  return config;
}, (error) => {
  return Promise.reject(error);
});

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    
    // Handle 401 Unauthorized errors
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      // You might want to implement token refresh logic here if needed
    }
    
    return Promise.reject(error);
  }
);

// Auth API
export const authAPI = {
  // Get current user profile
  getMe: () => api.get('/auth/me'),
  
  // Update user profile
  updateProfile: (data) => api.put('/auth/me', data),
  
  // Delete user account
  deleteAccount: () => api.delete('/auth/me'),
};

// Example API (extend as needed)
export const exampleAPI = {
  // Example endpoint
  getExampleData: () => api.get('/example'),
  
  // Add more API calls as needed
};

export default api;
