import React from 'react';

function SingleUser({ users }) {
	return (
		<div className='col s12'>
			<ul className='collection'>
				{users.map(user => {
					return (
						<li className='collection-item avatar'>
							<img src={user.aviUrl} className='circle' />
							<span className='title'>
								<a href={`users/${user._id}`}>{user.username} </a>
							</span>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default SingleUser;
