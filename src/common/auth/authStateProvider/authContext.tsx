import {
  createContext, useState, useMemo, Dispatch, SetStateAction, ReactNode,
} from 'react';
import { authService } from '../auth.helper';

  type AuthProviderProps = {
    isAuthenticated: boolean;
    setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
  };

const AuthContext = createContext<AuthProviderProps>({
  isAuthenticated: !!authService.getToken(),
  setIsAuthenticated: () => !!authService.getToken(),
});

function AuthProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [isAuthenticated, setIsAuthenticated] = useState(!!authService.getToken());

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
