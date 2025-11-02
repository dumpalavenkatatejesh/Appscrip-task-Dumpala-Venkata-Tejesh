import React from 'react';
import { Heart } from 'lucide-react';
import './index.css';

export default function ProductCard({ product }) {
  // product: { id, title, price, category, description, image, rating }
  return (
    <article className="product-card" aria-labelledby={`p-${product.id}`}>
      <div className="media">
        {/* If using remote image, alt uses title for SEO */}
        <img src={product.image} alt={product.title} className="product-img" />
        {product.badge && <span className="badge">{product.badge}</span>}
      </div>

      <div className="product-body">
        <h3 id={`p-${product.id}`} className="product-title">{product.title}</h3>
        <p className="product-desc">{product.description}</p>
        
        <div className="card-meta">
          <div className="price">₹{product.price}</div>
          <div className="rating">★ {product.rating}</div>
        </div>

        <div className="card-actions">
          <button className="btn-primary">Add to cart</button>
          <a className="btn-link" href={`/product/${product.id}`}>View</a>
        </div>
      </div>
    </article>
  );
}
