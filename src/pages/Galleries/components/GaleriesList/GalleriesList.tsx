import GalleryCard from "../GalleryCard/GalleryCard";

function GalleriesList({
  newlyCreatedGalleryId,
  galleries,
}: {
  newlyCreatedGalleryId: number;
  galleries: any[];
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
          }}
          photosCount={0}
          photos={[]}
        />
      ))

    )
  );
}

export default GalleriesList;
