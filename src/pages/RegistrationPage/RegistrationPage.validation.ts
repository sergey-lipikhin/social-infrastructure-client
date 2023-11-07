import * as Yup from 'yup';

const emailSchema = Yup
  .string()
  .required('Пошта обов\'язковий');

const passwordSchema = Yup
  .string()
  .required('Пароль обов\'язковий')
  .min(5, 'Пароль повинен містити принаймні 5 символів');

const nameSchema = Yup
  .string()
  .required('Ім\'я обов\'язкове')
  .min(2, 'Ім\'я повинно містити принаймні 2 символи');

export const registerSchema = Yup
  .object()
  .shape({
    email: emailSchema,
    password: passwordSchema,
    name: nameSchema,
  });
