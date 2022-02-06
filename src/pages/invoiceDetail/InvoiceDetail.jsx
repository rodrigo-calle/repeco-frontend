/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import userService from '../../services/user';
import './InvoiceDetail.css';

const InvoiceDetail = () => {
  const [invoice, setInvoice] = useState({});
  // const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const stringReverse = (string) => {
    return string
      .slice(0, 10)
      .replace(/-/g, '/')
      .split('/')
      .reverse()
      .join('/');
  };

  const getInvoice = async () => {
    const response = await userService.getInvoiceUserById(id);
    if (response.ok) {
      const data = await response.json();
      setInvoice({
        number: data.getInvoice,
        date: stringReverse(data.createdAt),
        romSize: data.rooms.length,
        userFirstName: data.user.firstName,
        userLastName: data.user.lastName,
        email: data.user.email,
        igv: data.tax,
        subtotal: data.taxBase,
        total: data.value,
        fullName: `${data.user.firstName} ${data.user.lastName}`,
      });
    }
  };

  useEffect(() => {
    getInvoice();
  });

  const print = () => {
    window.print();
  };

  return (
    <>
      <div className="invoice-box" id="invoice-card">
        <table cellPadding="0" cellSpacing="0">
          <tr className="top">
            <td colSpan="2">
              <table>
                <tr>
                  <td>
                    <img
                      src="/image/presentacion-repeco.png"
                      className="logo-invoice"
                      alt="logo"
                    />
                  </td>

                  <td>
                    {/* Invoice #{invoice?.bill} */}
                    Invoice #{invoice.number}
                    <br />
                    Creado: {invoice.date}
                    <br />
                    Entregado: {invoice.date}
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr className="information">
            <td colSpan="2">
              <table>
                <tr>
                  <td>
                    Repeco.
                    <br />
                    12345 Cercado de Lima
                    <br />
                    Lima, Perú
                  </td>

                  <td>
                    <br />
                    {invoice.fullName}
                    <br />
                    {invoice.email}
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr className="heading">
            <td>Description</td>

            <td>Price</td>
          </tr>

          <tr className="item">
            <td>Número de cuartos ({invoice.romSize}) - subtotal</td>
            <td>$ {invoice.subtotal}</td>
          </tr>
          <tr className="item">
            <td>IGV</td>

            <td>$ {invoice.igv}</td>
          </tr>
          <tr className="total">
            <td />

            <td>Total: $ {invoice.total} </td>
          </tr>
        </table>
      </div>
      <div className="container-print-btn">
        {' '}
        <button className="print-btn" type="button" onClick={print}>
          Imprimir
        </button>
      </div>
    </>
  );
};

export default InvoiceDetail;
