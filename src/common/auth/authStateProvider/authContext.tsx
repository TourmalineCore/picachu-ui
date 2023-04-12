import {
  createContext, useState, useMemo, Dispatch, SetStateAction, ReactNode,
} from 'react';
import { auth } from '../auth.helper';

  type AuthProviderProps = {
    isAuthenticated: boolean;
    setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
  };

const isToken = !!auth.getToken();

const AuthContext = createContext<AuthProviderProps>({
  isAuthenticated: isToken,
  setIsAuthenticated: () => isToken,
});

function AuthProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [isAuthenticated, setIsAuthenticated] = useState(isToken);

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
