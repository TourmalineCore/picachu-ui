import LoginForm from './LoginForm';
import '../../../cypress/support/commands.ts';

describe(`<LoginForm />`, () => {
  beforeEach(() => {
    const onHandleSubmit = cy.spy().as(`onHandleSubmit`);
    cy.mount(<LoginForm handleSubmit={onHandleSubmit} />);
  });

  it(`form fields SHOULD be empty by default`, () => [cy.getByData(`login`), cy.getByData(`password`)].forEach((field) => field.should(`be.empty`)));

  it(`submit button SHOULD be disabled if login has value and password not`, () => {
    cy.getByData(`login`).type(`admin`);
    cy.getByData(`submit-button`).should(`be.disabled`);
  });
  it(`submit button SHOULD be disabled if password has value and login not`, () => {
    cy.getByData(`password`).type(`123`);
    cy.getByData(`submit-button`).should(`be.disabled`);
  });
  it(`submit button SHOULD be disabled if password has space value and login has space value`, () => {
    cy.getByData(`login`).type(`  `);
    cy.getByData(`password`).type(`  `);
    cy.getByData(`submit-button`).should(`be.disabled`);
  });
  it(`submit button SHOULD NOT be disabled if password has value and login has value`, () => {
    cy.getByData(`login`).type(`admin`);
    cy.getByData(`password`).type(`123`);
    cy.getByData(`submit-button`).should(`not.be.disabled`);
  });
  it(`submit button SHOULD call handleSubmit function only once`, () => {
    cy.getByData(`login`).type(`admin`);
    cy.getByData(`password`).type(`123`);
    cy.getByData(`form`).submit();
    cy.get(`@onHandleSubmit`).should(`have.been.called`, 1);
  });
});
