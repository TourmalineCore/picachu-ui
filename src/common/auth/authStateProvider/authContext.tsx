import {
  createContext, useState, useMemo, Dispatch, SetStateAction, ReactNode,
} from 'react';

  type AuthProviderProps = {
    isAuthenticated: boolean;
    setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
  };

const AuthContext = createContext<AuthProviderProps>({
  isAuthenticated: !!localStorage.getItem(import.meta.env.VITE_TOKEN_KEY),
  setIsAuthenticated: () => !!localStorage.getItem(import.meta.env.VITE_TOKEN_KEY),
});

function AuthProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem(import.meta.env.VITE_TOKEN_KEY));

  const value = useMemo(() => ({
    isAuthenticated,
    setIsAuthenticated,
  }), [isAuthenticated, setIsAuthenticated]);

  return (
    <AuthContext.Provider
      value={value}
    >
      {children}
    </AuthContext.Provider>
  );
}

export {
  AuthProvider,
  AuthContext,
};
