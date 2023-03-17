import MountainImage from '../../assets/images/Mountain.png';
import Header from '../../components/Header/Header';
import LoginForm from './components/LoginForm/LoginForm';

function LoginPage() {
  return (
    <div className="login-page">
      <Header />
      <div className="login-page__image-container">
        <img
          src={MountainImage}
          className="login-page__image"
          alt="LoginPage_Mountain"
          draggable={false}
        />
      </div>
      <LoginForm onLogin={onLogin} />
    </div>
  );

  function onLogin({ login, password }: { login: string; password: string }) {
    console.log({
      login,
      password,
    });
  }
}

export default LoginPage;
