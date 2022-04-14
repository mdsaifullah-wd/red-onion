import React from "react";
import banner from "../../../images/bannerbackground.png";
import "./Banner.css";

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner-container">
        <img src={banner} alt="" />
      </div>
    </section>
  );
};

export default Banner;
