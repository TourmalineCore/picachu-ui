import { makeAutoObservable } from "mobx";
import Gallery from "../components/GalleriesList/Gallery";

class GalleriesPageState {
  _galleries: Gallery[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  initialize({
    loadedGalleries,
  }: {
    loadedGalleries: Gallery[];
  }) {
    this._galleries = loadedGalleries;
  }

  get galleries() {
    return this._galleries;
  }

  addNewlyCreatedGallery({
    newlyCreatedGallery,
  }: {
    newlyCreatedGallery: Gallery;
  }) {
    this._galleries.push(newlyCreatedGallery);
  }
}

export default GalleriesPageState;
