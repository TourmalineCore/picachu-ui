import { Button } from '../page-factory/button';
import { Title } from '../page-factory/title';
import CommonGalleriesPage from './common-galleries-page';

export default class GalleriesPage extends CommonGalleriesPage {
  private readonly deleteGalleryButton: Button;

  private readonly galleryName: Title;

  constructor() {
    super({ createGallerySelector: `add-button` });

    this.deleteGalleryButton = new Button({
      selector: `delete-gallery-button`,
      name: `Delete a Gallery`,
    });

    this.galleryName = new Title({
      selector: `gallery-name-input`,
      name: `Gallery name`,
    });
  }

  isOpen() {
    this.createNewGalleryButton
      .shouldExist();
  }

  deleteLastGallery() {
    this.deleteGalleryButton
      .last()
      .click();
  }

  lastGalleryShouldHaveName(name: string) {
    this.galleryName
      .last()
      .shouldExist()
      .shouldHaveValue(name);
  }

  lastGalleryShouldNotBeFocused() {
    this.galleryName
      .last()
      .shouldNotBeFocused();
  }
}
