import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import NavFriend from "../../components/friends/NavFriend";
import Footer from "../FooterSignUp";
import { deleteTrip } from "../../actions/tripActions";
import { useHistory } from "react-router-dom";

function TripDetails(props) {
  // utils for TripDetails component
  let history = useHistory();
  let thisTrip = props.location.state.trip;

  return (
    <>
      <NavFriend />
      <div className="tripDetails">
        {/* update and delete trip information */}
        <div>
          <h1>{thisTrip.trip_name}</h1>
          <div className="updateTrip">
            <Link
              to={{
                pathname: "/updateTrip",
                state: {
                  trip: thisTrip,
                },
              }}
            >
              <p>Edit Trip</p>
            </Link>{" "}
            <button
              onClick={() =>
                props.deleteTrip(
                  thisTrip.id,
                  localStorage.getItem("id"),
                  history
                )
              }
            >
              <p>Delete Trip</p>
            </button>{" "}
          </div>
        </div>

        {/* display single trip details here */}
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
            <p>{thisTrip.trip_name ? thisTrip.trip_name : "N/A"}</p>
            <p>
              {thisTrip.trip_description ? thisTrip.trip_description : "N/A"}
            </p>
            <p>{thisTrip.trip_location ? thisTrip.trip_location : "N/A"}</p>
            <p>
              {thisTrip.trip_lift_off_location
                ? thisTrip.trip_lift_off_location
                : "N/A"}
            </p>
            <p>{thisTrip.trip_car ? thisTrip.trip_car : "N/A"}</p>
            <p>{thisTrip.trip_start_date ? thisTrip.trip_start_date : "N/A"}</p>
            <p>{thisTrip.trip_end_date ? thisTrip.trip_end_date : "N/A"}</p>
            <p>{thisTrip.trip_upvote ? thisTrip.trip_upvote : "N/A"}</p>
            <p>{thisTrip.trip_notes ? thisTrip.trip_notes : "N/A"}</p>
          </div>
        </div>

        <div className="tripstuff2">
          <Link
            to={{
              pathname: "/activities",
              state: { tripName: thisTrip.trip_name },
            }}
          >
            {thisTrip.trip_name} activities
          </Link>
          <Link
            to={{
              pathname: "/parkingLots",
              state: { tripName: thisTrip.trip_name },
            }}
          >
            {thisTrip.trip_name} parking lots
          </Link>
          <Link
            to={{
              pathname: "/shoppingLists",
              state: { tripName: thisTrip.trip_name },
            }}
          >
            {thisTrip.trip_name} shopping lists
          </Link>
          <Link
            to={{
              pathname: "/flights",
              state: { tripName: thisTrip.trip_name },
            }}
          >
            {thisTrip.trip_name} flights
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

// state and action creators for tripdetails component
const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = {
  deleteTrip,
};

export default connect(mapStateToProps, mapDispatchToProps)(TripDetails);
