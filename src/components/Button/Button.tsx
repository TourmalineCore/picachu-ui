import clsx from 'clsx';
import { ButtonProps } from './Button.types';

function Button({
  className,
  children,
  theme,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      className={clsx(`default`, className, theme)}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
