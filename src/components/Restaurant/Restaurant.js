import React, { useEffect, useState } from "react";
import { addToDb, getStoredCart } from "../../fakeDb/utilities";
import Cart from "../Cart/Cart";
import Food from "../Food/Food";
import "./Restaurant.css";

const Restaurant = () => {
  const [users, setUsers] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    console.log("api started");
    const url = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length) {
          setUsers(data);
          console.log("data loaded");
        }
      });
  }, []);

  useEffect(() => {
    console.log("local storage started");
    const savedCart = getStoredCart();
    const storedCart = [];

    if (users.length) {
      for (const id in savedCart) {
        const reportedUser = users.find(
          (user) => parseInt(user.id) === parseInt(id)
        );
        storedCart.push(reportedUser);
      }
      setCart(storedCart);
    }
  }, [users]);

  const addToCartHandler = (user) => {
    const newCart = [...cart, user];
    setCart(newCart);
    //sending "user" parameter will not work, we have to send user.id/user.key
    addToDb(user.id);
  };
  return (
    <>
      <div className="search-container">
        <input type="text" placeholder="search user" />
        <button>Search</button>
      </div>
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
    </>
  );
};

export default Restaurant;
