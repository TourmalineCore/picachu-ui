import '../../../cypress/support/commands';
import { API_ROOT } from '../../common/config';
import GalleriesPageComponent from './GalleriesPage';
import NoGalleriesPage from '../../../cypress/e2e/pages/no-galleries-page';
import GalleriesPage from '../../../cypress/e2e/pages/galleries-page';

// Found bugs/nuances ;)
// explains partially why we need this different aliases https://stackoverflow.com/questions/66765452/intercept-the-same-api-call-multiple-times-in-cypress

describe(`GalleriesPage`, () => {
  const noGalleriesPage = new NoGalleriesPage();
  const galleriesPage = new GalleriesPage();

  it(`SHOULD render no galleries message WHEN there are no galleries`, () => {
    cy.intercept(`GET`, `${API_ROOT}/galleries`, []).as(`call-1`);

    mountComponent();

    noGalleriesPage.isOpen();
    console.log(`-----------------------------------`);
  });

  it.skip(`SHOULD call backend to create WHEN click on create new gallery and not changing the name`, () => {
    cy.intercept(`GET`, `${API_ROOT}/galleries`, [{
      id: 1,
      name: `First Gallery`,
      previewPhotos: [],
    }]).as(`call-2`);

    mountComponent();

    galleriesPage.isOpen();
    galleriesPage.lastGalleryShouldNotBeFocused();

    const newGalleryId = 2;
    cy.intercept(`POST`, `${API_ROOT}/galleries`, {
      body: newGalleryId,
    });

    galleriesPage.createNewGallery();

    const onRenameBackendCallSpy = cy.spy().as(`onRenameBackendCallSpy`);

    cy.intercept(`PUT`, `${API_ROOT}/galleries/${newGalleryId}/update-name`, onRenameBackendCallSpy);

    // the gallery name has to be focused since we just created it
    // and if press enter, rename shouldn't be called since the name is the same

    // galleryNameInput.lastElement().shouldBeFocused();
    // console.log(galleryNameInput.getLastElement());
    // galleryNameInput.click();
    // galleryNameInput.getLastElement();
    // console.log(`fsdfs`, galleryNameInput.getLastElement().clickF());
    // console.log(`cy`, cy.getByData(`gallery-name-input`)
    //   .last());

    // cy.getByData(`gallery-name-input`)
    //   .last()
    //   .should(`be.focused`)
    //   .type(`{enter}`);

    cy.get(`@onRenameBackendCallSpy`).should(`not.have.been.called`);

    galleriesPage.lastGalleryShouldHaveName(`new gallery`);
    galleriesPage.lastGalleryShouldNotBeFocused();
  });

  it(`SHOULD call backend with DELETE method to delete a gallery WHEN delete button is clicked`, () => {
    cy.intercept(`GET`, `${API_ROOT}/galleries`, [{
      id: 1,
      name: `First Gallery`,
      previewPhotos: [],
    },
    ]).as(`call-3`);

    cy.intercept(`DELETE`, `/api/galleries/1`, []).as(`call-3-1`);

    mountComponent();

    galleriesPage.isOpen();
    // console.log(galleriesPage);
    console.log(`-----------------------------------`);
    galleriesPage.deleteLastGallery();
    console.log(`-----------------------------------`);
    noGalleriesPage.isOpen();
  });

  it.skip(`SHOULD call backend with POST method to restore a gallery WHEN restore button is clicked`, () => {
    const galleryName = `First Gallery`;
    cy.intercept(`GET`, `/api/galleries`, [{
      id: 1,
      name: galleryName,
    },
    ]).as(`call-4`);

    cy.intercept(`DELETE`, `/api/galleries/1`, {
      body: {
        id: 1,
      },
    }).as(`call-5`);

    cy.intercept(`POST`, `/api/galleries/restore/1`).as(`call-6`);

    mountComponent();

    galleriesPage.deleteLastGallery();
    noGalleriesPage.restoreDeletedGalleryToast.tapRestore();
    galleriesPage.lastGalleryShouldHaveName(galleryName);
  });
});

function mountComponent() {
  cy.mount(
    <GalleriesPageComponent />,
  );
}
