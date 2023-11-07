import { wait } from '@utils/wait';
import { accessTokenService } from '../services/accessTokenService';
import { createClient } from './createClient';

export const httpClient = createClient();

httpClient.interceptors.request.use(onRequest);
httpClient.interceptors.response.use(res => res.data);

async function onRequest(request: any) {
  const accessToken = accessTokenService.get();

  await wait();

  if (accessToken) {
    // eslint-disable-next-line no-param-reassign
    request.headers.authorization = `Bearer ${accessToken}`;
  }

  return request;
}
