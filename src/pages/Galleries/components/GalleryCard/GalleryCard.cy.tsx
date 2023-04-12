import '../../../../../cypress/support/commands';

import GalleryCard from './GalleryCard';

describe(`GalleryCard`, () => {
  describe(`name default rendering`, defaultNameRenderingTests);

  describe(`name editing`, nameEditingTests);

  describe(`photo preview`, photoPreviewTests);

  describe(`delete gallery`, deleteGalleryTests);
});

function defaultNameRenderingTests() {
  it(`newly created gallery card SHOULD have name field filled and focused`, () => {
    mountComponent({
      newlyCreated: true,
    });

    cy
      .getByData(`gallery-name-input`)
      .should(`have.value`, `new gallery`)
      .focused();
  });
}

function nameEditingTests() {
  it(`SHOULD apply changes to name WHEN pressing Enter in focused name`, () => {
    mountComponent({
      newlyCreated: true,
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
    mountComponent({
      newlyCreated: true,
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
    mountComponent({
      newlyCreated: true,
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
    mountComponent({
      newlyCreated: true,
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
    mountComponent({
      newlyCreated: true,
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
    mountComponent({
      name: `my super`,
      newlyCreated: false,
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
}

function photoPreviewTests() {
  it(`SHOULD show dummy picture WHEN no image is available`, () => {
    mountComponent({
      newlyCreated: true,
      previewPhotos: [],
    });

    cy
      .getByData(`gallery-photo-preview`)
      .should(`have.attr`, `alt`)
      .and(`equal`, `No photos have been added to new gallery yet`);
  });

  it(`SHOULD show 1 photo on gallery card preview WHEN only one image is added to the gallery`, () => {
    mountComponent({
      newlyCreated: false,
      previewPhotos: [
        { photoPath: `https://picsum.photos/200/300` },
      ],
    });

    cy.getByData(`gallery-photo-collage`)
      .get(`img`)
      .should(`have.length`, 1);
  });
}

function deleteGalleryTests() {
  it(`SHOULD delete a gallery WHEN this gallery's Delete button is clicked`, () => {
    mountComponent({
      newlyCreated: false,
      previewPhotos: [],
    });

    cy
      .getByData(`delete-gallery-button`).click();

    cy.get(`@onDelete`)
      .should(`have.been.calledOnce`);
  });
}

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
  name = `new gallery`,
  newlyCreated,
  previewPhotos = [],
}: {
  name?: string;
  newlyCreated: boolean;
  onNameApply?: (newName: string) => unknown;
  onDelete?: () => unknown;
  photos?: [];
  previewPhotos?: { photoPath: string }[];
}) {
  const onNameApplySpy = cy.spy().as(`onNameApply`);
  const onDeleteSpy = cy.spy().as(`onDelete`);

  cy.mount(
    <GalleryCard
      previewPhotos={previewPhotos}
      photosCount={0}
      name={name}
      newlyCreated={newlyCreated}
      onNameApply={onNameApplySpy}
      onDelete={onDeleteSpy}
    />,
  );
}
