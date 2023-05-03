import { photosArray } from "../../Photos.data";
import PhotosPageState from "../../state/PhotosPageState";
import PhotosPageStateContext from "../../state/PhotosPageStateContext";
import { PhotoType } from "../PhotoCard/PhotoCard";
import PhotoList from "./PhotoList";

describe(`PhotoList`, () => {
  it(`count of cards SHOULD be three`, () => {
    mountComponent({
      photos: photosArray,
    });
    cy.getByData(`photo-card`).its(`length`).should(`eq`, 3);
  });
});

function mountComponent({
  photos,
}: {
  photos: PhotoType[];
}) {
  const photosPageState = new PhotosPageState();

  cy.mount(
    <PhotosPageStateContext.Provider value={photosPageState}>
      <PhotoList photosArray={photos} />
    </PhotosPageStateContext.Provider>,

  );
}
