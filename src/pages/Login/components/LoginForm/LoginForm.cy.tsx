import LoginForm from './LoginForm';
import '../../../../../cypress/support/commands';

describe(`LoginForm`, () => {
  beforeEach(() => {
    const onLogin = cy.spy().as(`onLogin`);
    cy.mount(<LoginForm onLogin={onLogin} />);
  });

  it(`form fields SHOULD be empty by default`, () => {
    cy.getByData(`login-input`)
      .should(`be.empty`);

    cy.getByData(`password-input`)
      .should(`be.empty`);
  });

  it(`login button SHOULD be disabled if login has value and password not`, () => {
    cy.getByData(`login-input`)
      .type(`admin`);

    cy.getByData(`login-button`)
      .should(`be.disabled`);
  });
  it(`login button SHOULD be disabled if password has value and login not`, () => {
    cy.getByData(`password-input`)
      .type(`123`);

    cy.getByData(`login-button`)
      .should(`be.disabled`);
  });

  it(`login button SHOULD be disabled if password has space value and login has space value`, () => {
    cy.getByData(`login-input`)
      .type(`  `);

    cy.getByData(`password-input`)
      .type(`  `);

    cy.getByData(`login-button`)
      .should(`be.disabled`);
  });

  it(`login button SHOULD NOT be disabled if password has value and login has value`, () => {
    cy.getByData(`login-input`)
      .type(`admin`);

    cy.getByData(`password-input`)
      .type(`123`);

    cy.getByData(`login-button`)
      .should(`not.be.disabled`);
  });

  it(`login button SHOULD call onLogin function only once`, () => {
    cy.getByData(`login-input`)
      .type(`admin`);

    cy.getByData(`password-input`)
      .type(`123`);

    cy.getByData(`login-button`)
      .click();

    cy.get(`@onLogin`)
      .should(`have.been.calledOnceWith`, {
        login: `admin`,
        password: `123`,
      });
  });

  it(`disabled login button SHOULD NOT call onLogin function `, () => {
    cy.getByData(`login-button`)
      .should(`be.disabled`)
      .click({ force: true });

    cy.get(`@onLogin`)
      .should(`not.have.been.called`);
  });
});
