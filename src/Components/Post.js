import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import useAxios from '../hooks/axios.hook';

function Post({ post }) {
  const [liked, setLiked] = useState(false);
  const user = useSelector((state) => state.user);
  const { request } = useAxios();

  useEffect(() => {
    if (post.likes.some((like) => like.user === user.user)) {
      return setLiked(true);
    }
    return setLiked(false);
  }, [post, user]);

  const likePost = async (id) => {
    try {
      const like = await request(`/main/${id}/like`, 'post', null);
      setLiked(!liked);
      return like;
    } catch (e) {
      return e;
    }
  };

  return (
    <div className="row">
      <div className="col s12 m6 offset-m3">
        <div className="card">
          <div className="card-title center-align grey lighten-3">
            <a href={`/post/${post._id}`}>{post.title} </a>
          </div>
          <div className="card-image">
            {' '}
            <img src={post.imageUrl} alt="post-img" />{' '}
          </div>
          <div className="card-action grey lighten-3 post-cardaction">
            <a href={`/users/${post.owner._id}`}>
              Posted by {post.owner.username}
            </a>
            <div className="icon-div post-icon-div">
              <button
                type="button"
                className="post-like-btn"
                onClick={() => likePost(post._id)}
              >
                <i
                  className={
                    liked
                      ? 'material-icons post-icon active'
                      : 'material-icons post-icon'
                  }
                >
                  favorite
                </i>
              </button>
              <span>{liked ? post.likes.length + 1 : post.likes.length}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
