import React, { useEffect, useState } from 'react';
import useAxios from '../hooks/axios.hook';
import Post from '../Components/Post';
import Loader from '../Components/General/Loader';
import Pagination from '../Components/General/Pagination';
import SideNav from '../Components/General/SideNav';

function MainPage() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const { error, loading, request } = useAxios();

  useEffect(() => {
    const loadData = async () => {
      const response = await request(`/main?page=${currentPage}`, 'get', null);
      setPosts(response.data.posts);
      setTotalPages(response.data.total);
    };
    loadData();
  }, [request, currentPage]);

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <h1 className="center-align">{error.message}</h1>;
  }
  if (posts.length > 0)
    return (
      <>
        <SideNav />
        <div>
          {posts.map((post) => (
            <li key={post._id}>
              <Post post={post} />
            </li>
          ))}
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={totalPages}
          />
        </div>
      </>
    );
  return (
    <>
      {' '}
      <SideNav />
      <h1 className="center-align"> No posts yet</h1>{' '}
    </>
  );
}

export default MainPage;
