import React from 'react';

function MessagerPage() {
	return (
		<div className='row'>
			<div className='col s4'>
				<div className='messanger-user'>Avatar Username</div>
				<div className='search-box'>
					<div className='input-field'>
						<i className='material-icons'>search</i>
						<input type='text' placeholder='Search user' />
					</div>
					<div className='messanger-friends'>
						<ul>
							<li>1</li>
							<li>1</li>
							<li>1</li>
						</ul>
					</div>
				</div>
			</div>
			<div className='col s8'>
				<div className='messanger-receiver'>Avi Username</div>
				<div className='messanger-chat'>
					<ul>
						<li>1</li>
						<li>1</li>
						<li>1</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default MessagerPage;
