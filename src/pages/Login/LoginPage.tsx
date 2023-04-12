import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MountainImage from '../../assets/images/Mountain.png';
import LoginForm from './components/LoginForm/LoginForm';
import { AuthContext } from '../../common/auth/authStateProvider/authContext';
import { auth } from '../../common/auth/auth.helper';
import { api } from '../../common/utils/HttpClient';

function LoginPage() {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(``);
  const navigation = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigation(`/galleries`);
    }
  }, [isAuthenticated]);

  return (
    <div className="login-page">
      <div className="login-page__image-container">
        <img
          src={MountainImage}
          className="login-page__image"
          alt="LoginPage_Mountain"
          draggable={false}
        />
      </div>
      <LoginForm
        onLogin={onLogin}
        errorMessage={errorMessage}
        isLoading={isLoading}
      />
    </div>
  );

  async function onLogin({ login, password }: { login: string; password: string }) {
    setIsLoading(true);
    try {
      const { data } = await api.post(`auth/login`, {
        login,
        password,
      });

      auth.setToken(data.accessToken);
      setIsAuthenticated(true);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setErrorMessage(error.response.data.msg);
    } finally {
      setIsLoading(false);
    }
  }
}

export default LoginPage;
