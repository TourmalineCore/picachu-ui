import { makeAutoObservable } from "mobx";
import Photo from "../components/PhotosList/Photos";

class PhotosPageState {
  private _photos: Photo[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  initialize({
    loadedPhotos,
  }: {
    loadedPhotos: Photo[];
  }) {
    this._photos = loadedPhotos;
  }

  get photos() {
    return this._photos;
  }
}

export default PhotosPageState;
