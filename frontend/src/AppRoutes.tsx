import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '@/contexts/useAuth';
import Login from '@/pages/Login';
import Dashboard from '@/pages/Dashboard';

const AppRoutes = () => {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  return (
    <Routes>
      <Route path="/login" element={!user ? <Login /> : <Navigate to="/dashboard" replace />} />
      <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/login" replace />} />
    </Routes>
  );
};

export default AppRoutes;
