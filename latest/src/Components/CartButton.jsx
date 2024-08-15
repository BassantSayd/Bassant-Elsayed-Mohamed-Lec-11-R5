import React from 'react';
import './CartButton.css';

function CartButton() {
  const handleAddToCart = () => {
    // Add to cart logic here
    alert('Added to cart!');
  };

  return (
    <button className="cart-button" onClick={handleAddToCart}>
      Add to cart
    </button>
  );
}

export default CartButton;