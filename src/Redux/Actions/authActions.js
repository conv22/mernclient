import axios from 'axios';
import { LOGIN, LOGIN_ERROR, REGISTER_ERROR, LOGOUT } from '../types';
import { returnErrors } from './errorActions';

const API_LOGIN = '/auth/login';

const API_REGISTER = '/auth/register';

export const login = (info) => async (dispatch) => {
  try {
    const response = await axios.post(API_LOGIN, { ...info });
    if (response.data.token && response.data.user) {
      localStorage.setItem(
        'user',
        JSON.stringify({
          token: response.data.token,
          user: response.data.user,
        })
      );
      dispatch({
        type: LOGIN,
        payload: { user: response.data.user, token: response.data.token },
      });
    }
    return response.data;
  } catch (err) {
    dispatch({ type: LOGIN_ERROR });
    dispatch(
      returnErrors(
        err.response.data.message,
        err.response.status,
        'LOGIN ERROR'
      )
    );
    return err;
  }
};

export const register = (info) => async (dispatch) => {
  try {
    const config = {
      method: 'post',
      url: API_REGISTER,
      data: info,
    };
    const request = await axios(config);
    return request;
  } catch (err) {
    dispatch({ type: REGISTER_ERROR });
    dispatch(
      returnErrors(
        err.response.data.message,
        err.response.status,
        'Register error'
      )
    );
    return err;
  }
};

export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT });
};
