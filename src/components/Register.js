import React, { useState, useEffect } from "react";
import { Redirect } from 'react-router-dom';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { register } from '../01_actions/registerActions';
import { useHistory } from 'react-router-dom';

function Register(props) {

  const history = useHistory();

  const [state, setState] = useState({
    username: "",
    password: "",
    friend_name: "",
  });

  const onChange = event => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const onSubmit = event => {
    event.preventDefault();
    props.register(state, props)
  };

  return (
    <>

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
        <form onSubmit={onSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="friend_name"
              value={state.friend_name}
              onChange={onChange}
            />
          </label>
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={state.username}
              onChange={onChange}
            />
          </label>
          <label>
            Password:
            <input
              type="text"
              name="password"
              value={state.password}
              onChange={onChange}
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
      isLoggingIn: state.isLoggingIn,
      isLoggedIn: state.isLoggedIn,
      isError: state.isError,
      error: state.error
  }
}

const mapDispatchToProps = { register }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register)
