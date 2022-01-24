/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';

import Signup from './Signup';

test('renders Signup Process text', () => {
  render(<Signup />);
  const textElement = screen.getByText(/REGISTRO A REPECO/i);
  expect(textElement).toBeInTheDocument();
});
