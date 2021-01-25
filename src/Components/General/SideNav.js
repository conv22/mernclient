import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAxios from '../../hooks/axios.hook';

function SideNav() {
  const { request } = useAxios();
  const [input, setInput] = useState({ search: '' });
  const [searchResults, setSearchResults] = useState(null);
  const onSubmit = async (e) => {
    if (e.keyCode === 8) {
      return setSearchResults(null);
    }
    if (input.search.length > 2) {
      const response = await request('/main/search', 'post', input);
      return setSearchResults(response.data);
    }
    return null;
  };
  return (
    <ul id="nav-mobile" className="sidenav sidenav-fixed">
      <li className="search">
        <div className="search-wrapper">
          <div className="search-sidebar">
            <input
              name="search"
              id="search"
              placeholder="Search users"
              value={input.search}
              onChange={(e) => setInput({ search: e.target.value })}
              onKeyDown={(e) => onSubmit(e)}
            />

            <i className="material-icons">search</i>
          </div>
          <div className="search-results" />
          {searchResults ? (
            <ul>
              {' '}
              {searchResults.map((i) => (
                <li key={i._id}>
                  <a href={`/users/${i._id}`}>{i.username}</a>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </li>
      <li>
        <NavLink to="/profile">My page</NavLink>
      </li>
      <li>
        <NavLink to="/friends">My friends</NavLink>
      </li>
      <li>
        <NavLink to="/users">All users</NavLink>
      </li>

      <li>
        <NavLink to="/">All posts</NavLink>
      </li>
      <li>
        <NavLink to="/create-post">Create post</NavLink>
      </li>
    </ul>
  );
}

export default SideNav;
