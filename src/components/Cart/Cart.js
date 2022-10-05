import React from "react";
import "./Cart.css";
const Cart = (props) => {
  // console.log(props.cart);
  // const { name } = props.cart;
  return (
    <div className="cart-container">
      <h1>Total Reports: {props.cart.length} </h1>
      <br />
      <h3>Reported User List</h3>
      <br />
      {props.cart.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </div>
  );
};

export default Cart;
