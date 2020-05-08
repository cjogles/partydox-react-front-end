import React, { useState } from "react";
import Nav from "./Nav";
import FooterSignUp from "./FooterSignUp";
import { connect } from "react-redux";
import { register } from "../actions/signUpActions";
import { Redirect, useHistory } from "react-router-dom";

function Register(props) {
  
  let history = useHistory();
  const [user, setUser] = useState({
    friend_name: "",
    username: "",
    password: "",
  });

  const onChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    props.register(user, history);
  };

  return (
    <>
      {props.loggedIn && <Redirect push to="/dashboard" />}
      <Nav />
      <div className="loginWrapper">
        <div className="login">
          <div className="logintitle">
            <span role="img" aria-label="partyface">
              🥳
            </span>
            Sign Up Here
          </div>

          <form onSubmit={(event) => onSubmit(event)}>
            <label htmlFor="friend_name">Name:</label>
            <input
              type="text"
              id="friend_name"
              name="friend_name"
              value={user.friend_name}
              onChange={(event) => onChange(event)}
            ></input>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={user.username}
              onChange={(event) => onChange(event)}
            ></input>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={user.password}
              onChange={(event) => onChange(event)}
            ></input>
            <button>Submit</button>
          </form>
        </div>
      </div>
      <FooterSignUp />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.signUpReducer.loggedIn,
  };
};

const mapDispatchToProps = { register };

export default connect(mapStateToProps, mapDispatchToProps)(Register);
