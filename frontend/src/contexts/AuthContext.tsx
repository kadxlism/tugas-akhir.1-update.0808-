import React, { createContext, useState, useEffect } from 'react';
import axios from '@/services/axios';
import { User } from '@/types/auth';

export interface AuthContextProps {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  loading: boolean;
}

export const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('/api/auth/me')
      .then(res => setUser(res.data))
      .catch(() => setUser(null))
      .finally(() => setLoading(false));
  }, []);

  const login = async (email: string, password: string) => {
    await axios.get('/sanctum/csrf-cookie'); // ⬅️ penting!
    await axios.post('/login', { email, password });

    const res = await axios.get('/api/auth/me');
    setUser(res.data);
  };

  const logout = () => {
    axios.post('/logout').catch(() => {});
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
