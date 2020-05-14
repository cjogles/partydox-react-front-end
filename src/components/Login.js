import React from "react";
import Nav from "./Nav";
import FooterSignUp from "./FooterSignUp";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { login } from "../actions/signUpActions";
import { Redirect, useHistory } from "react-router-dom";

function Login(props) {

  // utilities for login form
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (credentials) => props.login(credentials, history)

  return (
    <>
      {/* redirect to dashboard if already logged in */}
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor='username'>Username:</label>
            <input type="text" name="username" ref={register({ required: true })} />
            {/* Password expression. Password must be between 4 
            and 8 digits long and include at least one numeric digit.
            pattern: /^(?=.*\d).{8,20}$/ */}
            <label htmlFor='password'>Password:</label>
            <input
              type="password"
              name="password"
              ref={register({ required: true })}
            />
            {/* display the following errors for each input */}
            {errors.username && <span>Username is required</span>}
            {errors.password && (
              <span>
                Password is required, needs to be between 8 and 20 characters,
                and must contain a number{" "}
              </span>
            )}
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
      <FooterSignUp />
    </>
  );
}

// necessary state and action creators for login component
const mapStateToProps = (state) => {
  return {
    loggedIn: state.signUpReducer.loggedIn,
  };
};

const mapDispatchToProps = { login };

export default connect(mapStateToProps, mapDispatchToProps)(Login);
