import GalleryCard from './GalleryCard';
import '../../../../cypress/support/commands';

describe(`GalleryCard`, () => {
  // beforeEach(() => {

  // });

  it(`newly created gallery card SHOULD have name field filled and focused`, () => {
    cy.mount(
      <GalleryCard
        imagePath="#"
        imageAlt=""
        photosCount={0}
        name="new gallery"
        newlyCreated
      />,
    );

    cy
      .getByData(`gallery-name-input`)
      .should(`have.value`, `new gallery`)
      .focused();
  });

  describe(`name editing`, () => {
    it(`SHOULD apply changes to name WHEN pressing Enter in focused name`, () => {
      const onNameChangeSpy = cy.spy().as(`onNameChange`);

      cy.mount(
        <GalleryCard
          imagePath="#"
          imageAlt=""
          photosCount={0}
          name="new gallery"
          newlyCreated
          onNameChange={onNameChangeSpy}
        />,
      );

      cy
        .getByData(`gallery-name-input`)
        .type(`123`)
        .should(`have.value`, `new gallery123`)
        .type(`{enter}`);

      cy.get(`@onNameChange`)
        .should(`have.been.calledOnceWith`, `new gallery123`);
    });

    it(`SHOULD apply changes to name WHEN focus out in focused name`, () => {
      const onNameChangeSpy = cy.spy().as(`onNameChange`);

      cy.mount(
        <GalleryCard
          imagePath="#"
          imageAlt=""
          photosCount={0}
          name="new gallery"
          newlyCreated
          onNameChange={onNameChangeSpy}
        />,
      );

      cy
        .getByData(`gallery-name-input`)
        .type(`!!!`)
        .blur();

      cy.get(`@onNameChange`)
        .should(`have.been.calledOnceWith`, `new gallery!!!`);
    });
  });
});
