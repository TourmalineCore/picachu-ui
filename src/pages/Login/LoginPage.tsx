import { useForm } from 'react-hook-form';
import MountainImage from '../../assets/images/Mountain.png';
import { ILoginInput } from '../../shared/types/LoginFields';
import Button from '../../components/Button/Button';
import { ThemeButton } from '../../components/Button/Button.types';
import Field from '../../components/form-elements/Field/Field';
import Error from '../../components/Error/Error';

function LoginPage() {
  const {
    register: registerInput, handleSubmit, watch, clearErrors, formState: { errors },
  } = useForm<ILoginInput>({
    mode: `onSubmit`,
  });
  // eslint-disable-next-line no-alert
  const onSubmit = (data: ILoginInput) => alert(JSON.stringify(data));

  const login = watch(`login`);
  const password = watch(`password`);

  const isValid = login && password;

  return (
    <div className="login-page">
      <div className="login-page__image-container">
        <img
          src={MountainImage}
          alt="LoginPage_Mountain"
          draggable={false}
        />
      </div>
      <div className="login-page__loginForm-container">
        <h1 className="login-page__title">Sign in</h1>
        <form
          className="login-page__form"
          action=""
          onSubmit={handleSubmit(onSubmit)}
        >
          <Field
            {...registerInput(`login`, {
              required: true,
              minLength: 3,
              maxLength: 20,
              pattern: /^\S+$/,
            })}
            placeholder="Enter login"
            label="Login"
            type="text"
          />
          <Field
            {...registerInput(
              `password`,
              {
                required: true,
                minLength: 3,
                pattern: /^\S+$/,
              },
            )}
            placeholder="Enter password"
            label="Password"
            type="password"
          />

          <Button
            type="submit"
            className={!isValid ? `disabled` : ``}
            theme={ThemeButton.BRIGHT}
            disabled={!isValid}
          >
            Sign in
          </Button>

        </form>

        {(errors.login || errors.password) && (
          <Error
            error="Incorrect login or password."
            removeError={clearErrors}
          />
        )}
      </div>

    </div>
  );
}

export default LoginPage;
