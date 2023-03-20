import './commands';

import { mount } from 'cypress/react18';
import "../../src/styles/index.scss";

declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount;
    }
  }
}

Cypress.Commands.add(`mount`, mount);
