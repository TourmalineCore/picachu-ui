import '../../../../../cypress/support/commands';
import GalleriesList from './GalleriesList';

describe(`GalleriesList`, () => {
  it(`SHOULD render call to action message WHEN there are no galleries`, () => {
    mountComponent({
      galleries: [],
    });

    cy
      .getByData(`no-galleries`)
      .contains(`Create a gallery to get started`);
  });

  it(`SHOULD NOT render call to action message WHEN there are galleries`, () => {
    mountComponent({
      galleries: [{}],
    });

    cy.contains(`Create a gallery to get started`)
      .should(`not.exist`);
  });
});

function mountComponent({
  galleries,
}: {
  galleries: any[];
}) {
  cy.mount(
    <GalleriesList
      galleries={galleries}
    />,
  );
}
