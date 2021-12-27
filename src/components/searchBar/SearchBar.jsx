/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
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
  const [checkinDate, setCheckinDate] = useState(null);
  const [checkoutDate, setCheckoutDate] = useState(null);

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
        </FormControl>
        <FormControl fullWidth>
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
            <MenuItem value="1">1 Persona</MenuItem>
            <MenuItem value="2">2 Personas</MenuItem>
            <MenuItem value="3">3 Personas</MenuItem>
            <MenuItem value="4">4 Personas</MenuItem>
          </Select>
        </FormControl>

        <button type="button" className="search__form__submit">
          <i className="fas fa-search" />
          Buscar
        </button>
      </form>
    </div>
  );
};

SearchBar.propTypes = {
  searchFields: PropTypes.shape({
    location: PropTypes.string,
    capacity: PropTypes.number,
  }).isRequired,
  setSearchFields: PropTypes.func.isRequired,
};

export default SearchBar;
