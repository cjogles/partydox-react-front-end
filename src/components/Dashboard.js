import React, { useEffect } from "react";
import NavFriend from "./friends/NavFriend";
import Nav from "./Nav";
import TripList from "./trips/TripList";
import Footer from "./FooterSignUp";
import { connect } from "react-redux";
import { getAllTrips } from "../actions/tripActions";

function Dashboard(props) {
  
  // update trips after an update/deletion/addition
  useEffect(() => {
    props.getAllTrips();
    console.log("I rendered dashboard!")
  }, [props.gotTrips]);

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
              <TripList trips={props.trips} />
            </div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
}

// necessary state and action creators for Dashboard component
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
    gotTrips: state.tripsReducer.gotTrips,
    addition: state.tripsReducer.addingTrip,
    addMessage: state.tripsReducer.addingTripMessage,
    update: state.tripsReducer.updatingTrip,
    updateMessage: state.tripsReducer.updatingTripMessage,
    deleteTrip: state.tripsReducer.deletingTrip,
    deleteMessage: state.tripsReducer.deletingTripMessage,
  };
};

const mapDispatchToProps = { getAllTrips };

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
