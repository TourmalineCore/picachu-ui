import {
  ChangeEvent, useEffect, useState,
} from "react";

interface IValidation {
  minLength: number;
  isEmpty: boolean;
  noSpace: boolean;
}

export const useValidation = (value: string, validations: IValidation) => {
  const [isError, setError] = useState(false);
  const [inputValid, setInputValid] = useState(false);

  const re = /^\S+$/;
  useEffect(() => {
    for (const validtion in validations) {
      if (Object.prototype.hasOwnProperty.call(validations, validtion)) {
        switch (validtion) {
          case `minLength`:
            if (value.length < validations[validtion]) {
              setError(true);
            } else {
              setError(false);
            }
            break;

          case `isEmpty`:
            if (value) {
              setError(false);
            } else {
              setError(true);
            }
            break;

          case `noSpace`:
            if (re.test(String(value).toLocaleLowerCase())) {
              setError(false);
            } else {
              setError(true);
            }
            break;
          default:
            break;
        }
      }
    }
  }, [value]);
  useEffect(() => {
    if (isError) {
      setInputValid(false);
    } else {
      setInputValid(true);
    }
  }, [isError]);

  return {
    isError,
    inputValid,
  };
};

export const useInput = (initialValue: string, validations: IValidation) => {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setDirty] = useState(false);
  const valid = useValidation(value, validations);
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  };

  const onBlur = () => {
    setDirty(true);
  };

  return {
    value,
    onChange,
    onBlur,
    ...valid,
    isDirty,
  };
};
