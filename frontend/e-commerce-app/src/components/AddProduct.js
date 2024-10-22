import React, { useState } from 'react';
import { addProduct } from '../services/api'; // Import the addProduct API call

const AddProduct = () => {
  const [product, setProduct] = useState({ name: '', description: '', price: '', image: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addProduct(product);
    alert('Product added successfully!');
    setProduct({ name: '', description: '', price: '', image: '' }); // Reset form
  };

  return (
    <div className="container mt-4">
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Product Name</label>
          <input type="text" className="form-control" id="name" value={product.name} 
            onChange={(e) => setProduct({ ...product, name: e.target.value })} required />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <input type="text" className="form-control" id="description" value={product.description} 
            onChange={(e) => setProduct({ ...product, description: e.target.value })} required />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">Price</label>
          <input type="number" className="form-control" id="price" value={product.price} 
            onChange={(e) => setProduct({ ...product, price: e.target.value })} required />
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">Image URL</label>
          <input type="text" className="form-control" id="image" value={product.image} 
            onChange={(e) => setProduct({ ...product, image: e.target.value })} required />
        </div>
        <button type="submit" className="btn btn-primary">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
