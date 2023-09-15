import React from "react";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { setShowCart } from "../store/cartSlice";
const Cart = () => {
  const quantity=useSelector((state)=>state.cart.totalQuantity )
  const dispatch=useDispatch()

  const handleShow=()=>{
    dispatch(setShowCart())
  }
  return (
    <div className="cartIcon">
      <h3 onClick={handleShow}>Cart: {quantity} Items</h3>
    </div>
  );
};

export default Cart;
