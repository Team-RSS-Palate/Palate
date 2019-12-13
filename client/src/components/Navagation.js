import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavItem from 'react-bootstrap/NavItem';
import NavCollapse from 'react-bootstrap/NavbarCollapse';

import Logo from '../images/Logo.svg';

import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom';

const navBarStyles = {
	fontFamily: 'Roboto',
	fontWeight: 'Bold',
	fontSize: '16px',
	lineHeight: '19px',
	lineHeight: '100%',
	letterSpacing: '0.05em',
	color: '#000',
	paddingTop: '3%',
	paddingBottom: '3%',
	textDecoration: 'none'
};

const logoStyles = {
	fontFamily: 'Roboto',
	fontStyle: 'normal',
	fontWeight: 'bold',
	fontSize: '20px',
	lineHeight: '23px',
	letterSpacing: '0.1em',
	margin: '0 3%',
	color: 'red',
	paddingTop: '3%',
	paddingBottom: '3%'
};

const buttonStyles = {
	background: '#FD5C63'
};

const Navagation = () => {
	return (
		<Navbar collapseOnSelect expand="lg" bg="light" variant="light">
			<Navbar.Brand>
				<Link style={logoStyles} to="/">
					<img src={Logo} />
				</Link>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link>
						<Link to="/profile-page" style={navBarStyles}>
							Profile Page
						</Link>
					</Nav.Link>
					<Nav.Link>
						<Link to="/posts/new" style={navBarStyles}>
							Create Post
						</Link>
					</Nav.Link>
					<Nav.Link>
						<Link to="/about-us" style={navBarStyles}>
							About Us
						</Link>
					</Nav.Link>
				</Nav>
				<Nav>
					<Nav.Link>
						<Link to="/user/signin">
							<div className="ui primary button">Sign-In</div>
						</Link>
					</Nav.Link>
					<Nav.Link>
						<Link to="/user/signup">
							<div className="ui primary button">Sign-Up</div>
						</Link>
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Navagation;
