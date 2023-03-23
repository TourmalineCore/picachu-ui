import { ReactComponent as CloseIcon } from '../../assets/icons/icon-close-error.svg';

type IError = {
  error: string;
  removeError?: () => void;
  className?: string;
};

function Error({ error, removeError, className }: IError) {
  return (
    <div className={`error-message ${className}`}>
      <p className="error-message__title">
        {error}
      </p>
      <button
        type="button"
        className="button button--close"
        onClick={removeError}
      >
        <CloseIcon />
      </button>
    </div>
  );
}

export default Error;
