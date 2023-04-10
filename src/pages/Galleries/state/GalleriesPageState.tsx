import { makeAutoObservable } from "mobx";
import Gallery from "../components/GalleriesList/Gallery";

class GalleriesPageState {
  _galleries: Gallery[] = [];

  _newlyCreatedGalleryId: number | null = null;

  _lastDeletedGallery: Gallery | null = null;

  _lastDeletedGalleryIndex: number | null = null;

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

  get galleryToRestore() {
    return this._lastDeletedGallery;
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

  deleteGallery({
    galleryId,
  }: {
    galleryId: number;
  }) {
    this._lastDeletedGalleryIndex = this._galleries.findIndex((gallery) => gallery.id === galleryId);

    const [deletedGallery] = this._galleries.splice(this._lastDeletedGalleryIndex, 1);

    this._lastDeletedGallery = deletedGallery;
  }

  restoreGallery() {
    this._galleries.splice(this._lastDeletedGalleryIndex!, 0, this._lastDeletedGallery!);
    this._lastDeletedGallery = null;
  }
}

export default GalleriesPageState;
