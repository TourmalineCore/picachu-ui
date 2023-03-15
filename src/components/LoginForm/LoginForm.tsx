import { FormEvent, useState } from "react";
import Button from "../Button/Button";
import Error from "../Error/Error";
import { ReactComponent as EyeClosed } from '../../assets/icons/icon-closed-eye.svg';
import { ReactComponent as EyeOpened } from '../../assets/icons/icon-opened-eye.svg';

function LoginForm(){
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
    <div className="login-form-container">
      <h1 className="login-form-container__title">Sign in</h1>
      <form
        className="login-form-container__form"
        action=""
        data-test="form"
        onSubmit={handleSubmit}
      >
        <div className="login-form-container__field-box">
          <label
            className="login-form-container__label"
            htmlFor="login"
          >
            Login
          </label>
          <div className="login-form-container__input-wrapper">
            <input
              type="text"
              className="login-form-container__input"
              placeholder="Enter login"
              id="login"
              name="login"
              data-test="login"
              value={username}
              onChange={(e) => setUsername(e.target.value.trim())}
            />
          </div>
        </div>

        <div className="login-form-container__field-box">
          <label
            className="login-form-container__label"
            htmlFor="password"
          >
            Password
          </label>
          <div className="login-form-container__input-wrapper login-form-container__input-wrapper--password">
            <input
              type={isPasswordShown ? `text` : `password`}
              className="login-form-container__input"
              placeholder="Enter password"
              id="password"
              data-test="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value.trim())}
            />
            <Button
              type="button"
              
              className="button--eye login-form-container__password-switch-btn"
              onClick={() => setPasswordShown(!isPasswordShown)}
            >
              {isPasswordShown ? <EyeClosed /> : <EyeOpened />}
            </Button>
          </div>
        </div>

        <Button
          type="submit"
          className="button--bright"
          data-test="submit-button"
          disabled={isUsernameInvalid || isPasswordInvalid}
        >
          Sign in
        </Button>

      </form>
      {/* <Error
        error="Incorrect login or password."
        className="login-form-container__error"
      /> */}
    </div>

  );
}

export default LoginForm;
