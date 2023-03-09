import { InputHTMLAttributes } from "react";

export interface IFieldProps {
  placeholder: string;
  label: string;
  isEmpty?: boolean;
}

export type TypeInputPropsField = InputHTMLAttributes<HTMLInputElement> & IFieldProps;
