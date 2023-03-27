import GalleryCard from "../GalleryCard/GalleryCard";
import Gallery from "./Gallery";

function GalleriesList({
  newlyCreatedGalleryId,
  galleries,
  onNameApply,
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
}) {
  return (
    <div>
      {
        galleries.length === 0
          ? <span data-cy="no-galleries">Create a gallery to get started</span>
          : (
            galleries.map(({
              id,
              name,
            }) => (
              <GalleryCard
                name={name}
                newlyCreated={newlyCreatedGalleryId === id}
                onNameApply={(newName) => {
                  onNameApply({
                    galleryId: id,
                    newName,
                  });
                }}
                photosCount={0}
                photos={[]}
              />
            ))
          )
      }
    </div>
  );
}

export default GalleriesList;
