import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './Profile.css';
import userService from '../../services/user';

const Profile = () => {
  const [client, setClient] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    phone: '',
    document: '',
  });

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
      <div className="profile-container__profile-edit">
        <p className="profile-container__profile-edit--title"> Perfil </p>{' '}
        <div className="profile-data">
          <p>
            Correo electrónico: <span>{client.email}</span>{' '}
          </p>

          {!client.firstName ? (
            <p>
              {' '}
              Nombre(s):{' '}
              <span>
                Nombre no registrado <Link to="/user/account/edit">Editar</Link>
              </span>{' '}
            </p>
          ) : (
            <p>
              Nombre(s): <span>{client.firstName}</span>{' '}
            </p>
          )}

          {!client.lastName ? (
            <p>
              {' '}
              Apellidos:{' '}
              <span>
                Apellido no registrado{' '}
                <Link to="/user/account/edit">Editar</Link>
              </span>{' '}
            </p>
          ) : (
            <p>
              Apellidos: <span>{client.lastName}</span>{' '}
            </p>
          )}
          {!client.document ? (
            <p>
              {' '}
              Documento de identidad:{' '}
              <span>
                Documento no registrado{' '}
                <Link to="/user/account/edit">Editar</Link>
              </span>{' '}
            </p>
          ) : (
            <p>
              Documento de identidad: <span>{client.document}</span>{' '}
            </p>
          )}
          {!client.phone ? (
            <p>
              {' '}
              Teléfono:{' '}
              <span>
                Teléfono no registrado{' '}
                <Link to="/user/account/edit">Editar</Link>
              </span>{' '}
            </p>
          ) : (
            <p>
              Teléfono: <span>{client.phone}</span>{' '}
            </p>
          )}
        </div>
      </div>{' '}
    </div>
  );
};

export default Profile;
