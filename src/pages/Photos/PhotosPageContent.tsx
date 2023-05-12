/* eslint-disable react/jsx-no-bind */
import {
  ChangeEvent, useContext, useEffect,
} from "react";
import { useParams } from "react-router-dom";
import NoPhotos from "./components/NoPhotos/NoPhotos";
import PhotosPageStateContext from "./state/PhotosPageStateContext";
import { api } from "../../common/utils/HttpClient";
import PhotoList from "./components/PhotosList/PhotoList";
import { PhotoType } from "./components/PhotoCard/PhotoCard";
import { photosArray } from "./Photos.data";

function PhotosPageContent() {
  const photosPageState = useContext(PhotosPageStateContext);

  const { galleryId } = useParams();

  useEffect(() => {
    onGetPhotos();
  }, []);

  return (
  // change zero to one to check PhotoListPage
    photosPageState.photos.length === 0 ? (
      <NoPhotos onUploadNewPhoto={onUploadNewPhoto} />
    ) : (
      <PhotoList photosArray={photosArray} />
    )
  );

  async function onGetPhotos() {
    const { data } = await api.get<PhotoType[]>(`/galleries/${galleryId}/photos`);
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
