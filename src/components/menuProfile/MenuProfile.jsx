import React, { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage } from '@cloudinary/react';
import { useAppState } from '../../context/store';
import userService from '../../services/user';

import './MenuProfile.css';

const MenuProfile = () => {
  const [itemSelect, setItemSelect] = useState('');
  const { user } = useAppState();
  const [client, setClient] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    phone: '',
    document: '',
    avatar: '',
  });

  useEffect(() => {
    const getUser = async () => {
      const res = await userService.getUserProfile();
      const data = await res.json();
      setClient(data);
    };
    getUser();
  }, []);

  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dwat1o60y',
    },
  });

  const activeProfile = () => {
    setItemSelect('profile');
  };
  const activeEdit = () => {
    setItemSelect('edit');
  };

  // const myAvatar = cld.image('m2jxrpwok0hd4yqmpkc3');
  const myAvatar = cld.image(client.avatar);
  return (
    <div className="container-user-profile">
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
        <Link
          to="/user/account/profile"
          className={
            itemSelect === 'profile'
              ? 'profile-container__profile-menu--btn-edit-active '
              : 'profile-container__profile-menu--btn-editc'
          }
          onClick={activeProfile}
          id="profile"
        >
          <img
            className="profile-container__profile-menu--btn-edit__icon-active"
            src="/image/icons/edit_inactive.png"
            alt="edit-icon"
          />
          Mi Perfil{' '}
        </Link>{' '}
        <Link
          to="/user/account/edit"
          className={
            itemSelect === 'edit'
              ? 'profile-container__profile-menu--btn-edit-active'
              : 'profile-container__profile-menu--btn-editc'
          }
          onClick={activeEdit}
          id="edit"
        >
          <img
            className="profile-container__profile-menu--btn-edit__icon-active"
            src="/image/icons/edit_inactive.png"
            alt="edit-icon"
          />
          Editar Perfil{' '}
        </Link>{' '}
        <Link
          to="/user/account/payment"
          className={
            itemSelect === 'payment'
              ? 'profile-container__profile-menu--btn-edit-active'
              : 'profile-container__profile-menu--btn-editc'
          }
          onClick={() => setItemSelect('payment')}
          id="payment"
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
          className={
            itemSelect === 'history'
              ? 'profile-container__profile-menu--btn-edit-active'
              : 'profile-container__profile-menu--btn-editc'
          }
          onClick={() => setItemSelect('history')}
          id="history"
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
          className={
            itemSelect === 'delete'
              ? 'profile-container__profile-menu--btn-edit-active'
              : 'profile-container__profile-menu--btn-editc'
          }
          onClick={() => setItemSelect('delete')}
          id="delete"
        >
          <img
            className="profile-container__profile-menu--btn-edit__icon-inactive"
            src="/image/icons/remove_user_inactive.png"
            alt="edit-icon"
          />
          Anular Cuenta{' '}
        </Link>{' '}
      </div>
      <Outlet />
    </div>
  );
};

export default MenuProfile;
