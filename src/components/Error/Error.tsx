import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg';
import Button from '../Button/Button';
import { ThemeButton } from '../Button/Button.types';

type IError = {
  error: string;
  removeError: () => void;
};

function Error({ error, removeError }: IError) {
  return (
    <div className="error-message">
      <p className="error-message__title">
        {error}
      </p>
      <Button
        type="button"
        theme={ThemeButton.SMALL}
        onClick={() => removeError()}
      >
        <CloseIcon />
      </Button>
    </div>
  );
}

export default Error;
