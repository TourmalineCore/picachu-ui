import metricImage from '../../assets/images/metric-image.png';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import CircleProgressBar from '../../components/CircleProgressBar/CircleProgressBar';
import {
  similarPhotosArray,
  associationsArray, colorsArray, emotionsArray, objectsArray,
} from './MetricsTestValues.data';
import MetricsSimilarCard from './components/MetricsSimilarCard/MetricsSimilarCard';

function MetricsPage() {
  const TotalUniqueness = 52;
  const Colors = 20;
  const Other = 15;
  return (
    <div className="metrics-page">
      <Breadcrumbs />
      <div className="metrics-page__container">
        <div className="metrics-page__image-container">
          <img
            src={metricImage}
            className="metrics-page__image"
            alt="metric"
            draggable={false}
          />
        </div>
        <div className="metrics-page__metric">
          <div className="metrics-page__uniqueness">
            <h1 className="metrics-page__title">Uniqueness</h1>
            <div className="metrics-page__uniqueness-bars">
              <CircleProgressBar
                percentage={TotalUniqueness}
                circleWidth={72}
                strokeWidth={7}
                radius={32}
                isPercentageShown
              />
              <div className="metrics-page__stroke-bars">
                <div className="metrics-page__box">
                  <p className="metrics-page__subtitle">Colors</p>

                  <div className="metrics-page__bar">
                    <div className="metrics-page__bar-background">
                      <div
                        className="metrics-page__bar-progress"
                        style={{
                          width: `${Colors}%`,
                        }}
                      />
                    </div>
                    <h1 className="metrics-page__bar-percentage-text">
                      {Colors}
                      <span>%</span>
                    </h1>
                  </div>

                </div>
                <div className="metrics-page__box">
                  <p className="metrics-page__subtitle">
                    Objects,
                    emotions,
                    associations
                  </p>

                  <div className="metrics-page__bar">
                    <div className="metrics-page__bar-background">
                      <div
                        className="metrics-page__bar-progress"
                        style={{
                          width: `${Other}%`,
                        }}
                      />
                    </div>
                    <h1 className="metrics-page__bar-percentage-text">
                      {Other}
                      <span>%</span>
                    </h1>
                  </div>

                </div>
              </div>
            </div>
          </div>
          <div className="metrics-page__features">
            <h1 className="metrics-page__title">Features</h1>
            <div className="metrics-page__features-box">
              <p className="metrics-page__subtitle">Main colors</p>
              <div className="metrics-page__features-box-colors">
                {colorsArray.map((color) => (
                  <span
                    key={color.blue + color.red + color.green}
                    className="metrics-page__features-color"
                    style={{
                      backgroundColor: `rgb(${color.red},${color.green},${color.blue})`,
                    }}
                  />
                ))}
              </div>

            </div>
            <div className="metrics-page__features-box">
              <p className="metrics-page__subtitle">Emotions</p>
              <div className="metrics-page__features-box-items">
                {emotionsArray.map((emotion) => (
                  <span
                    key={emotion}
                    className="metrics-page__features-item"
                  >
                    {emotion}
                  </span>
                ))}
              </div>

            </div>
            <div className="metrics-page__features-box">
              <p className="metrics-page__subtitle">Objects</p>
              <div className="metrics-page__features-box-items">
                {objectsArray.map((object) => (
                  <span
                    key={object}
                    className="metrics-page__features-item"
                  >
                    {object}
                  </span>
                ))}
              </div>

            </div>
            <div className="metrics-page__features-box">
              <p className="metrics-page__subtitle">Associations</p>
              <div className="metrics-page__features-box-items">
                {associationsArray.map((association) => (
                  <span
                    key={association}
                    className="metrics-page__features-item"
                  >
                    {association}
                  </span>
                ))}
              </div>

            </div>
          </div>
        </div>
        <div className="metrics-page__similar-photos">
          <h1 className="metrics-page__title">Similar photos</h1>
          {
            similarPhotosArray.length === 0 ? (
              <div className="metrics-page__similar-photos-empty-container">
                <p className="metrics-page__similar-photos-empty">
                  The photo is unique so it has
                  no similar photos
                </p>
              </div>
            ) : (
              <div className="metrics-page__similar-photos-full-container">
                {similarPhotosArray.map((photo) => (
                  <MetricsSimilarCard
                    id={photo.photoId}
                    image={photo.photoPath}
                    relatedColors={photo.relatedColors}
                    relatedFeatures={photo.relatedFeatures}
                  />
                ))}
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
}

export default MetricsPage;
