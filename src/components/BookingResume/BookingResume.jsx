import React from 'react';
import "./BookingResume.css"


const BookingResume = () => {
    return (
        <div className="booking-container__resume">
            <h3 className="resume__title">RESUMEN DE LA RESERVA</h3> 
            <hr />               
            <div className="resume__subtotal">
                <p>SubTotal (1)</p>
                <p className="resume__price">$7999.00</p>
            </div>
            <hr />
            <div className="resume__igv">
                <p>IGV</p>
                <p className="resume__price">$1439.82</p>
            </div>
            <hr />
            <div className="resume__total">
                <p>TOTAL</p>
                <p className="resume__price">$9438.82</p>
            </div>
            <hr />
            <div className="resume_button-container">
                <button className="resume__button">
                    Procesar Reserva
                </button>
            </div>
            <hr />
            <div className="services">
                <div className="services__description">
                    <i className="fa fa-paw"></i>
                    <p className="services__text">Protección al Cliente</p>
                </div>                    
                <div className="services__description">
                    <i className="fa fa-paw"></i>
                    <p className="services__text">Asesoría telefónica: (01) 640 2041</p>
                </div>
            </div>
        </div>
    )
}

export default BookingResume