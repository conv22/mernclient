import React, { useEffect, useState } from 'react';
import Loader from '../Components/Loader';
import { useAxios } from './../hooks/axios.hook';

function ProfilePage() {
	const [user, setUser] = useState([]);
	const { request, loading, error } = useAxios();

	useEffect(() => {
		loadUser();
	}, []);

	const loadUser = async () => {
		const response = await request('/main/profile', 'get', null);
		setUser(response.data);
	};

	if (loading) {
		return <Loader />;
	}
	return <div>Profile</div>;
}

export default ProfilePage;
