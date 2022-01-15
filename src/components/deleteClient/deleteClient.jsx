import React from 'react';
import { useNavigate } from 'react-router-dom';

import './deleteClient.css';
import { useAppDispatch } from '../../context/store';
import userService from '../../services/user';
import { logout } from '../../context/actions';
import MenuProfile from '../menuProfile/MenuProfile';

const DeleteClient = () => {
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
      <MenuProfile />
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
