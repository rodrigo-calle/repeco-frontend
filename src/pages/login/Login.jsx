import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../context/store';
import { loginUser } from '../../context/actions';

import './Login.css';

const Login = () => {
  const dispatch = useAppDispatch();
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    loginUser(dispatch, user);
    navigate('/');
  };

  return (
    <div>
      <header>
        <img
          className="logo-repeco"
          src="https://icongr.am/devicon/couchdb-plain.svg?size=128&color=000000"
          height="80px"
          alt="logo-repeco"
        />
        <h1 className="login-title">ACCESO A REPECO</h1>
        <p className="line" />
      </header>

      <div className="login-container">
        {/*  */}
        <button type="button" className="login-container__fb-button">
          <p>
            <img
              src="https://icongr.am/entypo/facebook-with-circle.svg?size=128&color=ffffff"
              height="22px"
              alt="facebook-repeco-login"
            />{' '}
            CONTINUAR CON FACEBOOK
          </p>
        </button>
        <button type="button" className="login-container__google-button">
          <p>
            <img
              src="https://icongr.am/simple/google.svg?size=128&color=000000&colored=false"
              height="20px"
              alt="google-repeco-login"
            />{' '}
            CONTINUAR CON GOOGLE
          </p>
        </button>
        <div className="login-container__line">
          <p className="login-container__line-first" />
          <p className="login-container__line-letter">o</p>
          <p className="login-container__line-second" />
        </div>
        <form onSubmit={handleLoginSubmit} className="form-container">
          {/* {errorMessage ? (
            <span className="login-container__flash-message">
              {errorMessage}
            </span>
          ) : (
            ''
          )} */}
          <br />
          <label htmlFor="email">
            Correo electrónico
            <input
              id="email"
              className="input"
              type="email"
              name="email"
              placeholder="Ingrese email"
              value={user.email}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label htmlFor="password">
            Contraseña
            <br />
            <input
              id="password"
              className="input"
              type="password"
              name="password"
              placeholder="Ingrese contraseña"
              value={user.password}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <input
            className="form-container__submit"
            type="submit"
            value="Iniciar Sesión"
          />
          <br />
        </form>
        <p className="login-container__question input">
          ¿No tienes una cuenta?
        </p>
        <a href="www.google.com" className="login-container__create-account">
          Crear una cuenta
        </a>
      </div>
    </div>
  );
};

export default Login;
