/// <reference types="cypress" />

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
