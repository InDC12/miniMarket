import React from "react";
import wompi from "../../Images/logo/wompiLogo.png"
import './header.css'
import { Link } from "react-router-dom";
export default function Header () {
    return (
        <header className="header_market">
            <Link to="/" className="list">
                <div className="logo">
                    <img src={wompi} width='150'></img>
                </div>
            </Link>
             <div className="shoppingCartIcon">
                <box-icon name="cart"></box-icon>
                <span className="item_total">0</span>
             </div>
        </header>
    )
}