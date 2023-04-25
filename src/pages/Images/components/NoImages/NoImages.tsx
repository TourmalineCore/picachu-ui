import { ChangeEvent } from 'react';
import uploadImage from '../../../../assets/images/upload-image.png';
import Breadcrumbs from '../../../../components/Breadcrumbs/Breadcrumbs';
import FileUploader from '../../../../components/FileUploader/FileUploader';

function NoImages({
  onUploadNewImage,
}: {
  onUploadNewImage: (event: ChangeEvent<HTMLInputElement>) => Promise<unknown>;
}) {
  return (
    <div
      data-cy="no-images"
      className="no-images"
    >
      <Breadcrumbs />
      <div className="no-images__image">
        <img
          src={uploadImage}
          alt="uploadImage"
          draggable={false}
        />
      </div>

      <div className="no-images__text">
        <h1 className="no-images__title">Upload the first photo to the gallery</h1>
        <p className="no-images__description">
          Files supported: png, jpeg
        </p>
      </div>

      <FileUploader
        isAddButton={false}
        onUploadNewImage={onUploadNewImage}
      />
    </div>
  );
}

export default NoImages;
