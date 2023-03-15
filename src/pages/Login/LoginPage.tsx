import MountainImage from '../../assets/images/Mountain.png';
import LoginForm from '../../components/LoginForm/LoginForm';

function LoginPage() {
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
      <LoginForm />

    </div>
  );
}

export default LoginPage;
