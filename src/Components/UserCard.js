import React from 'react';

function UserCard({ user }) {
	return (
		<div className='row'>
			<div className='col s12 m7 offset-m3'>
				<div className='card profile-card'>
					<div className='card-image profile-image'>
						<img src={user.aviUrl} />
						<span className='card-title'>{user.username}</span>
					</div>
					<div className='card-content'>
						<p>{user.name}</p>
					</div>
					<div className='card-action'>
						<a href='#'>This is a link</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default UserCard;
