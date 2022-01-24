import React from 'react';
import { useNavigate } from 'react-router-dom';

import './TokenExpired.css';

const TokenExpired = () => {
  const navigate = useNavigate();
  const buttonHandle = () => {
    navigate('/');
  };
  return (
    <div className="container-expired">
      <p className="litle-message">Lo sentimos</p>
      <p className="welcome-message">TOKEN DE CONFIRMACIÓN EXPIRADO</p>
      <img
        src="/image/expired.png"
        alt="expired-token-repeco"
        className="expired-image"
      />
      <button type="button" onClick={buttonHandle}>
        Ir a Página Principal
      </button>
    </div>
  );
};

export default TokenExpired;
