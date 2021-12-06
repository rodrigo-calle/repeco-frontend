import React from 'react';
import './Signup.css';

const Signup = () => {
  return (
    <>
      <header>
        <img
          className="logo-repeco"
          src="https://icongr.am/devicon/couchdb-plain.svg?size=128&color=000000"
          height="80px"
          alt="logo-repeco"
        />
        <h1 className="signup-title">REGISTRO A REPECO</h1>
        <p className="line" />
      </header>
      <div className="signup-container">
        <button type="button" className="signup-container__fb-button">
          <p>
            <img
              src="https://icongr.am/entypo/facebook-with-circle.svg?size=128&color=ffffff"
              height="25px"
              alt="facebook-repeco-signup"
            />{' '}
            REGÍSTRATE CON FACEBOOK
          </p>
        </button>
        <button type="button" className="signup-container__google-button">
          <p>
            <img
              src="https://icongr.am/simple/google.svg?size=128&color=000000&colored=false"
              height="25px"
              alt="google-repeco-signup"
            />{' '}
            REGÍSTRATE CON GOOGLE
          </p>
        </button>
        <div className="signup-container__line">
          <p className="signup-container__line-first" />
          <p className="signup-container__line-letter">o</p>
          <p className="signup-container__line-second" />
        </div>
        <form action="" className="form-container">
          <label htmlFor="email">
            Correo electrónico
            <br />
            <input className="input" type="email" />
          </label>
          <br />
          <label htmlFor="password">
            Nueva Contraseña
            <br />
            <input className="input" type="password" />
          </label>
          <br />
          <label htmlFor="password">
            Repetir Contraseña
            <br />
            <input className="input" type="password" />
          </label>
          <br />
          <input
            className="form-container__submit"
            type="submit"
            value="Regístrarme"
          />
          <br />
        </form>

        <p className="signup-container__question">¿Ya tienes una cuenta?</p>
        <a href="www.google.com" className="signup-container__login">
          Iniciar Sesión
        </a>
      </div>
    </>
  );
};
export default Signup;
