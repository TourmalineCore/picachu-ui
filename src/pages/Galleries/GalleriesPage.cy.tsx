import '../../../cypress/support/commands';
import GalleriesPage from './GalleriesPage';

// Found bugs/nuances ;)
// explains partially why we need this different aliases https://stackoverflow.com/questions/66765452/intercept-the-same-api-call-multiple-times-in-cypress

describe(`GalleriesPage`, () => {
  it(`SHOULD render no galleries message WHEN there are no galleries`, () => {
    cy.intercept(`GET`, `/api/galleries`, []);

    mountComponent();

    cy
      .getByData(`no-galleries`)
      .contains(`Create a gallery to get started`);
  });

  it(`SHOULD call backend to create WHEN click on create new gallery and not changing the name`, () => {
    cy.intercept(`GET`, `/api/galleries`, [{
      id: 1,
      name: `First Gallery`,
    }]);

    mountComponent();

    // we should see the existing gallery, it is not newly created, thus, not focused
    cy.getByData(`gallery-name-input`)
      .should(`have.value`, `First Gallery`)
      .should(`not.be.focused`);

    const newGalleryId = 2;

    cy.intercept(`POST`, `/api/galleries`, {
      body: newGalleryId,
    });

    // ask to create a new gallery
    cy
      .getByData(`add-button`)
      .click();

    const onRenameBackendCallSpy = cy.spy().as(`onRenameBackendCallSpy`);

    cy.intercept(`PUT`, `/api/galleries/${newGalleryId}/update-name`, onRenameBackendCallSpy);

    // the gallery name has to be focused since we just created it
    // and if press enter, rename shouldn't be called since the name is the same
    cy
      .getByData(`gallery-name-input`)
      .focused()
      .type(`{enter}`);

    cy.get(`@onRenameBackendCallSpy`).should(`not.have.been.called`);
  });
});

function mountComponent() {
  cy.mount(
    <GalleriesPage />,
  );
}
