import { LOGIN, LOGIN_ERROR, LOGOUT } from '../types';

const user = JSON.parse(localStorage.getItem('user'));
const initialState = user
  ? {
      token: user.token,
      user: user.user,
      isAuthenticated: true,
    }
  : {
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
    case LOGIN_ERROR:
    case LOGOUT: {
      localStorage.removeItem('user');
      return {
        ...state,
        token: null,
        userId: null,
        isAuthenticated: false,
      };
    }
    default:
      return state;
  }
};

export default userReducer;
