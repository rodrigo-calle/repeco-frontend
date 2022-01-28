import React, { useState, useEffect } from 'react';
import './ProfileEdit.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import userService from '../../services/user';

const ProfileEdit = () => {
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [message, setMessage] = useState(false);
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({});
  const [avatar, setAvatar] = useState(null);
  // const [file, setFile] = useState(null);
  const [dataUser, setDataUser] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    phone: '',
    document: '',
    avatar: '',
  });

  useEffect(() => {
    const showUser = async () => {
      try {
        const response = await userService.getUserProfile();
        if (response.ok) {
          const data = await response.json();
          setCurrentUser(data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    showUser();
    // console.log(currentUser);
  }, avatar);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataUser((prev) => ({
      ...prev,
      [name]: value,
    }));
    // console.log(dataUser);
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
        'http://localhost:8080/api/uploads/file',
        formData,
      );
      values.avatar = result.data.public_id;
    }

    try {
      const response = await userService.updateUser(values);
      if (response.ok) {
        setTimeout(() => {
          navigate('/user/account/profile');
        }, 1500);

        setMessage(true);
      } else {
        console.log('error');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="profile-container">
      {message ? (
        <div role="alertdialog" style={{ backgroundColor: '#93ff33' }}>
          Datos de usuario actualizado
        </div>
      ) : null}
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
                value={passwordConfirm}
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
              Typo de documento:
              <br />
              <select form="profile-edit" className="document-select">
                <option defaultValue nselectable="true">
                  Seleccionar una opción
                </option>
                <option value="estrangeria">Carnet de estragería</option>
                <option value="dni"> DNI</option>
              </select>
            </label>{' '}
            <br />
            <label
              className="profile-container__profile-edit--form__label"
              htmlFor="document"
            >
              Documento de Identidad:
              <br />
              <input
                className="profile-container__profile-edit--form__input"
                type="text"
                name="document"
                id="document"
                value={dataUser.document}
                placeholder={currentUser.document}
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
