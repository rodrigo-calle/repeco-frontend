/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import './deleteClient.css';
import { useAppDispatch } from '../../context/store';
import userService from '../../services/user';
import { logout } from '../../context/actions';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const DeleteClient = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [err, setErr] = useState(false);
  const [info, setInfo] = useState(false);

  const deleteButtonHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await userService.deletUser();
      if (response.ok) {
        setInfo(true);
        setTimeout(() => {
          logout(dispatch);
          navigate('/');
        }, 2000);
      } else {
        setErr(true);
      }
    } catch (error) {
      setErr(true);
    }
  };
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setInfo(false);
    setErr(false);
  };
  return (
    <div className="delete-container">
      <Snackbar
        open={info}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Alert onClose={handleClose} severity="info" sx={{ width: '100%' }}>
          <strong>¡Tu cuenta ha sido eliminada!</strong>
        </Alert>
      </Snackbar>
      <Snackbar
        open={err}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          Ha ocurrido un problema, por favor intentarlo más tarde
        </Alert>
      </Snackbar>
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
