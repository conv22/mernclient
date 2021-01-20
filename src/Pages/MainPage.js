import React, { useEffect, useState } from 'react';
import { useAxios } from './../hooks/axios.hook';
import Post from './../Components/Post';
import Loader from '../Components/Loader';
import SideNav from '../Components/SideNav';

function MainPage() {
	const [posts, setPosts] = useState([]);
	const { error, loading, request } = useAxios();

	useEffect(() => {
		const loadData = async () => {
			const res = await request('/main', 'get', null);
			const data = res.data;
			setPosts(data);
		};
		loadData();
	}, [request]);

	const listItems = posts.map(post => {
		return (
			<li key={post._id}>
				<Post post={post} />{' '}
			</li>
		);
	});

	if (loading) {
		return <Loader />;
	}

	return (
		<div>
			{posts.length > 0 ? listItems : null}
			{error ? error : null}
		</div>
	);
}

export default MainPage;
