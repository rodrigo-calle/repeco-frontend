import React, { useEffect, useState } from 'react';
import SearchBar from '../../components/searchBar/SearchBar';
import './Home.css';
import ServiceList from '../../components/reservation/ServiceList';
import roomService from '../../services/room';

const Home = () => {
  const [rooms, setRooms] = useState([]);
  const [searchFields, setSearchFields] = useState({
    location: '',
    capacity: 0,
  });

  useEffect(() => {
    const getRooms = async () => {
      const response = await roomService.getAllRooms();
      const data = await response.json();
      if (response.ok) {
        setRooms(data);
      }
    };

    getRooms();
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
