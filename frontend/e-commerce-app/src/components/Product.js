import React from 'react';
import { Link } from 'react-router-dom';
import { deleteProduct } from '../services/api'; // Import deleteProduct function

const Product = ({ product, addToCart, onProductDelete }) => {

  const handleDelete = async () => {
    const confirmed = window.confirm(`Are you sure you want to delete ${product.name}?`);
    if (confirmed) {
      await deleteProduct(product.id);
      onProductDelete(product.id); // Notify parent component to update the product list
    }
  };

  return (
    <div className="col-md-4">
      <div className="card mb-4 shadow-sm">
        <img src={product.image} className="card-img-top" alt={product.name} />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">Price: ${product.price}</p>
          <button onClick={() => addToCart(product)} className="btn btn-primary">Add to Cart</button>
          <Link to={`/product/edit/${product.id}`} className="btn btn-warning ml-2">Edit</Link>
          <button onClick={handleDelete} className="btn btn-danger ml-2">Delete</button>
          <Link to={`/product/${product.id}`} className="btn btn-info ml-2">View Details</Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
