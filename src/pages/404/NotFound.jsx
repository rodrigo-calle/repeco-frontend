import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  const navigate = useNavigate();
  const handleButton = () => {
    navigate('/');
  };

  return (
    <div className="notFound-container">
      <div className="description-404">
        <div>
          <p className="title-not-found">Oops!</p>
          <p className="subtitle-notFound">Error 404 - Página No Encontrada</p>
          <p className="description-notFound">
            La página que estas buscando, no ha sido encontrada o no existe
          </p>
          <button onClick={handleButton} type="button">
            Ir a página principal
          </button>
        </div>
      </div>
      <div className="image-404">
        <img src="/image/404.png" alt="notFound" />
      </div>
    </div>
  );
};

export default NotFound;
