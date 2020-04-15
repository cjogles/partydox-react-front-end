import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    alert("A username and password was submitted: " + state.username + " " + state.password);
    event.preventDefault();
  };

  return (
    <div className="login">
      <Link to="/">
        <h1>
          Party Dox!{" "}
          <span role="img" aria-label="tada">
            🎉
          </span>
        </h1>{" "}
      </Link>
      <div>
        <h2>Login Here</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={state.username}
              onChange={(e) => handleChange(e)}
            />
          </label>
          <label>
            Password:
            <input
              type="text"
              name="password"
              value={state.password}
              onChange={(e) => handleChange(e)}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
      <Link to="/register">
        <p>Need to Register First? Register Here</p>
      </Link>
    </div>
  );
}

export default Login;
