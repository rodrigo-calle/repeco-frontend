// eslint-disable-next-line camelcase
import React, { useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
// import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage } from '@cloudinary/react';
import { Link, useNavigate } from 'react-router-dom';
import { getUserFromLocalStorage, logout } from '../../context/actions';
import { useAppDispatch, useAppState } from '../../context/store';
// import userService from '../../services/user';

import './Navbar.css';

const Navbar = () => {
  const { user } = useAppState();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleCloseSession = () => {
    logout(dispatch);
    navigate('/');
  };
  // const [client, setClient] = useState({});
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  useEffect(() => {
    getUserFromLocalStorage(dispatch);
  }, []);

  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dwat1o60y',
    },
  });
  const myAvatar = cld.image(user?.avatar);
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
                  {`${user.fullName}`}
                </div>
              </li>
              <li className="nav__container__menu__list">
                <IconButton
                  size="small"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AdvancedImage
                    className="user-avatar-btn"
                    cldImg={myAvatar}
                  />{' '}
                  {/* <AccountCircle /> */}
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  style={{ marginTop: '10px' }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={() => navigate('/user/account/profile')}>
                    Mi Perfil
                  </MenuItem>
                  {/* <MenuItem onClick={() => navigate('/user/account/edit')}>
                    Editar Perfil
                  </MenuItem> */}
                  <MenuItem onClick={handleCloseSession}>
                    {' '}
                    Cerrar Sesión
                  </MenuItem>
                </Menu>
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
