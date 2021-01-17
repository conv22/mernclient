import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
	return (
		<nav>
			<div className='nav-wrapper blue lighten-2' style={{ padding: '0 2rem' }}>
				<span className='brand-logo'>
					MERN network
					<a href='/'>
						<i className='material-icons right' style={{ cursor: 'pointer' }}>
							home
						</i>
					</a>
				</span>

				<ul id='nav-mobile' className='right hide-on-med-and-down'>
					<li>
						<NavLink to='/login'> Login</NavLink>
					</li>
					<li>
						<NavLink to='/register'>Register</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
