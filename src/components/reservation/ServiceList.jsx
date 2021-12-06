import React from "react";

import PropTypes from "prop-types";

import ServiceCard from "./ServiceCard";
import "./ServiceList.css";

const ServiceList = ({ roomList }) => {
  return (
    <section>
      {roomList.map((room) => (
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
      address: PropTypes.shape({}),
      tags: PropTypes.arrayOf(PropTypes.string),
      price: PropTypes.number,
    })
  ).isRequired,
};

export default ServiceList;
