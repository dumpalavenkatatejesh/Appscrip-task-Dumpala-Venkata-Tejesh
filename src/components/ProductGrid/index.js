import React from "react";
import "./index.css";
import products from "../../data/products";

const ProductGrid = () => {
  return (
    <div className="product-grid-wrapper">
      <div className="product-grid">
        {products.map((item) => (
          <div key={item.id} className="product-card">
            {item.tag && <div className="product-tag">{item.tag}</div>}
            <img src={item.image} alt={item.name} className="product-img" />
            <h3 className="product-name">{item.name}</h3>
            <p className="price-text">
              Sign in or Create an account to see pricing
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
