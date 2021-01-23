import React from 'react';
import { useAxios } from '../../hooks/axios.hook';
import { useSelector } from 'react-redux';

function Comment({ comments }) {
	const currentUser = useSelector(state => state.user.user);
	const { request } = useAxios();
	const likeComment = async id => {
		const data = await request(`/main/comment/${id}`, 'post', null);
	};
	const deleteComment = async id => {
		const data = await request(`/main/comment/${id}`, 'delete', null);
	};
	return (
		<ul className='collection'>
			{comments.map(comment => {
				return (
					<li key={comment._id} className='collection-item avatar'>
						<img src={comment.owner.aviUrl} className='circle' />
						<span className='title'>{comment.owner.username}</span>
						<p>{comment.text}</p>
						<a href='#!' className='secondary-content'>
							<i
								className='material-icons'
								onClick={() => likeComment(comment._id)}
							>
								thumb_up
							</i>{' '}
							<span>{comment.likes.length}</span>
							{currentUser === comment.owner._id.toString() ? (
								<i
									className='material-icons'
									onClick={() => deleteComment(comment._id)}
								>
									delete
								</i>
							) : null}
						</a>
					</li>
				);
			})}
		</ul>
	);
}

export default Comment;
