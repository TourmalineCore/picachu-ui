# Rules and Patterns of the UI testing

Testing frameworks must be configured - Cypress for Unit, Component, and E2E Testing. 

The Cypress framework is used for component and user-flow (E2E) testing. Tests will be written only by ***TDD*** methodology.

Component unit tests must be stored in the same folder as the component being tested and have the .cy extension in the name. For example, the test for component LoginForm.tsx will be named LoginForm.cy.tsx in the appropriate folder LoginForm.

Cypress methods must be used in the structure called `chain-method` to more understandable and easy-to-read code: \
Example: 
```
cy.getByData(`gallery-name-input`)
  .focused()
  .last()
  .should(`be.focused`)
  .type(`{enter}`);
```

The following will describe strategies for testing components in different cases:
Test inner component of page (unit component test):
- Component mounting successfully
- Verify that all functions are called on certain cases that you expect. Use spies for testing it. Do not mock the backend.
- Verify all behaviors that are described in requirements
Test page (integration component test):
- Verify that all axios requests are correctly parsed and successfully mount components as we need. Use mock backend for testing it
 
