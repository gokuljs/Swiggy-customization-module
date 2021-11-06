import React from 'react';
import swiggy from './swiggy.png';
import percent from './percent.png';
import './navbar.styles.scss';
 const NavBar=()=>(
    <header className="header">
    <nav className="navbar">
        <div className="nav-left">
        <div className="left-1">
        <a href="#" className="nav-logo"><img className="brand" src={swiggy}/></a>

        </div>
        <div className="left-2">

        <span className="nav-placeinfo">
        Kaggadasapura
        </span>
        </div>
        <div className="left-3">
        <span>
            2, DRDO Township, DRDO Phase 2 Twp, Kaggadasapura, Bengaluru, Karnataka 560093, India
        </span>
            </div>



        

        </div>

        <ul className="nav-menu">
            <li className="nav-item">
                <a href="#" className="nav-link" id="nav-test"><i class="fas fa-search test-1"></i>Search</a>
            </li>
            <li className="nav-item">
                <a href="#" className="nav-link" id="nav-test"><i class="fas fa-percentage test-1"></i>offers</a>
            </li>
            <li className="nav-item">
                <a href="#" className="nav-link" id="nav-test"><i class="far fa-life-ring test-1"></i>Help</a>
            </li>
            <li className="nav-item">
                <a href="#" className="nav-link" id="nav-test"><i class="far fa-user test-1"></i>Sign In</a>
            </li>
            <li className="nav-item">
                <a href="#" className="nav-link" id="nav-test"><i class="fas fa-cart-plus test-1"></i>Cart</a>
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