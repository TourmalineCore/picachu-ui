import '../../../cypress/support/commands';
import { API_ROOT } from '../../common/config';
import ImagesPage from './ImagesPage';

describe(`ImagesPage`, () => {
  it(`SHOULD render no images message WHEN there are no images`, () => {
    cy.intercept(`GET`, `${API_ROOT}/galleries/nature/photos`, []).as(`call-1`);

    mountComponent();

    cy.getByData(`no-images`).contains(`Upload the first photo to the gallery`);
  });
});

function mountComponent() {
  cy.mount(
    <ImagesPage />,
  );
}
