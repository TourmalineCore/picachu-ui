/* eslint-disable react/jsx-no-bind */
import {
  ChangeEvent, useContext, useEffect, useState,
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
  const [isLoading, setIsLoading] = useState(false);
  const { galleryId } = useParams();

  useEffect(() => {
    onGetPhotos();
  }, []);

  return (
    // eslint-disable-next-line no-nested-ternary
    isLoading ? (
      <PhotoList
        photosArray={photosArray}
        isLoading={isLoading}
      />
    )
      : photosPageState.photos.length === 0 ? (
        <NoPhotos onUploadNewPhoto={onUploadNewPhoto} />
      ) : (
        <PhotoList
          photosArray={photosArray}
          isLoading={isLoading}
        />
      )
  );

  async function onGetPhotos() {
    setIsLoading(true);

    try {
      const { data } = await api.get<PhotoType[]>(`/galleries/${galleryId}/photos`);

      photosPageState.initialize({ loadedPhotos: data });
    } catch (error: any) {
      console.log(error.response.data.msg);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    }
  }

  async function onUploadNewPhoto(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files) return;

    const fileUploaded = event.target.files[0];

    try {
      await api.post(`/photos/${galleryId}/upload-photo`, {
        fileUploaded,
      });

      onGetPhotos();
    } catch (error: any) {
      console.log(error.response.data.msg);
    }
  }
}

export default PhotosPageContent;
