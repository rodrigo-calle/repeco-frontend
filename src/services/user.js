const URL_BASE = process.env.REACT_APP_API_URL_BASE;

const updateUserCart = (id) => {
  const token = localStorage.getItem('token');
  const payload = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  return fetch(`${URL_BASE}/api/users/cart/${id}`, payload);
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
};

export default user;
