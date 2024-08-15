import React from 'react';
import ProductImages from './ProductImages';
import QuantitySelector from './QuantitySelector';
import CartButton from './CartButton';
import './ProductDetails.css';

function ProductDetails() {
  return (
    <div className="product-details">
      <ProductImages />
      <div className="product-info">
      
        <h4 className="company-name">SNEAKER COMPANY</h4>
        <h1 className="product-title">Fall Limited Edition Sneakers</h1>
        <p className="product-description">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.
        </p>
        <div className="pricing">
          <span className="current-price">$125.00</span>
          <span className="discount">50%</span>
          <span className="original-price">$250.00</span>
        </div>
        <div className="purchase-options">
          <QuantitySelector />
          <CartButton />
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;