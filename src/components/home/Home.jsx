import React from 'react';
import SearchBar from '../searchBar/SearchBar';
import "./Home.css"
import ServiceList from '../reservation/ServiceList'

const Home = () => {
    return (
        <div>
            <header className="header">
            <img className="header__image" src="/image/image-header.webp" alt="" />
            </header>
            <div class="container">
                <SearchBar />
                <ServiceList />                
            </div>
        </div>
    );
};

export default Home;