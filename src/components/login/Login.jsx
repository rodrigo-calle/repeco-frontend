import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <body>
      <header>
        <img
          className="logo-repeco"
          src="https://icongr.am/devicon/couchdb-plain.svg?size=128&color=000000"
          height="80px"
          alt="logo-repeco"
        />
        <h1 className="login-title">ACCESO A REPECO</h1>
        <p className="line"></p>
      </header>

      <div className="login-container">
        <button className="login-container__fb-button">
          <p>
            <img
              src="https://icongr.am/entypo/facebook-with-circle.svg?size=128&color=ffffff"
              height="22px"
              alt="facebook-repeco-login"
            ></img>{" "}
            CONTINUAR CON FACEBOOK
          </p>
        </button>
        <button className="login-container__google-button">
          <p>
            <img
              src="https://icongr.am/simple/google.svg?size=128&color=000000&colored=false"
              height="20px"
              alt="google-repeco-login"
            ></img>{" "}
            CONTINUAR CON GOOGLE
          </p>
        </button>
        <div className="login-container__line">
          <p className="login-container__line-first"></p>
          <p className="login-container__line-letter">o</p>
          <p className="login-container__line-second"></p>
        </div>
        <form action="" className="form-container">
          <label for="email">Correo electrónico</label>
          <br />
          <input className="input" type="email" />
          <br />
          <label for="password">Contraseña</label>
          <br />
          <input className="input" type="password" />
          <br />
          <input
            className="form-container__submit"
            type="submit"
            value="Iniciar Sesión"
          />
          <br></br>
        </form>
        <>
          <p className="login-container__question input">
            ¿No tienes una cuenta?
          </p>
          <a href="" className="login-container__create-account">
            Crear una cuenta
          </a>
        </>
      </div>
    </body>
  );
};

export default Login;
