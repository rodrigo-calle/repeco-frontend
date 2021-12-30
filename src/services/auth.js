const URL_BASE = process.env.REACT_APP_API_URL_BASE;

const loginAccount = ({ email, password }) => {
  const payload = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  };

  return fetch(`${URL_BASE}/auth/local/login`, payload);
};

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

const auth = {
  loginAccount,
  registerAccount,
  // forgotPassword,
};

export default auth;
