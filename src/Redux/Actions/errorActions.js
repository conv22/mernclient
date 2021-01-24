import { SET_ERROR, CLEAR_ERROR } from '../types';

export const returnErrors = (message, status, id = null) => ({
  type: SET_ERROR,
  payload: { message, status, id },
});

export const clearErrors = () => ({
  type: CLEAR_ERROR,
});
