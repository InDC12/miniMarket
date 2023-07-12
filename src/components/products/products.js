import React from "react";
import IMG from '../../Images/products/ariel.jpg'
import './products.css'

export default function Products () {
    return (
        <div>
            <h1 className="title">Productos</h1>
            <div className="products">
                <div className="product">
                    <a href="#" className="product_Image">
                        <div>
                            <img src={IMG} alt="" />
                        </div>
                    </a>
                    <div className="product_footer">
                        <h1>title</h1>
                        <p>Categoria</p>
                        <p className="price"><strong>$250 MXN</strong></p>
                    </div> 
                    <div className="product_button">
                        <button className="cart_button">Añadir al carrito</button>
                        <div>
                            <a href="#" className="view_button">ver</a>
                        </div> 
                    </div>
                </div>
                <div className="product">
                    <a href="#" className="product_Image">
                        <div>
                            <img src={IMG} alt="" />
                        </div>
                    </a>
                    <div className="product_footer">
                        <h1>title</h1>
                        <p>Categoria</p>
                        <p className="price"><strong>$250 MXN</strong></p>
                    </div> 
                    <div className="product_button">
                        <button className="cart_button">Añadir al carrito</button>
                        <div>
                            <a href="#" className="view_button">ver</a>
                        </div> 
                    </div>
                </div>
                <div className="product">
                    <a href="#" className="product_Image">
                        <div>
                            <img src={IMG} alt="" />
                        </div>
                    </a>
                    <div className="product_footer">
                        <h1>title</h1>
                        <p>Categoria</p>
                        <p className="price"><strong>$250 MXN</strong></p>
                    </div> 
                    <div className="product_button">
                        <button className="cart_button">Añadir al carrito</button>
                        <div>
                            <a href="#" className="view_button">ver</a>
                        </div> 
                    </div>
                </div>
                <div className="product">
                    <a href="#" className="product_Image">
                        <div>
                            <img src={IMG} alt="" />
                        </div>
                    </a>
                    <div className="product_footer">
                        <h1>title</h1>
                        <p>Categoria</p>
                        <p className="price"><strong>$250 MXN</strong></p>
                    </div> 
                    <div className="product_button">
                        <button className="cart_button">Añadir al carrito</button>
                        <div>
                            <a href="#" className="view_button">ver</a>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    )
}