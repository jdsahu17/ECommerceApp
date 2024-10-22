import React, { useEffect, useState } from 'react';
import { getProducts } from '../services/api'; // Import API function
import Product from './Product'; // Import Product component

const ProductList = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  // Fetch products on component load
  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  // Handle product delete
  const handleProductDelete = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  return (
    <div className="row">
      {products.map((product) => (
        <Product key={product.id} product={product} addToCart={addToCart} onProductDelete={handleProductDelete} />
      ))}
    </div>
  );
};

export default ProductList;
