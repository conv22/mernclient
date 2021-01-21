import React, { useState, useCallback } from 'react';
import { useAxios } from '../hooks/axios.hook';

function Post({ post }) {
	const { request } = useAxios();

	const likePost = async id => {
		try {
			const like = await request(`/main/${id}/like`, 'post', null);
			return like;
		} catch (e) {}
	};

	return (
		<div className='row'>
			<div className='col s12 m6 offset-m3'>
				<div className='card'>
					<div className='card-title center-align grey lighten-3'>
						<a href={`/post/${post._id}`}>{post.title} </a>
					</div>
					<div className='card-image'>
						{' '}
						<img src={post.imageUrl} />{' '}
					</div>
					<div className='card-action grey lighten-3' style={styles.cardAction}>
						<a href={`/comments/${post._id}`}>
							Comments {post.comments.length}
						</a>
						<div className='icon-div' style={styles.iconDiv}>
							<i
								className='material-icons'
								style={styles.icon}
								onClick={() => likePost(post._id)}
							>
								favorite
							</i>
							<span>{post.likes.length}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

const styles = {
	iconDiv: {
		display: 'flex',
		alignItems: 'center',
	},
	icon: {
		color: 'grey',
		margin: '0 8px',
		cursor: 'pointer',
		transition: '0.3s',
	},
	iconActive: {
		color: 'red',
		transform: 'translateY(10px)',
		cursor: 'pointer',
		transition: '0.3s',
	},
	cardAction: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
};

export default Post;
