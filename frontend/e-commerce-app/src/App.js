import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom'; // Added Link and Navigate
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import AddProduct from './components/AddProduct';
import Cart from './components/Cart';
import EditProduct from './components/EditProduct'; // Import EditProduct component


const App = () => {
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: 'Wireless Headphones', price: 59.99, image: 'https://example.com/images/headphones.jpg' },
    { id: 2, name: 'Smartphone', price: 699.99, image: 'https://example.com/images/smartphone.jpg' },
    { id: 3, name: 'Laptop', price: 999.99, image: 'https://example.com/images/laptop.jpg' },
    { id: 4, name: 'Smartwatch', price: 199.99, image: 'https://example.com/images/smartwatch.jpg' },
    { id: 5, name: 'Bluetooth Speaker', price: 49.99, image: 'https://example.com/images/speaker.jpg' },
    { id: 6, name: 'Gaming Mouse', price: 29.99, image: 'https://example.com/images/gaming-mouse.jpg' },
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
    console.log('Cart:', [...cart, product]);
  };

  const removeFromCart = (productToRemove) => {
    setCart(cart.filter(item => item.id !== productToRemove.id));
    console.log('Updated Cart:', cart);
  };

  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">E-Commerce App</Link>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/products">Products</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/cart">Cart</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <h1 className="my-4">E-Commerce Application</h1>
        <Routes>
          <Route path="/products" element={<ProductList products={products} addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
          <Route path="/" element={<Navigate to="/products" />} />
          <Route path="/product/:id" element={<ProductDetails products={products} />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/product/edit/:id" element={<EditProduct />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
