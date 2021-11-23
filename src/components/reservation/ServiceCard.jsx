import React from 'react';
import "./ServiceCard.css"

const ServiceCard = (props) => {
    return (
        <div className="card">
            <img className="card__image" src="/image/image-card.jpeg" alt="" />          
            <div className="card__body">
                <h3 className="card__body__title">Título de la habitación <sub></sub></h3>
                <h4 className="card__body__subTitle">Descripción de habitación</h4>
                <p className="card__body__description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
                <p className="card__body__addres"><i className="fas fa-map-marker-alt"></i> Av. testavenida - Ciudad-Provincia-PAis</p>
                <p className="card__body__price"><i className="fas fa-dollar-sign"></i> 123124.123</p>
                <div className="card__body__footer">
                    <button className="card__body__footer__button card__body__footer__button--booking">Lista de Deseos</button>
                    <button className="card__body__footer__button">Reservar</button>
                </div>
            </div>

        </div>
    );
};

export default ServiceCard;