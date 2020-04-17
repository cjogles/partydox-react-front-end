import React, { useState } from "react";
import { Redirect } from 'react-router-dom';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { register } from '../01_actions/registerActions';

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
    event.preventDefault();
    props.register({
      username: state.username,
      password: state.password,
      friend_name: state.friend_name
    })
  };

  return (
    <>

    {props.isLoggedIn ? <Redirect push to="/dashboard" /> : null}

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
    </>
  );
}

const mapStateToProps = state => {
  return {
      isLoggedIn: state.isLoggedIn,
      isError: state.isError,
      error: state.error
  }
}

export default connect(mapStateToProps, { register })(Register)

// export default Register;