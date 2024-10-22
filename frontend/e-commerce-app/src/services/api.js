import axios from 'axios';

const API_URL = 'https://localhost:5001/api'; // Adjust the URL based on your backend

// Get all products
export const getProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/Product`);
    return response.data;
  } catch (error) {
    console.error("There was an error fetching the products!", error);
  }
};

// Add a product
export const addProduct = async (product) => {
  try {
    const response = await axios.post(`${API_URL}/Product`, product);
    return response.data;
  } catch (error) {
    console.error("There was an error adding the product!", error);
  }
};

// Update a product
export const updateProduct = async (id, product) => {
  try {
    const response = await axios.put(`${API_URL}/Product/${id}`, product);
    return response.data;
  } catch (error) {
    console.error("There was an error updating the product!", error);
  }
};

// Delete a product
export const deleteProduct = async (id) => {
  try {
    await axios.delete(`${API_URL}/Product/${id}`);
  } catch (error) {
    console.error("There was an error deleting the product!", error);
  }
};
