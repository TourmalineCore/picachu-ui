import { Button } from '../../page-factory/button';

export default class RestoreDeletedGalleryToast {
  private readonly restoreDeletedGalleryButton: Button;

  constructor() {
    this.restoreDeletedGalleryButton = new Button({
      selector: `restore-gallery-button`,
      name: `Restore`,
    });
  }

  tapRestore() {
    this.restoreDeletedGalleryButton
      .click();
  }
}
