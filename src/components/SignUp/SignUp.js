import React from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  return (
    <section>
      <form className="form-container">
        <input type="text" name="name" placeholder="Name" />
        <input type="email" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
        <input
          type="password"
          name="confirm-password"
          placeholder="Confirm Password"
        />
        <button type="submit" className="btn-submit">
          Sign Up
        </button>
        <Link to={"/login"} className="form-navigator">
          Already have an account
        </Link>
      </form>
    </section>
  );
};

export default SignUp;
