/* eslint-disable react/button-has-type */

import { ButtonHTMLAttributes } from "react";
import { ReactComponent as IconPlus } from '../../assets/icons/icon-plus.svg';

function AddButton({
  className,
  children,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`button button--light ${className}`}
      data-cy="add-button"
      {...rest}
    >
      {children}
      <IconPlus />
    </button>
  );
}

export default AddButton;
