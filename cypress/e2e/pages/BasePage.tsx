/* eslint-disable class-methods-use-this */
import { Button } from '../page-factory/button';
import { Title } from '../page-factory/title';

export default class BasePage {
  private readonly settingsButton: Button;

  private readonly emptyChatTitle: Title;

  constructor() {
    this.settingsButton = new Button({ selector: `` });
    this.emptyChatTitle = new Title({ selector: `` });
  }

  visit(url: string) {
    cy.visit(url);
    cy.reload();
  }
}
