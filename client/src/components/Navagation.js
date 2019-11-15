import React from 'react';
// import Logo from '../logo.png';
import Logo from "../images/Logo.svg";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from 'react-router-dom';

const navBarStyles = {
  fontFamily: 'Roboto',
  fontWeight: 'Bold',
  fontSize: '16px',
  lineHeight: '19px',
  lineHeight: '100%',
  letterSpacing: '0.05em',
  margin: '0 3%',
  color: '#000',
  paddingTop: '3%',
  paddingBottom: '3%',
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
  paddingBottom: '3%',
};

 const buttonStyles = {
   background: '#FD5C63',
 }


const Navagation = () => {
    return(
        <div className="ui tiny borderless menu">
            <Link  style={logoStyles} to="/">
                <img src={Logo}></img>
            </Link>
            <Link  style={navBarStyles} className='item' to="/profile-page">Profile Page</Link>
            <Link  style={navBarStyles} className='item' to="/posts/new">Create Post</Link>
            <Link  style={navBarStyles} className='item' to="/about-us">About Us</Link>

            <div className="right menu">
                <Link className="item" to="/user/signin">
                    <div className="ui primary button">Sign-In</div>
                </Link>
                <Link className="item" to="/user/signup">
                    <div className="ui primary button">Sign-Up</div>
                </Link>
            </div>
        </div>


    );}

export default Navagation;
