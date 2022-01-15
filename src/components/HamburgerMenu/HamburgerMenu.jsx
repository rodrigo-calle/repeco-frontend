import './HamburgerMenu.css';
import { useState } from 'react';

const HamburgerMenu = () => {
  const [isClick, setIsClick] = useState(false);

  const handlerClick = () => {
    setIsClick(!isClick);
  };
  return (
    <div className="HamburgerMenu">
      {isClick ? (
        <div className="HamburgerMenu__menu HamburgerMenu__menu--oculto">
          <h1>REPECO</h1>
          <ul>
            <li className="HamburgerMenu__menu--active">
              <i className="fas fa-cube" /> Dashboard
            </li>
            <li>
              <i className="fas fa-dollar-sign" /> Finanzas
            </li>
            <li>
              <i className="fas fa-chart-pie" /> Estadísticas
            </li>
            <li>
              <i className="far fa-envelope" /> Correos
            </li>
            <li>
              <i className="fas fa-cog" /> Ajustes
            </li>
          </ul>
          <button
            type="button"
            onClick={handlerClick}
            className="HamburgerMenu__button-menu"
          >
            <i className="fas fa-bars" />
          </button>
        </div>
      ) : (
        <div className="HamburgerMenu__menu">
          <h1>REPECO</h1>
          <ul>
            <li className="HamburgerMenu__menu--active">
              <i className="fas fa-cube" /> Dashboard
            </li>
            <li>
              <i className="fas fa-dollar-sign" /> Finanzas
            </li>
            <li>
              <i className="fas fa-chart-pie" /> Estadísticas
            </li>
            <li>
              <i className="far fa-envelope" /> Correos
            </li>
            <li>
              <i className="fas fa-cog" /> Ajustes
            </li>
          </ul>
          <button
            type="button"
            onClick={handlerClick}
            className="HamburgerMenu__button-menu"
          >
            <i className="fas fa-bars" />
          </button>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
