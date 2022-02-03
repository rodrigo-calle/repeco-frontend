import axios from 'axios';

const URL_BASE = process.env.REACT_APP_API_URL_BASE;

const getAllRooms = () => {
  const payload = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  return fetch(`${URL_BASE}/api/rooms`, payload);
};

const getRoomById = (id) => {
  const payload = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  return fetch(`${URL_BASE}/api/rooms/${id}`, payload);
};

const getRommsByHotel = () => {
  const token = localStorage.getItem('token');
  const payload = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };
  return fetch(`${URL_BASE}/api/rooms/hotel/`, payload);
};

const postRooms = (datos) => {
  const token = localStorage.getItem('token');
  return axios({
    method: 'post',
    url: `${URL_BASE}/api/rooms/`,
    data: datos,
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${token}`,
    },
  });
};

const deleteRoomById = (id) => {
  const token = localStorage.getItem('token');
  return axios({
    method: 'delete',
    url: `${URL_BASE}/api/rooms/`,
    data: { id },
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
};

const updateRoom = (datos, id) => {
  const token = localStorage.getItem('token');
  return axios({
    method: 'patch',
    url: `${URL_BASE}/api/rooms/${id}`,
    data: datos,
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${token}`,
    },
  });
};

const room = {
  getAllRooms,
  getRoomById,
  getRommsByHotel,
  postRooms,
  deleteRoomById,
  updateRoom,
};

export default room;
