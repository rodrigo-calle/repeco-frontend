import './UserHotel.css';
import { useEffect, useState } from 'react';
import HamburgerMenu from '../../components/HamburgerMenu/HamburgerMenu';
import AdminDashboard from '../../components/AdminDashboard/AdminDashboard';
// import { useAppState } from '../../context/store';
import hotel from '../../services/hotel';

const linkmenu = [
  {
    title: 'Dashboard',
    link: '/habitaciones',
    icon: 'fas fa-cube',
  },
  {
    title: 'Estadisticas',
    link: '/Estadisticas',
    icon: 'fas fa-chart-pie',
  },
];

const UserHotel = () => {
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
    <div className="UserHotel">
      <HamburgerMenu menu={linkmenu} />
      <AdminDashboard data={hotels} />
    </div>
  );
};

export default UserHotel;
