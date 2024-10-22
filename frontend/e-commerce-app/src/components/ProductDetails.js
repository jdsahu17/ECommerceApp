// src/components/ProductDetails.js
import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ProductDetails = ({ products }) => {
  const { id } = useParams(); // Get the product ID from the URL
  const product = products.find(prod => prod.id === parseInt(id)); // Find the product based on the ID

  if (!product) {
    return <div>Product not found!</div>; // Handle case where product doesn't exist
  }

  return (
    <div className="container mt-4">
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} className="img-fluid" />
      <p>Price: ${product.price}</p>
      <Link to="/" className="btn btn-primary">Back to Catalog</Link>
    </div>
  );
};

export default ProductDetails;
