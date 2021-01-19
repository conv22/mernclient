import { Switch, Route, Redirect } from 'react-router-dom';
import LoginPage from './Pages/Authentication/LoginPage';
import RegisterPage from './Pages/Authentication/RegisterPage';
import MainPage from './Pages/MainPage';
import ProfilePage from './Pages/ProfilePage';
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
			{/* <Route path='/comments/:id' component={CommentPage} /> */}
			<Redirect to='/' />
		</Switch>
	);
};
export default useRoutes;
