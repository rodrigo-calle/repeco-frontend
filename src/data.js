const rooms = [
  {
    id: 1,
    type: 'Hostel',
    title: 'Habitación D-luxe',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
    images: [
      'deluxeimages1-24-11-21',
      'deluxeimages2-24-11-21',
      'deluxeimages3-24-11-21',
    ],
    address: {
      street: 'Av. Piura 262',
      city: 'Máncora',
      province: 'Piura',
      country: 'Perú',
      mapLocation: 'www.google.com/piura',
    },
    tags: ['Estacionamiento', 'Restaurante', 'Permite mascotas'],
    price: 20.0,
    capacity: 2,
  },
  {
    id: 2,
    type: 'Hostel',
    title: 'Habitación Matrix',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
    images: [
      'matriximages1-24-11-21',
      'matriximages2-24-11-21',
      'matriximages3-24-11-21',
    ],
    address: {
      street: 'Av. Arenales 743',
      city: 'Lima',
      province: 'Lima',
      country: 'Perú',
      mapLocation: 'www.google.com/lima',
    },
    tags: ['Wi-fi', 'Tour', 'Permite mascotas'],
    price: 40.0,
    capacity: 3,
  },
  {
    id: 3,
    type: 'Hotel',
    title: 'Habitación Suite',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
    images: [
      'suiteimages1-24-11-21',
      'suiteimages2-24-11-21',
      'suiteimages3-24-11-21',
    ],
    address: {
      street: 'Av. Las Mercedez 123',
      city: 'Huaráz',
      province: 'Huaráz',
      country: 'Perú',
      mapLocation: 'www.google.com/huaraz',
    },
    tags: ['Incluye desayuno', 'Tiene piscina', 'Permite mascotas'],
    price: 140.0,
    capacity: 1,
  },
];

// eslint-disable-next-line import/no-anonymous-default-export
export default {};

export function getRooms() {
  return rooms;
}

export function getRoom(id) {
  return rooms.find((room) => room.id === id);
}
