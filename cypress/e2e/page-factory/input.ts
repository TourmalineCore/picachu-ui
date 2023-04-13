/* eslint-disable react/no-unused-class-component-methods */
import { Component } from "./component";

interface Chainable<Subject = any> {
  shouldBeFocused(): Chainable<Subject>;
  type(value: string): Chainable<Subject>;
}

export class Input extends Component {
  get typeOf(): string {
    return `input`;
  }

  public shouldBeFocused() {
    this.createStep(`The ${this.typeOf} should be focused on"`);

    return this.getSelector().should(`be.focused`);
  }

  public type(value: string) {
    this.createStep(`Type "${value}" in ${this.typeOf}`);

    return this.getSelector().type(value);
  }
}
