import PhotoCard, { PhotoType } from "./PhotoCard";

describe(`PhotoCard`, () => {
  it(`uniqueness value SHOULD BE 90`, () => {
    mountComponent({
      id: 1,
      photoPath: `https://stickerbase.ru/wp-content/uploads/2021/07/61607.png`,
      uniqueness: 90,
    });
    cy.getByData(`uniqueness-value`).should(`have.text`, `90%`);
  });

  it(`uniqueness value SHOULD BE 100`, () => {
    mountComponent({
      id: 1,
      photoPath: `https://stickerbase.ru/wp-content/uploads/2021/07/61607.png`,
      uniqueness: 100,
    });
    cy.getByData(`uniqueness-value`).should(`have.text`, `100%`);
  });
});

function mountComponent({
  id,
  photoPath,
  uniqueness,
}: PhotoType) {
  cy.mount(<PhotoCard
    id={id}
    photoPath={photoPath}
    uniqueness={uniqueness}
  />);
}
