import { useState } from 'react';
import { ReactComponent as Logo } from '../../assets/icons/icon-logo.svg';
import { ReactComponent as DropArrow } from '../../assets/icons/icon-arrow-down.svg';
import { ReactComponent as LogOut } from '../../assets/icons/icon-logout.svg';
import ProfileCircle from '../../assets/images/profile-bg.png';
import Button from '../Button/Button';

function Header() {
  const [openPopup, setOpenPopup] = useState(false);
  return (
    <div className="header">
      <Logo />
      <Button
        type="button"
        onClick={() => setOpenPopup(!openPopup)}
        className="button header__profile"
      >
        <div className="header__profile-image-container">
          <img
            src={ProfileCircle}
            className="header__profile-image"
            alt="ProfileCircle"
            draggable={false}
          />
        </div>
        <div className="header__arrow-icon-container">
          <DropArrow />
        </div>

      </Button>
      {openPopup && (
        <div className="header__popup">
          <Button
            type="button"
            className="button header__popup-container"
          >
            <div className="header__logout-icon-container">
              <LogOut />
            </div>
            <span className="header__logout-text">
              Log out
            </span>
          </Button>

        </div>
      )}
    </div>
  );
}

export default Header;
