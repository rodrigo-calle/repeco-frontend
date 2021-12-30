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

const room = {
  getAllRooms,
  getRoomById,
};

export default room;
