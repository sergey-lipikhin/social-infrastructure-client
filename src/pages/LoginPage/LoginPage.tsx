import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';

import { LoadingButton } from '@components/LoadingButton/LoadingButton';
import { LoginInputPayload } from '@cutomTypes/api/auth';
import { authService } from '@services/authService';
import { AppError } from '@cutomTypes/appError';
import { useAppDispatch } from '@redux/hooks';
import { login } from '@redux/features/authSlice';
import { apiErrorService } from '@services/apiErrorService';

import { loginSchema } from './LoginPage.validation';

export const LoginPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [error, setError] = useState('');

  const loginMuation = useMutation<void, AppError, LoginInputPayload>({
    mutationFn: async (payload) => {
      const userData = await authService.login(payload);

      dispatch(login(userData));
      navigate(location.state?.from?.pathname || '/');
    },
    onError: (err) => {
      const { title } = apiErrorService.getMessage(err);

      setError(title);
    },
  });

  return (
    <div className="vh-100 bg-light d-flex align-items-center
      justify-content-center flex-column"
    >
      <h1 className="mb-3">Авторизація</h1>

      <div className="col-10 col-md-6 col-xxl-4">
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={loginSchema}
          onSubmit={(values) => loginMuation.mutate(values)}
        >
          <Form className="fs-3" onChange={() => setError('')}>
            <div className="mb-3 mb-md-4">
              <Field
                name="email"
                type="email"
                className="form-control fs-3"
                placeholder="Введіть пошту"
              />
              <div className="form-text fs-5 ms-2 text-danger">
                <ErrorMessage name="email" />
              </div>
            </div>

            <div className="mb-3 mb-md-4">
              <Field
                name="password"
                type="password"
                className="form-control fs-3"
                placeholder="Введіть пароль"
              />
              <div className="form-text fs-5 ms-2 text-danger">
                <ErrorMessage name="password" />
              </div>
            </div>

            <LoadingButton
              type="submit"
              isLoading={loginMuation.isLoading}
              className="fs-3"
            >
              Увійти
            </LoadingButton>

            {error && (
              <div className="form-text fs-5 ms-2 text-danger">
                {error}
              </div>
            )}

            <Link
              to="/registration"
              className="fs-5 ms-2 mt-3 text-center"
              style={{ textDecoration: 'underline' }}
            >
              Створити акаунт
            </Link>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
