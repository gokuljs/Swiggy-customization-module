import React from "react";
import Modal from 'react-modal';
import veg from './veg.png';
import './subway.styles.scss';


class SubWay extends React.Component{
    constructor(){
        super();
        this.state={
            price:371,
            choice_1:"Mexican Patty",
            count:0,
            choice_2:"Chatpata Chana",
            choice_3:"",
            choice_4:"",
        }
    }

    choice1=(e)=>{
        const {name,value}=e.target;
        console.log(value);
        this.setState({
            choice_1:value,
        })
    };

    choice2=(e)=>{
        const {name,value}=e.target;
        console.log(value);
        this.setState({
            choice_2:value,
        })
    }

    choice3=(e)=>{
        const {name,value}=e.target;
        console.log(value);
        this.setState({
            choice_3:value,
        })
    }
    choice4=(e)=>{
        const {name,value}=e.target;
        console.log(value);
        this.setState({
            choice_4:value,
        })
    }

    render(){
        return(
            <Modal isOpen={true} className="modal">
                <div className="modal-header">
                <table className="modal-table">
                    <tr>
                        <td><img src={veg} className="modal-img"></img></td>
                        <td><h1 className="modal-head">Customize “BFF Veg Sub Combo (15 cm, 6 Inch)”</h1>
                            <p className="modal-price"><i class="fas fa-search modal-search"></i>{this.state.price}</p>
                        </td>
                        <td><button className="modal-button">X</button></td>
                    </tr>
                </table>
                <div className="modal-content">
                    <ul className="modal-ul">
                        <li className="modal-li">Choice of 1st Sub</li>
                        <li className="modal-li">Choice of 2nd Sub</li>
                        <li className="modal-li">Choice of Bread</li>
                        <li className="modal-li">Choice of Preparation</li>
                        <li className="modal-li">Choice of 1st Free Cookie</li>
                        <li className="modal-li">Choice of 2nd Free Cookie</li>
                        <li className="modal-li">Choice of Sauce Any (3)</li>
                        <li className="modal-li">Choice of Vegetables</li>
                    </ul>
                    
                </div>

                <div className="scroll">
                    <div className="scroll-section">
                        <div>
                        <h3 className="scroll-header">Choice of 1st Sub</h3>
                        <ul className="scroll-choice">

                            <li className="scroll-li">
                            <img src={veg} className="scroll-img"/>
                            <input onClick={this.choice1} type="radio" value="Mexican Patty" id="Mexican Patty" name="Choice of 1st Sub"></input>
                            <label className="scroll-title" onClick={console.log('hello to this world')} for="Mexican Patty">Mexican Patty</label>
                            </li>

                            <li className="scroll-li">
                            <img src={veg} className="scroll-img"/>

                            <input onClick={this.choice1} type="radio" value="Chatpata Chana" id="Chatpata Chana" name="Choice of 1st Sub"></input>
                            <label className="scroll-title" for="Chatpata Chana">Chatpata Chana</label>
                            </li>
                            </ul>
                         </div>
                         <div>
                        <h3 className="scroll-header">Choice of 2nd Sub</h3>
                        <ul className="scroll-choice">

                            <li className="scroll-li">
                            <img src={veg} className="scroll-img"/>
                            <input onClick={this.choice2} type="radio" value="Mexican Patty" id="Mexican Patty 1" name="Choice of 2nd Sub"></input>
                            <label className="scroll-title" onClick={console.log('hello to this world')} for="Mexican Patty 1">Mexican Patty</label>
                            </li>

                            <li className="scroll-li">
                            <img src={veg} className="scroll-img"/>

                            <input onClick={this.choice2} type="radio" value="Chatpata Chana" id="Chatpata Chana 1" name="Choice of 2nd Sub"></input>
                            <label className="scroll-title" for="Chatpata Chana 1">Chatpata Chana</label>
                            </li>
                        </ul>
                        </div>
                        <div>
                        <h3 className="scroll-header">Choice of bread</h3>
                        <ul className="scroll-choice">

                            <li className="scroll-li">
                            <img src={veg} className="scroll-img"/>
                            <input onClick={this.choice3} type="radio" value="Multigrain Bread" id="Multigrain Bread" name="Choice of breaf"></input>
                            <label className="scroll-title" onClick={console.log('hello to this world')} for="Multigrain Bread">Multigrain Bread</label>
                            </li>

                            <li className="scroll-li">
                            <img src={veg} className="scroll-img"/>

                            <input onClick={this.choice3} type="radio" value="Multigrain Honey Oats Bread" id="Multigrain Honey Oats Bread" name="Choice of bread"></input>
                            <label className="scroll-title" for="Multigrain Honey Oats Bread">Multigrain Honey Oats Bread</label>
                            </li>
                            <li className="scroll-li">
                            <img src={veg} className="scroll-img"/>

                            <input onClick={this.choice3} type="radio" value="White Italian Bread" id="White Italian Bread" name="Choice of bread"></input>
                            <label className="scroll-title" for="White Italian Bread">White Italian Bread</label>
                            </li>
                            <li className="scroll-li">
                            <img src={veg} className="scroll-img"/>

                            <input onClick={this.choice3} type="radio" value="Roasted Garlic Bread" id="Roasted Garlic Bread" name="Choice of bread"></input>
                            <label className="scroll-title" for="Roasted Garlic Bread">Roasted Garlic Bread</label>
                            </li>
                            <li className="scroll-li">
                            <img src={veg} className="scroll-img"/>

                            <input onClick={this.choice3} type="radio" value="Parmesan Oregano Bread" id="Parmesan Oregano Bread" name="Choice of bread"></input>
                            <label className="scroll-title" for="Parmesan Oregano Bread">Parmesan Oregano Bread</label>
                            </li>
                            <li className="scroll-li">
                            <img src={veg} className="scroll-img"/>

                            <input onClick={this.choice3} type="radio" value="flat bread" id="flat bread" name="Choice of bread"></input>
                            <label className="scroll-title" for="flat bread">Flat Bread</label>
                            </li>
                        </ul>
                        </div>
                        <div>
                        <h3 className="scroll-header">Choice of 1st Sub</h3>
                        <ul className="scroll-choice">

                            <li className="scroll-li">
                            <img src={veg} className="scroll-img"/>
                            <input onClick={this.choice1} type="radio" value="Mexican Patty" id="Mexican Patty" name="Choice of 1st Sub"></input>
                            <label className="scroll-title" onClick={console.log('hello to this world')} for="Mexican Patty">Mexican Patty</label>
                            </li>

                            <li className="scroll-li">
                            <img src={veg} className="scroll-img"/>

                            <input onClick={this.choice1} type="radio" value="Chatpata Chana" id="Chatpata Chana" name="Choice of 1st Sub"></input>
                            <label className="scroll-title" for="Chatpata Chana">Chatpata Chana</label>
                            </li>
                            </ul>
                         </div>


                    </div>
                </div>
                <div>
                    <p>{this.state.choice_1}</p>
                    <p>{this.state.choice_2}</p>
                </div>
                <div>price</div>
                </div>
                         
            </Modal>
        )
    }
}

export default SubWay;