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
                            <a className="footer__items__container__col__menu__lista__link" href="">Centro de Ayuda</a>
                        </li>
                        <li className="footer__items__container__col__menu__lista">
                            <a className="footer__items__container__col__menu__lista__link" href="">Información de seguridad</a>
                        </li>
                        <li className="footer__items__container__col__menu__lista">
                            <a className="footer__items__container__col__menu__lista__link" href="">Opciones de cancelación</a>
                        </li>
                        <li className="footer__items__container__col__menu__lista">
                            <a className="footer__items__container__col__menu__lista__link" href="">Nuestra respuesta ante el COVID-19</a>
                        </li>
                        <li className="footer__items__container__col__menu__lista">
                            <a className="footer__items__container__col__menu__lista__link" href="">Accesibilidad para todos</a>
                        </li>
                        <li className="footer__items__container__col__menu__lista">
                            <a className="footer__items__container__col__menu__lista__link" href="">¿Problemas en tu localidad?</a>
                        </li>
                    </ul>
                </div>
                <div className="footer__items__container__col">
                    <h3 className="footer__items__container__col__title">Modo hoster</h3>
                    <ul className="footer__items__container__col__menu">
                        <li className="footer__items__container__col__menu__lista">
                            <a className="footer__items__container__col__menu__lista__link" href="">Anímate a compartir tu espacio</a>
                        </li>
                        <li className="footer__items__container__col__menu__lista">
                            <a className="footer__items__container__col__menu__lista__link" href="">protección para los hosters</a>
                        </li>
                        <li className="footer__items__container__col__menu__lista">
                            <a className="footer__items__container__col__menu__lista__link" href="">Recursos para hosters</a>
                        </li>
                        <li className="footer__items__container__col__menu__lista">
                            <a className="footer__items__container__col__menu__lista__link" href="">Visita el foro de la comunidad</a>
                        </li>
                        <li className="footer__items__container__col__menu__lista">
                            <a className="footer__items__container__col__menu__lista__link" href="">Cómo brindar servicios de hoster de forma responsable</a>
                        </li>
                    </ul>
                </div>
                <div className="footer__items__container__col">
                    <h3 className="footer__items__container__col__title">Acerca de</h3>
                    <ul className="footer__items__container__col__menu">
                        <li className="footer__items__container__col__menu__lista">
                            <a className="footer__items__container__col__menu__lista__link" href="">Sala de prensa</a>
                        </li>
                        <li className="footer__items__container__col__menu__lista">
                            <a className="footer__items__container__col__menu__lista__link" href="">Más información sobre las nuevas funciones</a>
                        </li>
                        <li className="footer__items__container__col__menu__lista">
                            <a className="footer__items__container__col__menu__lista__link" href="">Carta de nuestros fundadores</a>
                        </li>
                        <li className="footer__items__container__col__menu__lista">
                            <a className="footer__items__container__col__menu__lista__link" href="">Carreras</a>
                        </li>
                        <li className="footer__items__container__col__menu__lista">
                            <a className="footer__items__container__col__menu__lista__link" href="">Inversionistas</a>
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