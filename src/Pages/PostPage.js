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

  if (post === null) {
    return null;
  }
  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <>
      <div className="row">
        <div className="col s6">
          <img src={post.imageUrl} alt="post img" />
        </div>
        <div className="col s6">
          <div className="row center-align">
            <div classNcame="col s12">
              {' '}
              <h2>{post.title} </h2>
            </div>
          </div>
          <div className="row">
            <div className="col s12">
              <p className="flow-text">{post.text}</p>
            </div>
          </div>
        </div>
      </div>
      <Comment comments={comments} id={id} />
    </>
  );
}
export default PostPage;
