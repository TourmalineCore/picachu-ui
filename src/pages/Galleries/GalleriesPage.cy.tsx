import '../../../cypress/support/commands';
import { API_ROOT } from '../../common/config';
import GalleriesPage from './GalleriesPage';

// Found bugs/nuances ;)
// explains partially why we need this different aliases https://stackoverflow.com/questions/66765452/intercept-the-same-api-call-multiple-times-in-cypress

describe(`GalleriesPage`, () => {
  it(`SHOULD render no galleries message WHEN there are no galleries`, () => {
    cy.intercept(`GET`, `${API_ROOT}/galleries`, []).as(`call-1`);

    mountComponent();

    cy.getByData(`no-galleries`)
      .contains(`Create a gallery to get started`);
  });

  it(`SHOULD call backend to create WHEN click on create new gallery and not changing the name`, () => {
    cy.intercept(`GET`, `${API_ROOT}/galleries`, [{
      id: 1,
      name: `First Gallery`,
      previewPhotos: [],
    }]).as(`call-2`);

    mountComponent();

    // we should see the existing gallery, it is not newly created, thus, not focused
    cy.getByData(`gallery-name-input`)
      .should(`have.value`, `First Gallery`)
      .should(`not.be.focused`);

    const newGalleryId = 2;

    cy.intercept(`POST`, `${API_ROOT}/galleries`, {
      body: newGalleryId,
    });

    // ask to create a new gallery
    cy.getByData(`add-button`)
      .click();

    const onRenameBackendCallSpy = cy.spy().as(`onRenameBackendCallSpy`);

    cy.intercept(`PUT`, `${API_ROOT}/galleries/${newGalleryId}/update-name`, onRenameBackendCallSpy);

    // the gallery name has to be focused since we just created it
    // and if press enter, rename shouldn't be called since the name is the same
    cy.getByData(`gallery-name-input`)
      .last()
      .should(`be.focused`)
      .type(`{enter}`);

    cy.get(`@onRenameBackendCallSpy`).should(`not.have.been.called`);

    // we should check that the new card is not focused and name is the same
    cy.getByData(`gallery-name-input`)
      .last()
      .should(`have.value`, `new gallery`)
      .should(`not.be.focused`);
  });

  it.skip(`SHOULD call backend with DELETE method to delete a gallery WHEN delete button is clicked`, () => {
    cy.intercept(`GET`, `/api/galleries`, [{
      id: 1,
      name: `First Gallery`,
    },
    ]).as(`call-3`);

    cy.intercept(`DELETE`, `/api/galleries/1`).as(`call-3-1`);

    mountComponent();

    cy.getByData(`delete-gallery-button`)
      .click();

    cy.getByData(`gallery-card`)
      .should(`not.exist`);
  });

  it.skip(`SHOULD call backend with POST method to restore a gallery WHEN restore button is clicked`, () => {
    cy.intercept(`GET`, `/api/galleries`, [{
      id: 1,
      name: `First Gallery`,
    },
    ]).as(`call-4`);

    mountComponent();

    cy.intercept(`DELETE`, `/api/galleries/1`, {
      body: {
        id: 1,
      },
    }).as(`call-5`);

    cy.getByData(`delete-gallery-button`)
      .click();

    cy.intercept(`POST`, `/api/galleries/restore/1`).as(`call-6`);

    cy.getByData(`restore-gallery-button`)
      .click();

    cy.contains(`First Gallery`)
      .should(`exist`);
  });
});

function mountComponent() {
  cy.mount(
    <GalleriesPage />,
  );
}
