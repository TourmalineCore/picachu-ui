import '../../../../../cypress/support/commands';

describe(`GalleriesList`, () => {
  it(`newly created gallery card SHOULD have name field filled and focused`, () => {
    mountComponent({
      galleries: [],
    });

    cy
      .getByData(`no-galleries`)
      .contains(`Create a gallery to get started`);
  });
});

function mountComponent({
  galleries,
}: {
  galleries: any[];
}) {
  cy.mount(
    <GalleriesList
      Galleries={galleries}
    />,
  );
}
