import React, { useState, useEffect } from 'react';
import './ProfileEdit.css';
// import { useNavigate} from 'react-router-dom';
import userService from '../../services/user';
import MenuProfile from '../menuProfile/MenuProfile';

const ProfileEdit = () => {
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [message, setMessage] = useState(false);
  // const [file, setFile] = useState(null);
  const [dataUser, setDataUser] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    phone: '',
    document: '',
  });
  // const navigate = useNavigate();

  useEffect(async () => {
    await userService.getUserProfile();
    // console.log(res.json());
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
      // console.log(response);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        // navigate('/user/account');
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
      <MenuProfile />
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
