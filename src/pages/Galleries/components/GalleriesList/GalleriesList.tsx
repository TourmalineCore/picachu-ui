import { useState } from "react";
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
  const [filteredGalleriesList, setFilteredGalleriesList] = useState(galleries);

  return (
    <div>
      {
        filteredGalleriesList.length === 0
          ? <span data-cy="no-galleries">Create a gallery to get started</span>
          : (
            galleries.map(({
              id,
              name,
            }) => (
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
                onDelete={handleGalleryDelete}
                photosCount={0}
                photos={[]}
              />
            ))
          )
      }
    </div>
  );

  function handleGalleryDelete(id: number) {
    const newGalleriesList = filteredGalleriesList.filter((item) => item.id !== id);

    setFilteredGalleriesList(newGalleriesList);
  }
}

export default GalleriesList;
