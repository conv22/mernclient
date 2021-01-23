import React from 'react';

function UserPosts({ post }) {
	return (
		<div className='col s4 center-align'>
			<a href={`/post/${post._id}`}>
				<img className='user-post-img' src={post.imageUrl} />{' '}
			</a>
		</div>
	);
}

export default UserPosts;
