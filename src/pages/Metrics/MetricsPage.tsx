/* eslint-disable no-nested-ternary */
import { useEffect, useState } from 'react';
import metricImage from '../../assets/images/metric-image.png';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import MetricSimilarList from './components/MetricsSimilarList/MetricsSimilarList';
import {
  similarPhotosArray,
} from './MetricsTestValues.data';
import MetricsInfo from './components/MetricsInfo/MetricsInfo';

function MetricsPage() {
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
      <div className="metrics-page__wrapper">
        <div className="metrics-page__image-container">
          <img
            src={metricImage}
            className="metrics-page__image"
            alt="metric"
            draggable={false}
          />
        </div>

        <MetricsInfo isLoading={isLoading} />

        <MetricSimilarList
          isLoading={isLoading}
          similarPhotosArray={similarPhotosArray}
        />
      </div>

    </div>
  );
}

export default MetricsPage;
