import '../../../../../cypress/support/commands';
import GalleriesList from './GalleriesList';

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
      galleries: [{}],
    });

    cy.contains(`Create a gallery to get started`)
      .should(`not.exist`);
  });

  it(`SHOULD render a gallery WHEN there is a single gallery`, () => {
    mountComponent({
      galleries: [{
        name: `My Gallery is Awesome`,
      }],
    });

    cy.getByData(`gallery-name-input`)
      .should(`have.value`, `My Gallery is Awesome`);
  });

  it(`SHOULD render all galleries WHEN there are several of them`, () => {
    mountComponent({
      galleries: [{
        name: `My Gallery is Awesome`,
      },
      {
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
});

function mountComponent({
  newlyCreatedGalleryId,
  galleries,
}: {
  newlyCreatedGalleryId?: number;
  galleries: any[];
}) {
  cy.mount(
    <GalleriesList
      newlyCreatedGalleryId={newlyCreatedGalleryId}
      galleries={galleries}
    />,
  );
}
