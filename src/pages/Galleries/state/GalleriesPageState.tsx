import { makeAutoObservable } from "mobx";
import Gallery from "../components/GalleriesList/Gallery";

class GalleriesPageState {
  _galleries: Gallery[] = [];

  _newlyCreatedGalleryId: number | null = null;

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

  get newlyCreatedGalleryId() {
    return this._newlyCreatedGalleryId;
  }

  addNewlyCreatedGallery({
    newlyCreatedGallery,
  }: {
    newlyCreatedGallery: Gallery;
  }) {
    this._galleries.push(newlyCreatedGallery);
    this._newlyCreatedGalleryId = newlyCreatedGallery.id;
  }

  stopTrackingNewlyCreatedGallery() {
    this._newlyCreatedGalleryId = null;
  }
}

export default GalleriesPageState;
