import React, { useEffect, useState, useCallback } from 'react';
import { useAxios } from './../hooks/axios.hook';
import Post from './../Components/Post';
import Loader from '../Components/Loader';

function MainPage() {
	const [posts, setPosts] = useState([]);
	const { error, loading, request } = useAxios();
	const loadData = useCallback(async () => {
		try {
			console.log(2);
			const data = await request('/main', 'get', null);
			console.log(data);
		} catch (err) {}
	}, [request]);
	useEffect(() => {
		loadData();
	}, [loadData]);

	if (loading) {
		return <Loader />;
	}

	return (
		<div>
			{posts.length > 0
				? posts.map(post => {
						return <Post post={post} />;
				  })
				: null}
			{error ? error : null}
		</div>
	);
}

export default MainPage;
