/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
import { useEffect, useState } from 'react';
import './Stadistics.css';
import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from 'recharts';
import reserveService from '../../services/reserve';

const Stadistics = () => {
  const [reserves, setReserves] = useState([]);

  useEffect(async () => {
    const response = await reserveService.getReservesByHotel();
    const reservesData = await response.json();
    setReserves(reservesData);
  }, []);

  return (
    <div className="Stadistics">
      <div className="Stadistics__header">
        <h1>Sistema del Hotel</h1>
      </div>
      <div className="stadistic__container">
        Conteo de reservas por habitación
      </div>
      <BarChart
        width={1200}
        height={400}
        data={reserves}
        style={{ margin: '0 auto' }}
      >
        <XAxis dataKey="title" stroke="#8884d8" />
        <YAxis />
        <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
        <Legend
          width={100}
          wrapperStyle={{
            top: 40,
            right: 20,
            backgroundColor: '#f5f5f5',
            border: '1px solid #d5d5d5',
            borderRadius: 3,
            lineHeight: '40px',
          }}
        />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <Bar dataKey="count" fill="#8884d8" barSize={40} />
      </BarChart>
    </div>
  );
};
export default Stadistics;
