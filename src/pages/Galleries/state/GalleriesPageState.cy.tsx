import '../../../../cypress/support/commands';
import GalleriesPageState from './GalleriesPageState';

describe(`GalleriesPageState`, () => {
  it(`SHOULD return all galleries WHEN initialized`, () => {
    const galleriesPageState = new GalleriesPageState();

    galleriesPageState.initialize({
      loadedGalleries: [
        {
          id: 1,
          name: `First`,
          previewPhotos: [],
        },
      ],
    });

    expect(galleriesPageState.galleries).to.has.lengthOf(1);
    // keep here the second one as an example of a deep equality check of arrays and objects
    expect(galleriesPageState.galleries).to.deep.equal([
      {
        id: 1,
        name: `First`,
        previewPhotos: [],
      },
    ]);
  });

  it(`SHOULD remove a gallery from the list of galleries WHEN delete was called for it`, () => {
    const galleriesPageState = new GalleriesPageState();

    galleriesPageState.initialize({
      loadedGalleries: [
        {
          id: 1,
          name: `First`,
          previewPhotos: [],
        },
        {
          id: 2,
          name: `Second`,
          previewPhotos: [],
        },
        {
          id: 3,
          name: `Third`,
          previewPhotos: [],
        },
      ],
    });

    galleriesPageState.deleteGallery({
      galleryId: 2,
    });

    expect(galleriesPageState.galleries).to.deep.equal([
      {
        id: 1,
        name: `First`,
        previewPhotos: [],
      },
      {
        id: 3,
        name: `Third`,
        previewPhotos: [],
      },
    ]);
  });

  it(`SHOULD restore the deleted gallery and put it at the initial position in the list of galleries WHEN restore was called for this deleted gallery`, () => {
    const galleriesPageState = new GalleriesPageState();

    galleriesPageState.initialize({
      loadedGalleries: [
        {
          id: 1,
          name: `First`,
          previewPhotos: [],
        },
        {
          id: 2,
          name: `Second`,
          previewPhotos: [],
        },
        {
          id: 3,
          name: `Third`,
          previewPhotos: [],
        },
      ],
    });

    galleriesPageState.deleteGallery({
      galleryId: 2,
    });

    galleriesPageState.restoreGallery();

    expect(galleriesPageState.galleries).to.deep.equal([
      {
        id: 1,
        name: `First`,
        previewPhotos: [],
      },
      {
        id: 2,
        name: `Second`,
        previewPhotos: [],
      },
      {
        id: 3,
        name: `Third`,
        previewPhotos: [],
      },
    ]);
  });
});
