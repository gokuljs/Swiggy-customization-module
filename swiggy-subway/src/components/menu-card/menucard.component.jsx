import React from 'react';
import './menucard.styles.scss';
import List from '../list/list-component';
import MenuList from '../menu-list/menu-list.component';
import SearchField from '../search/search.component';

class MenuCard extends React.Component{
    constructor(){
        super();
        this.state={
            items:[
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


                },{
                    type:"veg",
                    name:"BFF Veg Sub Combo (15 cm, 6 Inch)",
                    price:"371",
                    imgUrl:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/ieqpaerjsv5zwbm2uxks",
                    sub:"Buy any two 6 veg sub & get 2 cookie free",


                },{
                    type:"veg",
                    name:"BFF Veg Sub Combo (15 cm, 6 Inch)",
                    price:"371",
                    imgUrl:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/ieqpaerjsv5zwbm2uxks",
                    sub:"Buy any two 6 veg sub & get 2 cookie free",


                },{
                    type:"veg",
                    name:"BFF Veg Sub Combo (15 cm, 6 Inch)",
                    price:"371",
                    imgUrl:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/ieqpaerjsv5zwbm2uxks",
                    sub:"Buy any two 6 veg sub & get 2 cookie free",


                },{
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
                <div class="menu-2"> 
                    <SearchField/>
                    <h1 className="menucard-header"> Recommended </h1>
        
                    <MenuList items={this.state.items}/>
                </div>
                <div class="menu-3">three</div>
        
            </div>
        );
    }
}


export default MenuCard;