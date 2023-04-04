import { useState } from "react";
import { ReactComponent as EyeClosed } from "../../../../assets/icons/icon-closed-eye.svg";
import { ReactComponent as EyeOpened } from "../../../../assets/icons/icon-opened-eye.svg";
import Error from "../../../../components/Error/Error";
import { Loader } from "../../../../components/Loader/Loader";

function LoginForm({
  onLogin,
  isLoading,
  errorMessage,
}: {
  onLogin: ({ login, password }: { login: string; password: string }) => unknown;
  isLoading?: boolean;
  errorMessage?: string;
}) {
  const [isPasswordShown, setPasswordShown] = useState(false);

  const [login, setLogin] = useState(``);
  const [password, setPassword] = useState(``);

  const isLoginInvalid = !login || !login.length;
  const isPasswordInvalid = !password || !password.length;

  return (
    <div className="login-form">
      <h1 className="login-form__title">Sign in</h1>
      <form
        className="login-form__form"
        onSubmit={(e) => {
          e.preventDefault();
          onLogin({
            login,
            password,
          });
        }}
      >
        <div className="login-form__field-box">
          <label
            className="login-form__label"
            htmlFor="login"
          >
            Login
          </label>
          <div className="login-form__input-wrapper">
            <input
              type="text"
              className="login-form__input"
              placeholder="Enter login"
              id="login"
              name="login"
              data-cy="login-input"
              value={login}
              required
              onChange={(e) => setLogin(e.target.value.trim())}
            />
          </div>
        </div>

        <div className="login-form__field-box">
          <label
            className="login-form__label"
            htmlFor="password"
          >
            Password
          </label>
          <div className="login-form__input-wrapper login-form__input-wrapper--password">
            <input
              type={isPasswordShown ? `text` : `password`}
              className="login-form__input"
              placeholder="Enter password"
              id="password"
              data-cy="password-input"
              name="password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value.trim())}
            />
            <button
              type="button"
              className="button button--eye login-form__password-switch-btn"
              onClick={() => setPasswordShown(!isPasswordShown)}
            >
              {isPasswordShown ? <EyeClosed /> : <EyeOpened />}
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="button button--bright login-form__submit-btn"
          data-cy="login-button"
          disabled={isLoginInvalid || isPasswordInvalid}
        >
          {
            isLoading ? (<Loader />) : <span>Sign in</span>
          }
        </button>

      </form>

      {
        errorMessage !== `` && (
          <Error
            error={errorMessage || ``}
            className="login-form__error"
          />
        )
      }
    </div>

  );
}

export default LoginForm;
