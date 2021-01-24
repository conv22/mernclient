import React, { useEffect, useState } from 'react';
import useAxios from '../hooks/axios.hook';
import Loader from '../Components/General/Loader';
import ProfileCard from '../Components/UserComponents/ProfileCard';
import UserPosts from '../Components/UserComponents/UserPosts';

function ProfilePage() {
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);
  const { request, loading, error } = useAxios();

  useEffect(() => {
    const loadUser = async () => {
      const response = await request('/main/profile', 'get', null);
      setUser(response.data.user);
      setPosts(response.data.userPosts);
    };
    loadUser();
  }, [request]);

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <div>
      <ProfileCard user={user} />
      {posts.length > 0 ? (
        <div className="row user-post">
          <ul>
            {posts.map((post) => (
              <li key={post._id}>
                <UserPosts post={post} />
              </li>
            ))}{' '}
          </ul>
        </div>
      ) : null}
    </div>
  );
}

export default ProfilePage;
