import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductById, updateProduct } from '../services/api'; // API calls

const EditProduct = () => {
  const { id } = useParams(); // Get the product ID from URL
  const navigate = useNavigate();
  const [product, setProduct] = useState({ name: '', description: '', price: '', image: '' });

  // Fetch product details when component mounts
  useEffect(() => {
    const fetchProduct = async () => {
      const data = await getProductById(id);
      setProduct(data);
    };
    fetchProduct();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateProduct(id, product);
    alert('Product updated successfully!');
    navigate('/products'); // Navigate back to product list
  };

  return (
    <div className="container mt-4">
      <h2>Edit Product</h2>
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
        <button type="submit" className="btn btn-success">Update Product</button>
      </form>
    </div>
  );
};

export default EditProduct;
