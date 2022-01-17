/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

import ServiceDetail from './ServiceDetail';
import Home from '../home/Home';

test('renders text in Service Detail', () => {
  render(
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service/:id" element={<ServiceDetail />} />
        </Routes>
      </BrowserRouter>
    </LocalizationProvider>,
  );
  const textElement = screen.getByLabelText(/Número de Personas/i);
  expect(textElement).toBeInTheDocument();
});
