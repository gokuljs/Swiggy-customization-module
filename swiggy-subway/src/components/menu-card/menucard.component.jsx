import React from 'react';
import './menucard.styles.scss';
import List from '../list/list-component';
import MenuList from '../menu-list/menu-list.component';
import SearchField from '../search/search.component';

class MenuCard extends React.Component{
    render(){
        return(
            <div class="menu">
                <div class="menu-1"><List/></div>
                <div class="menu-2"> 
                    <SearchField/>
                    <h1 className="menucard-header"> Recommended </h1>
                    <MenuList/>
                </div>
                <div class="menu-3">three</div>
        
            </div>
        );
    }
}


export default MenuCard;