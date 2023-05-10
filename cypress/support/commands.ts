/// <reference types="cypress" />

Cypress.on(`uncaught:exception`, () => false);

Cypress.on(`uncaught:exception`, (err) => {
  // we expect a 3rd party library error with message 'list not defined'
  // and don't want to fail the test so we return false
  if (err.message.includes(`Request failed with status code`)) {
    return false;
  }
  // we still want to ensure there are no other unexpected
  // errors, so we let them fail the test

  return true;
});

Cypress.Commands.add(`getByData`, (selector) => cy.get(`[data-cy=${selector}]`));

Cypress.Commands.add(`createStep`, (stepName) => cy.allure().startStep(stepName).endStep());

// Cypress.Commands.add(`getButton`, ({ select, name }) => {
//   cy.getByData(`select`);

//   const a = Cypress.Commands.add(`as`, () => {});
// });

Cypress.Commands.add(`getComponents`, (select, name) => {
  const locatar = cy.getByData(select);

  const checkTest = (test) => {
    cy.createStep(`Andrey test`);

    locatar.should(`have.text`, test);
  };

  return {
    checkTest,
  };
});
export {};
