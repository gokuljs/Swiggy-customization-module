import React from "react";
import Modal from 'react-modal';
import veg from './veg.png';
import './subway.styles.scss';


class SubWay extends React.Component{
    constructor(){
        super();
        this.state={
            price:371,
            choice_of_1st_sub:"",
            count:0,
        }
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
                        <h3 className="scroll-header">Choice of 1st Sub</h3>
                        <ul className="scroll-choice">
                            <li className="scroll-li">
                            <input type="radio" value="Mexican Patty" id="Mexican Patty" name="Choice of 1st Sub"></input>
                            <label for="Mexican Patty">Mexican Patty</label>
                            </li>
                            <li className="scroll-li">
                            <input type="radio" value="Chatpata Chana" id="Chatpata Chana" name="Choice of 1st Sub"></input>
                            <label for="Chatpata Chana">Chatpata Chana</label>
                            </li>
                        </ul>
                    </div>
                </div>
                <div></div>
                <div>price</div>
                </div>
                         
            </Modal>
        )
    }
}

export default SubWay;