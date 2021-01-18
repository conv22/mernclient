import { useState, useCallback } from 'react';
import axios from 'axios';
import authHeader from '../_helpers/auth-header';

export const useAxios = () => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const request = useCallback(async (url, method = 'get', data = null) => {
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
			if (!res.ok) {
				throw new Error(res.data.message || 'Something went wrong');
			}
			return res;
		} catch (err) {
			setLoading(false);
			setError(err.response);
			throw err;
		}
	}, []);
	const clearErrors = useCallback(() => setError(null), []);

	return { loading, error, request, clearErrors };
};
