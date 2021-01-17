import { useState, useCallback } from 'react';

const useHttp = () => {
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	const request = useCallback(
		async (url, method = 'GET', body = null, headers = {}) => {
			try {
				if (body) {
					body = JSON.stringify(body);
					headers['Content-type'] = 'application/json';
				}
				setLoading(true);
				const response = await fetch(url, {
					method,
					body,
					headers,
				});
				if (!response.ok) {
					throw new Error(response.message || 'Unknown problem in fetching');
				}
				const data = await response.json();
				setLoading(false);
				return data;
			} catch (e) {
				setLoading(false);
				setError(e.message || 'Something went wrong');
			}
		},
		[]
	);

	return { loading, request, error };
};

export default useHttp;
