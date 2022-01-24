const URL_BASE = process.env.REACT_APP_API_URL_BASE;

const createInvoice = (invoice) => {
  const payload = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    body: JSON.stringify(invoice),
  };

  return fetch(`${URL_BASE}/api/invoices/payment`, payload);
};

const reserve = {
  createInvoice,
};

export default reserve;
