import React, { useState } from 'react';
import './ProductImages.css';

function ProductImages() {
  const [activeImage, setActiveImage] = useState('/images/image-product-1.jpg');

  return (
    <div className="product-images">
      <img className="main-image" src={activeImage} alt="Main Product" />
      <div className="thumbnail-images">
        <img
          src="/images/image-product-1-thumbnail.jpg"
          alt="Thumbnail 1"
          onClick={() => setActiveImage('/images/image-product-1.jpg')}
        />
        <img
          src="/images/image-product-2-thumbnail.jpg"
          alt="Thumbnail 2"
          onClick={() => setActiveImage('/images/image-product-2.jpg')}
        />
        <img
          src="/images/image-product-3-thumbnail.jpg"
          alt="Thumbnail 3"
          onClick={() => setActiveImage('/images/image-product-3.jpg')}
        />
        <img
          src="/images/image-product-4-thumbnail.jpg"
          alt="Thumbnail 4"
          onClick={() => setActiveImage('/images/image-product-4.jpg')}
        />
      </div>
    </div>
  );
}

export default ProductImages;