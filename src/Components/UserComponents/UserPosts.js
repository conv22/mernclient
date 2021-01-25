import React from 'react';

function UserPosts({ post }) {
  return (
    <div className="col m4 center-align">
      <a href={`/post/${post._id}`}>
        <img className="user-post-img" alt="user-post" src={post.imageUrl} />{' '}
      </a>
    </div>
  );
}

export default UserPosts;
