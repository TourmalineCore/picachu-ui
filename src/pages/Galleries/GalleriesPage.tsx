/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import AddButton from "../../components/AddButton/AddButton";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumbs";
import CreateGallery from "./components/CreateGallery/CreateGallery";
import GalleriesList from "./components/GalleriesList/GalleriesList";

// const mockGalleries = [
//   {
//     id: 1,
//     name: `one`,
//   },
//   {
//     id: 2,
//     name: `two`,
//   },
// ];

function GalleriesPage() {
  // const [galleries, setGalleries] = useState(mockGalleries);
  const [galleries, setGalleries] = useState([]);

  return (
    <div>
      {
        galleries.length === 0
          ? (
            <CreateGallery />
          )
          : (
            <>
              {` `}
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
