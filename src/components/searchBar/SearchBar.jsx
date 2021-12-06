import React from "react";
import "./SearchBar.css";

const SearchBar = () => {
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
              id="personas"
              name="select"
            >
              <option value="1persona">1 Persona</option>
              <option value="2personas">2 Personas</option>
              <option value="3personas">3 Personas</option>
              <option value="4personas">4 Personas</option>
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

export default SearchBar;
