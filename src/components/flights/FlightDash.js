import React, { useEffect } from "react";
import NavFriend from "../friends/NavFriend";
import Nav from "../Nav";
import FlightList from "../flights/FlightList";
import Footer from "../FooterSignUp";
import { connect } from "react-redux";
import { getAllFlights } from "../../actions/flightActions";
import { getTrip } from "../../actions/tripActions";
import { useHistory, Link } from "react-router-dom";
import { getFriend } from '../../actions/friendActions';

function FlightDash(props) {
  // utils for activity dash component
  // update activities after an update/deletion/addition
  let history = useHistory();
  useEffect(() => {
    props.getFriend();
    props.getAllFlights(localStorage.getItem("tripId"));
    props.getTrip(localStorage.getItem("tripId"));
  }, [props.gotFlights, props.gotTrip]);

  if (props.thisTrip[0] !== undefined) {
    return (
      <>
        {/* If the axios request to retrieve all flights fails, 
    show an error message, while logging in, show a 
    logging in message, otherwise show the flights. */}

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
              <div className="dashContainer1 dashDetailsContainer">
                {/* <h2 className="dashH">Welcome to your Flight List View!</h2> */}
                <div className="dashDetails">
                  <Link
                    to={{
                      pathname: "/tripDetails",
                      state: {
                        tripId: localStorage.getItem("tripId"),
                      },
                    }}
                  >
                    <h2>Back to Trip Details</h2>
                  </Link>
                </div>
                {/* pass trip name and trip id from Link component (react-router-dom) */}
                <FlightList
                  flights={props.flights}
                  tripName={props.thisTrip[0].trip_name}
                  tripId={props.thisTrip[0].id}
                />
              </div>
            </div>
            <Footer />
          </>
        )}
      </>
    );
  } else {
    return null;
  }
}

// necessary state and action creators for Dashboard component
const mapStateToProps = (state) => {
  return {
    gotFlights: state.flightReducer.gotFlights,
    loggingIn: state.signUpReducer.loggingIn,
    loggingInMessage: state.signUpReducer.loggingInMessage,
    error: state.signUpReducer.error,
    errorMessage: state.signUpReducer.errorMessage,
    loggedIn: state.signUpReducer.loggedIn,
    name: state.signUpReducer.friend.name,
    flights: state.flightReducer.flights,
    thisTrip: state.tripsReducer.trip,
  };
};

const mapDispatchToProps = { getAllFlights, getTrip, getFriend };

export default connect(mapStateToProps, mapDispatchToProps)(FlightDash);
