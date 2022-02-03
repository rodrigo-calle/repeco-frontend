/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import userService from '../../services/user';
import './PaymentsClient.css';

const PaymentsClient = () => {
  const [client, setClient] = useState();
  // const [loader, setLoader] = useState(false);

  const getInvoices = async () => {
    const response = await userService.getUserInvoices();
    if (response.ok) {
      const data = await response.json();
      setClient(data);
      // console.log(client);
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
    <div className="payment-container">
      <div className="payment-container__payment-edit">
        <p className="payment-container__payment-edit--title"> Pagos </p>
        {/* <p className="payment-container__payment-edit--subtitle">
          Métodos de pago
        </p>
        <div className="payment-container__payment-edit--card-container">
          <p className="payment-container__payment-edit--card-container__description">
            <img src="/image/icons/card_inactive.png" alt="payment-card" />
            Visa con terminación en 1951
          </p>
          <button
            type="button"
            className="payment-container__payment-edit--card-container__btn-inactive"
          >
            Método Principal
          </button>
        </div>
        <button type="button" className="btn-add-card">
          Añadir Tarjeta
        </button> */}
        <div className="payment-container__payment-edit__history">
          <p className="payment-container__payment-edit__history--title">
            Historial de pagos
          </p>
          <table className="payment-container__payment-edit--table">
            <thead>
              <tr>
                <th> Fecha </th> <th> Nombre de Hotel </th> <th> Monto </th>{' '}
                <th>Detalles</th>
              </tr>
            </thead>
            <tbody>
              {client?.map((item) => (
                <tr key={item._id}>
                  <td>{stringReverse(item.createdAt)}</td>
                  <td> {item.rooms?.map((room) => room.title)} </td>
                  <td> {`$. ${item.value}`} </td>
                  <td>
                    <Link to={`/invoice/${item._id}`}>Detalle</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default PaymentsClient;
