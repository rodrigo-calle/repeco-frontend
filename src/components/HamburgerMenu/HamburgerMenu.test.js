/* eslint-disable */

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HamburgerMenu from './HamburgerMenu';
import { BrowserRouter } from 'react-router-dom';

const linkmenu = [
  {
    title: 'Dashboard',
    url: 'hola',
    icon: 'fas fa-cube',
  },
  {
    title: 'Estadisticas',
    url: 'stadistics',
    icon: 'fas fa-chart-pie',
  },
];

test('menu have a title text', () => {

  render(<BrowserRouter><HamburgerMenu menu={linkmenu} /></BrowserRouter>);
  const linkElement = screen.getByText(/Estadisticas/i);
  expect(linkElement).toBeInTheDocument();
});
