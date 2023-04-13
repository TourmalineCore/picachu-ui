import { useContext, useEffect } from "react";
import NoImages from "./components/NoImages/NoImages";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import ImagesPageStateContext from "./state/ImagesPageStateContext";
import { useGet } from "../../common/hooks/useGet";
import Image from "./components/ImagesList/Image";
import FileUploader from "../../components/FileUploader/FileUploader";

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
          <NoImages />
        ) : (
          <>
            <Breadcrumbs />
            <div style={{
              display: `flex`,
              justifyContent: `space-between`,
              alignItems: `center`,
            }}
            >
              <FileUploader isAddButton />
            </div>
          </>
        )
      }
    </div>
  );
}

export default ImagesPageContent;
