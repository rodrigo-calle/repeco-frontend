/* eslint-disable */
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';

import './ServiceCard.css';

const ServiceCard = ({ room, searchFields }) => {
  const navigate = useNavigate();
  const params = new URLSearchParams(searchFields);

  const handleClick = (id) => {
    navigate(`/service/${id}?${params.toString()}`);
  };

  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dwat1o60y',
    },
  });

  const myImage = cld.image(room.images[0].imageUrl);

  return (
    <div className="card">
      <AdvancedImage className="card__image" cldImg={myImage} />
      <div className="card__body">
        <h3>
          {room.title}
          <sub />
        </h3>

        <div className="card__price-capacity">
          <p className="card__capacity">
            <i className="fas fa-users" /> {`${room.capacity} Persona`}
            {room.capacity > 1 ? 's' : ''}
          </p>
          <p className="card__price">
            <i className="fas fa-dollar-sign" /> {room.price}
          </p>
        </div>
        <div className="card__services">
          <p>Servicios Incluidos:</p>
          <ul>
            {room.services?.map((service) => (
              <li key={service.serviceUrl}>
                <i className={service.serviceUrl} /> {service.serviceName}
              </li>
            ))}
          </ul>
        </div>
        <p className="card__addres">
          <i className="fas fa-map-marker-alt" />{' '}
          {`${room.hotel.address.street} - ${room.hotel.address.city} - ${room.hotel.address.province} - ${room.hotel.address.country}`}
        </p>
      </div>
      <div className="card__footer">
        <button
          type="button"
          className="card__button"
          onClick={() => handleClick(room._id)}
        >
          Go to Detail
        </button>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  room: PropTypes.shape({
    _id: PropTypes.string,
    type: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.shape({})),
    hotel: PropTypes.shape({
      address: PropTypes.shape({
        street: PropTypes.string,
        city: PropTypes.string,
        province: PropTypes.string,
        country: PropTypes.string,
      }),
    }),
    tags: PropTypes.arrayOf(PropTypes.string),
    price: PropTypes.number,
    capacity: PropTypes.number,
  }).isRequired,
  searchFields: PropTypes.shape({}).isRequired,
};

export default ServiceCard;
