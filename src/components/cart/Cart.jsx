import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { BsPlus, BsDash } from "react-icons/bs";
import "./Cart.css";

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    clearCart,
    incrementQuantity,
    decrementQuantity,
  } = useContext(CartContext);

  // Helper function to calculate the total sum
  const getTotalSum = () => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img
                src={item.image}
                alt={item.name}
                className="cart-item-image"
              />
              <div className="cart-name">
                <h2>{item.name}</h2>
                <p> &#8377; {item.price}</p>
                <div className="quantity-container">
                  <button
                    className="quantity-btn"
                    onClick={() => decrementQuantity(item.id)}
                  >
                    <BsDash />
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    className="quantity-btn"
                    onClick={() => incrementQuantity(item.id)}
                  >
                    <BsPlus />
                  </button>
                </div>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}
          <div className="cart-total">
            <h3>Total: {getTotalSum()}&#8377;</h3>
            <button className="payment-btn">Proceed to Payment</button>
          </div>
          <button onClick={clearCart}>Clear Cart</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
