import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';

import { LoadingButton } from '@components/LoadingButton/LoadingButton';
import { RegisterInputPayload } from '@cutomTypes/auth';
import { authService } from '@services/authService';
import { AppError } from '@cutomTypes/appError';
import { useAppDispatch } from '@redux/hooks';
import { login } from '@redux/features/authSlice';
import { apiErrorService } from '@services/apiErrorService';

import { registerSchema } from './RegistrationPage.validation';

export const RegistrationPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [error, setError] = useState('');

  const registerMutation = useMutation<void, AppError, RegisterInputPayload>({
    mutationFn: async (payload) => {
      const userData = await authService.register(payload);

      dispatch(login(userData));
      navigate(location.state?.from?.pathname || '/');
    },
    onError: (err) => {
      const { title } = apiErrorService.getMessage(err);

      setError(title);
    },
    onSuccess: () => console.log('check the email'),
  });

  return (
    <div className="vh-100 bg-light d-flex align-items-center
      justify-content-center flex-column"
    >
      <h1 className="mb-3">Авторизація</h1>

      <div className="col-10 col-md-6 col-xxl-4">
        <Formik
          initialValues={{ name: '', email: '', password: '' }}
          validationSchema={registerSchema}
          onSubmit={(values) => registerMutation.mutate(values)}
        >
          <Form className="fs-3" onChange={() => setError('')}>
            <div className="mb-3 mb-md-4">
              <Field
                name="name"
                type="text"
                className="form-control fs-3"
                placeholder="Введіть iм'я користувача"
              />
              <div className="form-text fs-5 ms-2 text-danger">
                <ErrorMessage name="name" />
              </div>
            </div>

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
              isLoading={registerMutation.isLoading}
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
