import React, { useEffect } from "react";
import NavFriend from "./friends/NavFriend";
import Trips from "./trips/Trips";
import { connect } from "react-redux";
import { getTrips } from "../actions/tripActions";

function Dashboard(props) {
  
  let id = localStorage.getItem("id");
  useEffect(() => {
    props.getTrips();
    console.log("useEffect has run")
  }, [id]);

  return (
    <>
      {props.loggingIn && (
        <div className="loggingin">{props.loggingInMessage}</div>
      )}
      {props.error && <div className="dasherror">{props.errorMessage}</div>}

      {props.loggedIn && (
        <>
          <NavFriend friend={props.name} />
          <div className="dash">
            <h2 className="dashH">Welcome to Your Dashboard!</h2>
            <Trips trips={props.trips}/>
          </div>
        </>
      )}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    name: state.signUpReducer.friend.name,
    errorMessage: state.signUpReducer.errorMessage,
    error: state.signUpReducer.error,
    loggedIn: state.signUpReducer.loggedIn,
    loggingIn: state.signUpReducer.loggingIn,
    loggingInMessage: state.signUpReducer.loggingInMessage,
    trips: state.tripsReducer.trips,
    gettingTrips: state.tripsReducer.gettingTrips,
  };
};

const mapDispatchToProps = { getTrips };

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
