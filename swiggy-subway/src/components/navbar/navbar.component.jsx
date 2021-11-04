import React from 'react';
import swiggy from './swiggy.png';
import percent from './percent.png';
import './navbar.styles.scss';
 const NavBar=()=>(
    <header className="header">
    <nav className="navbar">
        <a href="#" className="nav-logo"><img className="brand" src={swiggy}/></a>
        <ul className="nav-menu">
            <li className="nav-item">
                <a href="#" className="nav-link"><i class="fas fa-search"></i>Search</a>
            </li>
            <li className="nav-item">
                <a href="#" className="nav-link"><i class="fas fa-percentage"></i>offers</a>
            </li>
            <li className="nav-item">
                <a href="#" className="nav-link"><i class="far fa-life-ring"></i>Help</a>
            </li>
            <li className="nav-item">
                <a href="#" className="nav-link"><i class="far fa-user"></i>Sign In</a>
            </li>
            <li className="nav-item">
                <a href="#" className="nav-link"><i class="fas fa-cart-plus"></i>Cart</a>
            </li>
        </ul>
        {/* <div className="hamburger">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
        </div> */}
    </nav>
</header>

 )

 export default NavBar;