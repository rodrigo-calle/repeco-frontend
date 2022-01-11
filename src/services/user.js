const URL_BASE = process.env.REACT_APP_API_URL_BASE;

const updateUser = (data) => {
  const payload = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    body: JSON.stringify(data),
  };

  return fetch(`${URL_BASE}/api/users/profile`, payload);
};

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
const getUserProfile = () => {
  const token = localStorage.getItem('token');
  const payload = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };
  return fetch(`${URL_BASE}/api/users/profile`, payload);
};

const user = {
  updateUserCart,
  getUserCart,
  updateUser,
  getUserProfile,
};

export default user;
