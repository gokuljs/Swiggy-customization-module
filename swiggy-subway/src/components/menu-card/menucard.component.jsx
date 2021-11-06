import React from 'react';
import './menucard.styles.scss';
import List from '../list/list-component';

class MenuCard extends React.Component{
    render(){
        return(
            <div class="menu">
                <div class="menu-1"><List/></div>
                <div class="menu-2"> two </div>
                <div class="menu-3">three</div>
        
            </div>
        );
    }
}


export default MenuCard;