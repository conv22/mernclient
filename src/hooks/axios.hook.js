import { useState, useCallback } from 'react';
import axios from 'axios';
import authHeader from '../_helpers/auth-header';
import { useDispatch } from 'react-redux';

export const useAxios = () => {
	const dispatch = useDispatch();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const request = useCallback(
		async (url, method = 'get', data = null) => {
			try {
				setLoading(true);
				const config = {
					method,
					url,
					data,
					headers: authHeader(),
				};
				let res = await axios(config);
				setLoading(false);
				return res;
			} catch (err) {
				if (err.response.status === 401) {
					dispatch({ type: 'LOGOUT' });
				}
				setLoading(false);
				setError(err.response.message);

				throw err;
			}
		},
		[dispatch]
	);
	const clearErrors = useCallback(() => setError(null), []);

	return { loading, error, request, clearErrors };
};
