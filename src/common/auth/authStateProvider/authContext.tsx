import {
  createContext, useState, useMemo, Dispatch, SetStateAction, ReactNode,
} from 'react';

  type AuthProviderProps = {
    isAuthenticated: boolean;
    setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
  };

const AuthContext = createContext<AuthProviderProps>({
  isAuthenticated: !!localStorage.getItem(`accessToken`),
  setIsAuthenticated: () => !!localStorage.getItem(`accessToken`),
});

function AuthProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem(`accessToken`));

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
