/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    getByData(dataTestAttribute: string): Chainable<JQuery<HTMLElement>>;
    createStep(stepName: string): Cypress.Allure;
  }
}
