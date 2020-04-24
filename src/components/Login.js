import React from "react";
import Nav from "./Nav";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { login } from "../actions/signUpActions";
import { Redirect } from "react-router-dom";

class Login extends React.Component {
  renderError = ({ error, touched }) => {
    if (touched && error) {
      return (
        <div>
          <div>{error}</div>
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
    this.props.login(credentials, this.props);
  };

  render() {
    return (
      <>

        {this.props.loggedIn && <Redirect push to='/dashboard'/>}

        <Nav />
        <div>Login Form</div>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field
            name="username"
            component={this.renderInput}
            label="Enter Username"
          />
          <Field
            name="password"
            component={this.renderInput}
            label="Enter Password"
          />
          <button>Submit</button>
        </form>
        {/* <button onClick={() => console.log(this.props.store)}>
          TEST STORE
        </button> */}
      </>
    );
  }
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.username) {
    errors.username = "You must enter your username.";
  }
  if (!formValues.password) {
    errors.password = "You must enter your password.";
  }

  return errors;
};

const formWrapped = reduxForm({
  form: "login",
  validate: validate,
})(Login);

const mapStateToProps = (state) => {
  return {
    loggedIn: state.signUpReducer.loggedIn
  };
};

const mapDispatchToProps = { login };

export default connect(mapStateToProps, mapDispatchToProps)(formWrapped);
