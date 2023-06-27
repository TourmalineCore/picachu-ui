import Skeleton from 'react-loading-skeleton';
import { ChangeEvent } from 'react';
import Breadcrumbs from '../../../../components/Breadcrumbs/Breadcrumbs';
import FileUploader from '../../../../components/FileUploader/FileUploader';
import PhotoCard, { PhotoType } from '../PhotoCard/PhotoCard';
import Sort from '../Sort/Sort';

function PhotoList({
  photosArray,
  isLoading,
  onUploadNewPhoto,
}: {
  photosArray: PhotoType[];
  isLoading: boolean;
  onUploadNewPhoto?: (event: ChangeEvent<HTMLInputElement>) => Promise<unknown>;
}) {
  const skeletons = [...new Array(6)].map((_, index) => (
    <li
      // eslint-disable-next-line react/no-array-index-key
      key={index}
      className="photo-list__card"
      data-cy="photo-card-skeleton"
    >
      <Skeleton
        height={200}
        borderRadius={12}
      />
    </li>
  ));

  return (
    <div className="photo-list">
      <Breadcrumbs />
      <div className="photo-list__button-container">
        <FileUploader
          isAddButton
          onUploadNewImage={onUploadNewPhoto}
        />
        <Sort />
      </div>

      <ul className="photo-list__container">
        {isLoading ? (skeletons) : photosArray.map((photo) => (
          <li
            className="photo-list__card"
            key={photo.id + photo.uniqueness}
            data-cy="photo-card"
          >
            <PhotoCard
              id={photo.id}
              photoPath={photo.photoPath}
              uniqueness={photo.uniqueness}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PhotoList;
