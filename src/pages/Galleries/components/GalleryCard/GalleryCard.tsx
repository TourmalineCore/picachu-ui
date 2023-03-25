import {
  KeyboardEvent, useEffect, useRef, useState,
} from "react";
import { ReactComponent as DeleteIcon } from "../../../../assets/icons/icon-delete.svg";

type Photo = {};

function GalleryCard({
  name,
  newlyCreated,
  onNameApply,
  photosCount,
  photos,
}: {
  name: string;
  newlyCreated: boolean;
  onNameApply: (newName: string) => unknown;
  photosCount: number;
  photos: Photo[];
}) {
  const nameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (newlyCreated) {
      nameRef.current!.focus();
    }
  }, [newlyCreated]);

  const [newGalleryName, setGalleryName] = useState(name);

  return (
    <div className="gallery-card">
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
              onChange={(e) => setGalleryName(e.target.value)}
              onBlur={() => onNameApply(newGalleryName)}
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
          type="button"
          className="button gallery-card__delete-btn"
        >
          <DeleteIcon />
        </button>
      </div>
    </div>
  );

  function onNameKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === `Enter` || e.key === `Tab`) {
      const tryToApplyEmptyName = !newGalleryName.trim().length;
      if (tryToApplyEmptyName) {
        onNameApply(name);
      } else {
        onNameApply((e.target as HTMLInputElement).value);
      }
    } else if (e.key === `Escape`) {
      onNameApply(name);
    }
  }
}

export default GalleryCard;
