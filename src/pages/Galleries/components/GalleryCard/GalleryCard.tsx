import {
  KeyboardEvent, useEffect, useRef, useState,
} from "react";
import { ReactComponent as DeleteIcon } from "../../../../assets/icons/icon-delete.svg";
import { PreviewPhoto } from "../GalleriesList/Gallery";

function GalleryCard({
  name,
  newlyCreated,
  onNameApply,
  onDelete,
  photosCount,
  previewPhotos,
}: {
  name: string;
  newlyCreated: boolean;
  onNameApply: (newName: string) => unknown;
  onDelete: () => unknown;
  photosCount: number;
  previewPhotos: PreviewPhoto[];
}) {
  const nameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (newlyCreated) {
      nameRef.current!.focus();
    } else {
      nameRef.current!.blur();
    }
  }, [newlyCreated]);

  // '' is temporal here until backend error is fixed
  const [newGalleryName, setNewGalleryName] = useState(name || ``);

  const tryToApplyEmptyName = !newGalleryName.trim().length;

  return (
    <div
      className="gallery-card"
      data-cy="gallery-card"
    >
      <div className="gallery-card__image-container">
        {
          previewPhotos.length ? (
            <div
              className="gallery-card__collage"
              data-cy="gallery-photo-collage"
            >
              {
                previewPhotos.length < 4 && (
                  <img
                    key={previewPhotos[0].photoPath}
                    src={previewPhotos[0].photoPath}
                    alt={`Preview for ${name} gallery`}
                  />
                )
              }
              {previewPhotos.length >= 4 && previewPhotos
                .splice(0, 4)
                .map((previewPhoto, index) => (
                  <img
                    key={previewPhoto.photoPath}
                    src={previewPhoto.photoPath}
                    alt={`Preview ${index + 1} for ${name} gallery`}
                  />
                ))}
            </div>
          ) : (
            <img
              className="gallery-card__image"
              src="src/assets/images/dummy-image.png"
              alt={`No photos have been added to ${name} yet`}
              data-cy="gallery-photo-preview"
            />
          )
        }
      </div>
      <div className="gallery-card__inner">
        <div className="gallery-card__wrapper">
          <h3
            className="gallery-card__name"
          >
            <input
              ref={nameRef}
              data-cy="gallery-name-input"
              type="text"
              value={newGalleryName}
              onChange={(e) => setNewGalleryName(e.target.value)}
              onBlur={() => onNameBlur()}
              onKeyDown={onNameKeyDown}
            />
          </h3>
          <span className="gallery-card__count">
            {photosCount}
            {` `}
            photos
          </span>
        </div>
        <button
          data-cy="delete-gallery-button"
          type="button"
          className="button gallery-card__delete-btn"
          onClick={onDelete}
        >
          <DeleteIcon />
        </button>
      </div>
    </div>
  );

  function onNameBlur() {
    if (tryToApplyEmptyName) {
      onNameApply(name);
      setNewGalleryName(name);
    } else {
      onNameApply(newGalleryName);
    }
  }

  function onNameKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === `Enter` || e.key === `Tab`) {
      if (tryToApplyEmptyName) {
        onNameApply(name);
        setNewGalleryName(name);
      } else {
        onNameApply((e.target as HTMLInputElement).value);
      }
    } else if (e.key === `Escape`) {
      onNameApply(name);
      setNewGalleryName(name);
    }
  }
}

export default GalleryCard;
