import '../../../cypress/support/commands';
import GalleriesPage from './GalleriesPage';
import { Button } from '../../../cypress/e2e/page-factory/button';
import { Input } from '../../../cypress/e2e/page-factory/input';

// Found bugs/nuances ;)
// explains partially why we need this different aliases https://stackoverflow.com/questions/66765452/intercept-the-same-api-call-multiple-times-in-cypress

describe(`GalleriesPage`, () => {
  it(`SHOULD render no galleries message WHEN there are no galleries`, () => {
    cy.intercept(`GET`, `/api/galleries`, []).as(`call-1`);

    mountComponent();

    cy.getByData(`no-galleries`)
      .contains(`Create a gallery to get started`);
  });

  it(`SHOULD call backend to create WHEN click on create new gallery and not changing the name`, () => {
    cy.intercept(`GET`, `/api/galleries`, [{
      id: 1,
      name: `First Gallery`,
    }]).as(`call-2`);

    mountComponent();

    const addButton = new Button({
      selector: `add-button`,
    });

    const galleryNameInput = new Input({
      selector: `gallery-name-input`,
    });
    // galleryNameInput.getSelector();

    // we should see the existing gallery, it is not newly created, thus, not focused
    // cy.getByData(`gallery-name-input`)
    //   .should(`have.value`, `First Gallery`)
    //   .should(`not.be.focused`);

    galleryNameInput.shouldHaveValue(`First Gallery`)
      .shouldNotBeFocused();

    const newGalleryId = 2;

    cy.intercept(`POST`, `/api/galleries`, {
      body: newGalleryId,
    });

    // ask to create a new gallery
    addButton.click();
    // cy.getByData(`add-button`)
    // .click();

    const onRenameBackendCallSpy = cy.spy().as(`onRenameBackendCallSpy`);

    cy.intercept(`PUT`, `/api/galleries/${newGalleryId}/update-name`, onRenameBackendCallSpy);

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

    // we should check that the new card is not focused and name is the same
    // cy.getByData(`gallery-name-input`)
    //   .last()
    //   .should(`have.value`, `new gallery`)
    //   .should(`not.be.focused`);
  });
});

function mountComponent() {
  cy.mount(
    <GalleriesPage />,
  );
}
