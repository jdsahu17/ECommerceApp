// src/components/Product.js
import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product, addToCart }) => {
  return (
    <div className="col-md-4">
      <div className="card mb-4 shadow-sm">
        <img src={product.image} className="card-img-top" alt={product.name} />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">Price: ${product.price}</p>
          <button onClick={() => addToCart(product)} className="btn btn-primary">Add to Cart</button>
          <Link to={`/product/${product.id}`} className="btn btn-info ml-2">View Details</Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
