import PhotosPageState from "./PhotosPageState";

describe(`PhotosPageState`, () => {
  it(`SHOULD return all photos WHEN initialized`, () => {
    const photosPageState = new PhotosPageState();

    photosPageState.initialize({
      loadedPhotos: [
        {
          id: 1,
          photoPath: `https://stickerbase.ru/wp-content/uploads/2021/07/61607.png`,
          uniqueness: 90,
        },
      ],
    });

    expect(photosPageState.photos).to.has.lengthOf(1);

    expect(photosPageState.photos).to.deep.equal([
      {
        id: 1,
        photoPath: `https://stickerbase.ru/wp-content/uploads/2021/07/61607.png`,
        uniqueness: 90,
      },
    ]);
  });

  it(`SHOULD change sort value WHEN function was called`, () => {
    const photosPageState = new PhotosPageState();

    photosPageState.sort = `date of upload`;

    expect(photosPageState.sort).equal(`date of upload`);
  });
});
