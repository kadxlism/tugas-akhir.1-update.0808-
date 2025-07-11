// src/contexts/AuthContext.tsx
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
  const [token, setToken] = useState<string | null>(() => localStorage.getItem('token'));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  axios.get('/api/auth/me')
    .then(res => {
      console.log('✅ User:', res.data);
      setUser(res.data);
    })
    .catch((err) => {
      console.error('❌ Gagal ambil user:', err);
      setUser(null);
    })
    .finally(() => setLoading(false));
}, []);


const login = async (email: string, password: string) => {
  await axios.get('/sanctum/csrf-cookie');
  await axios.post('/login', { email, password }); // ⬅️ method-nya sudah POST ✅
  const res = await axios.get('/api/auth/me');
  setUser(res.data);
};




  const logout = () => {
    axios.post('/api/logout').catch(() => {});
    localStorage.removeItem('token');
    delete axios.defaults.headers.common['Authorization'];
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user,  login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
