import React, {useState} from "react";
import { useNavigate  } from 'react-router-dom';


import "./Login.css";
const users = [
  {
      id: Math.random,
      email: "user1@gmail.com",
      password: "123456!"
  },
  {
      id: Math.random,
      email: "user2@gmail.com",
      password: "1234567!"
  }
]
const Login = () => {
  const [ email, setEmail] = useState("")
  const [ password, setPassword] = useState("")
  const [ values, setValues] = useState("")

  //for redirect another component...
  const navigate = useNavigate ()

  //function for error message in the form

  const message = () => {
    setValues("Correo y/o contraseña incorrecta")    
  }


  const validateLogin = (em, pass) => {
    return users.find(user => user.email === em  && user.password === pass)? true : message();
  }


  const handleLoginSubmit = (e) =>{
    e.preventDefault();    
   
    if (validateLogin(email, password)) {
      setTimeout(() => {
        navigate("/") 
      }, 2000); 
    } else {
      console.log(false)
    } 
    // eslint-disable-next-line array-callback-return
    setEmail("")
    setPassword("")
  }
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
        <form action="" onSubmit={ handleLoginSubmit } className="form-container">
        <span className="login-container__flash-message" >{ values }</span> <br />
          <label for="email">Correo electrónico</label>
          <br />
          <input className="input"
          onChange={
            (event)=> setEmail(event.target.value)
          }      
          type="email"
          placeholder="Ingrese email"
          value={email}
          />          
          <br />
        
          <label for="password">Contraseña</label>
          <br />
          <input className="input"
          type="password"
          onChange={
             (event)=> setPassword(event.target.value)
          }
          value={password}
          placeholder="Ingrese contraseña"
          />
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
          <a href="www.google.com" className="login-container__create-account">
            Crear una cuenta
          </a>
        </>
      </div>
    </body>
  );
};
export default Login;
