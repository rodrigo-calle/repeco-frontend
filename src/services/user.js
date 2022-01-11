const URL_BASE = process.env.REACT_APP_API_URL_BASE;

const updateUserCart = (id, checkIn, checkOut) => {
  const token = localStorage.getItem('token');
  const payload = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      checkIn,
      checkOut,
    }),
  };

  return fetch(`${URL_BASE}/api/users/cart/${id}`, payload);
};

const deleteItemFromUserCart = (room) => {
  const token = localStorage.getItem('token');
  const payload = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      room,
    }),
  };

  return fetch(`${URL_BASE}/api/users/cartitem/`, payload);
};

const getUserCart = () => {
  const token = localStorage.getItem('token');
  const payload = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  return fetch(`${URL_BASE}/api/users/cart`, payload);
};

const user = {
  updateUserCart,
  getUserCart,
  deleteItemFromUserCart,
};

export default user;
