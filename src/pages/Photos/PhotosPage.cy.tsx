import '../../../cypress/support/commands';
import { API_ROOT } from '../../common/config';
import PhotosPage from './PhotosPage';

describe(`PhotosPage`, () => {
  it(`SHOULD render no photos message WHEN there are no photos`, () => {
    cy.intercept(`GET`, `${API_ROOT}/galleries/nature/photos`, []).as(`call-1`);

    mountComponent();

    cy.getByData(`no-photos`).contains(`Upload the first photo to the gallery`);
  });
});

function mountComponent() {
  cy.mount(
    <PhotosPage />,
  );
}
