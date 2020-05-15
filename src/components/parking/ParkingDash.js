import React, { useEffect } from "react";
import NavFriend from "../friends/NavFriend";
import Nav from "../Nav";
import ParkingList from "./ParkingList";
import Footer from "../FooterSignUp";
import { connect } from "react-redux";
import { getAllParking } from "../../actions/parkingActions";
import { getTrip } from "../../actions/tripActions";
import { Link } from "react-router-dom";

function ParkingDash(props) {
  useEffect(() => {
    props.getAllParking(localStorage.getItem("tripId"));
    props.getTrip(localStorage.getItem("tripId"));
  }, [props.gotFlights, props.gotTrip]);

  if (props.thisTrip[0] !== undefined) {
    return (
      <>
        {/* If the axios request to retrieve all parking lots fails, 
    show an error message, while logging in, show a 
    logging in message, otherwise show the parking lots. */}

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
                <h2 className="dashH">Welcome to your Parking Lot List View!</h2>
                <div>
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
                <ParkingList
                  parkings={props.parkings}
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
    gotParkings: state.parkingReducer.gotParkings,
    loggingIn: state.signUpReducer.loggingIn,
    loggingInMessage: state.signUpReducer.loggingInMessage,
    error: state.signUpReducer.error,
    errorMessage: state.signUpReducer.errorMessage,
    loggedIn: state.signUpReducer.loggedIn,
    name: state.signUpReducer.friend.name,
    parkings: state.parkingReducer.parkings,
    thisTrip: state.tripsReducer.trip,
  };
};

const mapDispatchToProps = { getAllParking, getTrip };

export default connect(mapStateToProps, mapDispatchToProps)(ParkingDash);
