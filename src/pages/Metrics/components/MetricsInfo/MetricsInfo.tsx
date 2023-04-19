import CircleProgressBar from '../../../../components/CircleProgressBar/CircleProgressBar';
import {
  associationsArray, colorsArray, emotionsArray, objectsArray,
} from '../../MetricsTestValues.data';

function MetricsInfo({
  isLoading,
}: {
  isLoading: boolean;
}) {
  return (
    <div className="metrics-info">
      <div className="metrics-info__uniqueness">
        <h2 className="metrics-info__title">Uniqueness</h2>
        <div className="metrics-info__uniqueness-bars">
          {
            isLoading ? (
              <div className="metrics-info__image-loader-container">
                <span className="metrics-info__image-loader" />
                <span className="metrics-info__image-loader-text">counting</span>
              </div>
            ) : (
              <CircleProgressBar
                percentage={52}
                circleWidth={72}
                strokeWidth={7}
                radius={32}
                isPercentageShown
              />
            )
          }

          <div className="metrics-info__stroke-bars">
            <div className="metrics-info__bar-box">
              <h3 className="metrics-info__subtitle">Colors</h3>

              {isLoading ? (
                <div
                  className="metrics-info__loader-container"
                >
                  <span className="metrics-info__loader metrics-info__loader--purple" />
                  <span
                    className="metrics-info__image-loader-text"
                  >
                    {20}
                    % completed
                  </span>
                </div>
              ) : (
                <div className="metrics-info__bar">
                  <div className="metrics-info__bar-background">
                    <div
                      className="metrics-info__bar-progress"
                      style={{
                        width: `${20}%`,
                      }}
                    />
                  </div>
                  <h2 className="metrics-info__bar-percentage-text">
                    {20}
                    <span>%</span>
                  </h2>
                </div>
              )}

            </div>
            <div className="metrics-info__bar-box">
              <h3 className="metrics-info__subtitle">
                Objects,
                emotions,
                associations
              </h3>

              {
                isLoading ? (
                  <div
                    className="metrics-info__loader-container"
                  >
                    <span className="metrics-info__loader  metrics-info__loader--purple" />
                    <span
                      className="metrics-info__image-loader-text"
                    >
                      {15}
                      % completed
                    </span>
                  </div>
                ) : (
                  <div className="metrics-info__bar">
                    <div className="metrics-info__bar-background">
                      <div
                        className="metrics-info__bar-progress"
                        style={{
                          width: `${15}%`,
                        }}
                      />
                    </div>
                    <h2 className="metrics-info__bar-percentage-text">
                      {15}
                      <span>%</span>
                    </h2>
                  </div>
                )
              }

            </div>
          </div>
        </div>
      </div>

      <div className="metrics-info__features">
        <h2 className="metrics-info__title">Features</h2>
        <div className="metrics-info__box">
          <h3 className="metrics-info__subtitle">Main colors</h3>
          {isLoading ? (
            <div className="metrics-info__loader-default-container">
              <span className="metrics-info__loader  metrics-info__loader--default" />
              <span
                className="metrics-info__loader-text"
              >
                Almost done
              </span>
            </div>
          ) : (
            <div className="metrics-info__colors">
              {colorsArray.map((color) => (
                <span
                  key={color.blue + color.red + color.green}
                  className="metrics-info__color"
                  data-cy="color"
                  style={{
                    backgroundColor: `rgb(${color.red},${color.green},${color.blue})`,
                  }}
                />
              ))}
            </div>
          )}

        </div>
        <div className="metrics-info__box">
          <h3 className="metrics-info__subtitle">Emotions</h3>
          {isLoading ? (
            <div className="metrics-info__loader-default-container">
              <span className="metrics-info__loader metrics-info__loader--default" />
              <span
                className="metrics-info__loader-text"
              >
                It&apos;s going to take a little longer than we expected
              </span>
            </div>
          ) : (
            <div className="metrics-info__tags">
              {emotionsArray.map((emotion) => (
                <span
                  key={emotion}
                  data-cy="emotion"
                  className="metrics-info__tag"
                >
                  {emotion}
                </span>
              ))}
            </div>
          )}

        </div>
        <div className="metrics-info__box">
          <h3 className="metrics-info__subtitle">Objects</h3>
          {isLoading ? (
            <div className="metrics-info__loader-default-container">
              <span className="metrics-info__loader metrics-info__loader--default" />
              <span
                className="metrics-info__loader-text"
              >
                Select objects from the photo (usually takes about 3 minutes)
              </span>
            </div>
          ) : (
            <div className="metrics-info__tags">
              {objectsArray.map((object) => (
                <span
                  key={object}
                  data-cy="object"
                  className="metrics-info__tag"
                >
                  {object}
                </span>
              ))}
            </div>
          )}

        </div>
        <div className="metrics-info__box">
          <h3 className="metrics-info__subtitle">Associations</h3>
          {isLoading ? (
            <div className="metrics-info__loader-default-container">
              <span className="metrics-info__loader metrics-info__loader--default" />
              <span
                className="metrics-info__loader-text"
              >
                It&apos;s going to take a little longer than we expected
              </span>
            </div>
          ) : (
            <div className="metrics-info__tags">
              {associationsArray.map((association) => (
                <span
                  key={association}
                  data-cy="association"
                  className="metrics-info__tag"
                >
                  {association}
                </span>
              ))}
            </div>
          )}

        </div>

      </div>

    </div>

  );
}

export default MetricsInfo;
