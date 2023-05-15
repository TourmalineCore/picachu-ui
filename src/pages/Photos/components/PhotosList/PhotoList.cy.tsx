import { photosArray } from "../../Photos.data";
import PhotosPageState from "../../state/PhotosPageState";
import PhotosPageStateContext from "../../state/PhotosPageStateContext";
import { PhotoType } from "../PhotoCard/PhotoCard";
import PhotoList from "./PhotoList";

describe(`PhotoList`, () => {
  it(`count of cards SHOULD be more than 0`, () => {
    mountComponent({
      photos: photosArray,
      isLoading: false,
    });
    cy.getByData(`photo-card`).its(`length`).should(`be.greaterThan`, 0);
  });

  it(`IF isLoading state active SHOULD render 6 skekelon cards`, () => {
    mountComponent({
      photos: photosArray,
      isLoading: true,
    });
    cy.getByData(`photo-card`).should(`not.exist`);
    cy.getByData(`photo-card-skeleton`).its(`length`).should(`equal`, 6);
  });
});

function mountComponent({
  photos,
  isLoading,
}: {
  isLoading: boolean;
  photos: PhotoType[];
}) {
  const photosPageState = new PhotosPageState();

  cy.mount(
    <PhotosPageStateContext.Provider value={photosPageState}>
      <PhotoList
        photosArray={photos}
        isLoading={isLoading}
      />
    </PhotosPageStateContext.Provider>,

  );
}
