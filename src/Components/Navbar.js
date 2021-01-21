import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { logout } from './../Redux/Actions/authActions';
import { useDispatch, useSelector } from 'react-redux';

function Navbar() {
	const isAuthenticated = useSelector(state => state.user.isAuthenticated);

	const dispatch = useDispatch();
	const navRoutes = () => {
		if (!isAuthenticated) {
			return (
				<ul id='nav-mobile' className='right hide-on-med-and-down'>
					<li>
						<NavLink to='/login'> Login</NavLink>
					</li>
					<li>
						<NavLink to='/register'>Register</NavLink>
					</li>
				</ul>
			);
		}
		return (
			<ul id='nav-mobile' className='right hide-on-med-and-down'>
				<li>
					<NavLink to='/'>Feed</NavLink>
				</li>
				<li>
					<NavLink to='/profile'>Profile</NavLink>
				</li>
				<li>
					<NavLink to='/create-post'>
						<i className='material-icons'>add</i>
					</NavLink>
				</li>
				<li>
					<a href='/logout' onClick={dispatch(logout)}>
						Log out
					</a>
				</li>
			</ul>
		);
	};

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
				{navRoutes()}
			</div>
		</nav>
	);
}

export default Navbar;
