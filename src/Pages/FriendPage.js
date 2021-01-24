import React, { useState, useEffect } from 'react';
import Loader from '../Components/General/Loader';
import useAxios from '../hooks/axios.hook';
import FriendsComponent from '../Components/UserComponents/FriendsComponent';
import FriendRequestsComponent from '../Components/UserComponents/FriendRequestsComponent';

function FriendPage() {
  const [friends, setFriends] = useState([]);
  const [friendRequests, setFriendRequests] = useState([]);
  const { loading, request } = useAxios();

  useEffect(() => {
    const loadData = async () => {
      const response = await request('/main/friends', 'get', null);
      setFriendRequests(response.data.friendRequests);
      setFriends(response.data.friends);
    };
    loadData();
  }, [request]);
  if (loading) {
    return <Loader />;
  }
  return (
    <div className="row">
      <div className="col s8">
        <h5>Friends</h5>
        {friends.length > 0 ? (
          <FriendsComponent friends={friends} />
        ) : (
          <div> No friends yet </div>
        )}
      </div>
      <div className="col s4">
        <h5>Requests</h5>
        {friendRequests.length > 0 ? (
          <FriendRequestsComponent friends={friendRequests} />
        ) : (
          <div> No requests yet </div>
        )}
      </div>
    </div>
  );
}

export default FriendPage;
