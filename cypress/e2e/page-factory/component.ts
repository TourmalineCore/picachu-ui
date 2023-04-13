import { ComponentProps } from "../types/page-factory/component";

export abstract class Component {
  selector: string;

  element: Cypress.Chainable<JQuery<HTMLElement>>;

  private name: string | undefined;

  constructor({ selector, name }: ComponentProps) {
    this.selector = selector;
    this.name = name;

    this.getSelector(selector);
  }

  protected get typeOf(): string {
    return `component`;
  }

  protected get componentName(): string {
    return this.name;
  }

  protected createStep(stepName: string) {
    cy.allure().startStep(stepName).endStep();
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(0, { log: false });
  }

  protected getSelector(selector: string) {
    this.element = cy.get(`[data-cy=${selector}]`);

    return this;
  }

  click() {
    this.createStep(`Clicking the ${this.typeOf} with ${this.name}`);

    this.element = this.element.click();

    return this;
  }

  lastElement() {
    this.createStep(`Get last ${this.typeOf} with ${this.name} in the list`);
    this.element = this.element.last();

    return this;
  }

  shouldValue(text: string) {
    this.createStep(`The ${this.typeOf} with ${this.name} should have value "text"`);
    this.element = this.element.should(`have.value`, text);

    return this;
  }

  shouldBeFocused() {
    this.createStep(`The ${this.typeOf} should be focused`);
    this.element = this.element.should(`be.visible`);

    return this;
  }

  shouldNotBeFocused() {
    this.createStep(`The ${this.typeOf} should be not focudes`);

    this.element = this.element.should(`not.be.focused`);

    return this;
  }

  // shouldHaveValue(value: string): Chainable<JQuery<HTMLElement>> {
  //   this.createStep(`The ${this.typeOf} should be have value ${value}`);

  //   return this.getSelector().should(`have.value`, value);
  // }
}
