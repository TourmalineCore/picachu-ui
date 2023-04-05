import axios from "axios";

const tokenKey = import.meta.env.VITE_TOKEN_KEY;

export const AuthService = () => {
  function setToken(tokenValue: Record<string, string>) {
    localStorage.setItem(tokenKey, JSON.stringify(tokenValue));
  }
  function removeToken() {
    localStorage.removeItem(tokenKey);
  }
  function getToken() {
    const accessToken = localStorage.getItem(tokenKey);
    const tokeObj = JSON.parse(accessToken as string);
    return tokeObj.value;
  }
  return {
    setToken,
    removeToken,
    getToken,
  };
};

export const instance = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_URL}`,
  headers: {
    'Content-Type': `application/json`,
  },
});

instance.interceptors.request.use((config) => {
  const authService = AuthService();

  if (config.headers && authService.getToken()) {
    config.headers.Authorization = `Bearer ${authService.getToken()}`;
  }

  return config;
});
