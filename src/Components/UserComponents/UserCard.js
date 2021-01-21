import React from 'react';

function UserCard({ user }) {
	return (
		<div className='row'>
			<div className='col s8' style={{ display: 'flex' }}>
				<div className='card-image' style={{ flex: '1' }}>
					<img src={user.aviUrl} />
				</div>
				<div className='card-friends center-align' style={{ flex: '1' }}>
					friends
				</div>
				<div
					className='card-friends-request center-align'
					style={{ flex: '1' }}
				>
					friend requests
				</div>
			</div>
			<div className='row'>
				<div className='col s8'>
					<div className='user-description'>{user.username}</div>
				</div>
			</div>
		</div>
	);
}

export default UserCard;
