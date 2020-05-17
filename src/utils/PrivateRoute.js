import React from 'react';
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const isAuthenticated = () => {
  return localStorage.getItem("token") ? true : false;
};

function PrivateRoute({ children, ...rest }) {
  console.log("children", children, "rest", rest)
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated() ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

// necessary state and action creators for Dashboard component
const mapStateToProps = (state) => {
  return {

  };
};

const mapDispatchToProps = {  };

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);