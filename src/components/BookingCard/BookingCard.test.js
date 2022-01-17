/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';

import BookingCard from './BookingCard';

test('renders Booking Process text', () => {
  const cartRooms = [];
  const setCartRooms = () => {};
  render(<BookingCard cartRooms={cartRooms} setCartRooms={setCartRooms} />);
  const textElement = screen.getByText(/No items Added/i);
  expect(textElement).toBeInTheDocument();
});
