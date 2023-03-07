import { useForm } from 'react-hook-form';
import MountainImage from '../../assets/images/Mountain_image.png';
import { ILoginInput } from '../../components/auth/LoginForm/LoginFields';
import LoginFields from '../../components/auth/LoginForm/LoginForm';
import Button from '../../components/Button/Button';
import { ThemeButton } from '../../components/Button/Button.types';

function LoginPage() {
  const {
    register: registerInput, handleSubmit, watch, formState,
  } = useForm<ILoginInput>({
    mode: `onTouched`,
  });
  // eslint-disable-next-line no-alert
  const onSubmit = (data: ILoginInput) => alert(JSON.stringify(data));

  const login = watch(`login`);
  const password = watch(`password`);

  const isValid = login && password;

  return (
    <div className="container">
      <div className="container__image">
        <img
          src={MountainImage}
          alt="LoginPage_Mountain"
          draggable={false}
        />
      </div>
      <div className="container__loginForm">
        <h2>Sign in</h2>
        <form
          action=""
          onSubmit={handleSubmit(onSubmit)}
        >
          <LoginFields
            formState={formState}
            register={registerInput}
            isPasswordRequired
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
      </div>

    </div>
  );
}

export default LoginPage;
