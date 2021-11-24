import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <footer>
        <div className="footer__items">
            <div className="footer__items__container">
                <div className="footer__items__container__col">
                    <h3 className="footer__items__container__col__title">Asistencia</h3>
                    <ul className="footer__items__container__col__menu">
                        <li className="footer__items__container__col__menu__lista">
                            <a className="footer__items__container__col__menu__lista__link" href="www.google.com">Centro de Ayuda</a>
                        </li>
                        <li className="footer__items__container__col__menu__lista">
                            <a className="footer__items__container__col__menu__lista__link" href="www.google.com">Información de seguridad</a>
                        </li>
                        <li className="footer__items__container__col__menu__lista">
                            <a className="footer__items__container__col__menu__lista__link" href="www.google.com">Opciones de cancelación</a>
                        </li>
                        <li className="footer__items__container__col__menu__lista">
                            <a className="footer__items__container__col__menu__lista__link" href="www.google.com">Nuestra respuesta ante el COVID-19</a>
                        </li>
                        <li className="footer__items__container__col__menu__lista">
                            <a className="footer__items__container__col__menu__lista__link" href="www.google.com">Accesibilidad para todos</a>
                        </li>
                        <li className="footer__items__container__col__menu__lista">
                            <a className="footer__items__container__col__menu__lista__link" href="www.google.com">¿Problemas en tu localidad?</a>
                        </li>
                    </ul>
                </div>
                <div className="footer__items__container__col">
                    <h3 className="footer__items__container__col__title">Modo hoster</h3>
                    <ul className="footer__items__container__col__menu">
                        <li className="footer__items__container__col__menu__lista">
                            <a className="footer__items__container__col__menu__lista__link" href="www.google.com">Anímate a compartir tu espacio</a>
                        </li>
                        <li className="footer__items__container__col__menu__lista">
                            <a className="footer__items__container__col__menu__lista__link" href="www.google.com">protección para los hosters</a>
                        </li>
                        <li className="footer__items__container__col__menu__lista">
                            <a className="footer__items__container__col__menu__lista__link" href="www.google.com">Recursos para hosters</a>
                        </li>
                        <li className="footer__items__container__col__menu__lista">
                            <a className="footer__items__container__col__menu__lista__link" href="www.google.com">Visita el foro de la comunidad</a>
                        </li>
                        <li className="footer__items__container__col__menu__lista">
                            <a className="footer__items__container__col__menu__lista__link" href="www.google.com">Cómo brindar servicios de hoster de forma responsable</a>
                        </li>
                    </ul>
                </div>
                <div className="footer__items__container__col">
                    <h3 className="footer__items__container__col__title">Acerca de</h3>
                    <ul className="footer__items__container__col__menu">
                        <li className="footer__items__container__col__menu__lista">
                            <a className="footer__items__container__col__menu__lista__link" href="www.google.com">Sala de prensa</a>
                        </li>
                        <li className="footer__items__container__col__menu__lista">
                            <a className="footer__items__container__col__menu__lista__link" href="www.google.com">Más información sobre las nuevas funciones</a>
                        </li>
                        <li className="footer__items__container__col__menu__lista">
                            <a className="footer__items__container__col__menu__lista__link" href="www.google.com">Carta de nuestros fundadores</a>
                        </li>
                        <li className="footer__items__container__col__menu__lista">
                            <a className="footer__items__container__col__menu__lista__link" href="www.google.com">Carreras</a>
                        </li>
                        <li className="footer__items__container__col__menu__lista">
                            <a className="footer__items__container__col__menu__lista__link" href="www.google.com">Inversionistas</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="footer__redes">
            <i className="fab fa-facebook-square"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-youtube-square"></i>
        </div>
    </footer>
        </div>
    );
};

export default Footer;

