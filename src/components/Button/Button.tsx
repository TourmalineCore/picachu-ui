/* eslint-disable react/button-has-type */

import { ButtonHTMLAttributes } from "react";

function Button({
  className,
  children,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={className}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
