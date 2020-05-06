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
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ActivityDetails);
