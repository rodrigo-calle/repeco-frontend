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
  MenuItem,
  InputLabel,
  Select,
} from '@mui/material';
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { format, differenceInDays } from 'date-fns';
import { es } from 'date-fns/locale';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import invoiceService from '../../services/invoice';
import userService from '../../services/user';
import reserveService from '../../services/reserve';
import './PaymentProcess.css';

const PaymentProcess = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [cardIndex, setCardIndex] = useState(0);
  const [creditCard, setCreditCard] = useState({
    cardNumber: '',
    cardExpYear: '',
    cardExpMonth: '',
    cvc: '',
    focus: '',
    docType: '',
    docNumber: '',
    name: '',
    lastName: '',
  });
  const [cartRooms, setCartRooms] = useState([]);
  const [ip, setIp] = useState('');
  const [user, setUser] = useState({});

  const calcSubTotal = () => {
    const result = cartRooms
      .map(
        (cart) =>
          cart.room.price *
          differenceInDays(new Date(cart.checkOut), new Date(cart.checkIn)),
      )
      .reduce((prev, next) => prev + next);
    return result;
  };

  const calcIgv = () => {
    const subTotal = calcSubTotal();
    const igv = 0.18 * subTotal;
    return igv.toFixed(2).toString();
  };

  const calcTotal = () => {
    const result = Number(calcSubTotal()) + Number(calcIgv());
    return result.toFixed(2).toString();
  };

  const handleChangeRadio = (e) => {
    setCardIndex(e.target.value);
  };

  const handleInputFocus = (e) => {
    setCreditCard((prev) => ({
      ...prev,
      focus: e.target.name,
    }));
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

  const fillingCreditCard = () => {
    if (cardIndex === '10') {
      setCreditCard({
        cardNumber: '',
        cardExpYear: '',
        cardExpMonth: '',
        cvc: '',
        focus: '',
        docType: '',
        docNumber: '',
        name: '',
        lastName: '',
      });
    } else {
      setCreditCard((prev) => ({
        ...prev,
        cardExpMonth: user.billing.creditCards[cardIndex].expMonth,
        cardExpYear: user.billing.creditCards[cardIndex].expYear,
      }));
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleCheckOut = async () => {
    const rooms = [];

    cartRooms.map((cart) => {
      rooms.push(cart.room._id);

      const reserve = {
        room: cart.room._id,
        checkIn: cart.checkIn,
        checkOut: cart.checkOut,
      };
      const createReserves = async () => {
        await reserveService.createReserve(reserve);
      };

      createReserves();
    });

    const invoice = {
      cardNumber: creditCard.cardNumber,
      cardExpMonth: creditCard.cardExpMonth,
      cardExpYear: creditCard.cardExpYear,
      cardCVC: creditCard.cvc,
      docType: creditCard.docType,
      docNumber: creditCard.docNumber,
      name: creditCard.name,
      lastName: creditCard.lastName,
      description: 'Room Payment',
      currency: 'COP',
      ip,
      taxBase: calcSubTotal(),
      tax: calcIgv(),
      value: calcTotal(),
      cardIndex,
      rooms,
    };

    await invoiceService.createInvoice(invoice);
    await userService.deleteCartUser();
  };

  useEffect(async () => {
    const getRoomsFromUserCart = async () => {
      const response = await userService.getUserCart();
      const data = await response.json();
      setCartRooms(data);
    };

    Axios.get('https://ipapi.co/json/').then((res) => {
      setIp(res.data.ip);
    });

    const response = await userService.getUserProfile();
    const data = await response.json();
    setUser(data);
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
                    value={cardIndex}
                    onChange={handleChangeRadio}
                  >
                    {user?.billing?.creditCards?.map((credit, index) => (
                      <FormControlLabel
                        value={index}
                        control={<Radio color="primary" />}
                        label={credit.mask}
                      />
                    ))}
                    <FormControlLabel
                      value={10}
                      control={<Radio color="primary" />}
                      label="Otra tarjeta"
                    />
                  </RadioGroup>
                </FormControl>
              </div>
              <div className="card-information__button">
                <Button variant="contained" onClick={fillingCreditCard}>
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
            name={`${creditCard.name} ${creditCard.lastName}`}
            focused={creditCard.focus}
          />
          <form>
            <h3 className="card-title">TARJETA DE CRÉDITO</h3>
            <div className="card-form">
              <TextField
                required
                value={creditCard.name}
                name="name"
                label="Nombre"
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                size="small"
              />
              <TextField
                required
                value={creditCard.lastName}
                name="lastName"
                label="Apellido"
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                size="small"
              />
              <TextField
                required
                type="tel"
                value={creditCard.cardNumber}
                name="cardNumber"
                label="Número de tarjeta"
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                size="small"
              />
              <TextField
                required
                type="tel"
                value={creditCard.cardExpMonth}
                name="cardExpMonth"
                label="Mes de Expiración"
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                size="small"
              />
              <TextField
                required
                type="tel"
                value={creditCard.cardExpYear}
                name="cardExpYear"
                label="Año de Expiración"
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                size="small"
              />
              <TextField
                required
                type="tel"
                name="cvc"
                label="CVC"
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                size="small"
              />
              <FormControl fullWidth>
                <InputLabel
                  id="doc-select-label"
                  style={{ lineHeight: '100%' }}
                >
                  Tipo de Documento
                </InputLabel>
                <Select
                  labelId="doc-select-label"
                  name="docType"
                  value={creditCard.docType}
                  label="Tipo de Documento"
                  onChange={handleInputChange}
                  size="small"
                >
                  <MenuItem value="DNI">DNI</MenuItem>
                  <MenuItem value="CC">CC</MenuItem>
                  <MenuItem value="other">Otro</MenuItem>
                </Select>
              </FormControl>
              <TextField
                required
                name="docNumber"
                label="Número de Documento"
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
                      {cartRooms.length ? (
                        cartRooms.map((item) => (
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
                                {item.room.title}
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
                                {differenceInDays(
                                  new Date(item.checkOut),
                                  new Date(item.checkIn),
                                )}{' '}
                                x $ {item.room.price} = ${' '}
                                {item.room.price *
                                  differenceInDays(
                                    new Date(item.checkOut),
                                    new Date(item.checkIn),
                                  )}
                              </Typography>
                            </TableCell>
                          </TableRow>
                        ))
                      ) : (
                        <h3>There is not rooms</h3>
                      )}
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
              {cartRooms.length ? (
                <div>
                  <div className="booking-container__resume">
                    <h3 className="resume__title">RESUMEN DE LA RESERVA</h3>
                    <hr />
                    {cartRooms.map((item) => (
                      <div>
                        <p className="resume__room-title"> {item.room.title}</p>
                        <div className="resume__dates-container">
                          <div>
                            <p className="resume__date-header">Entrada</p>
                            <p className="resume__date">
                              {format(
                                new Date(Date.parse(item.checkIn)),
                                'EEE, dd-MM-yyyy',
                                { locale: es },
                              )}
                            </p>
                            <p className="resume__time">De 15:00</p>
                          </div>
                          <div>
                            <p className="resume__date-header">Salida</p>
                            <p className="resume__date">
                              {format(
                                new Date(Date.parse(item.checkOut)),
                                'EEE, dd-MM-yyyy',
                                { locale: es },
                              )}
                            </p>
                            <p className="resume__time">A 12:00</p>
                          </div>
                        </div>

                        <div className="resume__days">
                          <p className="resume__days-header">
                            Duración total de la estancia
                          </p>
                          <p className="resume__total-days">
                            {differenceInDays(
                              new Date(item.checkOut),
                              new Date(item.checkIn),
                            )}
                            {differenceInDays(
                              new Date(item.checkOut),
                              new Date(item.checkIn),
                            ) > 1
                              ? ' noches'
                              : ' noche'}
                          </p>
                          <hr />
                        </div>
                      </div>
                    ))}

                    <div className="resume__selection">
                      <p className="resumen__selection-header">
                        Tu selección Total:
                      </p>
                      <p className="resume__total-rooms">
                        {cartRooms.length} Habitaciones
                      </p>
                    </div>
                  </div>
                  <div className="booking-container__price price-container__background">
                    <div className="price__subtotal">
                      <p>Sub Total</p>
                      <p>$ {calcSubTotal()}</p>
                    </div>
                    <div className="price__igv">
                      <p>IGV(18%)</p>
                      <p>$ {calcIgv()}</p>
                    </div>
                    <div className="price__total">
                      <p>TOTAL</p>
                      <p>$ {calcTotal()}</p>
                    </div>
                  </div>
                  <Button
                    variant="contained"
                    fullWidth
                    onClick={handleCheckOut}
                    style={{ backgroundColor: '#004778' }}
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
