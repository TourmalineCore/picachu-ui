import '../../../../../cypress/support/commands';
import RestoreDeletedGallery from './RestoreDeletedGallery';

describe(`RestoreDeletedGallery`, () => {
  it(`SHOULD call restore callback WHEN restore button is clicked`, () => {
    mountComponent();

    cy
      .getByData(`restore-gallery-button`).click();

    cy.get(`@onRestoreGallery`)
      .should(`have.been.calledOnce`);
  });

  it(`SHOULD show corresponding gallery's name WHEN deleting a gallery`, () => {
    mountComponent();

    cy.contains(`city`);
  });
});

function mountComponent() {
  const onRestoreGallerySpy = cy.spy().as(`onRestoreGallery`);

  cy.mount(
    <RestoreDeletedGallery
      onRestoreGallery={onRestoreGallerySpy}
      galleryName="city"
    />,
  );
}
