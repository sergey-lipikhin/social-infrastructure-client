import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useMutation } from 'react-query';

import { RequireAuth } from '@components/RequireAuth';
import { useAppDispatch, useAppSelector } from '@redux/hooks';
import { accessTokenService } from '@services/accessTokenService';
import { authService } from '@services/authService';
import { check } from '@redux/features/authSlice';
import { PageLoader } from '@components/PageLoader';

import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { LoginPage } from './pages/LoginPage';
import { RegistrationPage } from './pages/RegistrationPage';
import { AccountActivationPage } from './pages/AccountActivationPage';

export const Root: React.FC = () => {
  const { isChecked } = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();

  const checkMutation = useMutation({
    mutationFn: async () => {
      const accessToken = accessTokenService.get();
      const userData = await authService.refresh({ accessToken });

      dispatch(check(userData));
    },
    onError: () => {
      dispatch(check());
    },
  });

  useEffect(() => {
    checkMutation.mutate();
  }, []);

  return (
    <>
      <PageLoader isVisible={!isChecked} />

      {isChecked && (
        <Routes>
          <Route path="/" element={<RequireAuth><HomePage /></RequireAuth>} />
          <Route path="/home" element={<Navigate to="/" replace />} />

          <Route path="/login" element={<LoginPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route
            path="/activation/:activationToken"
            element={<AccountActivationPage />}
          />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      )}
    </>
  );
};
