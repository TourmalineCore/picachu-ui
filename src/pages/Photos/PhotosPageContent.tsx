/* eslint-disable react/jsx-no-bind */
import {
  ChangeEvent, useContext, useEffect, useState,
} from "react";
import NoPhotos from "./components/NoPhotos/NoPhotos";
import PhotosPageStateContext from "./state/PhotosPageStateContext";
import { api } from "../../common/utils/HttpClient";
import Photo from "./components/PhotosList/Photos";

function PhotosPageContent() {
  const PhotosPageState = useContext(PhotosPageStateContext);
  const [loadedPhotos, setLoadedPhotos] = useState<Photo[]>([]);
  // test const
  const galleryId = `nature`;

  useEffect(() => {
    onGetPhotos();
    if (loadedPhotos) {
      PhotosPageState.initialize({ loadedPhotos });
    }
  }, [loadedPhotos]);

  return (
    <div>
      {
        PhotosPageState._photos.length === 0 ? (
          <NoPhotos onUploadNewPhoto={onUploadNewPhoto} />
        ) : (
          <>
            next feat
          </>
        )
      }
    </div>
  );

  async function onGetPhotos() {
    const { data } = await api.get(`/galleries/${galleryId}/photos`);
    setLoadedPhotos(data);
  }

  async function onUploadNewPhoto(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files) return;
    const fileUploaded = event.target.files[0];
    await api.post(`/photos/${galleryId}/upload-photo`, {
      fileUploaded,
    });
  }
}

export default PhotosPageContent;
