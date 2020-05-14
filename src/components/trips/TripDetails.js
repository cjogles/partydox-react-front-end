import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import NavFriend from "../../components/friends/NavFriend";
import Footer from "../FooterSignUp";
import { deleteTrip, getTrip } from "../../actions/tripActions";
import { useHistory } from "react-router-dom";

function TripDetails(props) {
  // utils for TripDetails component
  let history = useHistory();
  useEffect(() => {
    props.getTrip(props.location.state.tripId);
    // console.log("trip id from inside trip details useeffect", props.thisTrip[0].id)
  }, []);

  if (props.thisTrip.length !== 0) {
    localStorage.setItem("tripId", props.thisTrip[0].id )
    return (
      <>
        <NavFriend />

        <div className="tripDetails">
          <div>
            <h1>{props.thisTrip[0].trip_name}</h1>
            <div className="updateTrip">
              <Link
                to={{
                  pathname: "/updateTrip",
                  state: {
                    tripId: props.thisTrip[0].id,
                    trip_name: props.thisTrip[0].trip_name,
                    trip_description: props.thisTrip[0].trip_description,
                    trip_location: props.thisTrip[0].trip_location,
                    trip_lift_off_location: props.thisTrip[0].trip_lift_off_location,
                    trip_car: props.thisTrip[0].trip_car,
                    trip_start_date: props.thisTrip[0].trip_start_date,
                    trip_end_date: props.thisTrip[0].trip_end_date,
                    trip_upvote: props.thisTrip[0].trip_upvote,
                    trip_notes: props.thisTrip[0].trip_notes,
                  },
                }}
              >
                <p>Edit Trip</p>
              </Link>{" "}
              <button
                onClick={() =>
                  props.deleteTrip(
                    props.thisTrip[0].id,
                    localStorage.getItem("id"),
                    history
                  )
                }
              >
                <p>Delete Trip</p>
              </button>{" "}
            </div>
          </div>

          <div className="tripstuff1">
            <div className="tripstuffnames">
              <p>Trip Name:</p>
              <p>Description:</p>
              <p>Location:</p>
              <p>Start Off Location:</p>
              <p>Car:</p>
              <p>Start Date:</p>
              <p>End Date:</p>
              <p>Likes:</p>
              <p>Notes:</p>
            </div>
            <div className="tripstuffvalues">
              <p>
                {props.thisTrip[0].trip_name ? props.thisTrip[0].trip_name : "N/A"}
              </p>
              <p>
                {props.thisTrip[0].trip_description
                  ? props.thisTrip[0].trip_description
                  : "N/A"}
              </p>
              <p>
                {props.thisTrip[0].trip_location
                  ? props.thisTrip[0].trip_location
                  : "N/A"}
              </p>
              <p>
                {props.thisTrip[0].trip_lift_off_location
                  ? props.thisTrip[0].trip_lift_off_location
                  : "N/A"}
              </p>
              <p>{props.thisTrip[0].trip_car ? props.thisTrip[0].trip_car : "N/A"}</p>
              <p>
                {props.thisTrip[0].trip_start_date
                  ? props.thisTrip[0].trip_start_date
                  : "N/A"}
              </p>
              <p>
                {props.thisTrip[0].trip_end_date
                  ? props.thisTrip[0].trip_end_date
                  : "N/A"}
              </p>
              <p>
                {props.thisTrip[0].trip_upvote
                  ? props.thisTrip[0].trip_upvote
                  : "N/A"}
              </p>
              <p>
                {props.thisTrip[0].trip_notes ? props.thisTrip[0].trip_notes : "N/A"}
              </p>
            </div>
          </div>

          <div className="tripstuff2">
            <Link to="/activityDash">
              {props.thisTrip[0].trip_name} activities
            </Link>
            <Link to="/parkingDash">
              {props.thisTrip[0].trip_name} parking lots
            </Link>
            <Link to="/shoppingDash">
              {props.thisTrip[0].trip_name} shopping lists
            </Link>
            <Link to="/flightDash">
              {props.thisTrip[0].trip_name} flights</Link>
          </div>
        </div>
        <Footer />
      </>
    );
    
  } else {
    return null;
  }
}

// state and action creators for tripdetails component
const mapStateToProps = (state) => {
  return {
    thisTrip: state.tripsReducer.trip,
  };
};

const mapDispatchToProps = {
  deleteTrip,
  getTrip,
};

export default connect(mapStateToProps, mapDispatchToProps)(TripDetails);
