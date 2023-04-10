/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import {
  useMemo,
} from "react";

import GalleriesPageContent from "./GalleriesPageContent";
import GalleriesPageState from "./state/GalleriesPageState";
import GalleriesPageStateContext from "./state/GalleriesPageStateContext";
// import RestoreDeletedGallery from "./components/RestoreDeletedGallery/RestoreDeletedGallery";

function GalleriesPage() {
  const galleriesPageState = useMemo(
    () => new GalleriesPageState(),
    [],
  );

  return (
    <GalleriesPageStateContext.Provider value={galleriesPageState}>
      <GalleriesPageContent />
    </GalleriesPageStateContext.Provider>
  );
}

export default GalleriesPage;
