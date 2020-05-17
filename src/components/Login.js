import React, { useState } from "react";
import Nav from "./Nav";
import FooterSignUp from "./FooterSignUp";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { login } from "../actions/signUpActions";
import { Redirect, useHistory } from "react-router-dom";
import * as yup from "yup";

const schema = yup.object().shape({
  username: yup.string().required("Please enter your username"),
  password: yup
    .string()
    .required("Please enter your password")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
});

function Login(props) {
  // utilities for login form
  const history = useHistory();
  const [startedForm, setStartedForm] = useState(false);
  const { register, handleSubmit, errors } = useForm({
    validationSchema: schema,
  });
  const onSubmit = (credentials) => {
    props.login(credentials, history);
  };

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
            Login Here
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="username">Username: </label>
            <input
              type="text"
              name="username"
              autoFocus={true}
              ref={register({ required: true })}
            />
            {errors.username && <span>Please enter your username</span>}
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              name="password"
              ref={register({ required: true })}
            />
            {errors.password && (
              <span>
                {/* Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character{" "} */}
                {errors.password.message.toString()}
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
