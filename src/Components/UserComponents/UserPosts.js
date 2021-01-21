import React from 'react';

function UserPosts({ post }) {
	return (
		<div className='col s4 center-align user-post'>
			<a href={`/post/${post._id}`}>
				<img style={{ maxWidth: '100%' }} src={post.imageUrl} />{' '}
			</a>
		</div>
	);
}

export default UserPosts;
