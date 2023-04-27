# Rules and Patterns of the UI testing
Follow Page Object and Page Factory patterns of the testing. As a developer, you should use these patterns for several reasons: 
  - **Code reusability**: The Page Object and Page Factory patterns allow you to write code that can be reused across different tests. Instead of writing the same code over and over again, you can create reusable Page Objects and use them in multiple tests, making your tests more maintainable and easier to read.
  - **Separation of concerns**: The Page Object and Page Factory patterns separate the code that interacts with the UI from the test logic. This separation of concerns makes your tests easier to read and maintain, as it allows you to focus on the test logic without worrying about the details of how the UI is implemented.
  - **Improved test stability**: The Page Object and Page Factory patterns provide a more stable and reliable way of interacting with the UI. By encapsulating the UI logic within the Page Object, you can make sure that your tests always interact with the UI in the same way, reducing the likelihood of flaky tests.
  - **Scalability**: As your frontend application grows in complexity, the Page Object and Page Factory patterns make it easier to manage your tests. By breaking down your UI into smaller Page Objects, you can keep your code organized and more maintainable, even as your application grows.\
  \
Here's an example of using Page Object and Page Factory patterns:\
In `login_page.ts`, we define the `LoginPage` object using the `Page Object` pattern:
```
class LoginPage {
  // Define the elements of the login page
  get username() {
    return cy.get('#username');
  }
  get password() {
    return cy.get('#password');
  }
  get loginButton() {
    return cy.get('#login-button');
  }

  // Define methods to interact with the UI
  visit() {
    cy.visit('/login');
  }
  login(username, password) {
    this.username.type(username);
    this.password.type(password);
    this.loginButton.click();
  }
}

// Export the LoginPage object
export default new LoginPage();
```
In `login.cy.ts`, we use the `Page Factory` pattern to obtain an instance of the `LoginPage` object:
```
import LoginPage from '../pages/login_page';

describe('Login', () => {
  beforeEach(() => {
    LoginPage.visit();
  });

  it('should log in with valid credentials', () => {
    LoginPage.login('john.doe', 'password');
    
    // Add test assertions here
  });

  it('should display an error message with invalid credentials', () => {
    LoginPage.login('invalid', 'password');
    cy.contains('Your username is invalid!');

    LoginPage.login('john.doe', 'invalid');
    cy.contains('Your password is invalid!');
  });
});
```
In the `beforeEach` method, we use the `LoginPage` object to visit the login page before each test. In the tests themselves, we use the `LoginPage` object to interact with the UI, using the `login` method to enter the username and password, and clicking the login button. We can then add our assertions to check that the login succeeded or failed as expected.



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

### Typical Cypress Test for a Component

A typical Cypress test for a component usually implements one of the following patterns:

1. The component is mounted; we test if this succeeds and might run additional checks on the component. No interaction takes place.
2. The component is mounted, and we manipulate its state (via a MobX class); we test if the component properly reflects changes made to its state.
3. The component is mounted, and we manipulate the UI; we test if the related state (a MobX class) is properly updated.
4. We test a React hook.

We strive for a modular approach, employing separation of concerns, and try to split code into smaller (single) units (functions) that are tested separately. 

### Network Calls and UI Rendering

When testing using Cypress, we only sparingly mock/intercept network calls or other interaction with the 'outside world' (except when we want to explicitly test this). We isolate UI rendering.

### Mocking
  - If we're mocking API calls, we can use `cy.intercept`. We will update this document as we gain more experience to determine best practices.
  -  Using Stub Functions\
  When a component takes a callback function as a parameter, we use `cy.stub`. Instead of each test creating a new stub, consider creating the stub inside the `mountComponent` function. Because a stubbed function has an alias, the calling test can refer to the stub by its alias.

### Async Commands and the Cypress Command Queue

It is important to note that the Cypress Command queue is asynchronous. Commands execute immediately when they are enqueued, but their callbacks don't execute until all previously enqueued commands have completed. 

## Executing Tests
To execute Cypress component test, run this command in the terminal:
```
npm run test --component
```
If you want to execute E2E tests, run this command in the terminal:
```
npm run test --e2e 
```

