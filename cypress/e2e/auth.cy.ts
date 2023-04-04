/* eslint-disable linebreak-style */
describe(`auth login page`, () => {
  it(`Url SHOULD BE LOGIN when we try to visit another page whiout auth`, () => {
    cy.visit(`http://localhost:5173/galleries`);
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    expect(localStorage.getItem(`accessToken`)).to.be.null;
    cy.url().should(`eq`, `http://localhost:5173/login?from=/galleries`);
  });

  it(`Happy path`, () => {
    cy.visit(`http://localhost:5173/galleries`);
    cy.intercept(`POST`, `/api/auth/login`, {
      body: {
        accessToken: {
          value: `some token value`,
        },
      },
    }).as(`AUTH POST`);
    cy.getByData(`login-input`)
      .type(`admin`);

    cy.getByData(`password-input`)
      .type(`admin`);

    cy.getByData(`login-button`)
      .click();

    cy
      .getByData(`loader`).should(`be.visible`);

    cy.url().should(`eq`, `http://localhost:5173/galleries`);

    cy.getByData(`header-menu`)
      .click();

    cy.getByData(`logout-btn`)
      .click();

    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    expect(localStorage.getItem(`accessToken`)).to.be.null;

    cy.url().should(`eq`, `http://localhost:5173/login?from=/galleries`);
  });
});
