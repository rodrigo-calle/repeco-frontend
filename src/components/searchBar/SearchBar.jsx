/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import './SearchBar.css';
import {
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { DatePicker } from '@mui/lab';
import { addDays } from 'date-fns';

const SearchBar = ({ searchFields, setSearchFields }) => {
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

  return (
    <div className="search">
      <form className="search__form" action="">
        <FormControl fullWidth>
          <TextField
            label="Lugar"
            placeholder="Lugar"
            color="primary"
            variant="outlined"
            size="small"
            name="location"
            style={{ backgroundColor: 'white' }}
            value={searchFields.location}
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LocationOnIcon color="primary" />
                </InputAdornment>
              ),
            }}
          />
        </FormControl>

        <FormControl fullWidth>
          <DatePicker
            label="Fecha de Entrada"
            value={searchFields.checkIn}
            name="checkIn"
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
        </FormControl>
        <FormControl fullWidth>
          <DatePicker
            label="Fecha de Salida"
            value={searchFields.checkOut}
            name="checkOut"
            inputFormat="dd/MM/yyyy"
            minDate={addDays(searchFields.checkIn, 1)}
            onChange={(newValue) => handleCheckOutDateSelect(newValue)}
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
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="capacity">Número de Personas</InputLabel>
          <Select
            labelId="capacity"
            id="demo-simple-select"
            value={searchFields.capacity}
            label="Número de Personas"
            size="small"
            onChange={handleChangeSelect}
            style={{ backgroundColor: 'white' }}
          >
            <MenuItem value="0">All</MenuItem>
            <MenuItem value="1">1 Persona</MenuItem>
            <MenuItem value="2">2 Personas</MenuItem>
            <MenuItem value="3">3 Personas</MenuItem>
            <MenuItem value="4">4 Personas</MenuItem>
          </Select>
        </FormControl>

        {/* <button type="submit" className="search__form__submit">
          <i className="fas fa-search" />
          Buscar
        </button> */}
      </form>
    </div>
  );
};

SearchBar.propTypes = {
  searchFields: PropTypes.shape({
    location: PropTypes.string,
    capacity: PropTypes.number,
    checkIn: PropTypes.instanceOf(Date),
    checkOut: PropTypes.instanceOf(Date),
  }).isRequired,
  setSearchFields: PropTypes.func.isRequired,
};

export default SearchBar;
