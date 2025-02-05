import React, { useContext } from "react";
import { CartContext } from "../src/CartContext"; // Import CartContext
import './Cart.css';
function CartPage() {
  const cartContext = useContext(CartContext);
 console.log(cartContext);
  if (!cartContext) {
    return <p>Error: CartContext is undefined. Make sure the provider is wrapping your app.</p>;
  }

  const { cartItems } = cartContext;

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CartPage;
