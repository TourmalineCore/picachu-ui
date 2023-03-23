import GalleryCard from './GalleryCard';
import '../../../../cypress/support/commands';

describe(`GalleryCard`, () => {
  // beforeEach(() => {
  //   // const onLogin = cy.spy().as(`onLogin`);

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
});
