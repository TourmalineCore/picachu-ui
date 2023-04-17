/* eslint-disable no-nested-ternary */
import { useEffect, useState } from 'react';
import metricImage from '../../assets/images/metric-image.png';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import CircleProgressBar from '../../components/CircleProgressBar/CircleProgressBar';
import MetricSimilarList from './components/MetricsSimilarList/MetricsSimilarList';
import {
  associationsArray, colorsArray, emotionsArray, objectsArray,
} from './MetricsTestValues.data';

function MetricsPage() {
  const TotalUniqueness = 52;
  const Colors = 20;
  const Other = 15;

  const [isLoading, setIsLoading] = useState(true);

  const delay = 1;

  useEffect(() => {
    const timer1 = setTimeout(() => setIsLoading(false), delay * 1000);
    return () => {
      clearTimeout(timer1);
    };
  }, []);

  return (
    <div className="metrics-page">
      <Breadcrumbs />
      <div className="metrics-page__container">
        <div className="metrics-page__wrapper">
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
              <h2 className="metrics-page__title">Uniqueness</h2>
              <div className="metrics-page__uniqueness-bars">
                {
                  isLoading ? (
                    <div className="metrics-page__image-loader-container">
                      <span className="metrics-page__image-loader" />
                      <span className="metrics-page__image-loader-text">counting</span>
                    </div>
                  ) : (
                    <CircleProgressBar
                      percentage={TotalUniqueness}
                      circleWidth={72}
                      strokeWidth={7}
                      radius={32}
                      isPercentageShown
                    />
                  )
                }

                <div className="metrics-page__stroke-bars">
                  <div className="metrics-page__box">
                    <h3 className="metrics-page__subtitle">Colors</h3>

                    {isLoading ? (
                      <div
                        className="metrics-page__loader-container"
                      >
                        <span className="metrics-page__loader--purple" />
                        <span
                          className="metrics-page__image-loader-text"
                        >
                          {Colors}
                          % completed
                        </span>
                      </div>
                    ) : (
                      <div className="metrics-page__bar">
                        <div className="metrics-page__bar-background">
                          <div
                            className="metrics-page__bar-progress"
                            style={{
                              width: `${Colors}%`,
                            }}
                          />
                        </div>
                        <h2 className="metrics-page__bar-percentage-text">
                          {Colors}
                          <span>%</span>
                        </h2>
                      </div>
                    )}

                  </div>
                  <div className="metrics-page__box">
                    <h3 className="metrics-page__subtitle">
                      Objects,
                      emotions,
                      associations
                    </h3>

                    {
                      isLoading ? (
                        <div
                          className="metrics-page__loader-container"
                        >
                          <span className="metrics-page__loader--purple" />
                          <span
                            className="metrics-page__image-loader-text"
                          >
                            {Other}
                            % completed
                          </span>
                        </div>
                      ) : (
                        <div className="metrics-page__bar">
                          <div className="metrics-page__bar-background">
                            <div
                              className="metrics-page__bar-progress"
                              style={{
                                width: `${Other}%`,
                              }}
                            />
                          </div>
                          <h2 className="metrics-page__bar-percentage-text">
                            {Other}
                            <span>%</span>
                          </h2>
                        </div>
                      )
                    }

                  </div>
                </div>
              </div>
            </div>
            <div className="metrics-page__features">
              <h2 className="metrics-page__title">Features</h2>
              <div className="metrics-page__features-box">
                <h3 className="metrics-page__subtitle">Main colors</h3>
                {isLoading ? (
                  <div style={{
                    textAlign: `left`,
                  }}
                  >
                    <span className="metrics-page__loader--default" />
                    <span
                      className="metrics-page__image-loader-text"
                    >
                      Almost done
                    </span>
                  </div>
                ) : (
                  <div className="metrics-page__features-box-colors">
                    {colorsArray.map((color) => (
                      <span
                        key={color.blue + color.red + color.green + Colors}
                        className="metrics-page__features-color"
                        style={{
                          backgroundColor: `rgb(${color.red},${color.green},${color.blue})`,
                        }}
                      />
                    ))}
                  </div>
                )}

              </div>
              <div className="metrics-page__features-box">
                <h3 className="metrics-page__subtitle">Emotions</h3>
                {isLoading ? (
                  <div style={{
                    textAlign: `left`,
                  }}
                  >
                    <span className="metrics-page__loader--default" />
                    <span
                      className="metrics-page__image-loader-text"
                    >
                      It&apos;s going to take a little longer than we expected
                    </span>
                  </div>
                ) : (
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
                )}

              </div>
              <div className="metrics-page__features-box">
                <h3 className="metrics-page__subtitle">Objects</h3>
                {isLoading ? (
                  <div style={{
                    textAlign: `left`,
                  }}
                  >
                    <span className="metrics-page__loader--default" />
                    <span
                      className="metrics-page__image-loader-text"
                    >
                      Select objects from the photo (usually takes about 3 minutes)
                    </span>
                  </div>
                ) : (
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
                )}

              </div>
              <div className="metrics-page__features-box">
                <h3 className="metrics-page__subtitle">Associations</h3>
                {isLoading ? (
                  <div style={{
                    textAlign: `left`,
                  }}
                  >
                    <span className="metrics-page__loader--default" />
                    <span
                      className="metrics-page__image-loader-text"
                    >
                      It&apos;s going to take a little longer than we expected
                    </span>
                  </div>
                ) : (
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
                )}

              </div>

            </div>

          </div>
          <MetricSimilarList isLoading={isLoading} />
        </div>

      </div>
    </div>
  );
}

export default MetricsPage;
