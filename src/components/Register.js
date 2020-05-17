import React from "react";
import Nav from "./Nav";
import FooterSignUp from "./FooterSignUp";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { register } from "../actions/signUpActions";
import { Redirect, useHistory, Link } from "react-router-dom";
import * as yup from "yup";

const schema = yup.object().shape({
  friend_name: yup.string().required("Please enter your name"),
  username: yup.string().required("Please enter your username"),
  password: yup
    .string()
    .required("Please enter your password")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
});

function Register(props) {
  // utilities for register form
  let history = useHistory();
  const { register, handleSubmit, errors } = useForm({
    validationSchema: schema,
  });
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
            <input
              name="friend_name"
              autoFocus={true}
              ref={register({ required: true })}
            />
            {errors.friend_name && <span>Name Required</span>}
            <label htmlFor="username">Username:</label>
            <input name="username" ref={register({ required: true })} />
            {errors.username && <span>Username Required</span>}
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              name="password"
              ref={register({ required: true })}
            />
            {errors.password && (
              <span>
                {/* Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character{" "} */}
                {errors.password.message.toString()}{" "}
              </span>
            )}
            <button>Submit</button>
            <p style={{fontSize: "1rem", marginTop: "1rem"}}>Already a member? <Link to="/login" style={{textDecoration:"none", color: 'black', border: "solid skyblue", borderRadius: "1rem", padding: ".3rem"}}>Login Here</Link></p>
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
