import React from 'react';

function SideNav() {
	return (
		<>
			<ul
				id='nav-mobile'
				className='sidenav sidenav-fixed'
				stype={{ transform: 'translateX(0px)' }}
			>
				<li>1</li>
				<li>2</li>
				<li>3</li>
			</ul>
		</>
	);
}

export default SideNav;
