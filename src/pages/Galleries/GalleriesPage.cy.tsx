import '../../../cypress/support/commands';
import GalleriesPage from './GalleriesPage';

describe(`GalleriesPage`, () => {
  it(`SHOULD render call to action message WHEN there are no galleries`, () => {
    mountComponent();

    cy.intercept(`GET`, `/galleries`, []);

    cy
      .getByData(`no-galleries`)
      .contains(`Create a gallery to get started`);
  });

  it(`SHOULD call backend and then render the new gallery card WHEN click on create new gallery`, () => {
    mountComponent();

    cy.intercept(`GET`, `/galleries`, []);

    cy
      .getByData(`no-galleries`)
      .contains(`Create a gallery to get started`);

    const newGalleryId = 1;

    cy.intercept(`POST`, `/galleries`, {
      statusCode: 200,
      body: newGalleryId,
    });

    // we expect that after this click we called the endpoint to create a new gallery and get the ID back
    cy
      .getByData(`no-galleries-create-gallery-button`)
      .click();

    // the gallery name has to be focused since we just created it
    cy
      .getByData(`gallery-name-input`)
      .focused();
  });

  it(`SHOULD call backend and then render the new gallery card WHEN click on create new gallery`, () => {
    mountComponent();

    cy.intercept(`GET`, `/galleries`, []);

    cy
      .getByData(`no-galleries`)
      .contains(`Create a gallery to get started`);

    const newGalleryId = 1;

    cy.intercept(`POST`, `/galleries`, {
      statusCode: 200,
      body: newGalleryId,
    });

    cy
      .getByData(`no-galleries-create-gallery-button`)
      .click();

    cy
      .getByData(`gallery-name-input`)
      .focused();

    cy.intercept(`PUT`, `/galleries/${newGalleryId}/update-name`, (req) => {
      expect(req.body.name, `Tourmaline Core Gallery`);
    });

    // we should be able to rename it and save
    cy
      .getByData(`gallery-name-input`)
      .clear()
      .type(`Tourmaline Core Gallery`)
      .type(`{enter}`);
  });
});

function mountComponent() {
  cy.mount(
    <GalleriesPage />,
  );
}
