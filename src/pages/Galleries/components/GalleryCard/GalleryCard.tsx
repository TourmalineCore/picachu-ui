import {
  KeyboardEvent, useEffect, useRef, useState,
} from "react";
import { ReactComponent as DeleteIcon } from "../../../../assets/icons/icon-delete.svg";

type Photo = {};

function GalleryCard({
  name,
  id,
  newlyCreated,
  onNameApply,
  onDelete,
  photosCount,
  photos,
}: {
  name: string;
  id: number;
  newlyCreated: boolean;
  onNameApply: (newName: string) => unknown;
  onDelete: (id: number) => unknown;
  photosCount: number;
  photos: Photo[];
}) {
  const nameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (newlyCreated) {
      nameRef.current!.focus();
    }
  }, [newlyCreated]);

  const [newGalleryName, setNewGalleryName] = useState(name);

  const tryToApplyEmptyName = !newGalleryName.trim().length;

  return (
    <div
      className="gallery-card"
      data-cy="gallery-card"
    >
      <div className="gallery-card__image-container">
        <a href="/">
          {
            !photos.length && (
              <img
                className="gallery-card__image"
                src="src/assets/images/dummy-image.png"
                alt={`No photos have been added to ${name} yet`}
                data-cy="gallery-photo-preview"
              />
            )
          }
        </a>
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
          data-cy="delete-gallery"
          type="button"
          className="button gallery-card__delete-btn"
          onClick={() => onDelete(id)}
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
