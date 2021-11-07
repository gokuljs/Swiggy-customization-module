import React from 'react';
import './list-styles.scss';

class List extends React.Component{
    constructor(){
        super();
        this.state={
            menulists:["BFF Combos","Classic Combo",
                "Fusion Combo",
                "Fusion Range",
               " Meal for One",
                "Sandwiches",
                "Signature Wraps",
                "Salads",
                "Sides",
                "Cookies and Desserts"],
        }
    }
    render(){
        return(
            <div className="items">
                <p className="header-1">Recommended</p>
                {
                    this.state.menulists.map(list=><p className="header-2">{list}</p>)
                }
            </div>
        )
    }

}
export default List;