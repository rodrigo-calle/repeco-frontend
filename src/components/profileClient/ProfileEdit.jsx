import { Link } from 'react-router-dom';
import './ProfileEdit.css';

const ProfileEdit = () => {
  return (
    <div className="profile-container">
      <div className="profile-container__profile-menu">
        <p className="profile-container__profile-menu--title"> REPECO </p>{' '}
        <img
          className="profile-container__profile-menu--logo"
          src="https://icongr.am/devicon/couchdb-plain.svg?size=128&color=000000"
          alt="logo-repeco"
        />
        <p className="profile-container__profile-menu--user">
          Nombre y Apellido{' '}
        </p>{' '}
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
        <p className="profile-container__profile-menu--btn-edit bookings">
          <img
            className="profile-container__profile-menu--btn-edit__icon-inactive"
            src="/image/icons/booking_inactive.png"
            alt="edit-icon"
          />
          Mis Reservas{' '}
        </p>{' '}
        <p className="profile-container__profile-menu--btn-edit delete-account">
          <img
            className="profile-container__profile-menu--btn-edit__icon-inactive"
            src="/image/icons/remove_user_inactive.png"
            alt="edit-icon"
          />
          Anular Cuenta{' '}
        </p>{' '}
      </div>{' '}
      <div className="profile-container__profile-edit">
        <p className="profile-container__profile-edit--title">
          {' '}
          Editar Perfil{' '}
        </p>{' '}
        <form className="profile-container__profile-edit--form">
          <div className="form-colum one-colum">
            <label
              htmlFor="email"
              className="profile-container__profile-edit--form__label"
            >
              Correo Electrónico:
              <br />
              <input
                className="profile-container__profile-edit--form__input"
                type="email"
                id="email"
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
                id="new-password"
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
                type="password"
                id="confirm-password"
              />
            </label>{' '}
            <br />
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
                id="name"
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
                className="profile-container__profile-edit--form__input"
                type="text"
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
                id="document"
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
                id="phone"
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
