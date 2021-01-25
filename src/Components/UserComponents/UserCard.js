import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import useAxios from '../../hooks/axios.hook';

function UserCard({ user }) {
  const { id } = useParams();
  const { request } = useAxios();
  const currentUser = useSelector((state) => state.user.user);
  const makeFriendRequest = async () => {
    const response = await request(`/main/${id}/friendReq`, 'POST', null);
    window.location.reload();
    return response;
  };
  const deleteFriendRequest = async () => {
    const response = await request(`/main/${id}/deleteRequest`, 'DELETE', null);
    window.location.reload();
    return response;
  };
  const deleteFromFriends = async () => {
    const response = await request(`/main/${id}/deleteFriend`, 'DELETE', null);
    window.location.reload();
    return response;
  };

  const buttons = () => {
    if (
      user.friends.some(
        (friend) => friend._id.toString() === currentUser.toString()
      )
    ) {
      return (
        <div>
          <button
            type="button"
            className="btn blue lighten-2"
            onClick={deleteFromFriends}
          >
            Remove from friends
          </button>{' '}
        </div>
      );
    }
    if (
      user.friendRequests.some(
        (friend) => friend._id.toString() === currentUser.toString()
      )
    ) {
      return (
        <div>
          <button
            type="button"
            onClick={deleteFriendRequest}
            className="btn blue lighten-2"
          >
            Remove request{' '}
          </button>
        </div>
      );
    }
    return (
      <div>
        <button
          type="button"
          className="btn blue lighten-2"
          onClick={makeFriendRequest}
        >
          Make friend request
        </button>{' '}
      </div>
    );
  };
  return (
    <div className="row user-card">
      <div className="col s2">
        <img src={user.aviUrl} alt="user-avi" />
      </div>

      <div className="col s10 user-description">
        <h5>Username : {user.username}</h5>
        <h6>Email: {user.email}</h6>
        {buttons()}
      </div>
    </div>
  );
}

export default UserCard;
