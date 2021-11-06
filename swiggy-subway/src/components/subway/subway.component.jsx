import React from "react";
import './subway.styles.scss';

const Subway=()=>(
    <div class="container">
        <div className="section-1 section">
            <div className="section-border">
            <img className="subway-logo" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/subway_020_ooxsox" />
            </div>
        </div>
        <div className="section-2 section">
        <h1>Subway</h1>
        <div className="sub">
        <p><span className="sub-1">Restaurant Unserviceable </span><span className="sub-2">Fast Food, Salads, Snacks, Desserts, Beverages</span></p> 
        <p className="sub-3">Central Bangalore, Ashok Nagar | Change Outlet </p>
        </div>
        <div className="ratings">
            <div className="row-container">

            <div className="row-1">
                <p><i class="fas fa-star test-2"></i> 4.3</p>
                <p className="row-1-subclass">100+ Ratings</p>
            </div>
            <div className="row-2">
            <p>Unserviceable</p>
            <p className="row-2-subclass test-2">Check Back Later</p>
            </div>
            <div className="row-3">
            <p><i class="fas fa-rupee-sign test-2"></i> 350</p>
            <p className="row-3-subclass">cost for two</p>
    
            </div>
            </div>

        </div>
        </div>
        <div className="section-3 section">
            <fieldset>
                <legend>OFFER</legend>
                <div className="offer">
                    <div className="offer-1">
                    <p className="content">
                   <span> <i class="fas fa-percentage offer-logo"></i></span> 
                   <span>20% off upto to 50% | use code SWIGGYIT</span>

                    </p>
                    </div>
                    <div className="offer-2">
                    <p className="content">
                   <span> <i class="fas fa-percentage offer-logo"></i></span> 
                   <span>Free delivery upto 30 on  orders above 149|use code FREEDEL</span>

                    </p>
                    </div>
                </div>
            </fieldset>
        </div>
        
    </div>

    
)

export default Subway;