import React, { useEffect, useState } from 'react';
import './Booking.css';
import BookingCard from '../../components/BookingCard/BookingCard';
import BookingResume from '../../components/BookingResume/BookingResume';
import userService from '../../services/user';
import LoaderHotel from '../../components/loader/LoaderHotel';

const Booking = () => {
  const [cartRooms, setCartRooms] = useState([]);

  useEffect(() => {
    const getRoomsFromUserCart = async () => {
      const response = await userService.getUserCart();
      const data = await response.json();
      setCartRooms(data);
    };

    getRoomsFromUserCart();
  }, []);
  return (
    <div className="body">
      <h1 className="title">Booking Process</h1>
      {console.log(cartRooms)}
      {cartRooms.length > 0 ? (
        <div className="container">
          <BookingCard cartRooms={cartRooms} setCartRooms={setCartRooms} />
          <BookingResume cartRooms={cartRooms} setCartRooms={setCartRooms} />
        </div>
      ) : (
        <LoaderHotel />
      )}
    </div>
  );
};

export default Booking;
