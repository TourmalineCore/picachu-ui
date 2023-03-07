import { forwardRef, useState } from 'react';
import { TypeInputPropsField } from './Field.d';
import Button from '../../Button/Button';
import { ThemeButton } from '../../Button/Button.types';

// import eyeOpen from '../../../assets/eye open.svg';
// import eyeClose from '../../../assets/eye close.svg';

const Field = forwardRef<HTMLInputElement, TypeInputPropsField>(
  ({
    placeholder, error, icon, isPassword, label, type, style, ...rest
  }, ref) => {
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => {
      setPasswordShown(!passwordShown);
    };
    let inputType;
    if (isPassword) {
      if (passwordShown) {
        inputType = `text`;
      } else {
        inputType = `password`;
      }
    } else {
      inputType = type;
    }
    return (
      <div
        className="form__field"
        style={style}
      >
        <label htmlFor={label}>{label}</label>
        <input
          ref={ref}
          type={inputType}
          placeholder={placeholder}
          {...rest}
          id={label}
        />
        {}
        {icon && (
          <Button
            type="button"
            theme={ThemeButton.SMALL}
            onClick={togglePasswordVisiblity}
          >
            {
              passwordShown ? (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_37_3506)">
                    <path
                      d="M10 7.01614C9.21023 7.02136 8.4543 7.3374 7.89583 7.89587C7.33737 8.45433 7.02133 9.21026 7.01611 10C7.01611
                       11.6332 8.36682 12.9839 10 12.9839C11.6322 12.9839 12.9839 11.6332 12.9839 10C12.9839 8.36784 11.6322 7.01614 10 7.01614Z"
                      fill="#D2D0DC"
                    />
                    <path
                      d="M10 3.0376C2.408 3.0376 0.126318 9.61906 0.105431 9.6857L0 10L0.104436 10.3143C0.126318 10.3809 2.408 16.9624
                       10 16.9624C17.592 16.9624 19.8737 10.3809 19.8946 10.3143L20
                       10L19.8956 9.6857C19.8737 9.61906 17.592 3.0376 10 3.0376ZM10 14.9731C4.67774 14.9731 2.61587 11.1478 2.11657 10C2.61786 8.84822 4.68072 5.02686
                        10 5.02686C15.3223 5.02686 17.3841 8.8522 17.8834 10C17.3821 11.1518 15.3193 14.9731 10 14.9731Z"
                      fill="#D2D0DC"
                    />
                    <path
                      d="M19 2.5L1 18.5"
                      stroke="#D2D0DC"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_37_3506">
                      <rect
                        width="20"
                        height="20"
                        fill="white"
                      />
                    </clipPath>
                  </defs>
                </svg>
              // <img
              //   src={eyeClose}
              //   alt="Closeed eye"
              //   draggable={false}
              // />
              ) : (

                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.00001 6.31451C8.28922 6.31921 7.60888 6.60365 7.10626 7.10626C6.60365 7.60888 6.31921 8.28922 6.31451 9.00001C6.31451 10.4699 7.53015 11.6855
                     9.00001 11.6855C10.469 11.6855 11.6855 10.4699 11.6855 9.00001C11.6855 7.53104 10.469 6.31451 9.00001 6.31451Z"
                    fill="#D2D0DC"
                  />
                  <path
                    d="M9 2.73383C2.1672 2.73383 0.113686 8.65714
                     0.0948877 8.71712L0 8.99999L0.0939926 9.28286C0.113686
                      9.34284 2.1672 15.2662 9 15.2662C15.8328 15.2662 17.8863 9.34284 17.9051 9.28286L18 8.99999L17.906 8.71712C17.8863
                     8.65714 15.8328 2.73383 9 2.73383ZM9
                      13.4758C4.20997 13.4758 2.35429 10.033 1.90491 8.99999C2.35608 7.96339 4.21265 4.52416 9 4.52416C13.79 4.52416 15.6457 7.96697
                      16.0951 8.99999C15.6439 10.0366 13.7873 13.4758 9 13.4758Z"
                    fill="#D2D0DC"
                  />
                </svg>
              // <img
              //   src={eyeOpen}
              //   alt="Opened eye"
              //   draggable={false}
              // />
              )
            }

          </Button>

        )}

        {error && <span className="field__error">{error.message}</span>}
      </div>
    );
  },
);

Field.displayName = `Field`;

export default Field;
