import GalleryCard from "../GalleryCard/GalleryCard";
import Gallery from "./Gallery";

function GalleriesList({
  newlyCreatedGalleryId,
  galleries,
  onNameApply,
  onGalleryDelete,
}: {
  newlyCreatedGalleryId: number | null;
  galleries: Gallery[];
  onNameApply: ({
    galleryId,
    newName,
  }: {
    galleryId: number;
    newName: string;
  }) => unknown;
  onGalleryDelete: (id: number) => unknown;
}) {
  return (
    <div className="galleries-list">
      <ul className="galleries-list__list">
        {
          galleries.map(({
            id,
            name,
          }) => (
            <li
              className="galleries-list__item"
              key={`${id}-${name}`}
            >
              <GalleryCard
                id={id}
                name={name}
                newlyCreated={newlyCreatedGalleryId === id}
                onNameApply={(newName) => {
                  onNameApply({
                    galleryId: id,
                    newName,
                  });
                }}
                onDelete={onGalleryDelete}
                photosCount={0}
                photos={[]}
              />
            </li>
          ))
        }
      </ul>
    </div>

  );
}

export default GalleriesList;
