import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './ProfileEdit.css';
// import axios from 'axios';
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage } from '@cloudinary/react';

import { useAppState } from '../../context/store';
import userService from '../../services/user';

const ProfileEdit = () => {
  const { user } = useAppState();
  const [passwordConfirm, setPasswordConfirm] = useState('');
  // const [file, setFile] = useState(null);
  const [dataUser, setDataUser] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    phone: '',
    document: '',
  });

  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dwat1o60y',
    },
  });
  const myAvatar = cld.image('m2jxrpwok0hd4yqmpkc3');

  useEffect(async () => {
    const res = await userService.getUserProfile();
    console.log(res.json());
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataUser((prev) => ({
      ...prev,
      [name]: value,
    }));
    // console.log(dataUser);
  };

  // const onChangeAvatar = (e) => {
  //   setFile(e.target.files[0]);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const values = {};
    Object.entries(dataUser).forEach(([key, value]) => {
      if (value !== '') {
        values[key] = value;
      }
    });

    try {
      const response = await userService.updateUser(values);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
      } else {
        console.log('error');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-container__profile-menu">
        <p className="profile-container__profile-menu--title"> REPECO </p>{' '}
        <AdvancedImage
          className="profile-container__profile-menu--logo"
          cldImg={myAvatar}
        />
        {/* <img
          className="profile-container__profile-menu--logo"
          src="https://icongr.am/devicon/couchdb-plain.svg?size=128&color=000000"
          alt="logo-repeco"
        /> */}
        {user ? (
          <p className="profile-container__profile-menu--user">
            {user.fullName}
          </p>
        ) : (
          <p className="profile-container__profile-menu--user">
            Nombre Completo
          </p>
        )}
        <p className="profile-container__profile-menu--btn-edit editing">
          <img
            className="profile-container__profile-menu--btn-edit__icon-active"
            src="/image/icons/edit_active.png"
            alt="edit-icon"
          />
          Editar Perfil{' '}
        </p>{' '}
        <Link
          to="/user/account/payment"
          className="profile-container__profile-menu--btn-edit payment"
        >
          <img
            className="profile-container__profile-menu--btn-edit__icon-inactive"
            src="/image/icons/card_inactive.png"
            alt="edit-icon"
          />
          Pagos{' '}
        </Link>{' '}
        <Link
          to="/user/account/booking-history"
          className="profile-container__profile-menu--btn-edit bookings"
        >
          <img
            className="profile-container__profile-menu--btn-edit__icon-inactive"
            src="/image/icons/booking_inactive.png"
            alt="edit-icon"
          />
          Mis Reservas{' '}
        </Link>{' '}
        <Link
          to="/user/account/delete"
          className="profile-container__profile-menu--btn-edit delete-account"
        >
          <img
            className="profile-container__profile-menu--btn-edit__icon-inactive"
            src="/image/icons/remove_user_inactive.png"
            alt="edit-icon"
          />
          Anular Cuenta{' '}
        </Link>{' '}
      </div>{' '}
      <div className="profile-container__profile-edit">
        <p className="profile-container__profile-edit--title">
          {' '}
          Editar Perfil{' '}
        </p>{' '}
        <form
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
                name="file"
                type="file"
                id="file"
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
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
                onChange={handleChange}
              />
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
