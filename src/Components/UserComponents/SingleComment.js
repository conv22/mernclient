import React from 'react';
import { useSelector } from 'react-redux';
import useAxios from '../../hooks/axios.hook';

function Comment({ comments }) {
  const currentUser = useSelector((state) => state.user.user);
  const { request } = useAxios();
  const likeComment = async (id) => {
    const data = await request(`/main/comment/${id}`, 'post', null);
    window.location.reload();
    return data;
  };
  const deleteComment = async (id) => {
    const data = await request(`/main/comment/${id}`, 'delete', null);
    window.location.reload();
    return data;
  };

  return (
    <ul className="collection">
      {comments.map((comment) => (
        <li key={comment._id} className="collection-item avatar">
          <img src={comment.owner.aviUrl} alt="avi" className="circle" />
          <a href={`/users/${comment.owner._id}`} className="title">
            {comment.owner.username}
          </a>
          <p>{comment.text}</p>
          <a href="#!" className="secondary-content">
            <button
              type="button"
              className="comment-btn"
              onClick={() => likeComment(comment._id)}
            >
              <i className="material-icons">thumb_up</i>
            </button>
            <span className="grey-text">{comment.likes.length}</span>
            {currentUser === comment.owner._id.toString() ? (
              <button
                onClick={() => deleteComment(comment._id)}
                className="comment-btn"
                type="button"
              >
                <i className="material-icons">delete</i>
              </button>
            ) : null}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Comment;
