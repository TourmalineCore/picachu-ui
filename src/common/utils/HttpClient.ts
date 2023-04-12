import axios from 'axios';
import { API_ROOT } from '../config';
import { auth } from '../auth/auth.helper';

export const api = axios.create({
  baseURL: API_ROOT,

  headers: {
    'Content-Type': `application/json`,
  },
});

api.interceptors.request.use((config) => {
  if (config.headers && auth.getToken()) {
    config.headers.Authorization = `Bearer ${auth.getToken()}`;
  }

  return config;
});
