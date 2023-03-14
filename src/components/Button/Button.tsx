import { ButtonProps } from './Button.types';

function Button({
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      className={`button button${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
