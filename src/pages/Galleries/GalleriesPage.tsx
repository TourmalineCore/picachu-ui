/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import axios from "axios";
import AddButton from "../../components/AddButton/AddButton";
import NoGalleries from "./components/NoGalleries/NoGalleries";
import GalleriesList from "./components/GalleriesList/GalleriesList";
import Gallery from "./components/GalleriesList/Gallery";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { useGet } from "../../common/hooks/useGet";
import { usePost } from "../../common/hooks/usePost";
// import RestoreDeletedGallery from "./components/RestoreDeletedGallery/RestoreDeletedGallery";

function GalleriesPage() {
  const [galleries, setGalleries] = useState<Gallery[]>([]);
  const [newlyCreatedGalleryId, setNewlyCreatedGalleryId] = useState<number | null>(null);

  const {
    response: loadedGalleries,
  } = useGet<Gallery[]>({
    queryKey: [`galleries`],
    url: `/api/galleries`,
  });

  useEffect(() => {
    if (loadedGalleries) {
      setGalleries(loadedGalleries);
    }
  }, [loadedGalleries]);

  return (
    <div>
      {
        galleries.length === 0
          ? (
            <NoGalleries onNewGalleryClick={onNewGalleryClick} />
          )
          : (
            <>
              <Breadcrumbs />
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
              {/* <RestoreDeletedGallery
                onRestoreGallery={onRestoreGallery}
                galleryName="town"
              /> */}
            </>
          )
      }
    </div>
  );

  async function onNewGalleryClick() {
    // const {
    //   data: loadedNewlyCreatedGalleryId,
    // } = await axios.post(`/api/galleries`, {
    //   name: `new gallery`,
    // });

    const {
      response: loadedNewlyCreatedGalleryId,
    } = usePost<number, { name: string }>({
      queryKey: [`galleries`],
      url: `/api/galleries`,
      data: {
        name: `new gallery`,
      },
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

  function onRestoreGallery() {
    console.log(`onRestoreGallery`);
  }
}

export default GalleriesPage;
