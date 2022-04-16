import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
