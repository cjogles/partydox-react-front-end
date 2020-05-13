import React from "react";
import Nav from "./Nav";
import FooterSignUp from "./FooterSignUp";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { login } from "../actions/signUpActions";
import { Redirect, useHistory } from "react-router-dom";

function Login(props) {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
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
            <input name="username" ref={register({ required: true })} />
            {/* Password expression. Password must be between 4 and 8 digits long and include at least one numeric digit. */}
            <input
              name="password"
              ref={register({ required: true, pattern: /^(?=.*\d).{8,20}$/ })}
            />
            {errors.username && <span>Username is required</span>}
            {errors.password && (
              <span>
                Password is required, needs to be between 8 and 20 characters,
                and must contain a number{" "}
              </span>
            )}
            <input type="submit" />
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
