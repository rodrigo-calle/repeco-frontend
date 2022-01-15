import './Adminsystem.css';
import { useEffect, useState } from 'react';
import HamburgerMenu from '../../components/HamburgerMenu/HamburgerMenu';
import AdminDashboard from '../../components/AdminDashboard/AdminDashboard';
// import { useAppState } from '../../context/store';
import hotel from '../../services/hotel';

const Adminsystem = () => {
  const [hotels, useHotels] = useState(null);
  useEffect(async () => {
    const getallHotels = async () => {
      const response = await hotel.getAllHotel();
      const data = await response.json();
      useHotels(data);
    };
    getallHotels();
  }, []);

  return (
    <div className="adminsystem">
      <HamburgerMenu />
      <AdminDashboard data={hotels} />
    </div>
  );
};

export default Adminsystem;
