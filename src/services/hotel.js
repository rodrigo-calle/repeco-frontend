const URL_BASE = process.env.REACT_APP_API_URL_BASE;

const getAllHotel = () => {
  const token = localStorage.getItem('token');
  const payload = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  return fetch(`${URL_BASE}/api/hotels`, payload);
};

const hotel = {
  getAllHotel,
};

export default hotel;
