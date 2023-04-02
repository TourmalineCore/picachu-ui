import '../../../../../cypress/support/commands';
import RestoreDeletedGallery from './RestoreDeletedGallery';

describe(`RestoreDeletedGallery`, () => {
  it(`SHOULD call restore callback WHEN restore button is clicked`, () => {
    const onRestoreGallerySpy = cy.spy().as(`onRestoreGallery`);

    mountComponent({ onRestoreGallery: onRestoreGallerySpy });

    cy
      .getByData(`restore-gallery-button`).click();

    cy.get(`@onRestoreGallery`)
      .should(`have.been.calledOnce`);
  });
});

function mountComponent({
}: {
}) {
  const onRestoreGallerySpy = cy.spy().as(`onRestoreGallery`);

  cy.mount(
    <RestoreDeletedGallery
      onRestoreGallery={onRestoreGallerySpy}
    />,
  );
}
