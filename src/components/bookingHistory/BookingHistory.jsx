/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import userService from '../../services/user';
import './BookingHistory.css';

const BookingHistory = () => {
  const [client, setClient] = useState();
  // const [loader, setLoader] = useState(false);

  const getInvoices = async () => {
    const response = await userService.getUserReserves();
    if (response.ok) {
      const data = await response.json();
      setClient(data);
    }
  };
  useEffect(() => {
    getInvoices();
  }, []);
  const stringReverse = (string) => {
    return string
      .slice(0, 10)
      .replace(/-/g, '/')
      .split('/')
      .reverse()
      .join('/');
  };

  return (
    <div className="booking-container">
      <div className="booking-container__booking-edit">
        <p className="booking-container__booking-edit--title"> Mis Reservas</p>
        {/* <div className="booking-container__booking-edit--card-container">
          <div className="booking-container__booking-edit--card-container__title">
            Filtrar por:
          </div>
          <div className="booking-container__booking-edit--card-container__date-filter">
            <div className="booking-container__booking-edit--card-container__date-filter--start">
              <p className="filter-start__title">Fecha de Incio</p>
              <input className="filter-start__date-input" type="date" />
            </div>
            <div className="booking-container__booking-edit--card-container__date-filter--end">
              <p className="filter-end__title">Fecha fin:</p>
              <input className="filter-end__date-input" type="date" />
            </div>
          </div>
        </div> */}
        <div className="booking-container__booking-edit__history">
          <table className="booking-container__booking-edit--table">
            <thead>
              <tr className="table-header">
                <th> codigo </th> <th> Descripción </th> <th>Fecha</th>
                <th> Costo </th>
              </tr>
            </thead>
            <tbody>
              {client?.map((item) => (
                <tr>
                  <td>#{item._id.slice(3, 6)}</td>
                  <td>{item.room?.title}</td>
                  <td>
                    {stringReverse(item.checkIn)}
                    {/* {item.checkIn.slice(0, 10).replace(/-/g, '/')} */}
                  </td>
                  <td>$.{item.room?.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BookingHistory;
