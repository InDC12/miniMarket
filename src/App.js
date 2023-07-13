import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/header/header';
import Products from './components/products/products';
import ShoppingCart from './components/shoppingcart/shoppingCart';
import 'boxicons';


function App() {
  const Steps =[
    {
        path:"/",
        component:[<Header />, <Products/>,<ShoppingCart/>],
        Description: "El usario agrega su nombre y apellido"
    }
  ]
  const routeComponents = Steps.map(({path,component}, key) => <Route path={path} element={component} key={key}/>);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {routeComponents}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
