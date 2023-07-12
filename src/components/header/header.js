import React from "react";
import wompi from "../../Images/wompiLogo.png"
import './header.css'
export default function Header () {
    return (
        <header className="header_market">
            <a href="#" className="list">
                <div className="logo">
                    <img src={wompi} width='150'></img>
                </div>
            </a>
             <ul className="header_List">
                <li className="header_buttons">
                    <a href="#" className="list">Inicio</a>
                </li>
                <li className="header_buttons">
                    <a href="#" className="list">Productos</a>
                </li>
             </ul>
             <div className="shoppingCart">
                <box-icon name="cart"></box-icon>
                <span className="item_total">0</span>
             </div>

        </header>
    )

    
}