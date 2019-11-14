import React from 'react';
import Logo from '../logo.png';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from 'react-router-dom';

const Navagation = () => {
    return(   
        <div className="ui tiny borderless menu">
            <Link className="item" to="/">
                <img src={Logo}></img>
            </Link>
            <Link className="item" to="/profile-page">Profile Page</Link>
            <Link className="item" to="/posts/new">Create Post</Link>
            <Link className="item" to="/about-us">About Us</Link>

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