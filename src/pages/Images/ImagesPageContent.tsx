/* eslint-disable react/jsx-no-bind */
import { ChangeEvent, useContext, useEffect } from "react";
import NoImages from "./components/NoImages/NoImages";
import ImagesPageStateContext from "./state/ImagesPageStateContext";
import { useGet } from "../../common/hooks/useGet";
import Image from "./components/ImagesList/Image";
import { api } from "../../common/utils/HttpClient";

function ImagesPageContent() {
  const imagesPageState = useContext(ImagesPageStateContext);

  // test const
  const galleryId = `nature`;

  const {
    response: loadedImages,
  } = useGet<Image[]>({
    queryKey: [`images`],
    url: `/galleries/${galleryId}/photos`,
  });

  useEffect(() => {
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

  async function onUploadNewImage(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files) return;
    const fileUploaded = event.target.files[0];
    await api.post(`/photos/${galleryId}/upload-photo`, {
      fileUploaded,
    });
  }
}

export default ImagesPageContent;
