import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import NavFriend from "../friends/NavFriend";
import Footer from '../FooterSignUp';

function ActivityDetails(props) {

  let activity = props.location.state;
  let tripName = localStorage.getItem("tripName");

  return (
    <>
      <NavFriend />
      <div className="tripDetails">
      <div>
          <h1>{activity.activityName}</h1>
          <div className="updateTrip">
            <Link
              to={{
                pathname: "/updateActivity",
                state: { userId: localStorage.getItem("id") },
              }}
            >
              <p>Edit Activity</p>
            </Link>{" "}
            <Link
              to={{
                pathname: "/deleteActivity",
                state: { userId: localStorage.getItem("id") },
              }}
            >
              <p>Delete Activity</p>
            </Link>{" "}
          </div>
        </div>
        <div className="tripstuff1">
          <div className="tripstuffnames">
          <p className="outerp">Activity Name: </p>
          <p className="outerp">Description: </p>
          <p className="outerp">Address: </p>
          <p className="outerp">Phone: </p>
          <p className="outerp">Start Date: </p>
          <p className="outerp">End Date: </p>
          <p className="outerp">Likes: </p>
          <p className="outerp">Notes: </p>
          </div>
          <div className="tripstuffvalues">
            <p>{activity.activityName ? activity.activityName : "N/A"}</p>
            <p>{activity.activityDescription ? activity.activityDescription : "N/A"}</p>
            <p>{activity.activityAddress ? activity.activityAddress : "N/A"}</p>
            <p>{activity.activityPhone ? activity.activityPhone : "N/A"}</p>
            <p>{activity.activityStartDate ? activity.activityStartDate : "N/A"}</p>
            <p>{activity.activityEndDate ? activity.activityEndDate : "N/A"}</p>
            <p>{activity.activityLikes ? activity.activityLikes : "N/A"}</p>
            <p>{activity.activityNotes ? activity.activityNotes : "N/A"}</p>
          </div>
        </div>
        <div className="tripstuff2">
          <Link to={{ pathname: "/activities", state: {tripName: tripName}}}>Trip Activities</Link>
          <Link to={{ pathname: "/parkingLots", state: {tripName: tripName}}}>Trip Parking Lots</Link>
          <Link to={{ pathname: "/shoppingLists", state: {tripName: tripName}}}>Trip Shopping Lists</Link>
          <Link to={{ pathname: "/flights", state: {tripName: tripName}}}>Trip Flights</Link>
        </div>
      </div>
      <Footer/>
    </>
  );
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ActivityDetails);
