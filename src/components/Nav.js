import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="nav">
      <div>
        <Link to="/">
          <h1>
            Party Dox!{" "}
            <span role="img" aria-label="tada">
              🎉
            </span>
          </h1>
        </Link>
      </div>
      <div>
        <Link to="/register">
          <h2>Register</h2>
        </Link>
      </div>
      <div>
        <Link to="/login">
          <h2>Login</h2>
        </Link>
      </div>
    </div>
  );
}

export default Nav;
