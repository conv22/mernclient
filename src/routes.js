import { Switch, Route, Redirect } from 'react-router-dom';
import LoginPage from './Pages/Authentication/LoginPage';
import RegisterPage from './Pages/Authentication/RegisterPage';
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
};
export default useRoutes;
