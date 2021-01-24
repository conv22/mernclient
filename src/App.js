import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useRoutes from './routes';
import Navbar from './Components/General/Navbar';
import 'materialize-css';
import './App.css';

function App() {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const routes = useRoutes(isAuthenticated);
  return (
    <Router>
      <Navbar />
      <div className="container">{routes}</div>
    </Router>
  );
}

export default App;
