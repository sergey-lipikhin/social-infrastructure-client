import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from 'react-query';
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';

import { LoadingButton } from '@components/LoadingButton/LoadingButton';
import { RegisterInputPayload } from '@cutomTypes/api/auth';
import { authService } from '@services/authService';
import { AppError } from '@cutomTypes/appError';
import { apiErrorService } from '@services/apiErrorService';

import { registerSchema } from './RegistrationPage.validation';

export const RegistrationPage: React.FC = () => {
  const [error, setError] = useState('');

  const registerMutation = useMutation<void, AppError, RegisterInputPayload>({
    mutationFn: async (payload) => {
      await authService.register(payload);
    },
    onError: (err) => {
      const { title } = apiErrorService.getMessage(err);

      setError(title);
    },
    onMutate: () => setError(''),
  });

  return (
    <div className="vh-100 bg-light d-flex align-items-center
      justify-content-center flex-column"
    >
      <h1 className="mb-3">Реєстрація</h1>

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
              className="fs-3"
            >
              Зареєструватися
            </LoadingButton>

            {error && (
              <div className="form-text fs-5 ms-2 text-danger">
                {error}
              </div>
            )}

            {registerMutation.isSuccess && (
              <div className="form-text fs-5 ms-2 text-success fw-bolder">
                Активуйте акаунт за посиланням що прийшло вам на пошту
              </div>
            )}

            <Link
              to="/login"
              className="fs-5 ms-2 mt-3 text-center"
              style={{ textDecoration: 'underline' }}
            >
              Вже маю акаунт
            </Link>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
