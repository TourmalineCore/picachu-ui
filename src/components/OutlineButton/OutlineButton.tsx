/* eslint-disable react/button-has-type */

import { ButtonHTMLAttributes } from "react";
import { ReactComponent as IconPlus } from '../../assets/icons/icon-plus.svg';

function OutlineButton({
  className,
  children,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`button button--light ${className}`}
      {...rest}
    >
      <span className="button__title">{children}</span>
      <span className="button__icon-container">
        <IconPlus />
      </span>
    </button>
  );
}

export default OutlineButton;
