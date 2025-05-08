import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAppContext } from '../contexts/app.context';

const PrivateRoute: React.FC = () => {
  const { isAuthenticated, role } = useAppContext();

  if (!isAuthenticated || role !== 'admin') {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default PrivateRoute;