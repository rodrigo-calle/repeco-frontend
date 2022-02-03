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
  const [data, setData] = useState([]);
  useEffect(async () => {
    const getAllDataUser = async () => {
      const response = await roomService.getRommsByHotel();
      const payload = await response.json();
      if (response.ok) {
        setData(payload);
      }
    };
    getallDataUser();
  }, [data]);

  return (
    <div className="UserHotel">
      <HamburgerMenu menu={linkmenu} />
      <Outlet context={[data, setData]} />
    </div>
  );
};

export default UserHotel;
