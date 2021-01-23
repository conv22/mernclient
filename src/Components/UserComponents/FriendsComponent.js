import React from 'react';
import { useAxios } from '../../hooks/axios.hook';
function FriendsComponent({ friends }) {
	const { request } = useAxios();
	const deleteFriend = async id => {
		const response = await request(`/main/${id}/deleteFriend`, 'delete', null);
		return response;
	};
	return (
		<ul className='collection'>
			{friends.map((friend, i) => {
				return (
					<li className='collection-item avatar' key={i}>
						<img src={friend.aviUrl} className='circle' />
						<span className='title'>{friend.username}</span>
						<p>{friend.email}</p>
						<a
							href='#'
							className='secondary-content'
							onClick={() => deleteFriend(friend._id)}
						>
							<i className='material-icons'>delete</i>
						</a>
					</li>
				);
			})}
		</ul>
	);
}

export default FriendsComponent;
