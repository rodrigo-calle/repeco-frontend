/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import userService from '../../services/user';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Signup = () => {
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [open, setOpen] = useState(false);
  const [err, setErr] = useState(false);
  const [dataUser, setDataUser] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePassCOnfirm = (e) => {
    const confirmPass = e.target.value;
    setPasswordConfirm(confirmPass);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (passwordConfirm === dataUser.password) {
        const response = await userService.createUser(dataUser);
        if (response.ok) {
          navigate('/user/activate/message');
        }
      } else {
        setOpen(true);
      }
    } catch (error) {
      setErr(true);
    }
  };
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  useEffect(() => {
    const getUser = async () => {
      const res = await userService.getUserProfile();
      // const data = await res.json();
      if (!res) {
        navigate('/');
      }
    };
    getUser();
  });
  return (
    <>
      <header>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          // style={{ height: '100%' }}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
            ¡Contraseñas no coinciden!
          </Alert>
        </Snackbar>
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
            Ha ocurrido un error por favor intentarlo más tarde
          </Alert>
        </Snackbar>
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
        <form onSubmit={handleSubmit} className="form-container">
          <label htmlFor="email">
            Correo electrónico
            <br />
            <input
              className="input"
              type="email"
              value={dataUser.email}
              name="email"
              onChange={handleChange}
            />
          </label>
          <br />
          <label htmlFor="password">
            Nueva Contraseña
            <br />
            <input
              className="input"
              type="password"
              name="password"
              value={dataUser.password}
              onChange={handleChange}
            />
          </label>
          <br />
          <label htmlFor="password">
            Repetir Contraseña
            <br />
            <input
              className="input"
              type="password"
              name="passwordConfirm"
              value={passwordConfirm}
              onChange={handlePassCOnfirm}
            />
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
