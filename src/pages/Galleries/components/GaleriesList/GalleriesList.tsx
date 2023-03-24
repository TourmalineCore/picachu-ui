function GalleriesList({
  galleries,
}: {
  galleries: any[];
}) {
  return (galleries.length === 0
    && <span data-cy="no-galleries">Create a gallery to get started</span>
  );
}

export default GalleriesList;
