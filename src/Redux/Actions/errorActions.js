import { SET_ERROR, CLEAR_ERROR } from './../types';

export const returnErrors = (message, status, id = null) => {
	return {
		type: SET_ERROR,
		payload: { message, status, id },
	};
};

export const clearErrors = () => {
	return {
		type: CLEAR_ERROR,
	};
};
