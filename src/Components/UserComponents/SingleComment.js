import React from 'react';
import { useAxios } from '../../hooks/axios.hook';

function Comment({ comments }) {
	const { request } = useAxios();
	const likeComment = async id => {
		const data = await request(`/main/comment/${id}`, 'post', null);
	};
	return (
		<ul className='collection'>
			{comments.map(comment => {
				return (
					<li key={comment._id} className='collection-item avatar'>
						<img src={comment.owner.aviUrl} className='circle' />
						<span className='title'>{comment.owner.username}</span>
						<p>{comment.text}</p>
						<a
							href='#!'
							className='secondary-content'
							onClick={() => likeComment(comment._id)}
						>
							<i className='material-icons'>thumb_up</i>{' '}
							<span>{comment.likes.length}</span>
						</a>
					</li>
				);
			})}
		</ul>
	);
}

export default Comment;
