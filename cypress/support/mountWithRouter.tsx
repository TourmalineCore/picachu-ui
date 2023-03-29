import { mount } from 'cypress/react18';
import { MemoryRouter } from 'react-router-dom';

// https://docs.cypress.io/guides/component-testing/react/examples
// to wrap all components in router in case they use e.g. useLocation inside
export default function mountWithRouter(component, options = {}) {
  const {
    routerProps = {
      initialEntries: [`/`],
    },
    ...mountOptions
  } = options;

  const wrapped = (
    <MemoryRouter {...routerProps}>{component}</MemoryRouter>
  );

  return mount(wrapped, mountOptions);
}
