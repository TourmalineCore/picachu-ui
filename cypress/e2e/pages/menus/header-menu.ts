import { Button } from '../../page-factory/button';

export default class HeaderMenu {
  private readonly logOutButton: Button;

  constructor() {
    this.logOutButton = new Button({
      selector: `logout-btn`,
      name: `Log out`,
    });
  }

  tapLogOut() {
    this.logOutButton
      .click();
  }
}
