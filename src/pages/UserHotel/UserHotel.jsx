import './UserHotel.css';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import HamburgerMenu from '../../components/HamburgerMenu/HamburgerMenu';
import roomService from '../../services/room';

const linkmenu = [
  {
    title: 'Dashboard',
    url: '',
    icon: 'fas fa-cube',
  },
  {
    title: 'Estadisticas',
    url: 'stadistics',
    icon: 'fas fa-chart-pie',
  },
];

const UserHotel = () => {
  const [data, useData] = useState(null);
  useEffect(async () => {
    const getallDataUser = async () => {
      const response = await roomService.getRommsByHotel();
      const payload = await response.json();
      useData(payload);
    };
    getallDataUser();
  }, []);

  return (
    <div className="UserHotel">
      <HamburgerMenu menu={linkmenu} />
      <Outlet context={[data, useData]} />
    </div>
  );
};

export default UserHotel;
