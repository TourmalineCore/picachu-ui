import React from 'react';

function RestoreDeletedGallery({
  onRestoreGallery,
}: {
  onRestoreGallery: () => unknown;
}) {
  return (
    <div className="restore-deleted-gallery">
      <span className="restore-deleted-gallery__text">
        The nature gallery has been deleted.
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
