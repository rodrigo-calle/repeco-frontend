/* eslint-disable no-underscore-dangle */
import React from 'react';

import PropTypes from 'prop-types';
import userService from '../../services/user';
import './BookingCard.css';

const BookingCard = ({ cartRooms, setCartRooms }) => {
  const handleRemoveCart = async (roomId) => {
    const response = await userService.deleteItemFromUserCart(roomId);
    const data = await response.json();
    setCartRooms(data.cart);
  };

  return (
    <div>
      <hr />
      {cartRooms.length ? (
        cartRooms.map((roomsel) => (
          <div key={roomsel?.room?._id}>
            <div className="bookingCard">
              <img
                src="https://definicion.de/wp-content/uploads/2019/12/habitacion.jpg"
                alt=""
                className="bookingCard__image"
              />
              <div className="bookingCard__description">
                <p className="bookingCard__type">
                  {roomsel?.room?.hotel?.category}
                </p>
                <h3 className="bookingCard__title">{roomsel?.room?.title}</h3>
                <p className="bookingCard__address">
                  {roomsel?.room?.hotel?.address?.street},{' '}
                  {roomsel?.room?.hotel?.address?.city},{' '}
                  {roomsel?.room?.hotel?.address?.province},{' '}
                  {roomsel?.room?.hotel?.address?.country}.
                </p>

                <div className="bookingCard__footer">
                  {roomsel?.room?.services?.map((service) => (
                    <div className="tag__item" key={service._id}>
                      <i className={service.serviceUrl} />
                      <p className="tag__text">{service.serviceName}</p>
                    </div>
                  ))}
                </div>

                <div className="bookingCard__button-container">
                  <button
                    type="button"
                    className="bookingCard__button"
                    onClick={() => handleRemoveCart(roomsel?.room?._id)}
                  >
                    <i className="fa fa-trash" />
                    Eliminar
                  </button>
                </div>
              </div>
            </div>
            <hr />
          </div>
        ))
      ) : (
        <h3>No items Added</h3>
      )}
    </div>
  );
};

BookingCard.propTypes = {
  cartRooms: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      images: PropTypes.arrayOf(
        PropTypes.shape({
          imageName: PropTypes.string,
          imageUrl: PropTypes.string,
        }),
      ),
      services: PropTypes.arrayOf(
        PropTypes.shape({
          serviceName: PropTypes.string,
          serviceUrl: PropTypes.string,
        }),
      ),
      price: PropTypes.number,
      capacity: PropTypes.number,
      hotel: PropTypes.shape({
        address: PropTypes.shape({
          street: PropTypes.string,
          city: PropTypes.string,
          province: PropTypes.string,
          country: PropTypes.string,
        }),
        name: PropTypes.string,
        category: PropTypes.string,
        phone: PropTypes.string,
        email: PropTypes.string,
        user: PropTypes.string,
      }),
    }),
  ).isRequired,
  setCartRooms: PropTypes.func.isRequired,
};

export default BookingCard;
