/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
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
  const [valueImage, setValueImage] = useState('first');

  const location = useLocation();
  const paramsQuery = new URLSearchParams(location.search);

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

  const [searchFields, setSearchFields] = useState({
    location: '',
    capacity: '',
    checkIn: '',
    checkOut: '',
  });
  const { id } = useParams();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setSearchFields((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleChangeSelect = (e) => {
    setSearchFields((prev) => ({
      ...prev,
      capacity: parseInt(e.target.value, 10),
    }));
  };

  const handleCheckOutDateSelect = (value) => {
    setSearchFields((prev) => ({
      ...prev,
      checkOut: value,
    }));
  };

  const handleCheckInDateSelect = (value) => {
    setSearchFields((prev) => ({
      ...prev,
      checkIn: value,
    }));
  };

  const handleClickImages = (event) => {
    setValueImage(event.target.value);
  };

  const handleClickAddToCart = async () => {
    const response = await userService.updateUserCart(
      id,
      searchFields.checkIn,
      searchFields.checkOut,
    );
    // if (response.status === 412) {
    //   console.log('lastname failed');
    // }

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
        setSearchFields((prev) => ({
          ...prev,
          location: data.hotel.address.city,
          capacity: data.capacity,
          checkIn: paramsQuery.get('checkIn'),
          checkOut: paramsQuery.get('checkOut'),
        }));
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
                onChange={handleChange}
                style={{ backgroundColor: 'white' }}
                value={searchFields.location}
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
                value={searchFields.checkIn}
                inputFormat="dd/MM/yyyy"
                minDate={Date.now()}
                onChange={(newValue) => handleCheckInDateSelect(newValue)}
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
                value={searchFields.checkOut}
                inputFormat="dd/MM/yyyy"
                minDate={addDays(searchFields.checkIn, 1)}
                onChange={(newValue) => {
                  handleCheckOutDateSelect(newValue);
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
                  value={searchFields.capacity}
                  label="Número de Personas"
                  size="small"
                  onChange={handleChangeSelect}
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
          {valueImage === 'first' ? (
            <img
              className="header-detail__main-image"
              src={room?.images[0]?.imageName}
              alt=""
            />
          ) : (
            <img
              className="header-detail__main-image"
              src={room?.images[1]?.imageName}
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
                backgroundImage: `url(${room?.images[0]?.imageName})`,
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
                backgroundImage: `url(${room?.images[1]?.imageName})`,
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
