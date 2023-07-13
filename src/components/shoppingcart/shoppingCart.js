import React from "react";
import test from '../../Images/products/clorox.jpg'
import useWompiWidget from "../../hooks/widgetHook";
import { useSelector } from "react-redux";
import './shoppingCart.css';
export default function ShoppingCart () {
    const shoppingResume = useSelector(state => state.counter)
    console.log(shoppingResume)
    useWompiWidget();

    return (
        <div className="shoppingCart">
            <div className="shcart">
                <div className="close">
                    <box-icon name="x"></box-icon>
                </div>
                    <h2>Sus Productos</h2>
                    <div className="cart_center" >
                        {shoppingResume.map(shoppingresume => (
                            <div className="cart_item" key={shoppingresume.id}>
                                <img src={test} alt="" />
                                <h3>{shoppingresume.description}</h3>
                                <p className="cart_price">$000</p>
                                <div>
                                    <box-icon name="up-arrow" type="solid"></box-icon>
                                    <p className="cuantity">1</p>
                                    <box-icon name="down-arrow" type= "solid"></box-icon>
                                </div>
                                <div className="remove_item">
                                    <box-icon name="trash"></box-icon>
                                </div>
                            </div>
                        ))}
                    </div>
                <div className="cart_footer">
                    <h3>Total: $211616941</h3>
                </div>
            </div>
        </div>
    )
}