/* eslint-disable */
import { useState, forwardRef } from 'react';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import room from '../../services/room';
import NumberFormat from 'react-number-format';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import './CreateRoom.css';
import SendIcon from '@mui/icons-material/Send';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import aditionalServices from './functions';
import Loading from '../loading/loading';

const Input = styled('input')({
  display: 'none',
});

const NumberFormatCustom = forwardRef(function NumberFormatCustom(props, ref) {
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
  const [values, setValues] = useState({
    title: '',
    description: '',
    capacity: 0,
    price: '0',
  });

  const [files, setFiles] = useState(null);

  const handleChangeFiles = (e) => {
    setFiles(e.target.files);
  };

  const [services, setServices] = useState(aditionalServices);

  const handleCheckboxChange = (index) => {
    const change = services.find((service, i) => i === index);
    change.isSelected = !change.isSelected;
    const newArr = services.map((elem, i) => (index === i ? change : elem));
    setServices(newArr);
  };

  const [created, setCreated] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const selecteds = services.filter((service) => service.isSelected === true);
    const serviceClean = selecteds.map((selected) => {
      delete selected.isSelected;
      return selected;
    });
    const serviceString = JSON.stringify(serviceClean);
    const formData = new FormData();
    formData.append('file', values.title);
    formData.append('file', values.description);
    formData.append('file', values.capacity);
    formData.append('file', values.price);
    formData.append('file', serviceString);
    for (const myfile of files) {
      formData.append('file', myfile);
    }
    setLoading(true);
    const result = await room.postRooms(formData);
    confirm(result);
  };

  const confirm = (result) => {
    if (result.statusText === 'Created') {
      setCreated(true);
      setLoading(false);
    } else {
      setCreated(false);
    }
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
            required
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
          required
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
            required
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
            required
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
          <Input
            sx={{ m: 2 }}
            accept="image/*"
            id="uploadfotos"
            multiple
            name="file"
            onChange={handleChangeFiles}
            value={values.images}
            type="file"
            required
          />
          <Button
            sx={{ m: 2 }}
            variant="contained"
            component="span"
            endIcon={<PhotoCameraIcon />}
          >
            Fotos del Cuarto
          </Button>
        </label>
        <div>
          <label htmlFor="submitbutton">
            <Button variant="contained" type="submit" endIcon={<SendIcon />}>
              Enviar
            </Button>
          </label>
        </div>
      </form>
      {created ? (
        <h3 className="CreateRoom__confirm"> Habitación creada con Exito</h3>
      ) : null}
      {loading ? <Loading /> : null}
    </div>
  );
};
export default CreateRoom;
