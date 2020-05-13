import React, { useState } from "react";
import Nav from "./Nav";
import FooterSignUp from "./FooterSignUp";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { register } from "../actions/signUpActions";
import { Redirect, useHistory } from "react-router-dom";

function Register(props) {
  let history = useHistory();

  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = (credentials) => props.login(credentials, history);

  // const [user, setUser] = useState({
  //   friend_name: "",
  //   username: "",
  //   password: "",
  // });

  // const onChange = (event) => {
  //   setUser({ ...user, [event.target.name]: event.target.value });
  // };

  // const onSubmit = (event) => {
  //   event.preventDefault();
  //   props.register(user, history);
  // };

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

          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="friend_name">Name:</label>
            <input name="friend_name" ref={register({ required: true })} />
            <label htmlFor="username">Username:</label>
            <input name="username" ref={register({ required: true })} />
            {/* Password expression. Password must be between 4 
            and 8 digits long and include at least one numeric digit.
            pattern: /^(?=.*\d).{8,20}$/ */}
            <label htmlFor="password">Password:</label>
            <input name="password" ref={register({ required: true })} />
            {errors.friend_name && <span>Name is required</span>}
            {errors.username && <span>Username is required</span>}
            {errors.password && (
              <span>
                Password is required, needs to be between 8 and 20 characters,
                and must contain a number{" "}
              </span>
            )}
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
