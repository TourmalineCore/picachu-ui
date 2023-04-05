import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import MountainImage from '../../assets/images/Mountain.png';
import LoginForm from './components/LoginForm/LoginForm';
import { AuthContext } from '../../common/auth/authStateProvider/authContext';
import { saveToken } from '../../common/auth/auth.helper';

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
      const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}auth/login`, {
        login,
        password,
      });
      if (response.data) {
        saveToken(import.meta.env.VITE_TOKEN_KEY, JSON.stringify(response.data.accessToken));
        setIsAuthenticated(true);
      }
      return response.data;
    } catch (error: any) {
      return setErrorMessage(error.response.data.msg);
    } finally {
      setIsLoading(false);
    }
  }
}

export default LoginPage;
