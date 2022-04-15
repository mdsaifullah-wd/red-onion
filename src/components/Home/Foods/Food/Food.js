import React from "react";

const Food = ({ food }) => {
  const { name, price, description, img } = food;
  return (
    <div className="food-card">
      <h4>{name}</h4>
    </div>
  );
};

export default Food;
