import { useAuth } from '@/contexts/useAuth';
import { JSX } from 'react';
import { Navigate } from 'react-router-dom';

const RequireAdmin = ({ children }: { children: JSX.Element }) => {
  const { user, loading } = useAuth();

  if (loading) return <p className="text-center mt-8">Loading...</p>;

  if (!user || user.role !== 'admin') {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
};


export default RequireAdmin;
