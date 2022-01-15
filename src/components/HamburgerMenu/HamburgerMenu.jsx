import './HamburgerMenu.css';
import { useState } from 'react';
import PropTypes from 'prop-types';

const HamburgerMenu = ({ menu }) => {
  const [isClick, setIsClick] = useState(false);

  const handlerClick = () => {
    setIsClick(!isClick);
  };

  let style = 'HamburgerMenu__menu';
  if (isClick) {
    style = 'HamburgerMenu__menu HamburgerMenu__menu--oculto';
  } else {
    style = 'HamburgerMenu__menu';
  }

  return (
    <div className="HamburgerMenu">
      <div className={style}>
        <h1>REPECO</h1>
        <ul>
          {menu.map((link) => (
            <li>
              <i className={link.icon} /> {link.title}
            </li>
          ))}
        </ul>
        <button
          type="button"
          onClick={handlerClick}
          className="HamburgerMenu__button-menu"
        >
          <i className="fas fa-bars" />
        </button>
      </div>
    </div>
  );
};

HamburgerMenu.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default HamburgerMenu;
