import React from 'react';
import "./SearchBar.css"

const SearchBar = () => {
    return (
        <div class="search">
            <form class="search__form" action="">
                <label class="search__form__label" for="location">
                    <div class="search__form__label__icon">
                        <i class="fas fa-map-marker-alt"></i>
                    </div>
                    <div class="search__form__label__body">
                        <span class="search__form__label__body__title">Lugar</span>
                        <input class="search__form__label__body__input" id="location" name="location" type="text" />
                    </div> 
                </label>

                <label class="search__form__label" for="">
                    <div class="search__form__label__icon">
                        <i class="fas fa-calendar-day"></i>
                    </div>
                    <div class="search__form__label__body">
                        <span class="search__form__label__body__title">Fecha de ida</span>
                        <input class="search__form__label__body__input" type="date" />
                    </div>
                </label>

                <label class="search__form__label" for="">
                    <div class="search__form__label__icon">
                        <i class="fas fa-calendar-day"></i>
                    </div>
                    <div class="search__form__label__body">
                        <span class="search__form__label__body__title">Fecha de regreso</span>
                        <input class="search__form__label__body__input" type="date" />
                    </div>
                </label>
                
                <label class="search__form__label" for="">
                    <div class="search__form__label__icon">
                        <i class="fas fa-users"></i>
                    </div>
                    <div class="search__form__label__body">
                        <span class="search__form__label__body__title">Personas</span>
                        
                        <select class="search__form__label__body__select" name="select">
                            <option value="1persona">1 Persona</option>
                            <option value="2personas" selected>2 Personas</option>
                            <option value="3personas">3 Personas</option>
                            <option value="4personas">4 Personas</option>
                        </select>
                    </div>
                </label>
                
                <button class="search__form__submit">
                    <i class="fas fa-search"></i> Buscar 
                </button>

            </form>
            
        </div>
    );
};

export default SearchBar;