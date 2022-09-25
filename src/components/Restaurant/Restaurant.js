import React, { useEffect, useState } from "react";
import Food from "../Food/Food";
import "./Restaurant.css";
import { generateString } from "../../utilities/random";

const Restaurant = () => {
  const [food, setFood] = useState([]);
  useEffect(() => {
    const randomAlphabet = generateString(1);
    // console.log(randomAlphabet);
    const url = "http://www.themealdb.com/api/json/v1/1/search.php?f=a";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFood(data));
  }, []);
  console.log(food);
  return (
    <div className="restaurant-container">
      <div className="food-container">
        <h1>Dishes</h1>
        {/* {food.map()} */}
        <Food></Food>
      </div>
      <div className="cart-container">
        <h1>Food Items:</h1>
      </div>
    </div>
  );
};

export default Restaurant;
