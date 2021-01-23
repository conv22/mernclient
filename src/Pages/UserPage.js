import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useAxios } from '../hooks/axios.hook';
import { useParams } from 'react-router-dom';
import UserCard from './../Components/UserComponents/UserCard';
import UserPosts from './../Components/UserComponents/UserPosts';
import Loader from '../Components/General/Loader';
import { Redirect } from 'react-router-dom';

function UserPage() {
	const me = useSelector(state => state.user.user);
	const { id } = useParams();
	const [user, setUser] = useState(null);
	const [posts, setPosts] = useState([]);
	const { request, loading } = useAxios();
	useEffect(() => {
		let mounted = true;
		const loadData = async () => {
			const response = await request(`/main/user/${id}`, 'get', null);
			if (mounted) {
				setUser(response.data.user);
				setPosts(response.data.posts);
			}
		};
		loadData();
		return () => {
			mounted = false;
		};
	}, [id, request]);
	if (id === me) {
		return <Redirect to='/profile' />;
	}
	if (loading) {
		return <Loader />;
	}

	if (user !== null) {
		return (
			<div>
				<UserCard user={user} />
				{posts.length > 0 ? (
					<div className='row user-post'>
						<ul>
							{posts.map(post => (
								<li key={post._id}>
									<UserPosts post={post} />
								</li>
							))}{' '}
						</ul>
					</div>
				) : null}
			</div>
		);
	}
	return <div>Hello</div>;
}

export default UserPage;
