/* eslint-disable class-methods-use-this */
import { Button } from '../page-factory/button';
import BasePage from './base-page';
import RestoreDeletedGalleryToast from './toasts/restore-deleted-gallery-toast';

type CreateGallerySelector = {
  createGallerySelector: string;
};

export default abstract class CommonGalleriesPage extends BasePage {
  readonly restoreDeletedGalleryToast: RestoreDeletedGalleryToast;

  protected readonly createNewGalleryButton: Button;

  constructor({ createGallerySelector }: CreateGallerySelector) {
    super();

    this.restoreDeletedGalleryToast = new RestoreDeletedGalleryToast();

    this.createNewGalleryButton = new Button({
      selector: createGallerySelector,
      name: `Create new gallery`,
    });
  }

  createNewGallery() {
    this.createNewGalleryButton
      .click();
  }
}
