import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductDetails from './Components/ProductDetails';

import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductDetails />} />
          <Route path="/collections" element={<div>Collections Page</div>} />
          <Route path="/men" element={<div>Men's Page</div>} />
          <Route path="/women" element={<div>Women's Page</div>} />
          <Route path="/about" element={<div>About Page</div>} />
          <Route path="/contact" element={<div>Contact Page</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;