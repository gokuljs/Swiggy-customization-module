import React from "react";
import veg from './veg.png';
import './menu-list.styles.scss';




const MenuList=props=>(
        <div>
        {
            props.items.map(item=>(
                <div className="menulist">

            
                {/* <h3> Recommended </h3> */}
                <div className="menulist-1">
                    {/* <p>{type}</p> */}
                    <img src={veg} className="menulist-img"/>
                    <h4 className="menulist-header">{item.name}</h4>
                    <p className="menulist-price"><i class="fas fa-rupee-sign" id="ruppes"></i>{item.price}</p>
                    <p className="menulist-desc">{item.sub}</p>
                </div>
                <div className="menulist-2">
                    <img className="menulist-image" src={item.imgUrl}/>
                    <button className="menulist-button">Add</button>
                </div>
        
        
                </div>
            ))
        }
        </div>
    );


export default MenuList;