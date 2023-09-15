import React from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import { useSelector } from "react-redux";
const CartItems = () => {
  const cartItems=useSelector((state)=>state.cart.itemsList)
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
        {cartItems.map((i) => (
          <li key={i.id }>
            <CartItem
              id={i.id}
              quantity={i.quantity}
              price={i.price}
              total={i.totalPrice}
              name={i.name}
            />{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartItems;
