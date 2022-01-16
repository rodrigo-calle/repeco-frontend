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

const room = {
  getAllRooms,
  getRoomById,
  getRommsByHotel,
};

export default room;
