import React from "react";
import "./Food.css";

const Food = ({ food }) => {
  const { name, price, description, img } = food;
  return (
    <div className="food-card">
      <div className="food-image">
        <img src={img} alt="" />
      </div>
      <h4>{name}</h4>
      <p>{description}</p>
      <p>${price}</p>
    </div>
  );
};

export default Food;
