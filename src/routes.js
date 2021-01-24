import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import LoginPage from './Pages/Authentication/LoginPage';
import RegisterPage from './Pages/Authentication/RegisterPage';
import MainPage from './Pages/MainPage';
import ProfilePage from './Pages/ProfilePage';
import CreatePost from './Pages/CreatePost';
import PostPage from './Pages/PostPage';
import UserPage from './Pages/UserPage';
import MessagerPage from './Pages/MessagerPage';
import FriendPage from './Pages/FriendPage';
import GlobalUserPage from './Pages/GlobalUserPage';
import SideNav from './Components/General/SideNav';

const useRoutes = (isAuthenticated) => {
  if (!isAuthenticated) {
    return (
      <Switch>
        <Route path="/register" exact component={RegisterPage} />
        <Route path="/" exact component={LoginPage} />
        <Redirect to="/" />
      </Switch>
    );
  }
  return (
    <Switch>
      <Route path="/" exact component={MainPage} />
      <Route path="/profile" exact component={ProfilePage} />
      <Route path="/post/:id" component={PostPage} />
      <Route path="/create-post" exact component={CreatePost} />
      <Route path="/users/:id" component={UserPage} />
      <Route path="/messager" exact component={MessagerPage} />
      <Route path="/friends" exact component={FriendPage} />
      <Route path="/users" exact component={GlobalUserPage} />
      <Route path="/blank" component={SideNav} />
      <Redirect to="/" />
    </Switch>
  );
};
export default useRoutes;
