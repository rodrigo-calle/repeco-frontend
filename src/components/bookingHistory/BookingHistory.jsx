import React from 'react';
import MenuProfile from '../menuProfile/MenuProfile';

import './BookingHistory.css';

const BookingHistory = () => {
  return (
    <div className="booking-container">
      <MenuProfile />
      <div className="booking-container__booking-edit">
        <p className="booking-container__booking-edit--title"> Mis Reservas</p>
        <div className="booking-container__booking-edit--card-container">
          <div className="booking-container__booking-edit--card-container__title">
            Filtrar por:
          </div>
          <div className="booking-container__booking-edit--card-container__date-filter">
            <div className="booking-container__booking-edit--card-container__date-filter--start">
              <p className="filter-start__title">Fecha de Incio</p>
              <input className="filter-start__date-input" type="date" />
            </div>
            <div className="booking-container__booking-edit--card-container__date-filter--end">
              <p className="filter-end__title">Fecha fin:</p>
              <input className="filter-end__date-input" type="date" />
            </div>
          </div>
        </div>
        <div className="booking-container__booking-edit__history">
          <table className="booking-container__booking-edit--table">
            <thead>
              <tr className="table-header">
                <th> N° </th> <th> Descripción </th> <th>Fecha</th>
                <th> Costo </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td> #0001 </td> <td> Resumen de la reserva </td>
                <td> 04/08/20 - 12:34 AM </td> <td> S/. 1200.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BookingHistory;
