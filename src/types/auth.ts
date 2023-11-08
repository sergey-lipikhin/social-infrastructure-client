import { User } from './User';

export type RefreshInputPayload = {
  accessToken: string | null;
};

export type RefreshOutputPayload = {
  user: User;
  accessToken: string;
};

export type LoginInputPayload = {
  email: string;
  password: string;
};

export type LoginOutputPayload = {
  user: User;
  accessToken: string;
};

export type RegisterInputPayload = {
  email: string;
  password: string;
  name: string;
};

export type ActivationInputPayload = {
  activationToken: string;
};

export type ActivationOutputPayload = {
  user: User;
  accessToken: string;
};
