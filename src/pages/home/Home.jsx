import React, { useEffect, useState } from 'react';
import SearchBar from '../../components/searchBar/SearchBar';
import './Home.css';
import ServiceList from '../../components/reservation/ServiceList';
import { getRooms } from '../../data';

const Home = () => {
  const [rooms, setRooms] = useState([]);
  const [searchFields, setSearchFields] = useState({
    location: '',
    capacity: 0,
  });

  useEffect(() => {
    setRooms(getRooms);
  }, []);

  return (
    <div>
      <header className="header">
        <img className="header__image" src="/image/image-header.webp" alt="" />
      </header>
      <div className="container_home">
        <SearchBar
          searchFields={searchFields}
          setSearchFields={setSearchFields}
        />
        <ServiceList roomList={rooms} searchFields={searchFields} />
      </div>
    </div>
  );
};

export default Home;
