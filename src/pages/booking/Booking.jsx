import React from 'react';
import './Booking.css';
import BookingCard from '../../components/BookingCard/BookingCard';
import BookingResume from '../../components/BookingResume/BookingResume';

const Booking = () => {
  return (
    <div className="body">
      <h1 className="title">Booking Process</h1>
      <div className="container">
        <BookingCard />
        <BookingResume />
      </div>
    </div>
  );
};

export default Booking;
