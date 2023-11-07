import axios from 'axios';

export function createClient() {
  return axios.create({
    baseURL: import.meta.env.VITE_API_URL,
  });
}
