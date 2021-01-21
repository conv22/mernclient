import React from 'react';

function Pagination({ currentPage, setCurrentPage, totalPages }) {
	const pages = new Array(totalPages).fill(null);
	return (
		<ul className='pagination center-align'>
			{pages.map((page, i) => {
				return (
					<li
						className='waves-effect'
						key={i}
						onClick={() => setCurrentPage(i)}
					>
						<a>{i + 1}</a>
					</li>
				);
			})}
		</ul>
	);
}

export default Pagination;
