import React, { useState } from 'react';
import useAxios from '../../hooks/axios.hook';
import SingleComment from './SingleComment';

function Comment({ comments, id }) {
  const { request } = useAxios();
  const [text, setText] = useState('');
  const sendComment = async () => {
    const data = await request(`/main/posts/${id}/addComment`, 'post', {
      text,
    });
    return data;
  };
  return (
    <>
      <div className="divider" />
      <div className="row">
        <div className="col s12">
          {comments !== null && comments.length > 0 ? (
            <SingleComment comments={comments} />
          ) : null}
          <div className="input-field">
            <input
              type="text"
              name="text"
              placeholder="Comment something"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button type="button" className="btn" onClick={sendComment}>
              <i className="material-icons">send</i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Comment;
