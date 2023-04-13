import { useMemo } from "react";
import ImagesPageState from "./state/ImagesPageState";
import ImagesPageStateContext from "./state/ImagesPageStateContext";
import ImagesPageContent from "./ImagesPageContent";

function ImagePage() {
  const imagesPageState = useMemo(
    () => new ImagesPageState(),
    [],
  );
  return (
    <ImagesPageStateContext.Provider value={imagesPageState}>
      <ImagesPageContent />
    </ImagesPageStateContext.Provider>
  );
}

export default ImagePage;
