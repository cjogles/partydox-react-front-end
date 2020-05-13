import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import NavFriend from "../friends/NavFriend";
import Footer from "../FooterSignUp";
import { deleteActivity } from "../../actions/activityActions";
import { useHistory } from "react-router-dom";

function ActivityDetails(props) {
  // utils for Activity details component
  let history = useHistory();
  let thisActivity = props.location.state.trip;

  return (
    <>
      <NavFriend />
      <div className="tripDetails">
        {/* update and delete activity information */}
        <div>
          <h1>{thisActivity.activity_name}</h1>
          <div className="updateTrip">
            <Link
              to={{
                pathname: "/updateActivity",
                state: { thisActivity },
              }}
            >
              <p>Edit Activity</p>
            </Link>{" "}
            <button
              onClick={() =>
                props.deleteTrip(
                  thisActivity.id,
                  localStorage.getItem("id"),
                  history
                )
              }
            >
              <p>Delete Activity</p>
            </button>{" "}
          </div>
        </div>
        <div className="tripstuff1">
          <div className="tripstuffnames">
            <p>Activity Name:</p>
            <p>Description:</p>
            <p>Address:</p>
            <p>Phone:</p>
            <p>Start Date:</p>
            <p>End Date:</p>
            <p>Likes:</p>
            <p>Notes:</p>
          </div>
          <div className="tripstuffvalues">
            <p>{thisActivity.activity_name ? thisActivity.activity_name : "N/A"}</p>
            <p>
              {thisActivity.activity_description
                ? thisActivity.activity_description
                : "N/A"}
            </p>
            <p>{thisActivity.activity_address ? thisActivity.activity_address : "N/A"}</p>
            <p>{thisActivity.activity_phone ? thisActivity.activity_phone : "N/A"}</p>
            <p>
              {thisActivity.activity_start_date ? thisActivity.activity_start_date : "N/A"}
            </p>
            <p>{thisActivity.activity_end_date ? thisActivity.activity_end_date : "N/A"}</p>
            <p>{thisActivity.activity_upvote ? thisActivity.activity_upvote : "N/A"}</p>
            <p>{thisActivity.activity_notes ? thisActivity.activity_notes : "N/A"}</p>
          </div>
        </div>
        <div className="tripstuff2">
          <Link
            to={{
              pathname: "/activityDash",
              state: { tripName: props.location.state.tripName, tripId: props.location.state.tripId },
            }}
          >
            {props.location.state.tripName} activities
          </Link>
          <Link
            to={{
              pathname: "/parkingDash",
              state: { tripName: props.location.state.tripName },
            }}
          >
            {props.location.state.tripName} parking lots
          </Link>
          <Link
            to={{
              pathname: "/shoppingDash",
              state: { tripName: props.location.state.tripName },
            }}
          >
            {props.location.state.tripName} shopping lists
          </Link>
          <Link
            to={{
              pathname: "/flightDash",
              state: { tripName: props.location.state.tripName },
            }}
          >
            {props.location.state.tripName} flights
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ActivityDetails);
