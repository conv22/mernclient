import { Switch, Route, Redirect } from 'react-router-dom';
import LoginPage from './Pages/Authentication/LoginPage';
import RegisterPage from './Pages/Authentication/RegisterPage';
import MainPage from './Pages/MainPage';
import ProfilePage from './Pages/ProfilePage';
import CreatePost from './Pages/CreatePost';
import PostPage from './Pages/PostPage';
const useRoutes = isAuthenticated => {
	if (!isAuthenticated) {
		return (
			<Switch>
				<Route path='/register' exact component={RegisterPage} />
				<Route path='/' exact component={LoginPage} />
				<Redirect to='/' />
			</Switch>
		);
	}
	return (
		<Switch>
			<Route path='/' exact component={MainPage} />
			<Route path='/profile' exact component={ProfilePage} />
			<Route path='/post/:id' component={PostPage} />
			<Route path='/create-post' exact component={CreatePost} />
			<Redirect to='/' />
		</Switch>
	);
};
export default useRoutes;
