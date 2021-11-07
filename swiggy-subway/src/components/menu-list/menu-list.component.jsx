import React from "react";
import veg from './veg.png';
import './menu-list.styles.scss';

class MenuList extends React.Component{
    constructor(){
        super();
        this.state={
            menulist:[],
        }
    }

    render(){
    return(
        
        <div className="menulist">
        {/* <h3> Recommended </h3> */}
        <div className="menulist-1">
            <img src={veg} className="menulist-img"/>
            <h4 className="menulist-header">BFF Veg Sub Combo (15 cm, 6 Inch)</h4>
            <p className="menulist-price"><i class="fas fa-rupee-sign" id="ruppes"></i>341</p>
            <p className="menulist-desc">Buy any two signature wrap & get 2 cookie free</p>
        </div>
        <div className="menulist-2">
            <img className="menulist-image" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/co52e1edcdv2ftwvyhcp"/>
        </div>


        </div>
    )
    }
}

export default MenuList;