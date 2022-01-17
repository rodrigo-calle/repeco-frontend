/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';

import BookingResume from './BookingResume';

test('renders Booking Process text', () => {
  const cartRooms = [];
  render(<BookingResume cartRooms={cartRooms} />);
  const textElement = screen.getByText(/There is no items/i);
  expect(textElement).toBeInTheDocument();
});
