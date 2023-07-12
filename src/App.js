import './App.css';
import React from 'react';
import Header from './components/header/header';
import Products from './components/products/products';
import 'boxicons';

function App() {
  return (
    <div className="App">
      <Header />
      <Products/>

    </div>
  );
}

export default App;
