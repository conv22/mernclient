import React from 'react';
import uuid from 'react-uuid';
import useAxios from '../../hooks/axios.hook';

function FriendsComponent({ friends }) {
  const { request } = useAxios();
  const deleteFriend = async (id) => {
    const response = await request(`/main/${id}/deleteFriend`, 'delete', null);
    return response;
  };
  return (
    <ul className="collection">
      {friends.map((friend, i) => (
        <li className="collection-item avatar" key={uuid()}>
          <img src={friend.aviUrl} alt="avi" className="circle" />
          <span className="title">{friend.username}</span>
          <p>{friend.email}</p>
          <button
            type="button"
            className="secondary-content"
            onClick={() => deleteFriend(friend._id)}
          >
            <i className="material-icons">delete</i>
          </button>
        </li>
      ))}
    </ul>
  );
}

export default FriendsComponent;
