import { Title } from '../page-factory/title';
import CommonGalleriesPage from './common-galleries-page';

export default class NoGalleriesPage extends CommonGalleriesPage {
  private readonly noGalleriesTitle: Title;

  constructor() {
    super({ createGallerySelector: `no-galleries-create-gallery-button` });

    this.noGalleriesTitle = new Title({
      selector: `no-galleries-title`,
      name: `No galleries`,
    });
  }

  isOpen() {
    this.noGalleriesTitle
      .shouldHaveText(`Create a gallery to get started`);
    console.log(this.noGalleriesTitle.element);
  }
}
