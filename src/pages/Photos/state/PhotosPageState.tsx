import { makeAutoObservable } from "mobx";
import { PhotoType } from "../components/PhotoCard/PhotoCard";

class PhotosPageState {
  _photos: PhotoType[] = [];

  _sort: string = `uniqueness metric`;

  constructor() {
    makeAutoObservable(this);
  }

  initialize({
    loadedPhotos,
  }: {
    loadedPhotos: PhotoType[];
  }) {
    this._photos = loadedPhotos;
  }

  get photos() {
    return this._photos;
  }

  get sort() {
    return this._sort;
  }

  changeSortProperty(name: string) {
    this._sort = name;
  }
}

export default PhotosPageState;
