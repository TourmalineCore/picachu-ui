import { Link, useLocation } from "react-router-dom";
import { ReactComponent as ArrowRight } from '../../assets/icons/icon-breadcrumbs-arrow-right.svg';

function Breadcrumb() {
  const location = useLocation();

  const crumbs = location.pathname.split(`/`)
    .filter((crumb) => crumb !== ``);

  return (
    <ul className="breadcrumbs">
      {crumbs.map((crumb) => (
        <li
          className="breadcrumbs__item"
          key={crumb}
        >
          <Link
            className="breadcrumbs__link"
            to={`/${crumb}`}
          >
            {crumb}
          </Link>

          <ArrowRight className="breadcrumbs__icon" />

        </li>
      ))}
    </ul>
  );
}

export default Breadcrumb;
