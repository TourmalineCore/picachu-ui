import axios from "axios";

export const saveToken = (TokenKey: string, TokenValue: string) => {
  localStorage.setItem(TokenKey, TokenValue);
};

export const removeToken = (TokenKey: string) => {
  localStorage.removeItem(TokenKey);
};

export const instance = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_URL}`,
  headers: {
    'Content-Type': `application/json`,
  },
});

instance.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem(import.meta.env.VITE_TOKEN_KEY);

  if (config.headers && accessToken) {
    config.headers.Authorization = `Bearer ${import.meta.env.VITE_TOKEN_KEY}`;
  }

  return config;
});
