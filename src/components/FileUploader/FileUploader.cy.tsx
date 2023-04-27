import FileUploader from "./FileUploader";

describe(`FileUploader`, () => {
  it(`FileUploader SHOULD render default button WHEN state props equal false`, () => {
    cy.mount(
      <FileUploader isAddButton={false} />,
    );
    cy.getByData(`no-photos-default-upload-image-button`).should(`be.visible`);
  });

  it(`FileUploader SHOULD render addButton component WHEN state props equal true`, () => {
    cy.mount(
      <FileUploader isAddButton />,
    );
    cy.getByData(`no-photos-outline-upload-image-button`).should(`be.visible`);
  });
});
