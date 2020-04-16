import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

function Register(props) {
  const [state, setState] = useState({
    username: "",
    password: "",
    friend_name: "",
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    axios.post('https://partydox.herokuapp.com/register', {
        username: state.username,
        password: state.password,
        friend_name: state.friend_name
      })
      .then(function (res) {
            localStorage.setItem('token', res.data.token)
            props.history.push('/dashboard')
      })
      .catch(function (error) {
        console.log(error);
      });
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
