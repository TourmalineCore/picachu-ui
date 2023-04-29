/* eslint-disable react/jsx-no-bind */
import {
  ChangeEvent, useContext, useEffect,
} from "react";
import NoPhotos from "./components/NoPhotos/NoPhotos";
import PhotosPageStateContext from "./state/PhotosPageStateContext";
import { api } from "../../common/utils/HttpClient";
import Photo from "./components/PhotosList/Photos";

function PhotosPageContent() {
  const photosPageState = useContext(PhotosPageStateContext);
  // test const
  const galleryId = `nature`;

  useEffect(() => {
    onGetPhotos();
  }, []);

  return (
    <div>
      {
        photosPageState._photos.length === 0 ? (
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
    const { data }: { data: Photo[] } = await api.get(`/galleries/${galleryId}/photos`);
    photosPageState.initialize({ loadedPhotos: data });
  }

  async function onUploadNewPhoto(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files) return;
    const fileUploaded = event.target.files[0];
    await api.post(`/photos/${galleryId}/upload-photo`, {
      fileUploaded,
    });
    onGetPhotos();
  }
}

export default PhotosPageContent;
