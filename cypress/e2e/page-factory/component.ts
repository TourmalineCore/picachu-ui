import { ComponentProps } from "../types/page-factory/component";

export abstract class Component {
  selector: string;

  private name: string | undefined;

  constructor({ selector, name }: ComponentProps) {
    this.selector = selector;
    this.name = name;
  }

  getSelector(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(`[data-cy=${this.selector}]`);
  }

  get typeOf(): string {
    return `component`;
  }

  get componentName(): string {
    return this.name;
  }

  click(): Cypress.Chainable<JQuery<HTMLElement>> {
    cy.allure()
      .startStep(`Clicking the ${this.typeOf}`);

    const selector = this.getSelector();

    return selector.click();
  }

  shouldHaveText(text: string): Cypress.Chainable<JQuery<HTMLElement>> {
    cy.allure()
      .startStep(`The ${this.typeOf} should have text "${text}"`);

    const selector = this.getSelector();

    return selector.should(`have.text`, text);
  }

  shouldIlay(): Cypress.Chainable<JQuery<HTMLElement>> {
    let option: Cypress.Chainer<any>;
    console.log(`dfsfs`, option);
    cy.allure()
      .startStep(`The ${this.typeOf} should have text ""`);

    const selector = this.getSelector();

    return selector.should(``);
  }
}
