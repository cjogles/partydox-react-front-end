import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import NavFriend from "../../components/friends/NavFriend";

function ActivityDetails(props) {

  let activity = props.location.state;
//   let tripId = props.location.state.activityId;
//   let id = localStorage.getItem("id");

  return (
    <>
      <div className="tripDetails">
        <NavFriend />
        <div className="tripstuff1">
          <h1>Your single activity details:</h1>
          <p>Activity Name: {activity.activityName}</p>
          <p>Activity Description: {activity.activityDescription}</p>
          <p>Activity Address: {activity.activityAddress}</p>
          <p>Activity Phone: {activity.activityPhone}</p>
          <p>Activity Start Date: {activity.activityStartDate}</p>
          <p>Activity End Date: {activity.activityEndDate}</p>
          <p>Activity Likes: {activity.activityLikes}</p>
          <p>Activity Notes: {activity.activityNotes}</p>
        </div>
        <div className="tripstuff2">
          {/* <Link to={{ pathname: "/activities", state: props.activities, }}>
            Trip Activities
          </Link>
          <Link to={{ pathname: "/parkingLots", state: props.parkingLots, }}>
            Trip Parking Lots
          </Link>
          <Link to={{ pathname: "/shoppingLists", state: props.shoppingLists, }}>
            Trip Shopping Lists
          </Link>
          <Link to={{ pathname: "/flights", state: props.flights, }}>
            Trip Flights
          </Link> */}
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    // trips: state.tripsReducer.trips,
    // activities: state.activityReducer.activities,
    // shoppingLists: state.shoppingReducer.shoppingLists,
    // parkingLots: state.parkingReducer.parkingLots,
    // flights: state.flightReducer.flights,
  };
};

const mapDispatchToProps = { };

export default connect(mapStateToProps, mapDispatchToProps)(ActivityDetails);
