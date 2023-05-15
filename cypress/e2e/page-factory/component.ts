import { ComponentProps } from "../types/page-factory/component";

export abstract class Component {
  selector: string;

  element!: Cypress.Chainable<JQuery<HTMLElement>>;

  private name: string;

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
    cy.allure().startStep(stepName).endStep();
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(0, { log: false });
  }

  private getSelector() {
    this.element = cy.get(`[data-cy=${this.selector}]`);

    return this;
  }

  private callGetSelectorIfNeed() {
    console.log(`ELEMENT = `, this);
    if (typeof this.element === `undefined`) {
      console.log(`UNDEFINED`, 2);
      this.getSelector();
      console.log(this.selector, 3);
    }
  }

  click() {
    // this.createStep(`Clicking the ${this.typeOf} ${this.name}`);

    this.callGetSelectorIfNeed();
    console.log(`CLICK = `, this.element);

    this.element = this.element.click();

    return this;
  }

  last() {
    // this.createStep(`Get last ${this.name} ${this.typeOf} in the list`);

    this.callGetSelectorIfNeed();
    console.log(`LAST = `, this.element);

    this.element = this.element.last();

    return this;
  }

  shouldHaveValue(value: string) {
    // this.createStep(`The ${this.typeOf} with ${this.name} should have value ${value}`);

    this.callGetSelectorIfNeed();

    this.element = this.element.should(`have.value`, value);

    return this;
  }

  shouldHaveText(text: string) {
    // this.createStep(`The ${this.typeOf} with ${this.name} should have text ${text}`);

    this.callGetSelectorIfNeed();

    this.element = this.element.should(`have.text`, text);

    return this;
  }

  shouldBeVisible() {
    // this.createStep(`The ${this.typeOf} should be visible`);

    this.callGetSelectorIfNeed();

    this.element = this.element.should(`be.visible`);

    return this;
  }

  shouldNotBeVisible() {
    // this.createStep(`The ${this.typeOf} should not be visible`);

    this.callGetSelectorIfNeed();

    this.element = this.element.should(`not.be.visible`);

    return this;
  }

  shouldExist() {
    // this.createStep(`The ${this.typeOf} with name ${this.name} should exist`);

    this.callGetSelectorIfNeed();
    console.log(`4`);

    this.element = this.element.should(`exist`);
    return this;
  }

  shouldNotExist() {
    // this.createStep(`The ${this.typeOf} with name ${this.name} should not exist`);

    this.callGetSelectorIfNeed();

    this.element = this.element.should(`not.exist`);

    return this;
  }

  shouldNotBeFocused() {
    // this.createStep(`The ${this.typeOf} with name ${this.name} should not be focused`);

    this.callGetSelectorIfNeed();

    this.element = this.element.should(`not.be.focused`);

    return this;
  }

  // shouldHaveValue(value: string): Chainable<JQuery<HTMLElement>> {
  //   this.createStep(`The ${this.typeOf} should be have value ${value}`);

  //   return this.getSelector().should(`have.value`, value);
  // }
}
