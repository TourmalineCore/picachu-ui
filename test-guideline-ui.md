# Rules and Patterns of the UI testing
- [Main rules](#Main_rules)
  - [Page Object and Page Factory](#page-object-and-factory)
    - [Page Object](#page-object)
    - [Page Factory](#page-factory)
  - [Cypress Chain Method](#chain)
  - [Async Commands and the Cypress Command Queue](#queue)
    - [Asynchronous Execution of Cypress Commands](#async-exec-cypress)
    - [Mixing Asynchronous and Synchronous Code](#async-and-sync)
- [Component Testing Strategy](#component_strategy)
  - [Typical Cypress Test for a Component](#example_component)
  - [Network Calls and UI Rendering](#calls)
  - [Mocking](#mocking)
- [E2E Testing Strategy](#e2e_strategy)
- [Executing Tests](#execute)

## Main rules <a name="Main_rules"></a> 
Testing frameworks must be configured - Cypress for Unit, Component, and E2E Testing. 

The Cypress framework is used for component and user-flow (E2E) testing. Tests will be written only by ***TDD*** methodology.

Component unit tests must be stored in the same folder as the component being tested and have the .cy extension in the name. For example, the test for component LoginForm.tsx will be named LoginForm.cy.tsx and stored in the appropriate folder LoginForm. 
## Page Object and Page Factory <a name="page_factory"></a> 
Follow Page Object and Page Factory design patterns for writing tests. This patterns involves describing all pages through classes that describe all possible actions in methods. In the same way actions with page elements are described.

This is the best practice when designing automated UI tests. There is some reasons why we use patterns: 
  - **Code reusability**: The Page Object and Page Factory patterns allow you to write code that can be reused across different tests. Instead of writing the same code over and over again, you can create reusable Page Objects and use them in multiple tests, making your tests more maintainable and easier to read.
  - **Separation of concerns**: The Page Object and Page Factory patterns separate the code that interacts with the UI from the test logic. This separation of concerns makes your tests easier to read and maintain, as it allows you to focus on the test logic without worrying about the details of how the UI is implemented.
  - **Improved test stability**: The Page Object and Page Factory patterns provide a more stable and reliable way of interacting with the UI. By encapsulating the UI logic within the Page Object, you can make sure that your tests always interact with the UI in the same way, reducing the likelihood of flaky tests.
  - **Scalability**: As your frontend application grows in complexity, the Page Object and Page Factory patterns make it easier to manage your tests. By breaking down your UI into smaller Page Objects, you can keep your code organized and more maintainable, even as your application grows.

Here we have a `BasePage` abstract class with common actions on every page, like visit, reload or header menu.
So, then create Page Object class and extend this `BasePage` class. 

Here's an example of defining Page Object class `LoginPage` with interactions on it:

```JavaScript
//login-page.ts
import BasePage from "./BasePage"

export default class LoginPage extends BasePage {
  // Define methods to interact with the UI on the login page

  static typeLogin(login: string) {
    cy.getByData('usernameInput')
      .type(login);
  }
  static typePassword(password: string) {
    cy.getByData('password-input')
      .type(password);
  }
  static tapSignIn() {
    cy.getByData('login-button')
      .click();
  }
  static errorBoxIsShown() {
    cy.getByData('error-box').should('exist');
  }
}
```

Then use it on your tests like this:

```JavaScript
// Export the LoginPage object
import LoginPage from '../pages/login_page';

describe('Login', () => {
  beforeEach(() => {
    LoginPage.visit('/auth');
  });

  it('should log in with valid credentials', () => {
    LoginPage.typeLogin('Elijah');
    LoginPage.typePassword('Sapronov');
    LoginPage.tapSignIn();
    PersonalAccountPage.isOpen();
  });

  it('should display an error message with invalid login', () => {
    LoginPage.typeLogin('Elijah123');
    LoginPage.typePassword('Sapronov');
    LoginPage.errorBoxIsShown();
  });
  it('should display an error message with invalid password', () => {
    LoginPage.typeLogin('Elijah');
    LoginPage.typePassword('Sapronov123');
    LoginPage.errorBoxIsShown();
  });
});
```

## Cypress Chain Method writing convention <a name="chain"></a> 
Cypress chain methods convention define how should be written on each line by the method (except for first line) to more understandable and easy-to-read code:

Example: 

```JavaScript
cy.getByData(`gallery-name-input`)
  .last()
  .should(`be.focused`)
```

## Component Testing Strategy <a name="component_strategy"></a> 
The following will describe strategies for testing components in different cases.

Typical tests for component:

- Inner component of the page
  - Component mounting successfully
  - Verify all behaviors that are described in requirements
  - Verify that all functions are called on certain cases that you expect. 
  Use spies for testing it:
  ```JavaScript
  it('SHOULD call onLogin function once AFTER type creds and click Log In')
    //using spy on your func
    const onLogin = cy.spy().as(`onLogin`);
    
    cy.getByData(`login-input`)
      .type(`admin`);

    cy.getByData(`password-input`)
      .type(`123`);

    cy.getByData(`login-button`)
      .click();

    // validate that your func is called once with right parameters
    cy.get(`@onLogin`)
      .should(`have.been.calledOnceWith`, {
        login: `admin`,
        password: `123`,
      });
  ```
  - Verify all behaviors that are described in requirements
- Page component (integration component test):
  - Verify that all axios requests are correctly parsed and successfully. 
  So, mock all backend requests for testing it
  ```JavaScript
  it('SHOULD call get galleries request and mount 1 gallerie WHEN mount component and correctly parsed it', () => {
    // using intercept for mock it STATUS or RESPONSE on request with it url
    // use it BEFORE request is called (before component is mounting)
    cy.intercept(`GET`, `/api/galleries`, [{
      id: 1,
      name: `First Gallery`,
    }])
    cy.mount(<GalleriesPage />)
    cy.getByData('gallery-card')
      .should('have.length', 1)
  ```

Do not forget that all this is described through the **TDD** approach and it's just advices what and how you test it.

### Typical Cypress Test for a Component <a name="example_component"></a> 

A typical Cypress test for a component usually implements one of the following patterns:

1. The component is mounted; we test if this succeeds and might run additional checks on the component. No interaction takes place.
2. The component is mounted, and we manipulate its state (via a MobX class); we test if the component properly reflects changes made to its state.
3. The component is mounted, and we manipulate the UI; we test if the related state (a MobX class) is properly updated.
4. We test a React hook.

We strive for a modular approach, employing separation of concerns, and try to split code into smaller (single) units (functions) that are tested separately. 

### Network Calls and UI Rendering <a name="calls"></a> 

When testing using Cypress, we only sparingly mock/intercept network calls or other interaction with the 'outside world' (except when we want to explicitly test this). We isolate UI rendering.

### Mocking <a name="mocking"></a> 
  - If we're mocking API calls, we can use `cy.intercept`. We will update this document as we gain more experience to determine best practices.
  -  Using Stub Functions\
  When a component takes a callback function as a parameter, we use `cy.stub`. Instead of each test creating a new stub, consider creating the stub inside the `mountComponent` function. Because a stubbed function has an alias, the calling test can refer to the stub by its alias.

## Async Commands and the Cypress Command Queue <a name="queue"></a> 

It is important to note that the Cypress Command queue is asynchronous. Commands execute immediately when they are enqueued, but their callbacks don't execute until all previously enqueued commands have completed. 

- **Asynchronous Execution of Cypress Commands** <a name="async-exec-cypress"></a> \
It is crucial to understand that Cypress commands do not perform any action immediately upon being invoked, but rather schedule themselves for later execution. This is what is meant by the term "asynchronous" when referring to Cypress commands.

- **Mixing Asynchronous and Synchronous Code** <a name="async-and-sync"></a> \
It is important to remember that Cypress commands run asynchronously when attempting to combine them with synchronous code. Synchronous code executes immediately, without waiting for the Cypress commands to complete above it.

[***Go here for the details and examples. It is an official Cypress documentation.***](https://docs.cypress.io/guides/core-concepts/introduction-to-cypress#Commands-Are-Asynchronous) 

## Executing Tests <a name="execute"></a> 
To execute Cypress component test, run this command in the terminal:
```
npm run test --component
```
If you want to execute E2E tests, run this command in the terminal:
```
npm run test --e2e 
```
To open Cypress GUI and check the steps of the tests and test caises overall, run this command in the terminal:
```
npx cypress open
```

