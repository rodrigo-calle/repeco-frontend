import React, { useEffect, useState } from 'react';
import SearchBar from '../searchBar/SearchBar';
import "./Home.css"
import ServiceList from '../reservation/ServiceList'
import { getRooms } from '../../data';
const Home = () => {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        setRooms(getRooms)
    }, [rooms])

    return (
        <div>
            <header className="header">
            <img className="header__image" src="/image/image-header.webp" alt="" />
            </header>
            <div className="container_home">
                <SearchBar />
                <ServiceList roomList={rooms}/>                
            </div>
        </div>
    );
};

export default Home;

