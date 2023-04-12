/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { observer } from "mobx-react-lite";
import AddButton from "../../components/AddButton/AddButton";
import NoGalleries from "./components/NoGalleries/NoGalleries";
import GalleriesList from "./components/GalleriesList/GalleriesList";
import { Gallery } from "./components/GalleriesList/Gallery";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { useGet } from "../../common/hooks/useGet";
import GalleriesPageStateContext from "./state/GalleriesPageStateContext";
import RestoreDeletedGallery from "./components/RestoreDeletedGallery/RestoreDeletedGallery";
import { api } from "../../common/utils/HttpClient";

function GalleriesPageContent() {
  const galleriesPageState = useContext(GalleriesPageStateContext);

  const {
    response: loadedGalleries,
  } = useGet<Gallery[]>({
    queryKey: [`galleries`],
    url: `/api/galleries`,
  });

  useEffect(() => {
    if (loadedGalleries) {
      galleriesPageState.initialize({ loadedGalleries });
    }
  }, [loadedGalleries]);

  return (
    <div>
      {
        galleriesPageState.galleries.length === 0
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
                onNameApply={onNameApply}
                onGalleryDelete={onGalleryDelete}
              />

            </>
          )
      }
      {galleriesPageState.galleryToRestore && (
        <RestoreDeletedGallery
          onRestoreGallery={onRestoreGallery}
          galleryName={galleriesPageState.galleryToRestore!.name}
        />
      )}
    </div>
  );

  async function onNewGalleryClick() {
    const {
      data: loadedNewlyCreatedGalleryId,
    } = await api.post(`/api/galleries`, {
      name: `new gallery`,
    });

    galleriesPageState.addNewlyCreatedGallery({
      newlyCreatedGallery: {
        id: loadedNewlyCreatedGalleryId,
        name: `new gallery`,
      },
    });
  }

  async function onNameApply({
    galleryId,
    newName,
  }: {
    galleryId: number;
    newName: string;
  }) {
    const notTrackNewlyCreatedAnyLonger = galleryId === galleriesPageState.newlyCreatedGalleryId;
    if (notTrackNewlyCreatedAnyLonger) {
      galleriesPageState.stopTrackingNewlyCreatedGallery();
    }

    if (galleriesPageState.galleries.find(({ id }) => id === galleryId)!.name === newName) {
      return;
    }

    await api.post(`/api/galleries/${galleryId}/rename`, {
      newName,
    });
  }

  async function onGalleryDelete(galleryId: number) {
    galleriesPageState.deleteGallery({ galleryId });
    await api.delete(`/api/galleries/${galleryId}`);
  }

  async function onRestoreGallery() {
    await api.post(`/api/galleries/restore/${galleriesPageState.galleryToRestore!.id}`);
    galleriesPageState.restoreGallery();
  }
}

export default observer(GalleriesPageContent);
