import { FormEvent, useState } from 'react';
import MountainImage from '../../assets/images/Mountain.png';
import Button from '../../components/Button/Button';
import Error from '../../components/Error/Error';
import { ReactComponent as EyeClosed } from '../../assets/icons/icon-closed-eye.svg';
import { ReactComponent as EyeOpened } from '../../assets/icons/icon-opened-eye.svg';
import { useInput } from './useInput';

function LoginPage() {
  const [isPasswordShown, setPasswordShown] = useState(false);

  const username = useInput(``, {
    isEmpty: true,
    minLength: 1,
    noSpace: true,
  });
  const password = useInput(``, {
    isEmpty: true,
    minLength: 1,
    noSpace: true,
  });
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
              value={username.value}
              onBlur={username.onBlur}
              onChange={(e) => username.onChange(e)}
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
              value={password.value}
              onBlur={password.onBlur}
              onChange={(e) => password.onChange(e)}
            />
            <Button
              type="button"
              className="--small"
              onClick={() => setPasswordShown(!isPasswordShown)}
            >
              {isPasswordShown ? <EyeClosed /> : <EyeOpened />}

            </Button>
          </div>

          <Button
            type="submit"
            className="--bright"
            disabled={!username.inputValid || !password.inputValid}
          >
            Sign in
          </Button>

        </form>
        {
          ((username.isDirty && username.isError) || (password.isDirty && password.isError)) && (
            <Error
              error="Incorrect login or password."
            />
          )
        }

      </div>

    </div>
  );
}

export default LoginPage;
