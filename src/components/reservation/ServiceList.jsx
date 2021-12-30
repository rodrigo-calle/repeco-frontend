import React from 'react';

import PropTypes from 'prop-types';

import ServiceCard from './ServiceCard';
import './ServiceList.css';

const ServiceList = ({ roomList, searchFields }) => {
  const removeAccents = (str) => {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  };

  const filterRooms = roomList.filter((room) => {
    const roomCity = removeAccents(room.hotel.address.city);
    const searchLocation = removeAccents(searchFields.location);

    if (searchFields.capacity > 0) {
      return (
        roomCity.toLowerCase().includes(searchLocation.toLowerCase()) &&
        searchFields.capacity === room.capacity
      );
    }

    return roomCity.toLowerCase().includes(searchLocation.toLowerCase());
  });

  return (
    <section className="rooms-container">
      {filterRooms.map((room) => (
        <ServiceCard room={room} key={room.id} />
      ))}
    </section>
  );
};

ServiceList.propTypes = {
  roomList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      type: PropTypes.string,
      description: PropTypes.string,
      images: PropTypes.arrayOf(PropTypes.string),
      address: PropTypes.shape({
        street: PropTypes.string,
        city: PropTypes.string,
        province: PropTypes.string,
        country: PropTypes.string,
      }),
      tags: PropTypes.arrayOf(PropTypes.string),
      price: PropTypes.number,
      capacity: PropTypes.number,
    }),
  ).isRequired,
  searchFields: PropTypes.shape({
    location: PropTypes.string,
    capacity: PropTypes.number,
  }).isRequired,
};

export default ServiceList;
