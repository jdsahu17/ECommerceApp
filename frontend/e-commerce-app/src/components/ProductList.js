// src/components/ProductList.js
import React from 'react';
import Product from './Product'; // Ensure this is the correct path

const ProductList = ({ products, addToCart }) => {
  return (
    <div className="row">
      {products.map(product => (
        <Product key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductList;
