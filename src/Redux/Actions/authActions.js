import {
	LOGIN,
	LOGIN_ERROR,
	REGISTER,
	REGISTER_ERROR,
	LOGOUT,
} from './../types';
import { returnErrors, clearErrors } from './errorActions';
import axios from 'axios';

const API_LOGIN = '/auth/login';

const API_REGISTER = '/auth/register';

export const login = info => async dispatch => {
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
		console.log(err);
		console.log(err.response);
		dispatch({ type: LOGIN_ERROR });
		dispatch(
			returnErrors(
				err.response.data.message,
				err.response.status,
				'LOGIN ERROR'
			)
		);
	}
};

export const register = info => async dispatch => {
	try {
		const response = await axios.post(API_REGISTER, { ...info });
	} catch (err) {
		console.log(err);
		dispatch({ type: REGISTER_ERROR });
		dispatch(
			returnErrors(
				err.response.data.message,
				err.response.status,
				'Register error'
			)
		);
	}
};

export const logout = () => dispatch => {
	localStorage.removeItem('user');
	dispatch({ type: LOGOUT });
};
