import * as Yup from 'yup';

const emailSchema = Yup
  .string()
  .required('Логін обов\'язковий');

const passwordSchema = Yup
  .string()
  .required('Пароль обов\'язковий')
  .min(5, 'Пароль повинен містити принаймні 5 символів');

export const loginSchema = Yup
  .object()
  .shape({
    email: emailSchema,
    password: passwordSchema,
  });
