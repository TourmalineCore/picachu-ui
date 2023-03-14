import { FormEvent, useState } from 'react';
import MountainImage from '../../assets/images/Mountain.png';
import Button from '../../components/Button/Button';
import Error from '../../components/Error/Error';
import { ReactComponent as EyeClosed } from '../../assets/icons/icon-closed-eye.svg';
import { ReactComponent as EyeOpened } from '../../assets/icons/icon-opened-eye.svg';

function LoginPage() {
  const [isPasswordShown, setPasswordShown] = useState(false);

  const [username, setUsername] = useState(``);
  const [password, setPassword] = useState(``);

  const isUsernameInvalid = !username || !username.length;
  const isPasswordInvalid = !password || !password.length;

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
          alt="LoginPage_Mountain"
          draggable={false}
        />
      </div>
      <div className="login-page__login-form-container">
        <h1 className="login-page__title">Sign in</h1>
        <form
          className="login-page__form"
          action=""
          onSubmit={handleSubmit}
        >
          <div className="login-page__field-box">
            <label
              className="login-page__label"
              htmlFor="login"
            >
              Login
            </label>
            <input
              type="text"
              className="login-page__input"
              placeholder="Enter login"
              id="login"
              name="login"
              value={username}
              onChange={(e) => setUsername(e.target.value.trim())}
            />

          </div>

          <div className="login-page__field-box">
            <label
              className="login-page__label"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type={isPasswordShown ? `text` : `password`}
              className="login-page__input"
              placeholder="Enter password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value.trim())}
            />
            <Button
              type="button"
              className="--eye"
              onClick={() => setPasswordShown(!isPasswordShown)}
            >
              {isPasswordShown ? <EyeClosed /> : <EyeOpened />}

            </Button>
          </div>

          <Button
            type="submit"
            className="--bright"
            disabled={isUsernameInvalid || isPasswordInvalid}
          >
            Sign in
          </Button>

        </form>
        <Error
          error="Incorrect login or password."
          className="login-page"
        />

      </div>

    </div>
  );
}

export default LoginPage;
