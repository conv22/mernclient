import React from 'react';
import FriendRequestsComponent from './FriendRequestsComponent';

function UserCard({ user }) {
	return (
		<div className='row user-card'>
			<div className='col s4 user-avi'>
				<img src={user.aviUrl} />
			</div>

			<div className='col s4 user-description'>
				<h5>Username : {user.username}</h5>
				<h6>Email: {user.email}</h6>
			</div>
			{user.friendRequests ? (
				<div className='col s4 user-friends'>
					<h5>Latest friend requests</h5>
					<FriendRequestsComponent friends={user.friendRequests} />{' '}
				</div>
			) : null}
		</div>
	);
}

export default UserCard;
