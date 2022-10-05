import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Food from "../Food/Food";
import "./Restaurant.css";

const Restaurant = () => {
  const [users, setUsers] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    // console.log("api started");
    const url = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (Array.isArray(data) && data.length) {
          setUsers(data);
          // console.log("data loaded");
        }
      });
  }, []);

  const addToCartHandler = (user) => {
    // console.log(user.name);
    const newCart = [...cart, user];
    setCart(newCart);
  };
  return (
    <div className="restaurant-container">
      <div>
        {users.map((user) => (
          <Food
            key={user.id}
            user={user}
            addToCartHandler={addToCartHandler}
          ></Food>
        ))}
      </div>
      <div className="cart">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Restaurant;
