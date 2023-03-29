/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import axios from "axios";
import AddButton from "../../components/AddButton/AddButton";
import NoGalleries from "./components/NoGalleries/NoGalleries";
import GalleriesList from "./components/GalleriesList/GalleriesList";
import Gallery from "./components/GalleriesList/Gallery";

function GalleriesPage() {
  const [galleries, setGalleries] = useState<Gallery[]>([]);
  const [newlyCreatedGalleryId, setNewlyCreatedGalleryId] = useState<number | null>(null);

  useEffect(
    () => {
      async function loadGalleries() {
        const {
          data: loadedGalleries,
        } = await axios.get(`/api/galleries`); // ToDo add TS type for response data

        setGalleries(loadedGalleries);
      }

      loadGalleries();
    },
    [],
  );

  return (
    <div>
      {
        galleries.length === 0
          ? (
            <NoGalleries onNewGalleryClick={onNewGalleryClick} />
          )
          : (
            <>
              {/* ToDo what to do with the breadcrumbs useLocation? maybe need to wrap in router for all cypress component tests */}
              {/* <Breadcrumb /> */}
              <AddButton
                type="button"
                onClick={onNewGalleryClick}
              >
                Create new
              </AddButton>
              <GalleriesList
                galleries={galleries}
                newlyCreatedGalleryId={newlyCreatedGalleryId}
                onNameApply={onNameApply}
                onGalleryDelete={(id: number) => {
                }}
              />
            </>
          )
      }
    </div>
  );

  async function onNewGalleryClick() {
    const {
      data: loadedNewlyCreatedGalleryId,
    } = await axios.post(`/api/galleries`, {
      name: `new gallery`,
    });

    setNewlyCreatedGalleryId(loadedNewlyCreatedGalleryId);
    setGalleries([
      ...galleries,
      {
        id: loadedNewlyCreatedGalleryId,
        name: `new gallery`,
      },
    ]);
  }

  async function onNameApply({
    galleryId,
    newName,
  }: {
    galleryId: number;
    newName: string;
  }) {
    const notTrackNewlyCreatedAnyLonger = galleryId === newlyCreatedGalleryId;
    if (notTrackNewlyCreatedAnyLonger) {
      setNewlyCreatedGalleryId(null);
    }

    if (galleries.find(({ id }) => id === galleryId)!.name === newName) {
      return;
    }

    await axios.put(`/api/galleries/${galleryId}/update-name`, {
      newName,
    });
  }
}

export default GalleriesPage;
