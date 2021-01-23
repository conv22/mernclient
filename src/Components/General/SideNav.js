import React from 'react';
import { NavLink } from 'react-router-dom';

function SideNav() {
	return (
		<ul id='nav-mobile' className='sidenav sidenav-fixed'>
			<li className='search'>
				<div className='search-wrapper'>
					<div style={{ display: 'flex', alignItems: 'center' }}>
						<input name='search' id='search' placeholder='Search users' />

						<i className='material-icons'>search</i>
					</div>

					<div className='search-results'></div>
				</div>
			</li>
			<li>
				<NavLink to='/profile'>My page</NavLink>
			</li>
			<li>
				<NavLink to='/friends'>My friends</NavLink>
			</li>

			<li>
				<NavLink to='/'>All posts</NavLink>
			</li>
			<li>
				<NavLink to='/create-post'>Create post</NavLink>
			</li>
		</ul>
	);
}

export default SideNav;
