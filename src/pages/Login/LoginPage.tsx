import { FormEvent } from 'react';
import MountainImage from '../../assets/images/Mountain.png';
import LoginForm from '../../components/LoginForm/LoginForm';

function LoginPage() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const formJson = Object.fromEntries(formData.entries());
    alert(JSON.stringify(formJson));
  }

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
      <LoginForm handleSubmit={() => handleSubmit} />

    </div>
  );
}

export default LoginPage;
