import { UseFormRegister, FormState } from 'react-hook-form';

export type ILoginInput = {
  login: string;
  password: string;
};

export interface ILoginFields {
  register: UseFormRegister<ILoginInput>;
  formState: FormState<ILoginInput>;
  isPasswordRequired?: boolean;
}
