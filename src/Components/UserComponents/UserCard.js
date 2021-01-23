import React from 'react';
import { useSelector } from 'react-redux';
import { useAxios } from '../../hooks/axios.hook';
import { useParams } from 'react-router-dom';
function UserCard({ user }) {
	const { id } = useParams();
	const { request } = useAxios();
	const currentUser = useSelector(state => state.user.user);
	const makeFriendRequest = async () => {
		const data = await request(`/main/${id}/friendReq`, 'POST', null);
	};
	const buttons = () => {
		if (
			user.friends.some(
				friend => friend._id.toString() === currentUser.toString()
			)
		) {
			return (
				<div>
					<button>Remove from friends</button>{' '}
				</div>
			);
		}
		if (
			user.friendRequests.some(
				friend => friend._id.toString() === currentUser.toString()
			)
		) {
			return (
				<div>
					<span>Request sent</span>
					<button>Remove request</button>
				</div>
			);
		}
		return (
			<div>
				<button onClick={makeFriendRequest}>Make friend request</button>{' '}
			</div>
		);
	};
	return (
		<div className='row user-card'>
			<div className='col s4 user-avi'>
				<img src={user.aviUrl} />
			</div>

			<div className='col s8 user-description'>
				<h5>Username : {user.username}</h5>
				<h6>Email: {user.email}</h6>
				{buttons()}
			</div>
		</div>
	);
}

export default UserCard;
