/* eslint-disable no-underscore-dangle */
/* eslint-disable no-nested-ternary */
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Step,
  StepLabel,
  Stepper,
  TextField,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  CardMedia,
} from '@mui/material';
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import invoiceService from '../../services/invoice';
import userService from '../../services/user';
import './PaymentProcess.css';

const PaymentProcess = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [creditCard, setCreditCard] = useState({
    cardNumber: '',
    cardExpYear: '',
    cardExpMonth: '',
    cvc: '',
    focus: '',
    docType: '',
    docNumber: '',
  });
  const [cartRooms, setCartRooms] = useState([]);
  const [ip, setIp] = useState('');

  // const calcSubTotal = () => {
  //   const result = cartRooms
  //     .map((cart) => cart.room.price)
  //     .reduce((prev, next) => prev + next);
  //   return result;
  // };

  // const calcIgv = () => {
  //   const subTotal = calcSubTotal();
  //   const igv = 0.18 * subTotal;
  //   return igv.toFixed(2).toString();
  // };

  // const calcTotal = () => {
  //   const result = Number(calcSubTotal()) + Number(calcIgv());
  //   return result.toFixed(2).toString();
  // };

  const handleInputFocus = (e) => {
    setCreditCard((prev) => ({
      ...prev,
      focus: e.target.name,
    }));
  };

  const handleCheckOut = async () => {
    const rooms = [];

    cartRooms.map((cart) => {
      rooms.push(cart.room._id);
    });

    const invoice = {
      cardNumber: creditCard.cardNumber,
      cardExpMonth: creditCard.cardExpMonth,
      cardExpYear: creditCard.cardExpYear,
      cardCVC: creditCard.cvc,
      docType: creditCard.docType,
      docNumber: creditCard.docNumber,
      description: 'Room Payment',
      currency: 'USD',
      ip,
      taxBase: 31,
      tax: 4,
      value: 35,
      rooms,
    };

    const response = await invoiceService.createInvoice(invoice);
    const data = await response.json();
    console.log('invoice', data);

    const userCartResponse = await userService.deleteCartUser();
    const userData = await userCartResponse.json();
    console.log('user', userData);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setCreditCard((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const continueProcess = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const prevProcess = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  useEffect(() => {
    const getRoomsFromUserCart = async () => {
      const response = await userService.getUserCart();
      const data = await response.json();
      setCartRooms(data);
    };

    Axios.get('https://ipapi.co/json/').then((res) => {
      setIp(res.data.ip);
    });

    getRoomsFromUserCart();
  }, []);

  return (
    <div className="payment-process-container">
      <Stepper activeStep={activeStep} alternativeLabel>
        <Step>
          <StepLabel>Registrarse</StepLabel>
        </Step>
        <Step>
          <StepLabel>Método de Pago</StepLabel>
        </Step>
        <Step>
          <StepLabel>Tarjeta de crédito</StepLabel>
        </Step>
        <Step>
          <StepLabel>Realizar Reserva</StepLabel>
        </Step>
      </Stepper>
      {activeStep === 1 ? (
        <div className="payment-method-container">
          <div>
            <Typography
              variant="h6"
              style={{ fontWeight: 600, color: '#494949', marginBottom: 10 }}
            >
              MÉTODO DE PAGO
            </Typography>
            <div>
              <div>
                <FormControl>
                  <FormLabel id="credit-card-radio-buttons-group-label">
                    Seleccione tarjeta de crédito
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="credit-card-radio-buttons-group-label"
                    name="credit-card-choice"
                    defaultValue="4214 **** **** *231"
                  >
                    <FormControlLabel
                      value={0}
                      control={<Radio color="primary" />}
                      label="4214 **** **** *231"
                    />
                    <FormControlLabel
                      value={1}
                      control={<Radio color="primary" />}
                      label="Otra tarjeta"
                    />
                  </RadioGroup>
                </FormControl>
              </div>
              <div className="card-information__button">
                <Button variant="contained" onClick={continueProcess}>
                  Continuar
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : activeStep === 2 ? (
        <div id="PaymentForm" className="card-container">
          <Cards
            cvc={creditCard.cvc}
            expiry={`${creditCard.cardExpMonth}/${creditCard.cardExpYear}`}
            number={creditCard.cardNumber}
            focused={creditCard.focus}
          />
          <form>
            <h3 className="card-title">TARJETA DE CRÉDITO</h3>
            <div className="card-form">
              <TextField
                required
                type="tel"
                name="cardNumber"
                label="Card Number"
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                size="small"
              />
              <TextField
                required
                type="tel"
                name="cardExpMonth"
                label="Exp Month"
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                size="small"
              />
              <TextField
                required
                type="tel"
                name="cardExpYear"
                label="Exp Year"
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                size="small"
              />
              <TextField
                type="tel"
                name="cvc"
                label="CVC"
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                size="small"
              />
              <TextField
                name="docType"
                label="Doc Type"
                onChange={handleInputChange}
                size="small"
              />
              <TextField
                name="docNumber"
                label="Doc Number"
                onChange={handleInputChange}
                size="small"
              />
              <div
                className="payment-method-buttons"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: 30,
                }}
              >
                <div className="card-information__button--prev">
                  <Button variant="contained" onClick={prevProcess}>
                    ANTERIOR
                  </Button>
                </div>
                <div className="card-information__button--continue">
                  <Button variant="contained" onClick={continueProcess}>
                    CONTINUAR
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </div>
      ) : activeStep === 3 ? (
        <div>
          <h2 className="checkout-title">REALIZAR RESERVA</h2>
          <div className="checkout-container">
            <div className="Checkout-info">
              <div>
                <h3>Datos del Cliente</h3>
                <p>
                  <span>Nombre completo: </span> Luis Baldeon
                </p>
              </div>
              <div>
                <h3>Método de Pago</h3>
                <p>Método: Tarjeta de crédito</p>
              </div>
              <div>
                <h3>Habitaciones a reservar</h3>
                <TableContainer>
                  <Table>
                    <TableBody>
                      <TableRow>
                        <TableCell>
                          <CardMedia
                            style={{
                              backgroundColor: '#F2F2F2',
                              width: 50,
                              height: 40,
                            }}
                            image="https://definicion.de/wp-content/uploads/2019/12/habitacion.jpg"
                            title="room"
                          />
                        </TableCell>
                        <TableCell>
                          <Typography
                            style={{
                              fontWeight: 500,
                              color: '#494949',
                              marginBottom: 5,
                            }}
                          >
                            Titulo de habitación
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography
                            style={{
                              fontWeight: 500,
                              color: '#494949',
                              marginBottom: 5,
                            }}
                          >
                            1 x S/. 50 = S/. 50
                          </Typography>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
                <div className="card-information__button--prev">
                  <Button variant="contained" onClick={prevProcess}>
                    ANTERIOR
                  </Button>
                </div>
              </div>
            </div>
            <div>
              {true ? (
                <div>
                  <div className="booking-container__resume">
                    <h3 className="resume__title">RESUMEN DE LA RESERVA</h3>
                    <hr />
                    <div>
                      <p className="resume__room-title">
                        {' '}
                        Titulo de habitación
                      </p>
                      <div className="resume__dates-container">
                        <div>
                          <p className="resume__date-header">Entrada</p>
                          <p className="resume__date">
                            MIE, 19-01-22
                            {/* {format(
                            new Date(Date.parse(item.checkIn)),
                            'EEE, dd-MM-yyyy',
                            { locale: es },
                          )} */}
                          </p>
                          <p className="resume__time">De 15:00</p>
                        </div>
                        <div>
                          <p className="resume__date-header">Salida</p>
                          <p className="resume__date">
                            JUE, 20-01-22
                            {/* {format(
                            new Date(Date.parse(item.checkOut)),
                            'EEE, dd-MM-yyyy',
                            { locale: es },
                          )} */}
                          </p>
                          <p className="resume__time">A 12:00</p>
                        </div>
                      </div>

                      <div className="resume__days">
                        <p className="resume__days-header">
                          Duración total de la estancia
                        </p>
                        <p className="resume__total-days">2 noches</p>
                        <hr />
                      </div>
                    </div>
                    <div className="resume__selection">
                      <p className="resumen__selection-header">
                        Tu selección Total:
                      </p>
                      <p className="resume__total-rooms">1 Habitación</p>
                    </div>
                  </div>
                  <div className="booking-container__price price-container__background">
                    <div className="price__subtotal">
                      <p>Sub Total</p>
                      <p>S/. 50</p>
                    </div>
                    <div className="price__igv">
                      <p>IGV(18%)</p>
                      <p>S/. 8</p>
                    </div>
                    <div className="price__total">
                      <p>TOTAL</p>
                      <p>S/. 58</p>
                    </div>
                  </div>
                  <Button
                    variant="contained"
                    fullWidth
                    style={{ backgroundColor: '#004778' }}
                    onClick={handleCheckOut}
                  >
                    Reservar
                  </Button>
                </div>
              ) : (
                <h3>There is no items </h3>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default PaymentProcess;
