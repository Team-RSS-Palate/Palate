import React from 'react';
import './App.css';
import Navagation from './components/Navagation';
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom';
import AboutUsPage from './pages/AboutUsPage';
import HomePage from './pages/HomePage';
import LogInPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import CreatePostPage from './pages/CreatePostPage';
import Profilepage from './pages/ProfilePage';
import ShowPostPage from './pages/ShowPostPage';
import './App.css';

function App() {
	return (
		<Router>
			<Navagation />
			<Switch>
				<Route path="/about-us" component={AboutUsPage} />
				<Route path="/user/signin" component={LogInPage} />
				<Route path="/user/signup" component={SignUpPage} />
				<Route path="/profile-page" component={Profilepage} />
				<Route path="/posts/new" component={CreatePostPage} />
				<Route path="/posts/:id" component={ShowPostPage} />
				<Route path="/" component={HomePage} />
			</Switch>
		</Router>
	);
}

export default App;
