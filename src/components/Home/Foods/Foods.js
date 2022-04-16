import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Food from "./Food/Food";
import "./Foods.css";

const Foods = () => {
  const [foods, setFoods] = useState([]);
  const { foodType } = useParams();
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);
  return (
    <section>
      <div className="food-catagories small-container" id="foods">
        <Link to="/breakfast">Breakfast</Link>
        <Link to="/lunch">Lunch</Link>
        <Link to="/dinner">Dinner</Link>
      </div>
      <div className="food-container container">
        {foods
          .filter((fd) => fd.type === (foodType ? foodType : "breakfast"))
          .map((food) => (
            <Food key={food.id} food={food}></Food>
          ))}
      </div>
    </section>
  );
};

export default Foods;
