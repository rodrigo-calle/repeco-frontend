import React from 'react';
import { Link } from 'react-router-dom';

import './BookingHistory.css';

const BookingHistory = () => {
  return (
    <div className="booking-container">
      <div className="booking-container__booking-menu">
        <p className="booking-container__booking-menu--title"> REPECO </p>
        <img
          className="booking-container__booking-menu--logo"
          src="https://icongr.am/devicon/couchdb-plain.svg?size=128&color=000000"
          alt="logo-repeco"
        />
        <p className="booking-container__booking-menu--user">
          Nombre y Apellido
        </p>
        <Link
          to="/user/account/edit"
          className="booking-container__booking-menu--btn-edit "
        >
          <img
            className="booking-container__booking-menu--btn-edit__icon-active"
            src="/image/icons/edit_inactive.png"
            alt="edit-icon"
          />
          Editar Perfil
        </Link>
        <Link
          to="/user/account/payment"
          className="booking-container__booking-menu--btn-edit "
        >
          <img
            className="booking-container__booking-menu--btn-edit__icon-inactive"
            src="/image/icons/card_inactive.png"
            alt="edit-icon"
          />
          Pagos
        </Link>
        <p className="booking-container__booking-menu--btn-edit bookings activating">
          <img
            className="booking-container__booking-menu--btn-edit__icon-inactive"
            src="/image/icons/book_active.png"
            alt="edit-icon"
          />
          Mis Reservas
        </p>
        <p className="booking-container__booking-menu--btn-edit delete-account">
          <img
            className="booking-container__booking-menu--btn-edit__icon-inactive"
            src="/image/icons/remove_user_inactive.png"
            alt="edit-icon"
          />
          Anular Cuenta
        </p>
      </div>
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
