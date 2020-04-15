import React, { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [state, setState] = useState({
    username: "",
    password: "",
    friend_name: "",
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    alert(
      "A username and password and friend name was submitted: " +
        state.username +
        " " +
        state.password +
        " " +
        state.friend_name
    );
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
        <h2>Register Here:</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <label>
            Name:
            <input
              type="text"
              name="friend_name"
              value={state.friend_name}
              onChange={(e) => handleChange(e)}
            />
          </label>
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
    </div>
  );
}

export default Register;
