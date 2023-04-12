const tokenKey = `accessToken`;

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
