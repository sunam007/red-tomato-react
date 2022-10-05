import React from "react";
import "./Food.css";

const Food = (props) => {
  // console.log(props);
  const { name, username, email, phone, website } = props.user;
  return (
    <div className="food-container">
      <h2>{name}</h2>
      <h4>username: {username}</h4>
      <h4>email: {email}</h4>
      <h4>cell-no: {phone}</h4>
      <h4>url: {website}</h4>
      <br />
      <button
        onClick={() => props.addToCartHandler(props.user)}
        className="order-btn"
      >
        Report this User
      </button>
    </div>
  );
};

export default Food;
