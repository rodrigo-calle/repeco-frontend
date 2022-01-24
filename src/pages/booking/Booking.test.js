/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';

import Booking from './Booking';

test('renders Booking Process text', () => {
  render(<Booking />);
  const textElement = screen.getByText(/Booking Process/i);
  expect(textElement).toBeInTheDocument();
});
