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


test('menu have a title text', () => {
  render(<HamburgerMenu/>);
  const linkElement = screen.getByText(/REPECO/i);
  expect(linkElement).toBeInTheDocument();
});
