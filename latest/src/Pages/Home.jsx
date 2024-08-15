import React from 'react';
import ProductCard from '../Components/Productcard';

const Home = () => {
    const product = {
        name: "Fall Limited Edition Sneakers",
        description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
        price: 125.00,
        originalPrice: 250.00,
        images: [
            "/path-to-image1.jpg",
            "/path-to-image2.jpg",
            "/path-to-image3.jpg",
            "/path-to-image4.jpg"
        ]
    };

    return (
        <div className="home">
            <ProductCard product={product} />
        </div>
    );
}

export default Home;