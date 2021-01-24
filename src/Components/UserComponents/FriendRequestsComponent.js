import React from 'react';
import useAxios from '../../hooks/axios.hook';

function FriendsComponent({ friends }) {
  const { request } = useAxios();
  const addFriend = async (id) => {
    const response = await request(`/main/${id}/addFriend`, 'post', null);
    return response;
  };
  return (
    <ul className="collection">
      {friends.map((friend) => (
        <li className="collection-item avatar" key={friend._id}>
          <img src={friend.aviUrl} alt="avi" className="circle" />
          <span className="title">{friend.username}</span>
          <p>{friend.email}</p>
          <button
            type="button"
            className="secondary-content"
            onClick={() => addFriend(friend._id)}
          >
            <i className="material-icons">add</i>
          </button>
        </li>
      ))}
    </ul>
  );
}

export default FriendsComponent;
