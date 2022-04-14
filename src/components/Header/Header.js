import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../images/logo2.png";

const Header = () => {
  return (
    <header className="header container">
      <Link to={"/"} className="logo">
        <img src={logo} alt=""></img>
      </Link>
      <nav>
        <Link to={"/cart"}>Cart</Link>
        <Link to={"/login"}>Login</Link>
        <Link to={"/signup"}>Sign Up</Link>
      </nav>
    </header>
  );
};

export default Header;
