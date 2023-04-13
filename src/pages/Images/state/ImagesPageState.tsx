import { makeAutoObservable } from "mobx";
import Image from "../components/ImagesList/Image";

class ImagesPageState {
  _images: Image[] = [];

  _sort: string = `uniqueness`;

  constructor() {
    makeAutoObservable(this);
  }

  initialize({
    loadedImages,
  }: {
    loadedImages: Image[];
  }) {
    this._images = loadedImages;
  }

  get images() {
    return this._images;
  }
}

export default ImagesPageState;
