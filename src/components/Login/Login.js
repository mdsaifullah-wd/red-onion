import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section>
      <form className="form-container">
        <input type="email" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />

        <button type="submit" className="btn-submit">
          Login
        </button>
        <Link to={"/signup"} className="form-navigator">
          Don't have an account?
        </Link>
      </form>
    </section>
  );
};

export default Login;
