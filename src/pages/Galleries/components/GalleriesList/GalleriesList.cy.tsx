import '../../../../../cypress/support/commands';
import GalleriesList from './GalleriesList';
import Gallery from './Gallery';

describe(`GalleriesList`, () => {
  it(`SHOULD render call to action message WHEN there are no galleries`, () => {
    mountComponent({
      galleries: [],
    });

    cy
      .getByData(`no-galleries`)
      .contains(`Create a gallery to get started`);
  });

  it(`SHOULD NOT render call to action message WHEN there are galleries`, () => {
    mountComponent({
      galleries: [{
        id: 1,
        name: `Am`,
      }],
    });

    cy.contains(`Create a gallery to get started`)
      .should(`not.exist`);
  });

  it(`SHOULD render a gallery WHEN there is a single gallery`, () => {
    mountComponent({
      galleries: [{
        id: 1,
        name: `My Gallery is Awesome`,
      }],
    });

    cy.getByData(`gallery-name-input`)
      .should(`have.value`, `My Gallery is Awesome`);
  });

  it(`SHOULD render all galleries WHEN there are several of them`, () => {
    mountComponent({
      galleries: [{
        id: 1,
        name: `My Gallery is Awesome`,
      },
      {
        id: 2,
        name: `My Awful Gallery`,
      }],
    });

    cy.getByData(`gallery-name-input`)
      .should(`have.length`, 2);
  });

  it(`SHOULD focus name of the gallery WHEN we just created a new first one`, () => {
    mountComponent({
      newlyCreatedGalleryId: 1,
      galleries: [{
        id: 1,
        name: `My Gallery is Awesome`,
      }],
    });

    cy
      .getByData(`gallery-name-input`)
      .focused();
  });

  it(`SHOULD call on name apply WHEN we focus out from newly created gallery changed name`, () => {
    const onNameApplySpy = cy.spy().as(`onNameApply`);

    mountComponent({
      newlyCreatedGalleryId: 2,
      galleries: [
        {
          id: 1,
          name: `First Gallery`,
        },
        {
          id: 2,
          name: `Second Gallery`,
        },
      ],
      onNameApply: onNameApplySpy,
    });

    cy
      .getByData(`gallery-name-input`)
      .last()
      .type(` Ever`)
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

      mountComponent({
        onGalleryDelete: onDeleteSpy,
        galleries: [
          {
            id: 1,
            name: `First Gallery`,
          },
        ],
      });

      cy
        .get(`#1 [data-cy="delete-gallery"]`)
        .click();

      cy.get(`@onDelete`)
        .should(`have.been.calledOnceWith`, 1);
    });
  });
});

function mountComponent({
  newlyCreatedGalleryId = null,
  galleries,
  onNameApply = () => {},
  onGalleryDelete = () => {},
}: {
  newlyCreatedGalleryId?: number | null;
  galleries: Gallery[];
  onNameApply?: ({ galleryId, newName }: { galleryId: number; newName: string }) => unknown;
  onDelete?: ({ galleryId }: { galleryId: number }) => unknown;
  onGalleryDelete?: (id: number) => unknown;
}) {
  cy.mount(
    <GalleriesList
      newlyCreatedGalleryId={newlyCreatedGalleryId}
      galleries={galleries}
      onNameApply={onNameApply}
      onGalleryDelete={onGalleryDelete}
    />,
  );
}
