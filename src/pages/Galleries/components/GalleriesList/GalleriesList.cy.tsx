import '../../../../../cypress/support/commands';
import GalleriesPageState from '../../state/GalleriesPageState';
import GalleriesPageStateContext from '../../state/GalleriesPageStateContext';
import GalleriesList from './GalleriesList';
import { Gallery } from './Gallery';

describe(`GalleriesList`, () => {
  it(`SHOULD NOT render call to action message WHEN there are galleries`, () => {
    mountComponentAndReturnState({
      galleries: [{
        id: 1,
        name: `Am`,
        previewPhotos: [],
      }],
      isLoading: false,
    });

    cy.contains(`Create a gallery to get started`)
      .should(`not.exist`);
  });

  it(`SHOULD render a gallery WHEN there is a single gallery`, () => {
    mountComponentAndReturnState({
      galleries: [{
        id: 1,
        name: `My Gallery is Awesome`,
        previewPhotos: [],
      }],
      isLoading: false,
    });

    cy.getByData(`gallery-name-input`)
      .should(`have.value`, `My Gallery is Awesome`);
  });

  it(`SHOULD render all galleries WHEN there are several of them`, () => {
    mountComponentAndReturnState({
      galleries: [{
        id: 1,
        name: `My Gallery is Awesome`,
        previewPhotos: [],
      },
      {
        id: 2,
        name: `My Awful Gallery`,
        previewPhotos: [],
      }],
      isLoading: false,
    });

    cy.getByData(`gallery-name-input`)
      .should(`have.length`, 2);
  });

  it(`SHOULD focus name of the gallery WHEN we just created a new first one`, () => {
    mountComponentAndReturnState({
      galleries: [],
      isLoading: false,
      newlyCreatedGallery: {
        id: 1,
        name: `My Gallery is Awesome`,
        previewPhotos: [],
      },
    });

    cy
      .getByData(`gallery-name-input`)
      .should(`be.focused`);
  });
  it(`SHOULD render 6 skeleton cards IF isLoading state true`, () => {
    mountComponentAndReturnState({
      galleries: [],
      isLoading: true,
      newlyCreatedGallery: {
        id: 1,
        name: `My Gallery is Awesome`,
        previewPhotos: [],
      },
    });
    cy.getByData(`gallery-card`).should(`not.exist`);
    cy.getByData(`galleries-list-skeleton`).its(`length`).should(`equal`, 6);
  });

  it(`SHOULD call on name apply WHEN we focus out from newly created gallery changed name`, () => {
    const onNameApplySpy = cy.spy().as(`onNameApply`);

    mountComponentAndReturnState({
      galleries: [
        {
          id: 1,
          name: `First Gallery`,
          previewPhotos: [],
        },
      ],
      newlyCreatedGallery: {
        id: 2,
        name: `Second Gallery`,
        previewPhotos: [],
      },
      isLoading: false,
      onNameApply: onNameApplySpy,
    });

    cy.getByData(`gallery-name-input`)
      .last()
      .type(` Ever`);

    cy.getByData(`gallery-name-input`)
      .last()
      .blur();

    cy.get(`@onNameApply`)
      .should(`have.been.calledOnceWith`, {
        galleryId: 2,
        newName: `Second Gallery Ever`,
      });
  });

  describe(`delete gallery`, () => {
    it(`SHOULD delete a gallery from the list WHEN Delete button is clicked on that gallery`, () => {
      const onDeleteSpy = cy.spy().as(`onDelete`);

      mountComponentAndReturnState({
        onGalleryDelete: onDeleteSpy,
        isLoading: false,
        galleries: [
          {
            id: 3,
            name: `Third Gallery`,
            previewPhotos: [],
          },
          {
            id: 1,
            name: `First Gallery`,
            previewPhotos: [],
          },
        ],
      });

      cy
        .getByData(`delete-gallery-button`)
        .last()
        .click();

      cy.get(`@onDelete`)
        .should(`have.been.calledOnceWith`, 1);
    });
  });
});

function mountComponentAndReturnState({
  newlyCreatedGallery = undefined,
  galleries,
  onNameApply = () => {},
  onGalleryDelete = () => {},
  isLoading,
}: {
  newlyCreatedGallery?: Gallery;
  galleries: Gallery[];
  isLoading: boolean;
  onNameApply?: ({ galleryId, newName }: { galleryId: number; newName: string }) => unknown;
  onDelete?: ({ galleryId }: { galleryId: number }) => unknown;
  onGalleryDelete?: (id: number) => unknown;
}) {
  const galleriesPageState = new GalleriesPageState();

  galleriesPageState.initialize({
    loadedGalleries: galleries,
  });

  if (newlyCreatedGallery) {
    galleriesPageState.addNewlyCreatedGallery({
      newlyCreatedGallery,
    });
  }

  cy.mount(
    <GalleriesPageStateContext.Provider value={galleriesPageState}>
      <GalleriesList
        onNameApply={onNameApply}
        onGalleryDelete={onGalleryDelete}
        isLoading={isLoading}
      />
    </GalleriesPageStateContext.Provider>,
  );

  return {
    galleriesPageState,
  };
}
