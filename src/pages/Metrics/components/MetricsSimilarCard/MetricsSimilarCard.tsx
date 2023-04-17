type SimilarPhotoType = {
  id: number;
  image: string;
  relatedColors: {
    red: number;
    green: number;
    blue: number;
  }[];
  relatedFeatures: string[];
};

function MetricsSimilarCard({
  id, image, relatedColors, relatedFeatures,
}: SimilarPhotoType) {
  return (
    <li
      className="metric-similar-card"
    >
      <div className="metric-similar-card__image-container">
        <img
          src={image}
          className="metric-similar-card__image"
          alt="metric"
          draggable={false}
        />
        <div className="metric-similar-card__box-colors">
          {
            relatedColors.map((color) => (
              <span
                className="metric-similar-card__color"
                key={String(color.blue + color.red + color.green + id)}
                style={{
                  backgroundColor: `rgb(${color.red},${color.green},${color.blue})`,
                }}
              />
            ))
          }
        </div>
      </div>
      <div className="metric-similar-card__features-box">
        <p className="metric-similar-card__subtitle">Related features</p>
        <div className="metric-similar-card__features-box-items">
          {relatedFeatures.map((feature) => (
            <span
              key={feature + String(id)}
              className="metric-similar-card__features-item"
            >
              {feature}
            </span>
          ))}
        </div>

      </div>

    </li>
  );
}

export default MetricsSimilarCard;
