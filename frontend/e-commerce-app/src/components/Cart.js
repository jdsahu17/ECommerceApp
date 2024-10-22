// src/Cart.js (Updated for Total Price)
import React from 'react';

const Cart = ({ cart, removeFromCart }) => {
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="my-4">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="list-group">
            {cart.map((item) => (
              <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                {item.name} - ${item.price}
                <button className="btn btn-danger btn-sm" onClick={() => removeFromCart(item)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <h4 className="mt-3">Total Price: ${totalPrice.toFixed(2)}</h4>
        </>
      )}
    </div>
  );
};

export default Cart;
