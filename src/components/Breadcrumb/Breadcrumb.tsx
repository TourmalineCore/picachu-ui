import { Link, useLocation } from "react-router-dom";
import { ReactComponent as ArrowRight } from '../../assets/icons/icon-breadcrumbs-arrow-right.svg';

function Breadcrumb() {
  const location = useLocation();

  let currentLink = ``;

  const crumbs = location.pathname.split(`/`)
    .filter((crumb) => crumb !== ``)
    .map((crumb) => {
      currentLink += `/${crumb}`;

      return (
        <div
          className="breadcrumb__crumb"
          key={crumb}
        >
          <Link
            className="breadcrumb__link"
            to={currentLink}
          >
            {crumb}
          </Link>
          <div className="breadcrumb__icon-container">
            <ArrowRight />
          </div>
        </div>
      );
    });

  return (
    <div className="breadcrumb">
      {crumbs}
    </div>
  );
}

export default Breadcrumb;
