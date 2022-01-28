import { Link } from 'react-router-dom';
import './HamburgerMenu.css';
import { useState } from 'react';
import PropTypes from 'prop-types';

const HamburgerMenu = ({ menu }) => {
  const [isClick, setIsClick] = useState(false);

  const handlerClick = () => {
    setIsClick(!isClick);
  };

  let style = 'HamburgerMenu';
  if (isClick) {
    style = 'HamburgerMenu HamburgerMenu--oculto';
  } else {
    style = 'HamburgerMenu';
  }

  return (
    <div className={style}>
      <h1>REPECO</h1>
      <ul>
        {menu?.map((link) => (
          <li className="HamburgerMenu__link" key={link.title}>
            <i className={link.icon} />
            <Link to={link.url}>{link.title}</Link>
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
  );
};

HamburgerMenu.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default HamburgerMenu;
