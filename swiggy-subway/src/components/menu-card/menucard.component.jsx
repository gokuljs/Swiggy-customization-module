import React from 'react';
import './menucard.styles.scss';
import List from '../list/list-component';
import MenuList from '../menu-list/menu-list.component';
import Cart from '../cart/cart.component';
import SearchField from '../search/search.component';

class MenuCard extends React.Component{
    constructor(){
        super();
        this.state={
            items:[
                {
                    type:"veg",
                    name:"Italian B.M.T. Sub ( 15 cm, 6 Inch )",
                    price:"239",
                    imgUrl:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/jkgz4bg5mshzvyixxrdn",
                    sub:"The Italian B.M.T. is bursting with sliced salami, pepperoni, slice and your choice of vegetables and condiments",


                },
                {
                    type:"veg",
                    name:"Chip With Non Veg Sub Combos (15 cm, 6 Inch)",
                    price:"200",
                    imgUrl:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/aqvd6pqu9dujvopprovm",
                    sub:"Buy any two 6 veg sub & get 2 cookie free",


                },
                {
                    type:"veg",
                    name:"Veggie Delite Sub ( 15 cm, 6 Inch )",
                    price:"177",
                    imgUrl:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/awlvilhyeecsyubydsn5",
                    sub:"Delicious combination of garden fresh lettuce, tomatoes, green peppers, onions, olives and pickles. Served on freshly baked bread. 97% Fat Free.",


                },
                {
                    type:"veg",
                    name:"BFF Veg Sub Combo (15 cm, 6 Inch)",
                    price:"371",
                    imgUrl:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/ieqpaerjsv5zwbm2uxks",
                    sub:"Buy any two 6 veg sub & get 2 cookie free",


                },
                {
                    type:"veg",
                    name:"BFF Veg Sub Combo (15 cm, 6 Inch)",
                    price:"371",
                    imgUrl:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/ieqpaerjsv5zwbm2uxks",
                    sub:"Buy any two 6 veg sub & get 2 cookie free",


                },
                {
                    type:"veg",
                    name:"BFF Veg Sub Combo (15 cm, 6 Inch)",
                    price:"371",
                    imgUrl:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/ieqpaerjsv5zwbm2uxks",
                    sub:"Buy any two 6 veg sub & get 2 cookie free",


                },
                
                

            ],
        }
                
            
        
    }
    
    render(){
        return(
            <div class="menu">
                <div class="menu-1"><List/></div>
                {/* <div> */}
                    <div class="menu-2"> 
                    {/* <SearchField/> */}
                    <h1 className="menucard-header"> Recommended </h1>
        
                    <MenuList items={this.state.items}/>
                    
                    </div>
                {/* <div> */}
                <div></div>

                <div class="menu-3">
                    <Cart/>
                </div>
        
            </div>
        );
    }
}


export default MenuCard;