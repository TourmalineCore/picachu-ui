import GalleryCard from "../GalleryCard/GalleryCard";

function GalleriesList({
  galleries,
}: {
  galleries: any[];
}) {
  return (galleries.length === 0
    ? <span data-cy="no-galleries">Create a gallery to get started</span>
    : (
      galleries.map(({
        name,
      }) => (
        <GalleryCard
          name={name}
          newlyCreated={false}
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
