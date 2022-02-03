import React from 'react';
import './PaymentsClient.css';

const PaymentsClient = () => {
  return (
    <div className="payment-container">
      <div className="payment-container__payment-edit">
        <p className="payment-container__payment-edit--title"> Pagos </p>
        <p className="payment-container__payment-edit--subtitle">
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
        </button>
        <div className="payment-container__payment-edit__history">
          <p className="payment-container__payment-edit__history--title">
            Historial de pagos
          </p>
          <table className="payment-container__payment-edit--table">
            <thead>
              <tr>
                <th> Fecha </th>
                <th> Estado </th>
                <th> Monto </th>
                <th> Acciones </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td> 10 / 12 / 2021 </td>
                <td> Generado </td>
                <td> S / .207 .00 </td>
                <td> Boleta </td>
              </tr>
              <tr>
                <td> 10 / 12 / 2021 </td>
                <td> Generado </td>
                <td> S / .207 .00 </td>
                <td> Boleta </td>
              </tr>
              <tr>
                <td> 10 / 12 / 2021 </td>
                <td> Generado </td>
                <td> S / .207 .00 </td>
                <td> Boleta </td>
              </tr>
              <tr>
                <td> 10 / 12 / 2021 </td>
                <td> Generado </td>
                <td> S / .207 .00 </td>
                <td> Boleta </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default PaymentsClient;
