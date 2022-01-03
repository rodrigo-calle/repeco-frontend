/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import './BookingCard.css';
import { FormControl, TextField } from '@mui/material';

const BookingCard = ({ cartRooms }) => {
  return (
    <div>
      <hr />
      {cartRooms
        ? cartRooms.map((roomsel) => (
            <div key={roomsel._id}>
              <div className="bookingCard">
                <img
                  src="https://definicion.de/wp-content/uploads/2019/12/habitacion.jpg"
                  alt=""
                  className="bookingCard__image"
                />
                <div className="bookingCard__description">
                  <p className="bookingCard__type">{roomsel.hotel.category}</p>
                  <h3 className="bookingCard__title">{roomsel.title}</h3>
                  <p className="bookingCard__address">
                    {roomsel.hotel.address.street}, {roomsel.hotel.address.city}
                    , {roomsel.hotel.address.province},{' '}
                    {roomsel.hotel.address.country}.
                  </p>

                  <div className="bookingCard__footer">
                    {roomsel.services.map((service) => {
                      return (
                        <div className="tag__item" key={service._id}>
                          <i className={service.serviceUrl} />
                          <p className="tag__text">{service.serviceName}</p>
                        </div>
                      );
                    })}
                  </div>
                  <form action="" style={{ marginTop: 20 }}>
                    <FormControl>
                      <TextField
                        label="Nombre del Huésped"
                        color="primary"
                        variant="outlined"
                        size="small"
                        name="location"
                        style={{ backgroundColor: 'white' }}
                      />
                    </FormControl>
                  </form>
                  <div className="bookingCard__button-container">
                    <button type="button" className="bookingCard__button">
                      <i className="fa fa-trash" />
                      Eliminar
                    </button>
                  </div>
                </div>
              </div>
              <hr />
            </div>
          ))
        : ''}
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
  searchFields: PropTypes.shape({
    location: PropTypes.string,
    capacity: PropTypes.number,
  }).isRequired,
};

export default BookingCard;
