/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import './ProfileEdit.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import userService from '../../services/user';
import { getUserFromLocalStorage } from '../../context/actions';
import { useAppDispatch } from '../../context/store';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const ProfileEdit = () => {
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({});
  const [avatar, setAvatar] = useState(null);
  const [open, setOpen] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [incomplete, setIncomplete] = useState(false);
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const [dataUser, setDataUser] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    phone: '',
    document: '',
    avatar: '',
  });
  const token = localStorage.getItem('token');
  const showUser = async () => {
    try {
      const response = await userService.getUserProfile();
      if (response.ok) {
        const data = await response.json();
        setCurrentUser(data);
      }
    } catch (error) {
      setErr(true);
    }
  };

  useEffect(() => {
    setLoading(true);
    showUser();
    setLoading(false);
  }, [token]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const values = {};
    Object.entries(dataUser).forEach(([key, value]) => {
      if (value !== '') {
        values[key] = value;
      }
    });

    if (avatar) {
      const formData = new FormData();
      formData.append('file', avatar);

      const result = await axios.post(
        'https://repeco-dev-api.herokuapp.com/api/uploads/file',
        formData,
      );
      values.avatar = result.data.public_id;
    }

    try {
      const response = await userService.updateUser(values);
      if (Object.keys(values).length === 0) {
        setIncomplete(true);
      } else if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token);
        getUserFromLocalStorage(dispatch);
        setConfirm(true);
        setTimeout(() => {
          navigate('/user/account/profile');
        }, 1500);
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
    setConfirm(false);
    setIncomplete(false);
    setErr(false);
  };
  if (loading) {
    return <p className="loader">Data is loading...</p>;
  }

  return (
    <div className="profile-container">
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
        open={confirm}
        autoHideDuration={6000}
        onClose={handleClose}
        // style={{ height: '100%' }}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          !Datos actualizado!
        </Alert>
      </Snackbar>
      <Snackbar
        open={incomplete}
        autoHideDuration={6000}
        onClose={handleClose}
        // style={{ height: '100%' }}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Alert onClose={handleClose} severity="info" sx={{ width: '100%' }}>
          ¡Completar minimo un campo!
        </Alert>
      </Snackbar>
      <div className="profile-container__profile-edit">
        <p className="profile-container__profile-edit--title">
          {' '}
          Editar Perfil{' '}
        </p>{' '}
        <form
          id="profile-edit"
          onSubmit={handleSubmit}
          className="profile-container__profile-edit--form"
        >
          <div className="form-colum one-colum">
            <label
              htmlFor="email"
              className="profile-container__profile-edit--form__label"
            >
              Correo Electrónico:
              <br />
              <input
                className="profile-container__profile-edit--form__input"
                name="email"
                type="email"
                id="email"
                placeholder={currentUser.email}
                value={dataUser.email}
                onChange={handleChange}
              />
            </label>{' '}
            <br />
            <label
              className="profile-container__profile-edit--form__label"
              htmlFor="new-password"
            >
              Nueva Contraseña:
              <br />
              <input
                className="profile-container__profile-edit--form__input"
                type="password"
                name="password"
                id="new-password"
                value={dataUser.password}
                onChange={handleChange}
              />
            </label>{' '}
            <br />
            <label
              className="profile-container__profile-edit--form__label"
              htmlFor="password-confirm"
            >
              Confirmar Contraseña:
              <br />
              <input
                className="profile-container__profile-edit--form__input"
                name="passwordConfirm"
                type="password"
                id="confirm-password"
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
              />
            </label>{' '}
            <br />
            <label
              className="profile-container__profile-edit--form__label"
              htmlFor="password-confirm"
            >
              Foto de Perfil:
              <br />
              <input
                className="profile-container__profile-edit--form__input upload-avatar"
                type="file"
                name="file"
                id="file"
                accept="image/*"
                onChange={(e) => setAvatar(e.target.files[0])}
              />
            </label>{' '}
          </div>{' '}
          <div className="form-colum one-colum">
            <label
              className="profile-container__profile-edit--form__label"
              htmlFor="name"
            >
              Nombre(s):
              <br />
              <input
                className="profile-container__profile-edit--form__input"
                type="text"
                name="firstName"
                placeholder={currentUser.firstName}
                id="name"
                value={dataUser.firstName}
                onChange={handleChange}
              />
            </label>{' '}
            <br />
            <label
              className="profile-container__profile-edit--form__label"
              htmlFor="lastname"
            >
              Apellidos:
              <br />
              <input
                id="lastname"
                name="lastName"
                className="profile-container__profile-edit--form__input"
                type="text"
                value={dataUser.lastName}
                placeholder={currentUser.lastName}
                onChange={handleChange}
              />
            </label>{' '}
            <br />
            <label
              className="profile-container__profile-edit--form__label"
              htmlFor="phone"
            >
              Telefono:
              <br />
              <input
                className="profile-container__profile-edit--form__input"
                type="text"
                name="phone"
                id="phone"
                value={dataUser.phone}
                placeholder={currentUser.phone}
                onChange={handleChange}
              />
            </label>{' '}
            <br />
            <input
              className="profile-container__profile-edit--form__input-confirm"
              type="submit"
              value="Confirmar"
            />
          </div>{' '}
        </form>{' '}
      </div>{' '}
    </div>
  );
};
export default ProfileEdit;
