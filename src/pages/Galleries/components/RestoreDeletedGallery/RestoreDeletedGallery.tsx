import React from 'react';

function RestoreDeletedGallery({
  onRestoreGallery,
  galleryName,
}: {
  onRestoreGallery: () => unknown;
  galleryName: string;
}) {
  return (
    <div className="restore-deleted-gallery">
      <span
        className="restore-deleted-gallery__text"
        data-cy="restore-deleted-gallery-text"
      >
        {`The ${galleryName} gallery has been deleted.`}
      </span>
      <button
        className="restore-deleted-gallery__button button"
        data-cy="restore-gallery-button"
        type="button"
        onClick={onRestoreGallery}
      >
        Restore
      </button>
    </div>
  );
}

export default RestoreDeletedGallery;
