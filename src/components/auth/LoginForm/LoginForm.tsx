import Field from "../../form-elements/Field/Field";
import { ILoginFields } from "./LoginFields";

function LoginFields({
  register,
  formState: { errors },
  isPasswordRequired = false,
}: ILoginFields) {
  return (
    <>
      <Field
        {...register(`login`, {
          required: true,
          minLength: {
            value: 1,
            message: `Login is required`,
          },
          maxLength: {
            value: 20,
            message: `Maximum allowed length is 20 charachers`,
          },
          pattern: {
            value: /^\S+$/,
            message: `You can't use a space`,
          },
        })}
        placeholder="Enter login"
        label="Login"
        type="text"
        error={errors.login}
      />
      <Field
        {...register(
          `password`,
          isPasswordRequired
            ? {
              required: true,
              minLength: {
                value: 1,
                message: `Password is required`,
              },
              pattern: {
                value: /^\S+$/,
                message: `You can't use a space`,
              },
            }
            : {},
        )}
        placeholder="Enter password"
        label="Password"
        type="password"
        error={errors.password}
        icon
        isPassword
      />
    </>
  );
}

export default LoginFields;
