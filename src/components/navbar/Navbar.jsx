import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useUserContext } from '../context/Users/UserProvider';

const Navbar = () => {
  const { completeName } = useUserContext();

  return (
    <nav>
      <div className="nav__container">
        <Link to="/">
          <img
            src="https://st2.depositphotos.com/3096625/8799/v/600/depositphotos_87990570-stock-illustration-letter-r-logo-monogram.jpg"
            alt=""
            className="nav__container__logo"
          />
        </Link>
        <ul className="nav__container__menu">
          <li className="nav__container__menu__list">
            <Link to="/login" className="nav__container__menu__list__link">
              {completeName}
            </Link>
          </li>
          {completeName === 'Login' ? (
            <li className="nav__container__menu__list">
              <Link to="/signup" className="nav__container__menu__list__link">
                Registrarse
              </Link>
            </li>
          ) : (
            ''
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
