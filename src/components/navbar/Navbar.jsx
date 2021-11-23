import React from 'react';
import "./Navbar.css"


const Navbar = () => {
    return (        
        <nav>                        
        <div className="nav__container">
         {/* <img src=".log" alt="">  */}
            <p className="nav__container__logo">logo</p>
            <ul className="nav__container__menu">
                <li className="nav__container__menu__list">
                    <a className="nav__container__menu__list__link" href="www.google.com">Acceder</a>
                </li>
                <li className="nav__container__menu__list">
                    <a className="nav__container__menu__list__link" href="www.google.com">Registrarse</a>
                </li>
            </ul>
        </div>
    </nav>           
    );
};

export default Navbar;



