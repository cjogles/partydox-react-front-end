import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import NavFriend from "../friends/NavFriend";

function ActivityDetails(props) {
  let activity = props.location.state;

  return (
    <>
      <NavFriend />
      <div className="tripDetails">
        <h1>{activity.activityName}</h1>
        <div className="tripstuff1">
          <div className="tripstuffnames"></div>
          <div className="tripstuffvalues">
            <p>{activity.activityName}</p>
            <p>{activity.activityDescription}</p>
            <p>{activity.activityAddress}</p>
            <p>{activity.activityPhone}</p>
            <p>{activity.activityStartDate}</p>
            <p>{activity.activityEndDate}</p>
            <p>{activity.activityLikes}</p>
            <p>{activity.activityNotes}</p>
          </div>
          <p className="outerp">Activity Name: </p>
          <p className="outerp">Description: </p>
          <p className="outerp">Address: </p>
          <p className="outerp">Phone: </p>
          <p className="outerp">Start Date: </p>
          <p className="outerp">End Date: </p>
          <p className="outerp">Likes: </p>
          <p className="outerp">Notes: </p>
        </div>
        <div className="tripstuff2">
          <Link to="/activities">Trip Activities</Link>
          <Link to="/parkingLots">Trip Parking Lots</Link>
          <Link to="/shoppingLists">Trip Shopping Lists</Link>
          <Link to="/flights">Trip Flights</Link>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ActivityDetails);
