import '../../../cypress/support/commands';
import GalleriesPage from './GalleriesPage';

describe(`GalleriesPage`, () => {
  it(`SHOULD render call to action message WHEN there are no galleries`, () => {
    mountComponent();

    cy
      .getByData(`no-galleries`)
      .contains(`Create a gallery to get started`);
  });
});

function mountComponent() {
  cy.mount(
    <GalleriesPage />,
  );
}
