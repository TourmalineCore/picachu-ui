import axios from "axios";

const tokenKey = import.meta.env.VITE_TOKEN_KEY;

const authService = () => {
  function setToken(tokenValue: Record<string, string>) {
    localStorage.setItem(tokenKey, JSON.stringify(tokenValue));
  }

  function removeToken() {
    localStorage.removeItem(tokenKey);
  }

  function getToken() {
    const accessToken = localStorage.getItem(tokenKey);

    if (accessToken === null) {
      return null;
    }

    const tokenObj = JSON.parse(accessToken as string);

    return tokenObj.value;
  }

  return {
    setToken,
    removeToken,
    getToken,
  };
};

export const auth = authService();

export const instance = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_URL}`,

  headers: {
    'Content-Type': `application/json`,
  },

});

instance.interceptors.request.use((config) => {
  if (config.headers && auth.getToken()) {
    config.headers.Authorization = `Bearer ${auth.getToken()}`;
  }

  return config;
});
