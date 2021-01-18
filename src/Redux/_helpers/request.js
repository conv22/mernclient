import axios from 'axios';
import authHeader from './auth-header';

export const get_request = url => {
	return axios.get(url, { headers: authHeader() });
};

export const delete_request = url => {
	return axios.delete(url, { headers: authHeader() });
};
