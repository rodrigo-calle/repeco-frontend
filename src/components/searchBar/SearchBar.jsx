import React from 'react';
import PropTypes from 'prop-types';
import './SearchBar.css';

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

  return (
    <div className="search">
      <form className="search__form" action="">
        <label className="search__form__label" htmlFor="location">
          <div className="search__form__label__icon">
            <i className="fas fa-map-marker-alt" />
          </div>
          <div className="search__form__label__body">
            <span className="search__form__label__body__title">Lugar</span>
            <input
              className="search__form__label__body__input"
              id="location"
              name="location"
              type="text"
              value={searchFields.location}
              onChange={handleChange}
            />
          </div>
        </label>

        <label className="search__form__label" htmlFor="fecha-ida">
          <div className="search__form__label__icon">
            <i className="fas fa-calendar-day" />
          </div>
          <div className="search__form__label__body">
            <span className="search__form__label__body__title">
              Fecha de ida
            </span>
            <input
              className="search__form__label__body__input"
              id="fecha-ida"
              type="date"
            />
          </div>
        </label>

        <label className="search__form__label" htmlFor="fecha-regreso">
          <div className="search__form__label__icon">
            <i className="fas fa-calendar-day" />
          </div>
          <div className="search__form__label__body">
            <span className="search__form__label__body__title">
              Fecha de regreso
            </span>
            <input
              className="search__form__label__body__input"
              id="fecha-regreso"
              type="date"
            />
          </div>
        </label>

        <label className="search__form__label" htmlFor="personas">
          <div className="search__form__label__icon">
            <i className="fas fa-users" />
          </div>
          <div className="search__form__label__body">
            <span className="search__form__label__body__title">Personas</span>

            <select
              className="search__form__label__body__select"
              id="capacity"
              name="capacity"
              onChange={handleChangeSelect}
            >
              <option value="0"># Personas</option>
              <option value="1">1 Persona</option>
              <option value="2">2 Personas</option>
              <option value="3">3 Personas</option>
              <option value="4">4 Personas</option>
            </select>
          </div>
        </label>

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
