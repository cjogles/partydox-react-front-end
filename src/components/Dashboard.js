import React, { useEffect } from "react";
import NavFriend from "./friends/NavFriend";
import Nav from "./Nav";
import Trips from "./trips/Trips";
import Footer from "./FooterSignUp";
import { connect } from "react-redux";
import { getAllTrips } from "../actions/tripActions";

function Dashboard(props) {
  let id = localStorage.getItem("id");
  useEffect(() => {
    props.getAllTrips();
  }, [id]);

  return (
    <>
    
    {/* If the axios request to retrieve all trips fails, 
    show an error message, while logging in, show a 
    logging in message, otherwise show the trips. */}

      {props.loggingIn ? (
        <>
          <Nav />
          <div className="loggingin">{props.loggingInMessage}</div>
          <Footer />{" "}
        </>
      ) : null}
      {props.error ? (
        <>
          <Nav />
          <div className="dasherror">{props.errorMessage}</div>
          <Footer />
        </>
      ) : null}

      {props.loggedIn && (
        <>
          <NavFriend friend={props.name} />
          <div className="dash">
            <div className="dashContainer1">
              <h2 className="dashH">Welcome to Your Dashboard!</h2>
              <Trips trips={props.trips} />
            </div>
          </div>
          <Footer />
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

const mapDispatchToProps = { getAllTrips };

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
