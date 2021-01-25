import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function Navbar() {
  const user = useSelector((state) => state.user);
  useEffect(() => {
    window.M.AutoInit();
  }, []);

  const dispatch = useDispatch();
  const navRoutes = () => {
    if (!user.isAuthenticated) {
      return (
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <NavLink to="/login"> Login</NavLink>
          </li>
          <li>
            <NavLink to="/register">Register</NavLink>
          </li>
        </ul>
      );
    }
    return (
      <>
        <ul id="dropdown1" className="dropdown-content">
          <li>
            <NavLink to="/profile" className="blue-text">
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink to="/friends" className="blue-text">
              Friends
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className="blue-text">
              Feed
            </NavLink>
          </li>
          <li className="divider" />
          <li>
            <a
              className="blue-text"
              href="/logout"
              onClick={() => {
                dispatch({ type: 'LOGOUT' });
              }}
            >
              Log out
            </a>
          </li>
        </ul>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <NavLink to="/create-post">
              <i className="material-icons">add</i>
            </NavLink>
          </li>
          <li>
            <a className="dropdown-trigger" href="#!" data-target="dropdown1">
              <div className="nav-dropdown">
                <img
                  src={user.avatar}
                  alt="user-avi"
                  className="circle nav-avi"
                />
                <i className="material-icons right">arrow_drop_down</i>
              </div>
            </a>
          </li>
        </ul>
      </>
    );
  };

  return (
    <nav>
      <div className="nav-wrapper blue lighten-2" style={{ padding: '0 2rem' }}>
        <span className="brand-logo">
          MERN network
          <a href="/">
            <i className="material-icons right" style={{ cursor: 'pointer' }}>
              home
            </i>
          </a>
        </span>
        {navRoutes()}
      </div>
    </nav>
  );
}

export default Navbar;
