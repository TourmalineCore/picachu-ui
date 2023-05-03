import PhotosPageState from "../../state/PhotosPageState";
import PhotosPageStateContext from "../../state/PhotosPageStateContext";
import { Sort } from "./Sort";

describe(`Sort`, () => {
  beforeEach(() => {
    mountComponent();
  });

  it(`default sort value SHOULD BE uniqueness metric`, () => {
    cy.getByData(`sort-variable`)
      .should(`have.text`, `uniqueness metric`);
  });

  it(`sort text value click SHOULD trigger popup open`, () => {
    cy.getByData(`sort-popup`)
      .should(`not.exist`);

    cy.getByData(`sort-variable`)
      .click();

    cy.getByData(`sort-popup`)
      .should(`exist`);
  });

  it(`count of sort items SHOULD BE two`, () => {
    cy.getByData(`sort-variable`)
      .click();

    cy.getByData(`sort-popup-item`)
      .its(`length`)
      .should(`equal`, 2);
  });

  it(`default sort value SHOULD BE disabled for click`, () => {
    cy.getByData(`sort-variable`)
      .should(`have.text`, `uniqueness metric`);

    cy.getByData(`sort-variable`)
      .click();

    cy.getByData(`sort-popup-item`)
      .contains(`uniqueness metric`)
      .click({ force: true })
      .should(`be.disabled`);
  });

  it(`default sort value SHOULD BE changed after select another sort property`, () => {
    cy.getByData(`sort-variable`)
      .should(`have.text`, `uniqueness metric`);

    cy.getByData(`sort-variable`)
      .click();

    cy.getByData(`sort-popup-item`)
      .contains(`date of upload`)
      .click();

    cy.getByData(`sort-variable`)
      .should(`have.text`, `date of upload`);

    cy.getByData(`sort-popup`)
      .should(`not.exist`);
  });

  it(`new sort value SHOULD BE disabled for click`, () => {
    cy.getByData(`sort-variable`)
      .click();

    cy.getByData(`sort-popup-item`)
      .contains(`date of upload`)
      .click();

    cy.getByData(`sort-variable`)
      .should(`have.text`, `date of upload`);

    cy.getByData(`sort-variable`)
      .click();

    cy.getByData(`sort-popup-item`)
      .contains(`date of upload`)
      .click({ force: true })
      .should(`be.disabled`);
  });
});

function mountComponent() {
  const photosPageState = new PhotosPageState();

  cy.mount(
    <PhotosPageStateContext.Provider value={photosPageState}>
      <Sort />
    </PhotosPageStateContext.Provider>,

  );
}
