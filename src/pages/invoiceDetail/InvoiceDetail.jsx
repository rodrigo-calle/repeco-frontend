import React from 'react';
import './InvoiceDetail.css';

const InvoiceDetail = () => {
  return (
    <div className="invoice-detail__container">
      <div className="invoice-header">
        <div className="invoice-logo">
          <img src="" alt="" />
        </div>
        <div className="invoice-address">
          <p>Address</p>
        </div>
      </div>
      <div className="invoice-detail">
        <p>Nombre del Hotel: Marriot</p>
        <p>Número de factura: 123456</p>
        <p>Fecha: 12/12/12</p>
      </div>
      <div className="invoice-table">
        <table>
          <tr>
            <th>Descripción</th>
            <th>Sub Total</th>
            <th>IGV</th>
            <th>Total</th>
          </tr>
          <tr>
            <td>2 habitaciones</td>
            <td>123</td>
            <td>23</td>
            <td>146</td>
          </tr>
        </table>
      </div>
      <div className="invoice-message">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
          itaque eos, at facilis culpa vel veritatis provident doloribus iure
          veniam magnam, dolores hic illum rem harum reiciendis necessitatibus,
          ratione unde!
        </p>
      </div>
      <div className="invoice-footer">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum a
          voluptate ex inventore nesciunt ullam molestias cumque pariatur nisi
          iste cum consectetur natus aliquam placeat aperiam, repellendus aut
          sit. Neque.
        </p>
      </div>
    </div>
  );
};

export default InvoiceDetail;
