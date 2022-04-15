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
  }, [foodType]);
  return (
    <section>
      <div className="food-catagories small-container" id="foods">
        <Link to="/home/breakfast">Breakfast</Link>
        <Link to="/home/lunch">Lunch</Link>
        <Link to="/home/dinner">Dinner</Link>
      </div>
      <div className="food-container">
        {foods
          .filter((fd) => fd.type === foodType)
          .map((food) => (
            <Food key={food.id} food={food}></Food>
          ))}
      </div>
    </section>
  );
};

export default Foods;
