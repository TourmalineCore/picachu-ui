/* eslint-disable no-nested-ternary */
import { similarPhotosArray } from '../../MetricsTestValues.data';
import MetricsSimilarCard from '../MetricsSimilarCard/MetricsSimilarCard';
import MetricSimilarLoader from '../../../../assets/images/similar-loader-image.svg';

function MetricsSimilarList({
  isLoading,
}: {
  isLoading: boolean;
}) {
  return (
    <div className="metrics-similar-photos">
      <h2 className="metrics-similar-photos__title">Similar photos</h2>
      {isLoading ? (
        <div className="metrics-similar-photos__empty-container">
          <img
            src={MetricSimilarLoader}
            className="metrics-similar-photos__empty-loader-svg"
            alt="loader similar images"
            draggable={false}
          />
          <span className="metrics-similar-photos__empty">
            We&apos;ll start searching for photos once we&apos;ve highlighted
            all the tags
          </span>
        </div>
      ) : similarPhotosArray.length === 0 ? (
        <div className="metrics-similar-photos__empty-container">
          <span className="metrics-similar-photos__empty">
            The photo is unique so it has
            no similar photos
          </span>
        </div>
      ) : (
        <ul className="metrics-similar-photos__full-container">
          {similarPhotosArray.map((photo) => (
            <MetricsSimilarCard
              id={photo.photoId}
              key={photo.photoId}
              image={photo.photoPath}
              relatedColors={photo.relatedColors}
              relatedFeatures={photo.relatedFeatures}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default MetricsSimilarList;
