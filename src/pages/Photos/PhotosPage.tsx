import { useMemo } from "react";
import PhotosPageState from "./state/PhotosPageState";
import PhotosPageStateContext from "./state/PhotosPageStateContext";
import PhotosPageContent from "./PhotosPageContent";

function PhotosPage() {
  const photosPageState = useMemo(
    () => new PhotosPageState(),
    [],
  );
  return (
    <PhotosPageStateContext.Provider value={photosPageState}>
      <PhotosPageContent />
    </PhotosPageStateContext.Provider>
  );
}

export default PhotosPage;
