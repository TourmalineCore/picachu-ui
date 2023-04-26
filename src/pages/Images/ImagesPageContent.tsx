/* eslint-disable react/jsx-no-bind */
import {
  ChangeEvent, useContext, useEffect, useState,
} from "react";
import NoImages from "./components/NoImages/NoImages";
import ImagesPageStateContext from "./state/ImagesPageStateContext";
import Image from "./components/ImagesList/Image";
import { api } from "../../common/utils/HttpClient";

function ImagesPageContent() {
  const imagesPageState = useContext(ImagesPageStateContext);
  const [loadedImages, setLoadedImages] = useState<Image[]>([]);
  // test const
  const galleryId = `nature`;

  useEffect(() => {
    onGetImages();
    if (loadedImages) {
      imagesPageState.initialize({ loadedImages });
    }
  }, [loadedImages]);

  return (
    <div>
      {
        imagesPageState._images.length === 0 ? (
          <NoImages onUploadNewImage={onUploadNewImage} />
        ) : (
          <>
            next feat
          </>
        )
      }
    </div>
  );

  async function onGetImages() {
    const { data } = await api.get(`/galleries/${galleryId}/photos`);
    setLoadedImages(data);
  }

  async function onUploadNewImage(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files) return;
    const fileUploaded = event.target.files[0];
    await api.post(`/photos/${galleryId}/upload-photo`, {
      fileUploaded,
    });
  }
}

export default ImagesPageContent;
