import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import userService from '../../services/user';
import { useAppDispatch } from '../../context/store';
import { getUserFromLocalStorage } from '../../context/actions';

import './VerifyAccount.css';

const VerifyAccount = () => {
  const dispatch = useAppDispatch();
  const { hash } = useParams();
  const navigate = useNavigate();

  useEffect(async () => {
    const verify = async () => {
      try {
        const response = await userService.confirmAccount(hash);
        if (response.ok) {
          const data = await response.json();
          // console.log('dataaa', data);
          localStorage.setItem('token', data.token);
          // const decoded = jwt_decode(data.token);
          getUserFromLocalStorage(dispatch);
          // dispatch({ type: GET_USER_FROM_LOCALSTORAGE, payload: decoded });
          // console.log('cuenta verificada');
        }
        if (response.ok !== true) {
          await navigate('/user/token-expired');
          // console.log('cuenta no verificada');
          // mandar a página 404
        }
      } catch (err) {
        console.log(err.message);
      }
    };

    // obtener token de userParams
    // llamar a la api para verificar el token
    // si el token es valido
    // setear el estado de la app a true
    // si el token es invalido
    verify();
  }, []);
  const buttonHandle = () => {
    navigate('/');

    // const token = localStorage.getItem('token');
    // if (token) {
    // const decoded = jwt_decode(token);
    // dispatch({ type: GET_USER_FROM_LOCALSTORAGE, payload: decoded });
    // }
  };
  return (
    <div className="container-verification">
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
