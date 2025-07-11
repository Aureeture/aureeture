'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useRouter, usePathname } from 'next/navigation';

type User = {
  id: string;
  name: string;
  email: string;
  // Add other user fields as needed
};

type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  // Check if user is logged in on initial load
  useEffect(() => {
    const checkAuth = async () => {
      try {
        // TODO: Replace with actual token verification
        const token = localStorage.getItem('authToken');
        if (token) {
          // TODO: Fetch user data from your API
          // const userData = await fetchUserData(token);
          // setUser(userData);
        }
      } catch (error) {
        console.error('Auth check failed:', error);
        localStorage.removeItem('authToken');
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      setIsLoading(true);
      // TODO: Replace with actual login API call
      // const { user, token } = await loginUser(email, password);
      // localStorage.setItem('authToken', token);
      // setUser(user);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      const mockUser = { id: '1', name: 'John Doe', email };
      localStorage.setItem('authToken', 'mock-token');
      setUser(mockUser);
      
      // Redirect to profile or previous page
      router.push('/profile');
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async (name: string, email: string, password: string) => {
    try {
      setIsLoading(true);
      // TODO: Replace with actual signup API call
      // const { user, token } = await registerUser(name, email, password);
      // localStorage.setItem('authToken', token);
      // setUser(user);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      const mockUser = { id: '1', name, email };
      localStorage.setItem('authToken', 'mock-token');
      setUser(mockUser);
      
      // Redirect to profile
      router.push('/profile');
    } catch (error) {
      console.error('Signup failed:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    setUser(null);
    router.push('/login');
  };

  const value = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    signup,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
