/* eslint-disable */

import React from 'react';

// import API mocking utilities from Mock Service Worker
// import { rest } from 'msw';
// import { setupServer } from 'msw/node';

// import react-testing methods
import { render, fireEvent, waitFor, screen } from '@testing-library/react';

// add custom jest matchers from jest-dom
import '@testing-library/jest-dom';
// the component to test
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
