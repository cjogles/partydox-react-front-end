import React from "react";
import Nav from "./Nav";
import FooterSignUp from './FooterSignUp';
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { register } from "../actions/signUpActions";
import { Redirect } from "react-router-dom";

class Register extends React.Component {
  renderError = ({ error, touched }) => {
    if (touched && error) {
      return (
        <div>
          <div className="error">{error}</div>
        </div>
      );
    }
  };

  renderInput = ({ input, label, meta }) => {
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = (credentials) => {
    this.props.register(credentials, this.props);
  };

  render() {
    return (
      <>
        {this.props.loggedIn && <Redirect push to="/dashboard" />}

        <Nav />
        <div className="loginWrapper">
          <div className="login">
            <div className="logintitle">
              <span role="img" aria-label="partyface">
                🥳
              </span>
              Sign Up Here
            </div>
            <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
              <Field
                name="friend_name"
                component={this.renderInput}
                label="Name"
              />
              <Field
                name="username"
                component={this.renderInput}
                label="Username"
              />
              <Field
                name="password"
                component={this.renderInput}
                label="Password"
              />
              <button>Submit</button>
            </form>
          </div>
        </div>
        <FooterSignUp/>
      </>
    );
  }
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.friend_name) {
    errors.friend_name = "You must enter your name.";
  }
  if (!formValues.username) {
    errors.username = "You must enter your username.";
  }
  if (!formValues.password) {
    errors.password = "You must enter your password.";
  }

  return errors;
};

const formWrapped = reduxForm({
  form: "register",
  validate: validate,
})(Register);

const mapStateToProps = (state) => {
  return {
    loggedIn: state.signUpReducer.loggedIn,
  };
};

const mapDispatchToProps = { register };

export default connect(mapStateToProps, mapDispatchToProps)(formWrapped);
