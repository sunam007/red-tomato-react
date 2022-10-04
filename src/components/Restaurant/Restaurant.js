import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Food from "../Food/Food";
import "./Restaurant.css";

const Restaurant = () => {
  const [users, setUsers] = useState([]);
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

  // const addToCartHandler = (foods) => console.log(foods);
  return (
    <div className="restaurant-container">
      <div>
        {users.map((user) => (
          <Food key={user.id} user={user}></Food>
        ))}
      </div>
      <div>
        <Cart></Cart>
      </div>
    </div>
  );
};

export default Restaurant;
