import { ReactComponent as CloseIcon } from '../../assets/icons/icon-close-error.svg';
import Button from '../Button/Button';

type IError = {
  error: string;
  removeError?: () => void;
};

function Error({ error, removeError }: IError) {
  return (
    <div className="error-message">
      <p className="error-message__title">
        {error}
      </p>
      <Button
        type="button"
        className="--small"
        onClick={removeError}
      >
        <CloseIcon />
      </Button>
    </div>
  );
}

export default Error;
