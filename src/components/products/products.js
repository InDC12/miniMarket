import React from "react";
import { useState } from "react"
import { useDispatch } from "react-redux"
import {v4 as uuid} from 'uuid'
import { addTask } from "../../features/counter/counterSlice"
import ariel from '../../Images/products/ariel.jpg';
import choco from '../../Images/products/chocorramo.jpg'
import clorox from '../../Images/products/clorox.jpg'
import coca from '../../Images/products/cocacola.jpg'
import './products.css'

export default function Products () {

    const [task,setTask] = useState({
        title:'product'
    })

    const dispatch = useDispatch()

    const handleChange = (e) => {
        setTask({
            ...task,
            [e.target.name]:e.target.value,
        })
    } 
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch( addTask(
            {
                ...task,
                id: uuid()
            },
        ))
    }
    return (
        <div>
            <h1 className="title">Productos</h1>
            <div className="products">
                <div className="product">
                    <a href="#" className="product_Image">
                        <div>
                            <img src={ariel} alt="" />
                        </div>
                    </a>
                    <div className="product_footer">
                        <h1 name="description" onLo={handleChange} >Ariel Detergente</h1>
                        <p>Categoria: Aseo</p>
                        <p className="price"><strong>$25.000</strong></p>
                    </div> 
                    <div className="product_button">
                        <button className="cart_button" onClick={handleSubmit}>Añadir al carrito</button>
                        <div>
                            <a href="#" className="view_button">ver</a>
                        </div> 
                    </div>
                </div>
                <div className="product">
                    <a href="#" className="product_Image">
                        <div>
                            <img src={choco} alt="" />
                        </div>
                    </a>
                    <div className="product_footer">
                        <h1>Chocorramo pequeño bolsa</h1>
                        <p>Categoria: Ponques y Panes</p>
                        <p className="price"><strong>$10.000</strong></p>
                    </div> 
                    <div className="product_button">
                        <button className="cart_button" onClick={handleSubmit} >Añadir al carrito</button>
                        <div>
                            <a href="#" className="view_button">ver</a>
                        </div> 
                    </div>
                </div>
                <div className="product">
                    <a href="#" className="product_Image">
                        <div>
                            <img src={clorox} alt="" />
                        </div>
                    </a>
                    <div className="product_footer">
                        <h1>Clorox</h1>
                        <p>Categoria: Aseo</p>
                        <p className="price"><strong>$18.000</strong></p>
                    </div> 
                    <div className="product_button">
                        <button className="cart_button" onClick={handleSubmit}>Añadir al carrito</button>
                        <div>
                            <a href="#" className="view_button">ver</a>
                        </div> 
                    </div>
                </div>
                <div className="product">
                    <a href="#" className="product_Image">
                        <div>
                            <img src={coca} alt="" />
                        </div>
                    </a>
                    <div className="product_footer">
                        <h1>CocaCola</h1>
                        <p>Categoria: Gaseosas</p>
                        <p className="price"><strong>$3000</strong></p>
                    </div> 
                    <div className="product_button">
                        <button className="cart_button" onClick={handleSubmit}>Añadir al carrito</button>
                        <div>
                            <a href="#" className="view_button">ver</a>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    )
}