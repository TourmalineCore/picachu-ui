import { ChangeEvent } from 'react';
import uploadPhoto from '../../../../assets/images/upload-image.png';
import Breadcrumbs from '../../../../components/Breadcrumbs/Breadcrumbs';
import FileUploader from '../../../../components/FileUploader/FileUploader';

function NoPhotos({
  onUploadNewPhoto,
}: {
  onUploadNewPhoto: (event: ChangeEvent<HTMLInputElement>) => Promise<unknown>;
}) {
  return (
    <div
      data-cy="no-photos"
      className="no-photos"
    >
      <Breadcrumbs />
      <div className="no-photos__image">
        <img
          src={uploadPhoto}
          alt="uploadPhoto"
          draggable={false}
        />
      </div>

      <div className="no-photos__text">
        <h1 className="no-photos__title">Upload the first photo to the gallery</h1>
        <p className="no-photos__description">
          Files supported: png, jpeg
        </p>
      </div>

      <FileUploader
        isAddButton={false}
        onUploadNewImage={onUploadNewPhoto}
      />
    </div>
  );
}

export default NoPhotos;
