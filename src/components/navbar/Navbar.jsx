// eslint-disable-next-line camelcase
// import jwt_decode from 'jwt-decode';
import { BiLogOut } from 'react-icons/bi';
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getUserFromLocalStorage, logout } from '../../context/actions';
import { useAppDispatch, useAppState } from '../../context/store';

import './Navbar.css';

const Navbar = () => {
  // const token = localStorage.getItem('token');
  // const decoded = jwt_decode(token);
  // console.log(decoded);
  const { user } = useAppState();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleCloseSession = () => {
    logout(dispatch);
    navigate('/');
  };

  useEffect(() => {
    getUserFromLocalStorage(dispatch);
  }, []);

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
          {user ? (
            <div className="nav__container__menu">
              <li className="nav__container__menu__list">
                <div className="nav__container__menu__list__link">
                  {`Welcome, ${user.fullName}`}
                </div>
              </li>
              <li className="nav__container__menu__list">
                {/* <button
                  type="button"
                  className="nav__close-session"
                  onClick={handleCloseSession}
                >
                  Cerrar Sesión
                </button> */}
                <BiLogOut
                  onClick={handleCloseSession}
                  size="25px"
                  className="logout-btn"
                  title="cerrar sesión"
                />
              </li>
            </div>
          ) : (
            <div className="nav__container__menu">
              <li className="nav__container__menu__list">
                <Link to="/login" className="nav__container__menu__list__link">
                  Login
                </Link>
              </li>
              <li className="nav__container__menu__list">
                <Link to="/signup" className="nav__container__menu__list__link">
                  Registrarse
                </Link>
              </li>
            </div>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
