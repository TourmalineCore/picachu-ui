/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import axios from "axios";
import AddButton from "../../components/AddButton/AddButton";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumbs";
import NoGalleries from "./components/NoGalleries/NoGalleries";
import GalleriesList from "./components/GalleriesList/GalleriesList";

function GalleriesPage() {
  const [galleries, setGalleries] = useState([]);

  useEffect(
    () => {
      async function loadGalleries() {
        const {
          data: loadedGalleries,
        } = await axios.get(`/galleries`); // ToDo add TS type for response data

        setGalleries(loadedGalleries);
      }

      loadGalleries();
    },
    [],
  );

  return (
    <div>
      {
        galleries.length === 0
          ? (
            <NoGalleries />
          )
          : (
            <>
              <Breadcrumb />
              <AddButton type="button">Create new</AddButton>
              <GalleriesList
                galleries={galleries}
                newlyCreatedGalleryId={null}
                onNameApply={({
                  galleryId,
                  newName,
                }: {
                  galleryId: number;
                  newName: string;
                }) => {
                }}
                onGalleryDelete={(id: number) => {
                }}
              />
            </>
          )
      }
    </div>
  );
}

export default GalleriesPage;
