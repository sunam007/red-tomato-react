import React from "react";
import "./Food.css";

const Food = () => {
  return (
    <div>
      <h2>Name:</h2>
      <h4>Price:</h4>
      <h4>Food Preparation time:</h4>
      <button className="details-btn">Details</button>
      <br />
      <button className="order-btn">Add this item</button>
    </div>
  );
};

export default Food;
