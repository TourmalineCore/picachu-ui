import GalleryCard from './GalleryCard';
import '../../../../cypress/support/commands';

describe(`GalleryCard`, () => {
  beforeEach(() => {
    // const onLogin = cy.spy().as(`onLogin`);
    cy.mount(
      <GalleryCard
        imagePath="#"
        imageAlt=""
        photosCount={0}
      />,
    );
  });

  it(`empty card SHOULD be mounted`, () => {
    // cy.getByData(`password-input`)
    //   .should(`be.empty`);
  });
});
