import { LOGIN, LOGOUT } from './../types';
const initialState = {
	token: null,
	userId: null,
	isAuthenticated: false,
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOGIN: {
			return {
				...state,
				token: action.payload.token,
				userId: action.payload.user,
				isAuthenticated: true,
			};
		}
		case LOGOUT: {
			return {
				...state,
				token: null,
				userId: null,
				isAuthenticated: false,
			};
		}
	}
};

export default userReducer;
