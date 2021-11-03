import React from 'react';
import swiggy from './swiggy.png';
import offer from './offers.png';
import signin from './sign.png';

import './navbar.styles.scss';

const NavBar=()=>(
    <div className="navbar">
        <div className="container">
        <img src={swiggy} className="logo"/>
        <nav>
        <ul>
            <li><a href="#"><i class="fas fa-search"></i>Search</a></li>
            <li><a href="#"><img src={offer} className="offer"/>Offers</a></li>
            <li><a href="#"><i class="far fa-life-ring"></i>Help</a></li>
            <li><a href="#"><img src={signin} className="signin"/>Sign In</a></li>
            <li><a href="#">Cart</a></li>
        </ul>
        </nav>

        </div>
        
    </div>
)

export default NavBar;