import React, { useState } from "react";
import Nav from "./Nav";
import FooterSignUp from "./FooterSignUp";
import { connect } from "react-redux";
import { login } from "../actions/signUpActions";
import { Redirect, useHistory } from "react-router-dom";

function Login(props) {

  let history = useHistory();
  const [user, setUser] = useState({ username: "", password: "" });

  const onChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    props.login(user, history);
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
            Login Here
          </div>

          <form onSubmit={(event) => onSubmit(event)}>
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

const mapDispatchToProps = { login };

export default connect(mapStateToProps, mapDispatchToProps)(Login);
