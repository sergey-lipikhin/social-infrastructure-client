import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useParams, useNavigate } from 'react-router';

import { apiErrorService } from '@services/apiErrorService';
import { AppError } from '@cutomTypes/appError';
import { authService } from '@services/authService';
import { useAppDispatch } from '@redux/hooks';
import { login } from '@redux/features/authSlice';

export const AccountActivationPage: React.FC = () => {
  const [error, setError] = useState('');
  const { activationToken } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { isLoading, isError } = useQuery<void, AppError>({
    queryKey: activationToken,
    queryFn: async () => {
      const payload = await authService.activate({
        activationToken: String(activationToken),
      });

      dispatch(login(payload));
    },
    onSuccess: () => {
      navigate('/');
    },
    onError: (err) => {
      const { title } = apiErrorService.getMessage(err);

      setError(title);
    },
  });

  if (isLoading) {
    return (
      <div className="spinner-border text-light" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }

  return (
    <>
      <h1 className="title">Account activation</h1>

      {isError ? (
        <p className="notification is-danger is-light">
          {error}
        </p>
      ) : (
        <p className="notification is-success is-light">
          Your account is now active
        </p>
      )}
    </>
  );
};
