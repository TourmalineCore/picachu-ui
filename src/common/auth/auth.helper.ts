import axios from "axios";

import { getContentType } from "../api/api.helper";

export const saveToken = (TokenKey: string, TokenValue: string) => {
  localStorage.setItem(TokenKey, TokenValue);
};

export const removeToken = (TokenKey: string) => {
  localStorage.removeItem(TokenKey);
};

export const instance = axios.create({
  baseURL: `http://localhost:7501/api/`,
  headers: getContentType(),
});

instance.interceptors.request.use((config) => {
  const accessToken = localStorage.get(`accessToken`);

  if (config.headers && accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});
