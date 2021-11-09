import React,{useState} from "react";
import Modal from "react-modal";
// import ModalCart from "../modal/modal.component";
import veg from './veg.png';
import nonveg from './nonveg.png';
import './menu-list.styles.scss';




const MenuList=(props)=>{
    const[modalIsOpen,setmodalIsOpen]=useState(false);
    return(
        <div className="menu-header">
            <div>
            <Modal isOpen={modalIsOpen} className="modal-1">
                <div className="modal-cart">
                    <div className="modal-cart-1">
                    <img src={veg} className="modal-img"/>
                    <h2 className="modal-header">Italian B.M.T. Sub ( 15 cm, 6 Inch )</h2>
                    <button className="modal-close" onClick={()=> setmodalIsOpen(false)}>X</button>
                    <p className="modal-price"><i class="fas fa-rupee-sign"></i> 341</p>
                    <p className="modal-para">Choice of 1st Sub , Choice of 2nd Sub , Choice of Bread , Choice of Preparation , Choice of 1st Free Cookie , Choice of 2nd Free Cookie , Choice of Sauce Any (3) , Choice of Vegetables</p>
                    </div>
                    <div className="modal-cart-2">
                        <ul>
                            <li>
                                <h2 className="modal-choice">Choice of 1st Sub</h2>
                                <div className="modal-radio">
                                
                                
                                <img src={veg} className="modal-subimg"/>
                                <input className="modal-input" type="radio" id="html" name="fav_language" value="HTML"/>
                                <label className="modal-label" for="html">Mexican patty</label><br/>
                                </div>
                                <div className="modal-radio">
                                
                                
                                <img src={veg} className="modal-subimg"/>
                                <input className="modal-input" type="radio" id="html" name="fav_language" value="HTML"/>
                                <label className="modal-label" for="html">Chatpata Chana</label><br/>
                                </div>
                            </li>

                            <li>
                                <h2 className="modal-choice">Choice of 2nd Sub</h2>
                                <div className="modal-radio">
                                
                                
                                <img src={veg} className="modal-subimg"/>
                                <input className="modal-input" type="radio" id="html1" name="fav_language-1" value="HTML"/>
                                <label className="modal-label" for="html1">Mexican patty</label><br/>
                                </div>
                                <div className="modal-radio">
                                
                                
                                <img src={veg} className="modal-subimg"/>
                                <input className="modal-input" type="radio" id="html1" name="fav_language-1" value="HTML"/>
                                <label className="modal-label" for="html1">Chatpata Chana</label><br/>
                                </div>
                            </li>

                            
                            <li>
                                <h2 className="modal-choice">Choice of Bread</h2>
                                <div className="modal-radio">
                                
                                
                                <img src={veg} className="modal-subimg"/>
                                <input className="modal-input" type="radio" id="html" name="fav_language" value="HTML"/>
                                <label className="modal-label" for="html">Multigrain bread</label><br/>
                                </div>
                                <div className="modal-radio">
                                <img src={veg} className="modal-subimg"/>
                                <input className="modal-input" type="radio" id="html" name="fav_language" value="HTML"/>
                                <label className="modal-label" for="html">Multigrain Honey Oats Bread</label><br/>
                                </div>
                                <div className="modal-radio">
                                <img src={veg} className="modal-subimg"/>
                                <input className="modal-input" type="radio" id="html" name="fav_language" value="HTML"/>
                                <label className="modal-label" for="html">Roasted Garlic Bread</label><br/>
                                </div>                                <div className="modal-radio">
                                <img src={veg} className="modal-subimg"/>
                                <input className="modal-input" type="radio" id="html" name="fav_language" value="HTML"/>
                                <label className="modal-label" for="html">Parmesan Oregano Bread</label><br/>
                                </div>                                <div className="modal-radio">
                                <img src={veg} className="modal-subimg"/>
                                <input className="modal-input" type="radio" id="html" name="fav_language" value="HTML"/>
                                <label className="modal-label" for="html">
Flat Bread</label><br/>
                                </div>
                            </li>
                            
                            <li>
                                <h2 className="modal-choice">Choice of 1st Sub</h2>
                                <div className="modal-radio">
                                
                                
                                <img src={veg} className="modal-subimg"/>
                                <input className="modal-input" type="radio" id="html" name="fav_language" value="HTML"/>
                                <label className="modal-label" for="html">Mexican patty</label><br/>
                                </div>
                                <div className="modal-radio">
                                
                                
                                <img src={veg} className="modal-subimg"/>
                                <input className="modal-input" type="radio" id="html" name="fav_language" value="HTML"/>
                                <label className="modal-label" for="html">Chatpata Chana</label><br/>
                                </div>
                            </li>

                            <li>
                                <h2 className="modal-choice">Choice of Preparation</h2>
                                <div className="modal-radio">
                                
                                
                                <img src={veg} className="modal-subimg"/>
                                <input className="modal-input" type="radio" id="html" name="fav_language" value="HTML"/>
                                <label className="modal-label" for="html">Plain Bread</label><br/>
                                </div>
                                <div className="modal-radio">
                                
                                
                                <img src={veg} className="modal-subimg"/>
                                <input className="modal-input" type="radio" id="html" name="fav_language" value="HTML"/>
                                <label className="modal-label" for="html">Plain Bread with cheese Slice</label><br/>
                                </div>

                                <div className="modal-radio">
                                
                                
                                <img src={veg} className="modal-subimg"/>
                                <input className="modal-input" type="radio" id="html" name="fav_language" value="HTML"/>
                                <label className="modal-label" for="html">Plain Bread with cheese Slice</label><br/>
                                </div>

                                <div className="modal-radio">
                                
                                
                                <img src={veg} className="modal-subimg"/>
                                <input className="modal-input" type="radio" id="html" name="fav_language" value="HTML"/>
                                <label className="modal-label" for="html">Toasted Bread</label><br/>
                                </div>

                                <div className="modal-radio">
                                
                                
                                <img src={veg} className="modal-subimg"/>
                                <input className="modal-input" type="radio" id="html" name="fav_language" value="HTML"/>
                                <label className="modal-label" for="html">Toaseted Bread with cheese slice</label><br/>
                                </div>

                                <div className="modal-radio">
                                
                                
                                <img src={veg} className="modal-subimg"/>
                                <input className="modal-input" type="radio" id="html" name="fav_language" value="HTML"/>
                                <label className="modal-label" for="html">Toaseted Bread with Mozarella cheese slice</label><br/>
                                </div>
                            </li>

                            <li>
                                <h2 className="modal-choice">Choice of 1st Free cookie</h2>
                                <div className="modal-radio">
                                
                                
                                <img src={veg} className="modal-subimg"/>
                                <input className="modal-input" type="radio" id="html" name="fav_language" value="HTML"/>
                                <label className="modal-label" for="html">Double Dark Chunk Chocolate Cookie</label><br/>
                                </div>
                                <div className="modal-radio">
                                <img src={veg} className="modal-subimg"/>
                                <input className="modal-input" type="radio" id="html" name="fav_language" value="HTML"/>
                                <label className="modal-label" for="html">Oatmeal Raisin Cookie</label><br/>
                                </div>
                                <div className="modal-radio">
                                <img src={veg} className="modal-subimg"/>
                                <input className="modal-input" type="radio" id="html" name="fav_language" value="HTML"/>
                                <label className="modal-label" for="html">Dark Chunk Chocolate Cookie</label><br/>
                                </div>
                            </li>

                            <li>
                                <h2 className="modal-choice">Choice of Sauce Any(3)</h2>
                                <div className="modal-radio">
                                
                                
                                <img src={veg} className="modal-subimg"/>
                                <input className="modal-input" type="checkbox" id="html" name="fav_language" value="HTML"/>
                                <label className="modal-label" for="html">Mayonnaise </label><br/>
                                </div>
                                <div className="modal-radio">
                                
                                
                                <img src={veg} className="modal-subimg"/>
                                <input className="modal-input" type="checkbox" id="html" name="fav_language" value="HTML"/>
                                <label className="modal-label" for="html">Mint Mayonnaise </label><br/>
                                </div> <div className="modal-radio">
                                
                                
                                <img src={veg} className="modal-subimg"/>
                                <input className="modal-input" type="checkbox" id="html" name="fav_language" value="HTML"/>
                                <label className="modal-label" for="html">Chipotle South West </label><br/>
                                </div> 
                                <div className="modal-radio">
                                <img src={veg} className="modal-subimg"/>
                                <input className="modal-input" type="checkbox" id="html" name="fav_language" value="HTML"/>
                                <label className="modal-label" for="html">Red Chilli</label><br/>
                                </div>
                                <div className="modal-radio">
                                <img src={veg} className="modal-subimg"/>
                                <input className="modal-input" type="checkbox" id="html" name="fav_language" value="HTML"/>
                                <label className="modal-label" for="html">Marinara</label><br/>
                                </div>                                
                                <div className="modal-radio">
                                <img src={veg} className="modal-subimg"/>
                                <input className="modal-input" type="checkbox" id="html" name="fav_language" value="HTML"/>
                                <label className="modal-label" for="html">Barbeque</label><br/>
                                </div>                                
                                <div className="modal-radio">
                                <img src={veg} className="modal-subimg"/>
                                <input className="modal-input" type="checkbox" id="html" name="fav_language" value="HTML"/>
                                <label className="modal-label" for="html">Tandoori Mayo</label><br/>
                                </div>                                <div className="modal-radio">
                                <img src={veg} className="modal-subimg"/>
                                <input className="modal-input" type="checkbox" id="html" name="fav_language" value="HTML"/>
                                <label className="modal-label" for="html">Sweet Onion</label><br/>
                                </div>                                <div className="modal-radio">
                                <img src={veg} className="modal-subimg"/>
                                <input className="modal-input" type="checkbox" id="html" name="fav_language" value="HTML"/>
                                <label className="modal-label" for="html">Honey Mustard</label><br/>
                                </div>
                                
                            </li>
                            <li>
                                <h2 className="modal-choice">Vegetables</h2>
                                <div className="modal-radio">
                                
                                
                                <img src={veg} className="modal-subimg"/>
                                <input className="modal-input" type="checkbox" id="html" name="fav_language" value="HTML"/>
                                <label className="modal-label" for="html">Lettuce</label><br/>
                                </div>
                                <div className="modal-radio">
                                
                                
                                <img src={veg} className="modal-subimg"/>
                                <input className="modal-input" type="checkbox" id="html" name="fav_language" value="HTML"/>
                                <label className="modal-label" for="html">Tomato</label><br/>
                                </div>
                                <div className="modal-radio">
                                
                                
                                <img src={veg} className="modal-subimg"/>
                                <input className="modal-input" type="checkbox" id="html" name="fav_language" value="HTML"/>
                                <label className="modal-label" for="html">
Cucumber</label><br/>
                                </div>
                                <div className="modal-radio">
                                
                                
                                <img src={veg} className="modal-subimg"/>
                                <input className="modal-input" type="checkbox" id="html" name="fav_language" value="HTML"/>
                                <label className="modal-label" for="html">Pickle</label><br/>
                                </div>
                                <div className="modal-radio">
                                
                                
                                <img src={veg} className="modal-subimg"/>
                                <input className="modal-input" type="checkbox" id="html" name="fav_language" value="HTML"/>
                                <label className="modal-label" for="html">Capsicum</label><br/>
                                </div>
                                
                                <div className="modal-radio">
                                
                                
                                <img src={veg} className="modal-subimg"/>
                                <input className="modal-input" type="checkbox" id="html" name="fav_language" value="HTML"/>
                                <label className="modal-label" for="html">Olives</label><br/>
                                </div>
                                <div className="modal-radio">
                                
                                
                                <img src={veg} className="modal-subimg"/>
                                <input className="modal-input" type="checkbox" id="html" name="fav_language" value="HTML"/>
                                <label className="modal-label" for="html">Onions</label><br/>
                                </div>
                                <div className="modal-radio">
                                
                                
                                <img src={veg} className="modal-subimg"/>
                                <input className="modal-input" type="checkbox" id="html" name="fav_language" value="HTML"/>
                                <label className="modal-label" for="html">Jalapenos</label><br/>
                                </div>
                                <div className="modal-radio">
                                
                                
                                <img src={veg} className="modal-subimg"/>
                                <input className="modal-input" type="checkbox" id="html" name="fav_language" value="HTML"/>
                                <label className="modal-label" for="html">Salt And Pepper</label><br/>
                                </div>
                            </li>

                        </ul>
                    </div>
                    <div className="modal-cart-3">
                        <div className="modal-choosen">
                        <p className="modal-choosen-1">Mexican Patty, Chatpata Chana</p>
                        <p className="modal-choosen-2">+4 Add on</p>
                        </div>
                        <button className="modal-button">
                        <p className="modal-choosen-1">Total 374.00</p>
                        <p className="modal-choosen-2">Add item</p>
                        </button>
                        </div>

                </div>
                <div>                              

                </div>
            </Modal>

        </div>
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
                    <button onClick={()=> setmodalIsOpen(true)} className="menulist-button">Add</button>
                </div>
        
        
                </div>
            ))
        }


        </div>
    )};


export default MenuList;