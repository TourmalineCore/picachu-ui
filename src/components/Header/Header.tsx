import {
  useContext,
  useRef,
  useState,
} from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/icons/icon-logo.svg';
import { ReactComponent as DropArrow } from '../../assets/icons/icon-arrow-down.svg';
import { ReactComponent as LogOut } from '../../assets/icons/icon-logout.svg';
import ProfileCircle from '../../assets/images/profile-bg.png';
import { useOnClickOutside } from '../../common/hooks/useOnClickOutside';

import { AuthContext } from '../../common/auth/authStateProvider/authContext';
import { removeToken } from '../../common/auth/auth.helper';

function Header() {
  const { setIsAuthenticated } = useContext(AuthContext);
  const [isPopupOpen, setIsOpenPopup] = useState(false);
  const ref = useRef<HTMLElement>(null);
  useOnClickOutside(ref, () => setIsOpenPopup(false));

  return (
    <header
      className={clsx(`header`, {
        'header header--active': isPopupOpen,
      })}
      ref={ref}
    >
      <div className="header__container">
        <Link
          to="/"
          className="header__logo"
        >
          <Logo />
        </Link>

        <button
          type="button"
          onClick={() => setIsOpenPopup(!isPopupOpen)}
          className="button"
          data-cy="header-menu"
        >
          <span
            className="header__profile"
          >
            <span className="header__profile-image-container">
              <img
                src={ProfileCircle}
                className="header__profile-image"
                alt="ProfileCircle"
                draggable={false}
              />
            </span>
            <DropArrow className="header__arrow-icon" />
          </span>

          <span className="header__menu-container">
            <span className={clsx(`header__menu-burger`, {
              "header__menu-burger--active": isPopupOpen,
            })}
            />
          </span>

        </button>
      </div>

      {isPopupOpen && (
        <button
          type="button"
          className="button header__popup-container"
          onClick={logout}
          data-cy="logout-btn"
        >
          <LogOut className="header__logout-icon" />
          <span className="header__logout-text">
            Log out
          </span>
        </button>
      )}
    </header>
  );

  function logout() {
    removeToken(import.meta.env.VITE_TOKEN_KEY);
    setIsAuthenticated(false);
  }
}

export default Header;
