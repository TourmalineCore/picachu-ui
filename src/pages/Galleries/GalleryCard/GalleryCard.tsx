import {
  KeyboardEvent, useEffect, useRef, useState,
} from "react";
import { ReactComponent as DeleteIcon } from "../../../assets/icons/icon-delete.svg";

function GalleryCard({
  name,
  newlyCreated,
  onNameChange,
  imagePath,
  imageAlt,
  photosCount,
}: {
  name: string;
  newlyCreated: boolean;
  onNameChange: (newName: string) => unknown;
  imagePath: string;
  imageAlt: string;
  photosCount: number;
}) {
  const nameRef = useRef<HTMLInputElement>();

  useEffect(() => {
    if (newlyCreated) {
      nameRef.current!.focus();
    }
  }, [newlyCreated]);

  const [galleryName, setGalleryName] = useState(name);

  return (
    <div className="gallery-card">
      <div className="gallery-card__image-container">
        <a href="/">
          <img
            className="gallery-card__image"
            src={imagePath}
            alt={imageAlt}
          />
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
              value={galleryName}
              onChange={(e) => setGalleryName(e.target.value)}
              onBlur={() => onNameChange(galleryName)}
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
      onNameChange((e.target as HTMLInputElement).value);
    }
  }
}

export default GalleryCard;
