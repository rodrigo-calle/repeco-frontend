import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './deleteClient.css';
import { useAppState, useAppDispatch } from '../../context/store';
import userService from '../../services/user';
import { logout } from '../../context/actions';

const DeleteClient = () => {
  const { user } = useAppState();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const deleteButtonHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await userService.deletUser();
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        alert('Tu usuario ha sido eliminado');
        logout(dispatch);
        navigate('/');
      } else {
        console.log('error');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="delete-container">
      <div className="delete-container__delete-menu">
        <p className="delete-container__delete-menu--title"> REPECO </p>
        <img
          className="delete-container__delete-menu--logo"
          src="https://icongr.am/devicon/couchdb-plain.svg?size=128&color=000000"
          alt="logo-repeco"
        />
        {user ? (
          <p className="profile-container__profile-menu--user">
            {user.fullName}
          </p>
        ) : (
          <p className="profile-container__profile-menu--user">
            Nombre Completo
          </p>
        )}
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
        <Link
          to="/user/account/booking-history"
          className="delete-container__delete-menu--btn-edit deletes "
        >
          <img
            className="delete-container__delete-menu--btn-edit__icon-inactive"
            src="/image/icons/booking_inactive.png"
            alt="edit-icon"
          />
          Mis Reservas
        </Link>
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
            onClick={deleteButtonHandler}
          >
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteClient;
