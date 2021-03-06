const URL_BASE = process.env.REACT_APP_API_URL_BASE;

const createUser = (data) => {
  const payload = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };
  return fetch(`${URL_BASE}/api/users/`, payload);
};

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

const deletUser = () => {
  const payload = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  };
  return fetch(`${URL_BASE}/api/users/delete`, payload);
};

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

const deleteCartUser = () => {
  const token = localStorage.getItem('token');
  const payload = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  return fetch(`${URL_BASE}/api/users/cart/`, payload);
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

const getUserInvoices = () => {
  const token = localStorage.getItem('token');
  const payload = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };
  return fetch(`${URL_BASE}/api/invoices/user-invoices`, payload);
};

const getUserReserves = () => {
  const token = localStorage.getItem('token');
  const payload = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };
  return fetch(`${URL_BASE}/api/reserves/user/reserves`, payload);
};

const confirmAccount = (hash) => {
  const payload = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  return fetch(`${URL_BASE}/auth/local/confirm-account/${hash}`, payload);
};

const getInvoiceUserById = (id) => {
  const payload = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  };
  return fetch(`${URL_BASE}/api/invoices/user/${id}`, payload);
};

const user = {
  updateUserCart,
  getUserCart,
  updateUser,
  getUserProfile,
  deleteItemFromUserCart,
  deletUser,
  deleteCartUser,
  createUser,
  confirmAccount,
  getUserInvoices,
  getUserReserves,
  getInvoiceUserById,
};

export default user;
