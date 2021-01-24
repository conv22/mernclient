import React from 'react';

function SingleUser({ users }) {
  return (
    <div className="col s12">
      <ul className="collection">
        {users.map((user) => (
          <li className="collection-item avatar" key={user._id}>
            <img src={user.aviUrl} alt="avi" className="circle" />
            <span className="title">
              <a href={`users/${user._id}`}>{user.username} </a>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SingleUser;
