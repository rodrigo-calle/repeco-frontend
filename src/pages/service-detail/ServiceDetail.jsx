import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getRoom } from '../../data';
import './ServiceDetail.css';

import { useUserContext } from '../../context/UserProvider';

const ServiceDetail = () => {
  const { addCart, setAddCart } = useUserContext();

  const navigate = useNavigate();
  const [room, setRoom] = useState({
    id: 0,
    type: '',
    title: '',
    description: '',
    images: [],
    address: {
      street: '',
      city: '',
      province: '',
      country: '',
      mapLocation: '',
    },
    tags: [],
    price: 0,
  });
  const id = parseInt(useParams().id, 10);

  useEffect(() => {
    window.scrollTo(0, 0);
    const roominfo = getRoom(id);
    setRoom(roominfo);
  }, [id]);

  const HandlerClick = () => {
    setAddCart(addCart.concat(id));
    navigate(`/booking`);
  };

  return (
    <div>
      <div className="slider">
        <img src="/image/hotel.jpg" alt="hotel-slider" />
      </div>

      <div className="container-detail">
        <div className="container_detail__text">
          <h1 className="container_detail__text-title">{room.title}</h1>
          <h3 className="container_detail__text-subtitle">
            Descripción de la habitación
          </h3>
          <p className="container_detail__text-pharagrap">{room.description}</p>
        </div>
        <div className="container-detail__services">
          <div className="container-detail__services--list-container">
            <ul className="container-detail__services--list-container-list">
              {room.tags.map((tag) => (
                <li
                  key={tag}
                  className="container-detail__services--list-container-list--item"
                >
                  <img
                    src="https://icongr.am/clarity/building.svg?size=148&color=000000"
                    height="27px"
                    alt=""
                  />
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="container-detail--map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124857.26154305927!2d-77.11140224681168!3d-12.058004753998091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105d26da3a59b33%3A0xdddcd7c560176bf1!2sEstadio%20Monumental%20%C2%ABU%C2%BB!5e0!3m2!1ses-419!2spe!4v1637196665648!5m2!1ses-419!2spe"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Map"
          />
        </div>
        <div className="container-detail--buttons">
          {/* <button className="container-detail--buttons-wishes">
            Lista de Deseos
          </button> */}
          <button
            type="button"
            onClick={HandlerClick}
            className="container-detail--buttons-reserve"
          >
            Reservar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
