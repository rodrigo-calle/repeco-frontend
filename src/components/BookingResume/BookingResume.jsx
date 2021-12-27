import React from 'react';
import './BookingResume.css';

const BookingResume = () => {
  return (
    <>
      <div className="booking-container__resume">
        <h3 className="resume__title">RESUMEN DE LA RESERVA</h3>
        <hr />
        <div className="resume__dates-container">
          <div>
            <p className="resume__date-header">Entrada</p>
            <p className="resume__date">Ma, 14 dic 2021</p>
            <p className="resume__time">De 15:00</p>
          </div>
          <div>
            <p className="resume__date-header">Salida</p>
            <p className="resume__date">Ju, 16 dic 2021</p>
            <p className="resume__time">A 12:00</p>
          </div>
        </div>

        <div className="resume__days">
          <p className="resume__days-header">Duración total de la estancia</p>
          <p className="resume__total-days">2 noches</p>
        </div>
        <div>
          <hr />
          <p>Tu selección</p>
          <p className="resume__total-rooms">2 Habitaciones</p>
        </div>
      </div>
      <div className="booking-container__price">
        <div className="price__subtotal">
          <p>Sub Total</p>
          <p>S/ 210.00</p>
        </div>
        <div className="price__igv">
          <p>IGV(18%)</p>
          <p>S/ 37.80</p>
        </div>
        <div className="price__total">
          <p>TOTAL</p>
          <p>S/ 247.80</p>
        </div>
      </div>
    </>
  );
};

export default BookingResume;
