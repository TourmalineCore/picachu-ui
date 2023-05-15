/* eslint-disable class-methods-use-this */
import { Button } from '../page-factory/button';
import HeaderMenu from './menus/header-menu';

export default abstract class BasePage {
  readonly headerMenu: HeaderMenu;

  private readonly headerMenuButton: Button;

  constructor() {
    this.headerMenu = new HeaderMenu();

    this.headerMenuButton = new Button({
      selector: `header-menu`,
      name: `Header Menu`,
    });
  }

  visit(url: string) {
    cy.visit(url);
  }

  reload() {
    cy.reload();
  }

  openHeaderMenu() {
    this.headerMenuButton
      .click();
  }
}
