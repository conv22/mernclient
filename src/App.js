import React from 'react';
import 'materialize-css';
import './App.css';
import useRoutes from './routes';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Components/Navbar';
function App() {
	const routes = useRoutes(false);
	return (
		<Router>
			<Navbar />
			<div className='container'>{routes}</div>
		</Router>
	);
}

export default App;
