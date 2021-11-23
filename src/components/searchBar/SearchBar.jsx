import React from 'react';
import "./SearchBar.css"

const SearchBar = () => {
    return (
        <div className="search">
            <form className="search__form" action="">
                <label className="search__form__label" for="location">
                    <div className="search__form__label__icon">
                        <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div className="search__form__label__body">
                        <span className="search__form__label__body__title">Lugar</span>
                        <input className="search__form__label__body__input" id="location" name="location" type="text" />
                    </div> 
                </label>

                <label className="search__form__label" for="">
                    <div className="search__form__label__icon">
                        <i className="fas fa-calendar-day"></i>
                    </div>
                    <div className="search__form__label__body">
                        <span className="search__form__label__body__title">Fecha de ida</span>
                        <input className="search__form__label__body__input" type="date" />
                    </div>
                </label>

                <label className="search__form__label" for="">
                    <div className="search__form__label__icon">
                        <i className="fas fa-calendar-day"></i>
                    </div>
                    <div className="search__form__label__body">
                        <span className="search__form__label__body__title">Fecha de regreso</span>
                        <input className="search__form__label__body__input" type="date" />
                    </div>
                </label>
                
                <label className="search__form__label" for="">
                    <div className="search__form__label__icon">
                        <i className="fas fa-users"></i>
                    </div>
                    <div className="search__form__label__body">
                        <span className="search__form__label__body__title">Personas</span>
                        
                        <select className="search__form__label__body__select" name="select">
                            <option value="1persona">1 Persona</option>
                            <option value="2personas" selected>2 Personas</option>
                            <option value="3personas">3 Personas</option>
                            <option value="4personas">4 Personas</option>
                        </select>
                    </div>
                </label>
                
                <button className="search__form__submit">
                    <i className="fas fa-search"></i> Buscar 
                </button>

            </form>
            
        </div>
    );
};

export default SearchBar;

