/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState } from "react";
import { ReactComponent as DeleteIcon } from "../../../assets/icons/icon-delete.svg";

function GalleryCard({
  imagePath,
  imageAlt,
  photosCount,
}: {
  imagePath: string;
  imageAlt: string;
  photosCount: number;
}) {
  const [isEditing, setEditing] = useState(false);
  const [galleryName, setGalleryName] = useState(`new gallery`);

  // Event handler while pressing any key while editing
  const handleKeyDown = (event: any) => {
    const { key } = event;
    const keys = [`Escape`, `Tab`, `Enter`];
    if (
      (keys.indexOf(key) > -1)
    ) {
      setEditing(false);
    }
  };

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
          {isEditing ? (
            <div
              onBlur={() => setEditing(false)}
              onKeyDown={(e) => handleKeyDown(e)}
            >
              <input
                type="text"
                value={galleryName}
                onChange={(e) => setGalleryName(e.target.value)}
              />
            </div>
          ) : (
            <div
              className="gallery-card__editable"
              onClick={() => setEditing(true)}
            >
              <h3 className="gallery-card__name">{galleryName}</h3>
            </div>
          )}

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
}

export default GalleryCard;
