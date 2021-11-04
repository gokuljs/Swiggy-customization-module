import React from 'react';
import swiggy from './swiggy.png'
import './navbar.styles.scss';
 const NavBar=()=>(
    <header className="header">
    <nav className="navbar">
        <a href="#" className="nav-logo"><img className="brand" src={swiggy}/></a>
        <ul className="nav-menu">
            <li className="nav-item">
                <a href="#" className="nav-link">Search</a>
            </li>
            <li className="nav-item">
                <a href="#" className="nav-link">offers</a>
            </li>
            <li className="nav-item">
                <a href="#" className="nav-link">Help</a>
            </li>
            <li className="nav-item">
                <a href="#" className="nav-link">Sign In</a>
            </li>
            <li className="nav-item">
                <a href="#" className="nav-link">Cart</a>
            </li>
        </ul>
        <div className="hamburger">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
        </div>
    </nav>
</header>

 )

 export default NavBar;