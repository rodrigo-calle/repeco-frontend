import React from 'react';
import { Link } from 'react-router-dom';

import './deleteClient.css';

const DeleteClient = () => {
  return (
    <div className="delete-container">
      <div className="delete-container__delete-menu">
        <p className="delete-container__delete-menu--title"> REPECO </p>
        <img
          className="delete-container__delete-menu--logo"
          src="https://icongr.am/devicon/couchdb-plain.svg?size=128&color=000000"
          alt="logo-repeco"
        />
        <p className="delete-container__delete-menu--user">Nombre y Apellido</p>
        <Link
          to="/user/account/edit"
          className="delete-container__delete-menu--btn-edit "
        >
          <img
            className="delete-container__delete-menu--btn-edit__icon-active"
            src="/image/icons/edit_inactive.png"
            alt="edit-icon"
          />
          Editar Perfil
        </Link>
        <Link
          to="/user/account/payment"
          className="delete-container__delete-menu--btn-edit "
        >
          <img
            className="delete-container__delete-menu--btn-edit__icon-inactive"
            src="/image/icons/card_inactive.png"
            alt="edit-icon"
          />
          Pagos
        </Link>
        <p className="delete-container__delete-menu--btn-edit deletes ">
          <img
            className="delete-container__delete-menu--btn-edit__icon-inactive"
            src="/image/icons/booking_inactive.png"
            alt="edit-icon"
          />
          Mis Reservas
        </p>
        <p className="delete-container__delete-menu--btn-edit delete-account activating">
          <img
            className="delete-container__delete-menu--btn-edit__icon-inactive"
            src="/image/icons/remove_user_active.png"
            alt="edit-icon"
          />
          Anular Cuenta
        </p>
      </div>
      <div className="delete-container__delete-edit">
        <p className="delete-container__delete-edit--title"> Anular Cuenta</p>
        <div className="delete-container__delete-edit--alert-container">
          <p className="delete-container__delete-edit--alert-container__message">
            Esta operación es muy peligrosa, al confirma tus datos almacenados
            en REPECO serán eliminados junto a tu cuenta.
          </p>
          <button
            className="delete-container__delete-edit--alert-container__button"
            type="button"
          >
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteClient;
