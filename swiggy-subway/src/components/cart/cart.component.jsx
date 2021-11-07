import React from 'react';
import './cart.styles.scss';

const Cart=()=>(
    <div className="cart">
        <h1 className="cart-header">Cart Empty</h1>


        <img className="cart-image" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_480/Cart_empty_-_menu_2x_ejjkf2"/>
       <div className="cart-sub">
       Good food is always cooking! Go ahead, order some yummy items from the menu.
       </div>
    </div>
)

export default Cart;