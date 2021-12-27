import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import './ServiceCard.css';

const ServiceCard = ({ room }) => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/service/${id}`);
  };

  return (
    <div className="card">
      <img className="card__image" src="/image/image-card.jpeg" alt="" />
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
            <li>
              <i className="fas fa-shower" />
              {` Agua Caliente`}
            </li>
            <li>
              <i className="fas fa-wifi" />
              {` Wi-fi`}
            </li>
            <li>
              <i className="fas fa-paw" />
              {` Admite mascotas`}
            </li>
            <li>
              <i className="fas fa-coffee" />
              {` Desayuno Incluido`}
            </li>
          </ul>
        </div>
        <p className="card__addres">
          <i className="fas fa-map-marker-alt" />{' '}
          {`${room.address.street} - ${room.address.city} - ${room.address.province} - ${room.address.country}`}
        </p>

        <div className="card__footer">
          <button
            type="button"
            className="card__button"
            onClick={() => handleClick(room.id)}
          >
            Go to Detail
          </button>
        </div>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  room: PropTypes.shape({
    id: PropTypes.number,
    type: PropTypes.string,
    title: PropTypes.string,
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
  }).isRequired,
};

export default ServiceCard;
