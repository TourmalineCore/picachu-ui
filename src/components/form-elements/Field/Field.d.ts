import { InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

export interface IFieldProps {
  placeholder: string;
  label: string;
  error?: FieldError;
  icon?: boolean;
  isPassword?: boolean;
  isEmpty?: boolean;
}

export type TypeInputPropsField = InputHTMLAttributes<HTMLInputElement> & IFieldProps;
