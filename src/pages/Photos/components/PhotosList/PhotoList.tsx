import Breadcrumbs from '../../../../components/Breadcrumbs/Breadcrumbs';
import FileUploader from '../../../../components/FileUploader/FileUploader';
import PhotoCard, { PhotoType } from '../PhotoCard/PhotoCard';
import Sort from '../Sort/Sort';

function PhotoList({
  photosArray,
}: {
  photosArray: PhotoType[];
}) {
  return (
    <div className="photo-list">
      <Breadcrumbs />
      <div className="photo-list__button-container">
        <FileUploader isAddButton />
        <Sort />
      </div>

      <ul className="photo-list__container">
        {photosArray.map((photo) => (
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
