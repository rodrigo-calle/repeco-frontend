import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import getAllUsers from './dataUsers';
import './Login.css';

import { useUserContext } from '../context/Users/UserProvider';

const Login = () => {
  const users = getAllUsers();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [values, setValues] = useState('');

  const { setCompleteName } = useUserContext();

  const navigate = useNavigate();

  const failInputMessage = () => {
    setValues('Correo y/o contraseña incorrecta');
  };

  // eslint-disable-next-line consistent-return
  const validateLogin = (em, pass) => {
    const validation = users.find(
      (user) => user.email === em && user.password === pass,
    );

    if (validation) {
      setCompleteName(`${validation.name} ${validation.lastname}`);
      // console.log(`${validation.name} ${validation.lastname}`)
      return true;
    }
    failInputMessage();
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    if (validateLogin(email, password)) {
      navigate('/');
    }
    // eslint-disable-next-line array-callback-return
    setEmail('');
    setPassword('');
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
        <form action="" onSubmit={handleLoginSubmit} className="form-container">
          <span className="login-container__flash-message">{values}</span>{' '}
          <br />
          <label htmlFor="email">
            Correo electrónico
            <input
              className="input"
              onChange={(event) => setEmail(event.target.value)}
              type="email"
              placeholder="Ingrese email"
              id="email"
              value={email}
            />
          </label>
          <br />
          <label htmlFor="password">
            Contraseña
            <br />
            <input
              className="input"
              type="password"
              onChange={(event) => setPassword(event.target.value)}
              value={password}
              id="password"
              placeholder="Ingrese contraseña"
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
