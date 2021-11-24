import React from "react";
import './BookingCard.css'

const BookingCard = () => {
    return (
        <>
            <div>
                <hr />
                <div className="bookingCard">
                    <img src="https://definicion.de/wp-content/uploads/2019/12/habitacion.jpg" alt="" className="bookingCard__image" />
                    <div className="bookingCard__description">
                        <p className="bookingCard__type">Hostal</p>
                        <h3 className="bookingCard__title">Habitación D-luxe</h3>
                        <p className="bookingCard__address">Av. Piura 262, Máncora, Perú</p>
                        <p className="bookingCard__recomendation">Esta propiedad tiene una buena ubicación. ¡Las personas le dieron un puntaje de 9,1!</p>
                        <div className="bookingCard__footer">
                            <div className="tag__item">
                                <i className="fa fa-envelope"></i>
                                <p className="tag__text">Estacionamiento</p>
                            </div>
                            <div className="tag__item">
                                <i className="fa fa-paw"></i>
                                <p className="tag__text">Cuenta con restaurante en establecimiento</p>
                            </div>
                            <div className="tag__item">
                                <i className="fa fa-paw"></i>
                                <p className="tag__text">Permite mascotas</p>
                            </div>
                        </div>
                        <div className="bookingCard__button-container">
                            <button className="bookingCard__button"><i className="fa fa-trash"></i> Eliminar</button>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="bookingCard">
                    <img src="https://definicion.de/wp-content/uploads/2019/12/habitacion.jpg" alt="" className="bookingCard__image" />
                    <div className="bookingCard__description">
                        <p className="bookingCard__type">Hostal</p>
                        <h3 className="bookingCard__title">Habitación D-luxe</h3>
                        <p className="bookingCard__address">Av. Piura 262, Máncora, Perú</p>
                        <p className="bookingCard__recomendation">Esta propiedad tiene una buena ubicación. ¡Las personas le dieron un puntaje de 9,1!</p>
                        <div className="bookingCard__footer">
                            <div className="tag__item">
                                <i className="fa fa-envelope"></i>
                                <p className="tag__text">Estacionamiento</p>
                            </div>
                            <div className="tag__item">
                                <i className="fa fa-paw"></i>
                                <p className="tag__text">Cuenta con restaurante en establecimiento</p>
                            </div>
                            <div className="tag__item">
                                <i className="fa fa-paw"></i>
                                <p className="tag__text">Permite mascotas</p>
                            </div>
                        </div>
                        <div className="bookingCard__button-container">
                            <button className="bookingCard__button"><i className="fa fa-trash"></i> Eliminar</button>
                        </div>
                    </div>
                </div>
                <hr />
            </div>
        </>
    )
}

export default BookingCard;