// contexts/AuthContext.tsx
import { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  id: string;
  email: string;
  fullName: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (userData: { fullName: string; email: string; password: string }) => Promise<void>;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = async (email: string, password: string) => {
    // Pour l'instant on mock, plus tard API réelle
    const mockUser: User = {
      id: '1',
      email,
      fullName: 'John Doe'
    };
    setUser(mockUser);
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', 'true');
  };

  const register = async (userData: { fullName: string; email: string; password: string }) => {
    // Mock pour l'instant
    const mockUser: User = {
      id: '1',
      email: userData.email,
      fullName: userData.fullName
    };
    setUser(mockUser);
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', 'true');
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}