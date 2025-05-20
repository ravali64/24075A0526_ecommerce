import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';

import Landing from './components/Landing';
import Register from './components/Register';
import Login from './components/Login';
import Catalogue from './components/Catalogue';
import Cart from './components/Cart';
import Payment from './components/Payment';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <ul>
          <li><Link to="/">Landing</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/catalogue">Catalogue</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li><Link to="/payment">Payment</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
