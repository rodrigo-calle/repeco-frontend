import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './Profile.css';
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage } from '@cloudinary/react';
import { useAppState } from '../../context/store';
import userService from '../../services/user';

const Profile = () => {
  const { user } = useAppState();
  const [client, setClient] = useState({
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
  useEffect(() => {
    const getUser = async () => {
      const res = await userService.getUserProfile();
      const data = await res.json();
      setClient(data);
    };
    getUser();
  }, []);
  // console.log(client.firstName);
  return (
    <div className="profile-container">
      <div className="profile-container__profile-menu">
        <p className="profile-container__profile-menu--title"> REPECO </p>{' '}
        <AdvancedImage
          className="profile-container__profile-menu--logo"
          cldImg={myAvatar}
        />{' '}
        {user ? (
          <p className="profile-container__profile-menu--user">
            {' '}
            {user.fullName}{' '}
          </p>
        ) : (
          <p className="profile-container__profile-menu--user">
            Nombre Completo{' '}
          </p>
        )}{' '}
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
        <p className="profile-container__profile-edit--title"> Perfil </p>{' '}
        <p>{client.firstName}</p>
      </div>{' '}
    </div>
  );
};

export default Profile;
