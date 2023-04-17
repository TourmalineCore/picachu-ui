/* eslint-disable no-nested-ternary */
import { similarPhotosArray } from '../../MetricsTestValues.data';
import MetricsSimilarCard from '../MetricsSimilarCard/MetricsSimilarCard';
import MetricSimilarLoader from '../../../../assets/images/similar-loader-image.svg';

function MetricsSimilarList({ isLoading }: { isLoading: boolean }) {
  return (
    <div className="similar-photos">
      <h2 className="similar-photos__title">Similar photos</h2>
      {isLoading ? (
        <div className="similar-photos__empty-container">
          <img
            src={MetricSimilarLoader}
            alt="loader similar images"
            draggable={false}
            style={{
              marginBottom: `24px`,
            }}
          />
          <span className="similar-photos__empty">
            We&apos;ll start searching for photos once we&apos;ve highlighted
            all the tags
          </span>
        </div>
      ) : similarPhotosArray.length === 0 ? (
        <div className="similar-photos__empty-container">
          <span className="similar-photos__empty">
            The photo is unique so it has
            no similar photos
          </span>
        </div>
      ) : (
        <div className="similar-photos__full-container">
          {similarPhotosArray.map((photo) => (
            <MetricsSimilarCard
              id={photo.photoId}
              key={photo.photoId}
              image={photo.photoPath}
              relatedColors={photo.relatedColors}
              relatedFeatures={photo.relatedFeatures}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default MetricsSimilarList;
