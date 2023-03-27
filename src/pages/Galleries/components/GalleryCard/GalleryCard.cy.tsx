import '../../../../../cypress/support/commands';

import GalleryCard from './GalleryCard';

describe(`GalleryCard`, () => {
  it(`newly created gallery card SHOULD have name field filled and focused`, () => {
    mountComponent({
      id: 1,
      newlyCreated: true,
    });

    cy
      .getByData(`gallery-name-input`)
      .should(`have.value`, `new gallery`)
      .focused();
  });

  describe(`name editing`, () => {
    it(`SHOULD apply changes to name WHEN pressing Enter in focused name`, () => {
      const onNameApplySpy = cy.spy().as(`onNameApply`);

      mountComponent({
        id: 1,
        newlyCreated: true,
        onNameApply: onNameApplySpy,
      });

      cy
        .getByData(`gallery-name-input`)
        .type(`123`)
        .should(`have.value`, `new gallery123`)
        .type(`{enter}`);

      checkOnApplyCalledOnce({
        expectedName: `new gallery123`,
      });
    });

    it(`SHOULD apply changes to name WHEN focus out in focused name`, () => {
      const onNameApplySpy = cy.spy().as(`onNameApply`);

      mountComponent({
        id: 1,
        newlyCreated: true,
        onNameApply: onNameApplySpy,
      });

      cy
        .getByData(`gallery-name-input`)
        .type(`!!!`)
        .blur();

      checkOnApplyCalledOnce({
        expectedName: `new gallery!!!`,
      });
    });

    it(`SHOULD discard changes to name and apply it with original name WHEN pressing Escape in focused name`, () => {
      const onNameApplySpy = cy.spy().as(`onNameApply`);

      mountComponent({
        id: 1,
        newlyCreated: true,
        onNameApply: onNameApplySpy,
      });

      cy
        .getByData(`gallery-name-input`)
        .type(`777`)
        .type(`{esc}`);

      checkOnApplyCalledOnce({
        expectedName: `new gallery`,
      });

      cy
        .getByData(`gallery-name-input`)
        .should(`have.value`, `new gallery`);
    });

    it(`SHOULD discard changes to name and apply it with original name WHEN pressing Enter in focused empty name`, () => {
      const onNameApplySpy = cy.spy().as(`onNameApply`);

      mountComponent({
        id: 1,
        newlyCreated: true,
        onNameApply: onNameApplySpy,
      });

      cy
        .getByData(`gallery-name-input`)
        .clear()
        .type(`{enter}`);

      checkOnApplyCalledOnce({
        expectedName: `new gallery`,
      });

      cy
        .getByData(`gallery-name-input`)
        .should(`have.value`, `new gallery`);
    });

    it(`SHOULD discard changes to name and apply it with original name WHEN focus out in focused empty name`, () => {
      const onNameApplySpy = cy.spy().as(`onNameApply`);

      mountComponent({
        id: 1,
        newlyCreated: true,
        onNameApply: onNameApplySpy,
      });

      cy
        .getByData(`gallery-name-input`)
        .clear()
        .blur();

      checkOnApplyCalledOnce({
        expectedName: `new gallery`,
      });
      cy
        .getByData(`gallery-name-input`)
        .should(`have.value`, `new gallery`);
    });

    it(`SHOULD have the possibility to edit name WHEN it is not a newly created one`, () => {
      const onNameApplySpy = cy.spy().as(`onNameApply`);

      mountComponent({
        id: 1,
        name: `my super`,
        newlyCreated: false,
        onNameApply: onNameApplySpy,
      });

      cy
        .getByData(`gallery-name-input`)
        .click()
        .type(` duper`)
        .blur();

      checkOnApplyCalledOnce({
        expectedName: `my super duper`,
      });
    });
  });

  describe(`photo preview`, () => {
    it(`SHOULD show dummy picture WHEN no image is available`, () => {
      mountComponent({
        id: 1,
        newlyCreated: true,
        photos: [],
      });

      cy
        .getByData(`gallery-photo-preview`)
        .should(`have.attr`, `alt`)
        .and(`equal`, `No photos have been added to new gallery yet`);
    });
  });

  describe(`delete gallery`, () => {
    it(`SHOULD delete a gallery WHEN this gallery's Delete button is clicked`, () => {
      const onDeleteSpy = cy.spy().as(`onDelete`);

      mountComponent({
        id: 1,
        newlyCreated: false,
        photos: [],
        onDelete: onDeleteSpy,
      });
      cy
        .getByData(`delete-gallery`).click();

      cy.get(`@onDelete`)
        .should(`have.been.calledOnce`);
    });
  });
});

function checkOnApplyCalledOnce(
  {
    expectedName,
  }: {
    expectedName: string;
  },
) {
  cy.get(`@onNameApply`)
    .should(`have.been.calledOnceWith`, expectedName);
}

function mountComponent({
  id,
  name = `new gallery`,
  newlyCreated,
  onNameApply = () => {},
  onDelete = () => {},
  photos = [],
}: {
  id: number;
  name?: string;
  newlyCreated: boolean;
  onNameApply?: (newName: string) => unknown;
  onDelete?: () => unknown;
  photos?: [];
}) {
  cy.mount(
    <GalleryCard
      id={id}
      photos={photos}
      photosCount={0}
      name={name}
      newlyCreated={newlyCreated}
      onNameApply={onNameApply}
      onDelete={onDelete}
    />,
  );
}
