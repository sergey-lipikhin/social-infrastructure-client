import { wait } from '@utils/wait';
import { createClient } from './createClient';

export const authClient = createClient();

authClient.interceptors.response.use(res => res.data);
authClient.interceptors.request.use(async (req) => {
  await wait();

  return req;
});
