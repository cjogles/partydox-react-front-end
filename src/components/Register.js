import React from "react";
import Nav from "./Nav";
import FooterSignUp from "./FooterSignUp";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { register } from "../actions/signUpActions";
import { Redirect, useHistory } from "react-router-dom";

function Register(props) {

  // utilities for register form
  let history = useHistory();
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (credentials) => props.register(credentials, history);

  return (
    <>
      {/* redirect to dashboard if already logged in */}
      {props.loggedIn && <Redirect push to="/dashboard" />}
      <Nav />
      <div className="loginWrapper">
        <div className="login">
          <div className="logintitle">
            <span className="spanimage" role="img" aria-label="partyface">
              🥳
            </span>
            Sign Up Here
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="friend_name">Name:</label>
            <input name="friend_name" autoFocus={true} ref={register({ required: true })} />
            <label htmlFor="username">Username: <br></br><span className="validate">(Must be unique)</span></label>
            <input name="username" ref={register({ required: true })} />
            {/* Password expression. Password must be between 4 
            and 8 digits long and include at least one numeric digit.
             */}
            <label htmlFor="password">Password: <br></br><span className="validate">(include one number and 8-20 characters in length)</span></label>
            <input type="password" name="password" pattern={/^(?=.*\d).{8,20}$/} ref={register({ required: true })} />
            {/* display the following errors for each input */}
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

// necessary state and action creators for register component
const mapStateToProps = (state) => {
  return {
    loggedIn: state.signUpReducer.loggedIn,
  };
};

const mapDispatchToProps = { register };

export default connect(mapStateToProps, mapDispatchToProps)(Register);
