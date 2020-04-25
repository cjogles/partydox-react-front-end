import React, { useEffect } from "react";
import NavFriend from "./friends/NavFriend";
import { getFriend } from "../actions/friendActions";
import { connect } from "react-redux";

function Dashboard(props) {
  useEffect(() => {
    console.log("rendered dashboard.");
  }, [props.loggingIn, props.error, props.id]);

  return (
    <>
      {props.loggingIn && (
        <div className="loggingin">{props.loggingInMessage}</div>
      )}
      {props.error && <div className="dasherror">{props.errorMessage}</div>}
      {props.loggedIn && (
        <>
          <NavFriend friend={props.name} />
          <div>
            <div>welcome to dashboard</div>
            <p>{props.id}</p>
            <p>{props.name}</p>
            <p>{props.username}</p>
          </div>
        </>
      )}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    id: state.signUpReducer.friend.id,
    name: state.signUpReducer.friend.name,
    username: state.signUpReducer.friend.username,
    errorMessage: state.signUpReducer.errorMessage,
    error: state.signUpReducer.error,
    loggedIn: state.signUpReducer.loggedIn,
    loggingIn: state.signUpReducer.loggingIn,
    loggingInMessage: state.signUpReducer.loggingInMessage,
  };
};

const mapDispatchToProps = { getFriend };

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
