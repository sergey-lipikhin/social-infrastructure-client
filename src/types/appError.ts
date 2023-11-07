import axios, { AxiosError } from 'axios';

interface IErrorPayload {
  message: string;
  errors: { [key: string]: string }
}

type ApiError = AxiosError<IErrorPayload>;

export type AppError = Error | ApiError;

export function isApiError(error: unknown): error is ApiError {
  return axios.isAxiosError(error);
}
