import React, { useEffect, useState } from 'react';
import './BookingCard.css';
import { getRooms } from '../../data';

import { useUserContext } from '../../context/Users/UserProvider';

const BookingCard = () => {
  // llamado del estado del contexto
  const { addCart, setAddCart } = useUserContext();

  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    setRooms(getRooms);
  }, []);

  const roomsSelect = rooms.filter((room) =>
    addCart.find((element) => element === room.id),
  );

  const hadlerClick = (roomIdDelete) => {
    const roomsNotDelete = roomsSelect.filter(
      (room) => room.id !== roomIdDelete,
    );

    const idRoomsNotDelete = roomsNotDelete.map((room) => room.id);
    setAddCart(idRoomsNotDelete);
  };

  return (
    <div>
      <hr />
      {roomsSelect.map((roomsel) => (
        <div>
          <div className="bookingCard" key={roomsel.id}>
            <img
              src="https://definicion.de/wp-content/uploads/2019/12/habitacion.jpg"
              alt=""
              className="bookingCard__image"
            />
            <div className="bookingCard__description">
              <p className="bookingCard__type">{roomsel.type}</p>
              <h3 className="bookingCard__title">{roomsel.title}</h3>
              <p className="bookingCard__address">
                {roomsel.address.street}, {roomsel.address.city},{' '}
                {roomsel.address.province}, {roomsel.address.country}.
              </p>
              <p className="bookingCard__recomendation">
                Esta propiedad tiene una buena ubicación. ¡Las personas le
                dieron un puntaje de 9,1!
              </p>
              <div className="bookingCard__footer">
                {roomsel.tags.map((tag) => {
                  return (
                    <div className="tag__item">
                      <i className="fa fa-envelope" />
                      <p className="tag__text">{tag}</p>
                    </div>
                  );
                })}
              </div>
              <div className="bookingCard__button-container">
                <button
                  type="button"
                  onClick={() => {
                    hadlerClick(roomsel.id);
                  }}
                  className="bookingCard__button"
                >
                  <i className="fa fa-trash" />
                  Eliminar
                </button>
              </div>
            </div>
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default BookingCard;
