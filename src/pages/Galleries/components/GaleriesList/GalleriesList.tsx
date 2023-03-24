import GalleryCard from "../GalleryCard/GalleryCard";

function GalleriesList({
  newlyCreatedGalleryId,
  galleries,
  onNameApply,
}: {
  newlyCreatedGalleryId: number;
  galleries: any[];
  onNameApply: ({ galleryId, newName }: { galleryId: number; newName: string }) => unknown;
}) {
  return (galleries.length === 0
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
  );
}

export default GalleriesList;
