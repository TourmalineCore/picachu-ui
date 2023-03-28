import image1 from "../../../../assets/images/create-gallery-1-image.png";
import image2 from "../../../../assets/images/create-gallery-2-image.png";
import image3 from "../../../../assets/images/create-gallery-3-image.png";
import image4 from "../../../../assets/images/create-gallery-4-image.png";
import image5 from "../../../../assets/images/create-gallery-5-image.png";

function NoGalleries() {
  const imageArray = [
    {
      id: 1,
      alt: `image1`,
      src: image1,
    },
    {
      id: 2,
      alt: `image2`,
      src: image2,
    },
    {
      id: 3,
      alt: `image3`,
      src: image3,
    },
    {
      id: 4,
      alt: `image4`,
      src: image4,
    },
    {
      id: 5,
      alt: `image5`,
      src: image5,
    },
  ];
  return (
    <div
      data-cy="no-galleries"
      className="no-galleries"
    >
      <div className="no-galleries__image-row">
        {
          imageArray.map((image) => (
            <img
              key={image.id}
              src={image.src}
              alt={image.alt}
              draggable={false}
              className="no-galleries__image"
            />
          ))
        }
      </div>
      <div className="no-galleries__text">
        <h1 className="no-galleries__title">Create a gallery to get started</h1>
        <p className="no-galleries__description">
          With galleries you can group photos by category or event
        </p>
      </div>

      <button
        type="button"
        className="button button--bright no-galleries__position-btn"
      >
        Create a gallery
      </button>

    </div>
  );
}
export default NoGalleries;
