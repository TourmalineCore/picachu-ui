import { ComponentProps, Selector } from "../types/page-factory/component";
import { selectorTemplateFormat } from "../utils/page-factory";

export abstract class Component {
  selector: string;

  private name: string | undefined;

  constructor({ selector, name }: ComponentProps) {
    this.selector = selector;
    this.name = name;
  }

  getSelector(props: Selector = {}): Cypress.Chainable<JQuery<HTMLElement>> {
    const { selector, ...context } = props;
    const withTemplate = selectorTemplateFormat(selector || this.selector, context);

    return cy.get(withTemplate);
  }

  get typeOf(): string {
    return `component`;
  }

  get componentName(): string {
    return this.name;
  }

  async click(selectorProp: Selector = {}): Promise<void> {
    cy.allure()
      .startStep(`Clicking the ${this.typeOf} with name ${this.componentName}`);

    const selector = this.getSelector(selectorProp);
    selector.click();
  }
}
