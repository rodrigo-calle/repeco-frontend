/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import userService from '../../services/user';
import { useAppDispatch } from '../../context/store';
import { getUserFromLocalStorage } from '../../context/actions';

import './VerifyAccount.css';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const VerifyAccount = () => {
  const dispatch = useAppDispatch();
  const { hash } = useParams();
  const navigate = useNavigate();
  const [err, setErr] = useState(false);

  useEffect(async () => {
    const verify = async () => {
      try {
        const response = await userService.confirmAccount(hash);
        if (response.ok) {
          const data = await response.json();
          localStorage.setItem('token', data.token);
          getUserFromLocalStorage(dispatch);
        }
        if (response.ok !== true) {
          await navigate('/user/token-expired');
        }
      } catch (error) {
        setErr(false);
      }
    };

    verify();
  }, []);

  const buttonHandle = () => {
    navigate('/');
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setErr(false);
  };
  return (
    <div className="container-verification">
      <Snackbar
        open={err}
        autoHideDuration={6000}
        onClose={handleClose}
        // style={{ height: '100%' }}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          Ha ocurrido un error, por favor intentelo más tarde
        </Alert>
      </Snackbar>
      <p className="litle-message">¡Email Confirmado!</p>
      <p className="welcome-message">¡BIENVENIDO A REPECO!</p>
      <img
        src="/image/welcome-repeco.png"
        alt="welcome-repeco"
        className="verification-image"
      />
      <button type="button" onClick={buttonHandle}>
        Ir a Página Principal
      </button>
    </div>
  );
};

export default VerifyAccount;
