import React from 'react';
import { useAxios } from './../../hooks/axios.hook';

function FriendsComponent({ friends }) {
	const { request } = useAxios();
	const addFriend = async id => {
		const response = await request(`/main/${id}/addFriend`, 'post', null);
		return response;
	};
	return (
		<ul className='collection'>
			{friends.map(friend => {
				return (
					<li className='collection-item avatar' key={friend._id}>
						<img src={friend.aviUrl} className='circle' />
						<span className='title'>{friend.username}</span>
						<p>{friend.email}</p>
						<a
							href='#'
							className='secondary-content'
							onClick={() => addFriend(friend._id)}
						>
							<i className='material-icons'>add</i>
						</a>
					</li>
				);
			})}
		</ul>
	);
}

export default FriendsComponent;
