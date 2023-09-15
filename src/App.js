import React, { useEffect } from "react";
import {useSelector} from "react-redux"
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";

function App() {
  const cart =useSelector(state=>state.cart)
const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

useEffect(()=>{
  fetch("https://cart-reducer-d4875-default-rtdb.firebaseio.com/cartitems.json",
  {
  method:"POST",
  body:JSON.stringify(cart)}
  )
  .then((response)=>response.json())
},[cart])

  return (
    <div className="App">
      { !isLoggedIn && <Auth />}
      {isLoggedIn && <Layout />}
    </div>
  );
}

export default App;
