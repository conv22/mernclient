import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAxios from '../hooks/axios.hook';
import Loader from '../Components/General/Loader';
import Comment from '../Components/UserComponents/Comment';

function PostPage() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState(null);
  const { request, error, loading } = useAxios();
  useEffect(() => {
    const loadData = async () => {
      const response = await request(`/main/posts/${id}`, 'get', null);
      setPost(response.data.post);
      setComments(response.data.comments);
    };
    loadData();
  }, [id, request]);
  if (loading) {
    return <Loader />;
  }

  if (post === null) {
    return null;
  }

  if (error) {
    return <h1 className="center-align">{error.message}</h1>;
  }
  return (
    <>
      <div className="row post-page">
        <div className="col s7">
          <img src={post.imageUrl} alt="Post" />
        </div>
        <div className="col s5">
          <span className="post-page-title">{post.title}</span>
          <p className="post-page-p">{post.text}</p>
        </div>
      </div>
      <Comment comments={comments} id={id} />
    </>
  );
}
export default PostPage;
