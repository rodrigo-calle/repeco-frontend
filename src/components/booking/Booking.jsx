import React from 'react';
import PropTypes from 'prop-types';
import './Booking.css';
import BookingCard from '../BookingCard/BookingCard';
import BookingResume from '../BookingResume/BookingResume';

const Booking = ({ addCart, setAddCart }) => {
  return (
    <div className="body">
      <h1 className="title">Booking Process</h1>
      <div className="container">
        <BookingCard addCart={addCart} setAddCart={setAddCart} />
        <BookingResume />
      </div>
    </div>
  );
};

Booking.propTypes = {
  addCart: PropTypes.arrayOf(PropTypes.number).isRequired,
  setAddCart: PropTypes.func.isRequired,
};

export default Booking;
