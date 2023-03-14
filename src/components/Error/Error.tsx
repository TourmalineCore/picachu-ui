import { ReactComponent as CloseIcon } from '../../assets/icons/icon-close-error.svg';
import Button from '../Button/Button';

type IError = {
  error: string;
  removeError?: () => void;
  className?: string;
};

function Error({ error, removeError, className }: IError) {
  return (
    <div className={`error-message ${className}__error-message`}>
      <p className="error-message__title">
        {error}
      </p>
      <Button
        type="button"
        className="--close"
        onClick={removeError}
      >
        <CloseIcon />
      </Button>
    </div>
  );
}

export default Error;
