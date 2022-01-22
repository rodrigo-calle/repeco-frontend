/* eslint-disable */
import * as React from 'react';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import NumberFormat from 'react-number-format';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import './CreateRoom.css';
import SendIcon from '@mui/icons-material/Send';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import aditionalServices from './functions';

const Input = styled('input')({
  display: 'none',
});

const NumberFormatCustom = React.forwardRef(function NumberFormatCustom(
  props,
  ref,
) {
  const { onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={ref}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator
      isNumericString
      prefix="$"
    />
  );
});

const CreateRoom = () => {
  const [values, setValues] = React.useState({
    title: '',
    description: '',
    images: [],
    services: [],
    capacity: 0,
    price: '0',
  });

  const [services, setServices] = React.useState(aditionalServices);

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = values;
    const selecteds = services.filter((service) => service.isSelected === true);
    const serviceClean = selecteds.map((selected) => {
      delete selected.isSelected;
      return selected;
    });
    data.services = serviceClean;
    console.log(data);
  };

  const handleCheckboxChange = (index) => {
    const change = services.find((service, i) => i === index);
    change.isSelected = !change.isSelected;
    const newArr = services.map((elem, i) => (index === i ? change : elem));
    setServices(newArr);
  };

  const handleImagesChange = (event) => {
    console.log(event.target.files);
  };

  return (
    <div className="CreateRoom">
      <div className="CreateRoom__header">
        <h1>Nuevo room</h1>
      </div>
      <form onSubmit={handleSubmit} className="CreateRoom__form" action="">
        <div>
          <TextField
            sx={{ m: 2 }}
            onChange={handleChange}
            id="outlined-basic"
            label="Título"
            variant="outlined"
            name="title"
            value={values.title}
          />
        </div>
        <TextField
          sx={{ m: 2 }}
          id="outlined-multiline-static"
          label="Descripción"
          multiline
          rows={4}
          onChange={handleChange}
          name="description"
          value={values.description}
        />
        <div>
          <TextField
            sx={{ m: 2 }}
            id="outlined-number"
            label="Cantidad de Huespedes"
            type="number"
            name="capacity"
            onChange={handleChange}
            value={values.capacity}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>

        <div>
          <TextField
            sx={{ m: 2 }}
            label="Precio"
            value={values.price}
            onChange={handleChange}
            name="price"
            id="formatted-numberformat-input"
            InputProps={{
              inputComponent: NumberFormatCustom,
            }}
          />
        </div>

        <div>
          {services.map((service, index) => {
            return (
              <FormControlLabel
                key={service.serviceName}
                control={
                  <Checkbox
                    checked={service.isSelected}
                    onChange={() => handleCheckboxChange(index)}
                    name={service.serviceName}
                  />
                }
                label={service.serviceName}
              />
            );
          })}
        </div>

        <label htmlFor="uploadfotos">
          {/* <Input
            sx={{ m: 2 }}
            accept="image/*"
            id="uploadfotos"
            multiple
            name="images"
            onChange={handleChange}
            value={values.images}
            type="file"
          />
          <Button
            sx={{ m: 2 }}
            variant="contained"
            component="span"
            endIcon={<PhotoCameraIcon />}
          >
            Fotos del Cuarto
          </Button> */}
          <input
            type="file"
            onChange={handleImagesChange}
            multiple
            id="uploadfotos"
          />
        </label>
        <div>
          <label htmlFor="submitbutton">
            <Button variant="contained" type="submit" endIcon={<SendIcon />}>
              Enviar
            </Button>
          </label>
        </div>
      </form>
    </div>
  );
};
export default CreateRoom;
