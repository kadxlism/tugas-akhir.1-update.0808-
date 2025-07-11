import { Navigate } from 'react-router-dom';
import Login from '@/pages/Login';
import Dashboard from '@/pages/Dashboard';
import UserList from '@/pages/users/UserList';
import UserForm from '@/pages/users/UserForm';
import Unauthorized from '@/pages/Unauthorized';
import RequireAdmin from '@/components/requireAdmin';
import AddUser from '@/pages/admin/AddUser';
import EditUser from '@/pages/admin/EditUser';

const routes = [
  {
    path: '/',
    element: <Navigate to="/dashboard" />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
   {
    path: '/admin/users',
    element: <RequireAdmin><UserList /></RequireAdmin>,
  },
  {
    path: '/users',
    element: <RequireAdmin><UserList /></RequireAdmin>,
  },
  {
    path: '/users/create',
    element: <RequireAdmin><UserForm /></RequireAdmin>,
  },
  {
    path: '/users/:id/edit',
    element: <RequireAdmin><UserForm /></RequireAdmin>,
  },
  {
    path: '/unauthorized',
    element: <Unauthorized />
  },
{
  path: '/admin/add-user',
  element: (
    <RequireAdmin>
      <AddUser />
    </RequireAdmin>
  ),
},
{
  path: '/admin/users/:id/edit',
  element: (
    <RequireAdmin>
      <EditUser />
    </RequireAdmin>
  ),
},
];

export default routes;
