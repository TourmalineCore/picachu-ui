import { Link, useParams } from "react-router-dom";

export type PhotoType = {
  id: number;
  photoPath: string;
  uniqueness: number;
};

function PhotoCard({
  id,
  photoPath,
  uniqueness,
}: PhotoType) {
  const { galleryId } = useParams();
  return (
    <Link
      to={`/galleries/${galleryId}/${id}`}
      className="photo-card"
    >
      <div className="photo-card__image-container">
        <img
          src={photoPath}
          className="photo-card__image"
          alt="test"
          draggable={false}
        />
      </div>
      <p
        className="photo-card__title"

      >
        Uniqueness
        {` `}
        <span data-cy="uniqueness-value">
          {uniqueness}
          %
        </span>
      </p>
    </Link>
  );
}

export default PhotoCard;
