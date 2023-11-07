import { User } from '@cutomTypes/User';
import { authClient } from '@client/authClient';
import {
  LoginInputPayload,
  LoginOutputPayload,
  RefreshInputPayload,
  RefreshOutputPayload,
  RegisterInputPayload,
  RegisterOutputPayload,
} from '@cutomTypes/auth';

async function login(
  payload: LoginInputPayload,
): Promise<LoginOutputPayload> {
  return authClient.post('/login', payload);
}

export async function refresh(
  payload: RefreshInputPayload,
): Promise<RefreshOutputPayload> {
  return authClient.post('/refresh', payload);
}

async function register(
  payload: RegisterInputPayload,
): Promise<RegisterOutputPayload> {
  return authClient.post('/registration', payload);
}

export const authService = {
  login,
  refresh,
  register,
};
