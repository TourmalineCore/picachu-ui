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
        },
      ],
    });

    expect(galleriesPageState.galleries).to.has.lengthOf(1);
    // keep here the second one as an example of a deep equality check of arrays and objects
    expect(galleriesPageState.galleries).to.deep.equal([
      {
        id: 1,
        name: `First`,
      },
    ]);
  });
});
