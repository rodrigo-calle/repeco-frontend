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
import AdminDashboard from './AdminDashboard';
import { BrowserRouter, Outlet, Routes, Route } from 'react-router-dom';

const data = [
  {
      "_id": "61e3456b15dff7dc0f8f4df4",
      "title": "Habitacion 1",
      "description": "Habitación con cama KingSize, diseñado y ambientado para parejas, incl...",
      "images": [
          {
              "imageName": "imagen 1",
              "imageUrl": "https://images.com/paraiso1.jpg",
              "_id": "61e3456b15dff7dc0f8f4df5"
          },
          {
              "imageName": "imagen 2",
              "imageUrl": "https://images.com/paraiso1.jpg",
              "_id": "61e3456b15dff7dc0f8f4df6"
          }
      ],
      "services": [
          {
              "serviceName": "agua caliente",
              "serviceUrl": "fas fa-shower",
              "_id": "61e3456b15dff7dc0f8f4df7"
          },
          {
              "serviceName": "Wi-fi",
              "serviceUrl": "fas fa-wifi",
              "_id": "61e3456b15dff7dc0f8f4df8"
          },
          {
              "serviceName": "Admite mascotas",
              "serviceUrl": "fas fa-paw",
              "_id": "61e3456b15dff7dc0f8f4df9"
          },
          {
              "serviceName": "Desayuno Incluido",
              "serviceUrl": "fas fa-coffee",
              "_id": "61e3456b15dff7dc0f8f4dfa"
          }
      ],
      "price": 65,
      "capacity": 1,
      "hotel": "61e2faf6ae8df7a4b0245ef7",
      "createdAt": "2022-01-15T22:06:35.942Z",
      "updatedAt": "2022-01-15T22:06:35.942Z",
      "__v": 0
  },
  {
      "_id": "61e345af15dff7dc0f8f4dfc",
      "title": "Habitacion 2",
      "description": "Habitación con cama ambientado para parejas, lorem ipsum",
      "images": [
          {
              "imageName": "imagen 1",
              "imageUrl": "https://images.com/paraiso1.jpg",
              "_id": "61e345af15dff7dc0f8f4dfd"
          },
          {
              "imageName": "imagen 2",
              "imageUrl": "https://images.com/paraiso1.jpg",
              "_id": "61e345af15dff7dc0f8f4dfe"
          }
      ],
      "services": [
          {
              "serviceName": "agua caliente",
              "serviceUrl": "fas fa-shower",
              "_id": "61e345af15dff7dc0f8f4dff"
          },
          {
              "serviceName": "Wi-fi",
              "serviceUrl": "fas fa-wifi",
              "_id": "61e345af15dff7dc0f8f4e00"
          },
          {
              "serviceName": "Admite mascotas",
              "serviceUrl": "fas fa-paw",
              "_id": "61e345af15dff7dc0f8f4e01"
          },
          {
              "serviceName": "Desayuno Incluido",
              "serviceUrl": "fas fa-coffee",
              "_id": "61e345af15dff7dc0f8f4e02"
          }
      ],
      "price": 40,
      "capacity": 1,
      "hotel": "61e2faf6ae8df7a4b0245ef7",
      "createdAt": "2022-01-15T22:07:43.320Z",
      "updatedAt": "2022-01-15T22:07:43.320Z",
      "__v": 0
  }
]
// <AdminDashboard context={[data]} />

function Home (){
  return(<div><h1>Pagina inicio</h1><Outlet context={[data]} /></div>)
}

test('Admin dashboard show data', () => {
  render(
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<AdminDashboard />} />
        </ Route>
    </ Routes>
  </BrowserRouter>);
  const linkElement = screen.getByText(/Habitacion 1/i);
  expect(linkElement).toBeInTheDocument();
});
