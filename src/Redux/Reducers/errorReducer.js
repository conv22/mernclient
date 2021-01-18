import { SET_ERROR, CLEAR_ERROR } from './../types';

const initialState = {
	message: null,
	status: null,
	id: null,
};

const errorReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_ERROR: {
			return {
				...state,
				message: action.payload.message,
				status: action.payload.status,
				id: action.payload.id,
			};
		}
		case CLEAR_ERROR: {
			return {
				...state,
				message: null,
				status: null,
				id: null,
			};
		}
		default:
			return state;
	}
};

export default errorReducer;
