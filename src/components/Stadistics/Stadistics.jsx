import { useOutletContext } from 'react-router-dom';
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

const Stadistics = () => {
  const [data] = useOutletContext();

  const fakeData = [
    { name: 'Enero', uv: 400, pv: 2400, amt: 2400 },
    { name: 'Febrero', uv: 500, pv: 2400, amt: 2400 },
    { name: 'Marzo', uv: 300, pv: 2400, amt: 2400 },
    { name: 'Abril', uv: 450, pv: 2400, amt: 2400 },
  ];
  return (
    <div className="Stadistics">
      <div className="Stadistics__header">
        <h1>Sistema del Hotel {data}</h1>
      </div>
      <div className="">Dinero ingresado por mes</div>
      <BarChart width={600} height={300} data={fakeData}>
        <XAxis dataKey="name" stroke="#8884d8" />
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
        <Bar dataKey="uv" fill="#8884d8" barSize={30} />
      </BarChart>
    </div>
  );
};
export default Stadistics;
