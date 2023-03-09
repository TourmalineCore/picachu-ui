import { forwardRef, useState } from 'react';
import { TypeInputPropsField } from './Field.d';
import Button from '../../Button/Button';
import { ThemeButton } from '../../Button/Button.types';

import { ReactComponent as EyeOpened } from '../../../assets/icons/opened-eye.svg';
import { ReactComponent as EyeClosed } from '../../../assets/icons/closed-eye.svg';

const Field = forwardRef<HTMLInputElement, TypeInputPropsField>(
  ({
    placeholder, label, type, style, ...rest
  }, ref) => {
    const [passwordShown, setPasswordShown] = useState(false);

    const togglePasswordVisiblity = () => {
      setPasswordShown(!passwordShown);
    };
    let inputType;
    if (type === `password`) {
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
        className="fields-container"
        style={style}
      >
        <label
          className="fields-container__label"
          htmlFor={label}
        >
          {label}
        </label>
        <input
          ref={ref}
          type={inputType}
          className="fields-container__input"
          placeholder={placeholder}
          {...rest}
          id={label}
        />
        {type === `password` && (
          <Button
            type="button"
            theme={ThemeButton.SMALL}
            onClick={togglePasswordVisiblity}
          >
            <div className="fields-container__icon">
              {passwordShown ? (<EyeClosed />) : (<EyeOpened />)}
            </div>

          </Button>
        )}
      </div>
    );
  },
);

Field.displayName = `Field`;

export default Field;
