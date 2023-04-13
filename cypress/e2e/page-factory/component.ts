import { ComponentProps } from "../types/page-factory/component";

interface Chainable<Subject = any> {
  shouldHaveText(text: string): Chainable<Subject>;
  shouldBeVisible(): Chainable<Subject>;
  getLastElement(): Chainable<Subject>;
  shouldHaveValue(): Chainable<Subject>;
  click(): Chainable<Subject>;
  // type(value: string): Chainable<Subject>;
  // shouldBeFocused(): Chainable<Subject>;
}
export abstract class Component implements Chainable<any> {
  selector: string;

  private name: string | undefined;

  constructor({ selector, name }: ComponentProps) {
    this.selector = selector;
    this.name = name;
  }

  protected get typeOf(): string {
    return `component`;
  }

  protected get componentName(): string {
    return this.name;
  }

  protected createStep(stepName: string) {
    return cy.allure().startStep(stepName).endStep();
  }

  getSelector() {
    return cy.get(`[data-cy=${this.selector}]`);
  }

  public click() {
    this.createStep(`Clicking the ${this.typeOf}`);

    return this.getSelector().click();
  }

  public shouldHaveText(text: string): Chainable<JQuery<HTMLElement>> {
    this.createStep(`The ${this.typeOf} should have text "${text}"`);

    return this.getSelector().should(`have.text`, text);
  }

  public shouldBeVisible(): Chainable<JQuery<HTMLElement>> {
    this.createStep(`The ${this.typeOf} should be visiable on the page`);

    return this.getSelector().should(`be.visible`);
  }

  public shouldHaveValue(value: string): Chainable<JQuery<HTMLElement>> {
    this.createStep(`The ${this.typeOf} should be have value ${value}`);

    return this.getSelector().should(`have.value`, value);
  }

  public getLastElement(): Chainable<JQuery<HTMLElement>> {
    this.createStep(`Get last ${this.typeOf} in the list`);

    return this.getSelector().last();
  }
}
