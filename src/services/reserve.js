const URL_BASE = process.env.REACT_APP_API_URL_BASE;

const createReserve = (reserve) => {
  const payload = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    body: JSON.stringify(reserve),
  };

  return fetch(`${URL_BASE}/api/reserves/`, payload);
};

const reserve = {
  createReserve,
};

export default reserve;
