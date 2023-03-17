import { useState } from "react";
import Button from "../../../../components/Button/Button";
import { ReactComponent as EyeClosed } from "../../../../assets/icons/icon-closed-eye.svg";
import { ReactComponent as EyeOpened } from "../../../../assets/icons/icon-opened-eye.svg";

function LoginForm({
  onLogin,
}: {
  onLogin: ({ login, password }: { login: string; password: string }) => void;
}) {
  const [isPasswordShown, setPasswordShown] = useState(false);

  const [login, setLogin] = useState(``);
  const [password, setPassword] = useState(``);

  const isLoginInvalid = !login || !login.length;
  const isPasswordInvalid = !password || !password.length;

  return (
    <div className="login-form-container">
      <h1 className="login-form-container__title">Sign in</h1>
      <form
        className="login-form-container__form"
        onSubmit={(e) => {
          e.preventDefault();
          onLogin({
            login,
            password,
          });
        }}
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
              data-test="login-input"
              value={login}
              required
              onChange={(e) => setLogin(e.target.value.trim())}
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
              data-test="password-input"
              name="password"
              value={password}
              required
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
          data-test="login-button"
          disabled={isLoginInvalid || isPasswordInvalid}
        >
          Sign in
        </Button>

      </form>
    </div>

  );
}

export default LoginForm;
