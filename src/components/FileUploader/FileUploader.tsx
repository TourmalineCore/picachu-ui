import { ChangeEvent, useRef } from "react";
import AddButton from "../AddButton/AddButton";

function FileUploader({
  isAddButton,
  onUploadNewImage,
}: {
  isAddButton: boolean;
  onUploadNewImage: (event: ChangeEvent<HTMLInputElement>) => Promise<unknown>;
}) {
  const hiddenFileInput = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (hiddenFileInput && hiddenFileInput.current) {
      hiddenFileInput.current.click();
    }
  };

  return (
    <>
      {isAddButton ? (
        <AddButton
          type="button"
          onClick={handleClick}
          data-cy="no-images-outline-upload-image-button"
        >
          Upload a photo
        </AddButton>
      ) : (
        <button
          type="button"
          className="button button--bright no-images__position-btn"
          data-cy="no-images-default-upload-image-button"
          onClick={handleClick}
        >
          Upload a photo
        </button>
      )}
      <input
        type="file"
        accept=".png,.jpeg"
        ref={hiddenFileInput}
        onChange={onUploadNewImage}
        style={{ display: `none` }}
      />
    </>
  );
}

export default FileUploader;
