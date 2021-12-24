/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';

import InputAdornment from '@mui/material/InputAdornment';
import { Button, TextField } from '@mui/material';
import { DatePicker } from '@mui/lab';
import PeopleIcon from '@mui/icons-material/People';
import './ServiceDetail.css';

import { addDays } from 'date-fns';
import { getRoom } from '../../data';
import { useUserContext } from '../../context/UserProvider';

const ServiceDetail = () => {
  const { addCart, setAddCart } = useUserContext();
  const [checkinDate, setCheckinDate] = useState(null);
  const [checkoutDate, setCheckoutDate] = useState(null);
  const [value, setValue] = useState('first');

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

  const handleClick = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="detail-page">
      <div className="header-detail__search-images">
        <div className="header-detail__search">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="header-detail__search-content">
              <TextField
                className="search__textfield"
                color="primary"
                label="Lugar"
                variant="outlined"
                size="small"
                placeholder="Lugar"
                style={{ backgroundColor: 'white' }}
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />

              <DatePicker
                label="Fecha de Entrada"
                value={checkinDate}
                inputFormat="dd/MM/yyyy"
                minDate={Date.now()}
                onChange={(newValue) => {
                  setCheckinDate(newValue);
                }}
                renderInput={(params) => (
                  <TextField
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    {...params}
                    className="search__textfield"
                    size="small"
                    color="primary"
                    fullWidth
                    style={{ backgroundColor: 'white' }}
                  />
                )}
              />
              <DatePicker
                label="Fecha de Salida"
                value={checkoutDate}
                minDate={addDays(checkinDate, 1)}
                onChange={(newValue) => {
                  setCheckoutDate(newValue);
                }}
                renderInput={(params) => (
                  <TextField
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    {...params}
                    className="search__textfield"
                    size="small"
                    fullWidth
                    color="primary"
                    style={{ backgroundColor: 'white' }}
                  />
                )}
              />

              <TextField
                className="search__textfield"
                color="primary"
                label="Número de Personas"
                variant="outlined"
                size="small"
                placeholder="Número de Personas"
                fullWidth
                style={{ backgroundColor: 'white' }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PeopleIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <Button
                className="search__button"
                variant="contained"
                size="large"
                fullWidth
              >
                BUSCAR
              </Button>
            </div>
          </form>
        </div>
        <div className="image-box">
          {value === 'first' ? (
            <img
              className="header-detail__main-image"
              src="https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg"
              alt=""
            />
          ) : (
            <img
              className="header-detail__main-image"
              src="https://cdna.artstation.com/p/assets/images/images/014/081/626/large/berktan-hatiboglu-modern-render1.jpg?1542377257"
              alt=""
            />
          )}
          <div className="header-detail__side-images">
            <input
              type="radio"
              id="img-02"
              name="image"
              value="first"
              checked
              onClick={handleClick}
              style={{
                backgroundImage: `url(https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg)`,
                backgroundSize: '100% 100%',
              }}
            />
            <input
              type="radio"
              id="img-02"
              name="image"
              value="second"
              onClick={handleClick}
              style={{
                backgroundImage: `url(https://cdna.artstation.com/p/assets/images/images/014/081/626/large/berktan-hatiboglu-modern-render1.jpg?1542377257)`,
                backgroundSize: '100% 100%',
              }}
            />
          </div>
        </div>
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
