// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode';
import {
  GET_USER_FROM_LOCALSTORAGE,
  LOGIN_USER,
  LOGOUT_USER,
  SET_LOADING,
  SET_SEARCH_FIELDS,
  // CHANGE_VALUES,
  // VERIFY_USER,
} from './constants';

import authService from '../services/auth';

// export const verifyAccount = async () => {
//   localStorage.setItem('token', data.token);
//   const decoded = jwt_decode(data.token);
// }

export const loginUser = async (dispatch, user) => {
  dispatch({ type: SET_LOADING, payload: true });

  try {
    const response = await authService.loginAccount(user);

    const data = await response.json();

    if (response.ok) {
      localStorage.setItem('token', data.token);
      const decoded = jwt_decode(data.token);
      dispatch({ type: LOGIN_USER, payload: decoded });
    }
  } catch (error) {
    console.error(error);
  } finally {
    dispatch({ type: SET_LOADING, payload: false });
  }
};

export const logout = (dispatch) => {
  localStorage.removeItem('token');

  dispatch({ type: LOGOUT_USER, payload: null });
};

export const getUserFromLocalStorage = (dispatch) => {
  const token = localStorage.getItem('token');
  if (token) {
    const decoded = jwt_decode(token);
    dispatch({ type: GET_USER_FROM_LOCALSTORAGE, payload: decoded });
  }
};

export const setSearchFieldsForm = (dispatch, form) => {
  dispatch({ type: SET_SEARCH_FIELDS, payload: form });
};

// export const changeValues = (dispatch) => {
//   dispatch()
// };
