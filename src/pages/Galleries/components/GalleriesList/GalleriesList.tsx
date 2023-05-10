import { useContext } from "react";
import { observer } from "mobx-react-lite";
import GalleriesPageStateContext from "../../state/GalleriesPageStateContext";
import GalleryCard from "../GalleryCard/GalleryCard";

function GalleriesList({
  onNameApply,
  onGalleryDelete,
}: {
  onNameApply: ({
    galleryId,
    newName,
  }: {
    galleryId: number;
    newName: string;
  }) => unknown;
  onGalleryDelete: (id: number) => unknown;
}) {
  const galleriesPageState = useContext(GalleriesPageStateContext);

  return (
    <ul className="galleries-list">
      {
        galleriesPageState.galleries.map(({
          id,
          name,
          previewPhotos,
        }) => (
          <li
            className="galleries-list__item"
            key={`${id}-${name}`}
          >
            <GalleryCard
              name={name}
              newlyCreated={galleriesPageState.newlyCreatedGalleryId === id}
              onNameApply={(newName) => {
                onNameApply({
                  galleryId: id,
                  newName,
                });
              }}
              onDelete={() => {
                onGalleryDelete(id);
              }}
              photosCount={0}
              previewPhotos={previewPhotos}
            />
          </li>
        ))
      }
    </ul>

  );
}

export default observer(GalleriesList);
