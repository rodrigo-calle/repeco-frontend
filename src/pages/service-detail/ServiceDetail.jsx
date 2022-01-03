/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';

import InputAdornment from '@mui/material/InputAdornment';
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import { DatePicker } from '@mui/lab';
import { addDays } from 'date-fns';

import roomService from '../../services/room';
import userService from '../../services/user';

import './ServiceDetail.css';

const ServiceDetail = () => {
  const [checkinDate, setCheckinDate] = useState(null);
  const [checkoutDate, setCheckoutDate] = useState(null);
  const [value, setValue] = useState('first');

  const navigate = useNavigate();
  const [room, setRoom] = useState({
    _id: 0,
    title: '',
    description: '',
    images: [],
    services: [],
    price: 0,
    capacity: 0,
    hotel: {
      address: {
        street: '',
        city: '',
        province: '',
        country: '',
      },
    },
  });
  const { id } = useParams();

  const handleClickImages = (event) => {
    setValue(event.target.value);
  };

  const handleClickAddToCart = async () => {
    const response = await userService.updateUserCart(id);
    if (response.ok) {
      navigate('/booking');
    } else {
      navigate('/login');
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    const getRoomInfo = async () => {
      const response = await roomService.getRoomById(id);
      const data = await response.json();
      if (response.ok) {
        setRoom(data);
      }
    };

    getRoomInfo();
  }, [id]);

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
                name="location"
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
                    {...params}
                    className="search__textfield"
                    size="small"
                    fullWidth
                    color="primary"
                    style={{ backgroundColor: 'white' }}
                  />
                )}
              />
              <FormControl fullWidth>
                <InputLabel id="capacity">Número de Personas</InputLabel>
                <Select
                  labelId="capacity"
                  id="demo-simple-select"
                  label="Número de Personas"
                  size="small"
                  style={{
                    backgroundColor: 'white',
                    textAlign: 'start',
                  }}
                >
                  <MenuItem value="1">1 Persona</MenuItem>
                  <MenuItem value="2">2 Personas</MenuItem>
                  <MenuItem value="3">3 Personas</MenuItem>
                  <MenuItem value="4">4 Personas</MenuItem>
                </Select>
              </FormControl>
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
              onClick={handleClickImages}
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
              onClick={handleClickImages}
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
              {room.services.map((service) => (
                <li
                  key={service._id}
                  className="container-detail__services--list-container-list--item"
                >
                  <i className={`${service.serviceUrl} serviceIcon`} />
                  {`${service.serviceName}`}
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
            className="container-detail--buttons-reserve"
            onClick={handleClickAddToCart}
          >
            Reservar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
