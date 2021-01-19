import React from 'react';

function Post({ post }) {
	return (
		<div className='row'>
			<div className='col s12 m6 offset-m3'>
				<div className='card'>
					{/* <div className="card-image">
          <img src="images/sample-1.jpg"> */}
					{/* <span className="card-title">Card Title</span>
        </div> */}
					<div className='card-content'>
						<p>{post.text}</p>
					</div>
					<div className='card-action' style={styles.cardAction}>
						<a href={`/comments/${post._id}`}>
							Comments {post.comments.length}
						</a>
						<div className='icon-div'>
							<i className='material-icons' style={styles.icon}>
								thumb_up
							</i>
							<span>{post.likes.length}</span>
							<i className='material-icons' style={styles.icon}>
								thumb_down
							</i>
							<span>{post.dislikes.length}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

const styles = {
	icon: {
		color: '#grey',
		margin: '0 8px',
		cursor: 'pointer',
	},
	cardAction: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
};

export default Post;
