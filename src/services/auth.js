const URL_BASE = process.env.REACT_APP_API_URL_BASE;

const registerAccount = (user) => {
  try {
    fetch(`${URL_BASE}/api/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
  } catch (error) {
    throw Error(error);
  }
};

// const forgotPassword = (email) => {};

const loginAccount = ({ email, password }) => {
  const payload = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  };

  return fetch(`${URL_BASE}/auth/local/login`, payload);
};

const confirmAccount = ({ hash }) => {
  const payload = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ hash }),
  };
  return fetch(`${URL_BASE}/auth/local/confirm-account`, payload);
};

const auth = {
  loginAccount,
  registerAccount,
  confirmAccount,
  // forgotPassword,
};

export default auth;
