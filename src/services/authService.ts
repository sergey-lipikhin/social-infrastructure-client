import { authClient } from '@client/authClient';
import {
  ActivationInputPayload,
  ActivationOutputPayload,
  LoginInputPayload,
  LoginOutputPayload,
  RefreshInputPayload,
  RefreshOutputPayload,
  RegisterInputPayload,
} from '@cutomTypes/api/auth';

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
): Promise<void> {
  return authClient.post('/registration', payload);
}

async function activate(
  payload: ActivationInputPayload,
): Promise<ActivationOutputPayload> {
  return authClient.get(`/activation/${payload.activationToken}`);
}

export const authService = {
  login,
  refresh,
  register,
  activate,
};
