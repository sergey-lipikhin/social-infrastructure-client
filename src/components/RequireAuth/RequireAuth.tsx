import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { useAppSelector } from '@redux/hooks';
import { PageLoader } from '../PageLoader';

type Props = {
  children: React.ReactNode;
};

export const RequireAuth: React.FC<Props> = ({ children }) => {
  const { isChecked, user } = useAppSelector(state => state.auth);
  const location = useLocation();

  if (!isChecked) {
    <PageLoader />;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};
