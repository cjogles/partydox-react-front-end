import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import NavFriend from "../friends/NavDetails";
import Footer from "../FooterSignUp";
import { deleteActivity, getActivity } from "../../actions/activityActions";
import { useHistory } from "react-router-dom";

function ActivityDetails(props) {
  // utils for Activity details component
  let history = useHistory();
  useEffect(() => {
    props.getActivity(props.location.state.activity.id);
  }, []);

  if (props.thisActivity[0] !== undefined && props.thisTrip[0] !== undefined) {
    return (
      <>
        <NavFriend />
        <div className="tripDetails">
          {/* update and delete activity information */}
          <div>
            <h1>{props.thisActivity[0].activity_name}</h1>
            <div className="updateTrip">
              <Link
                to={{
                  pathname: "/updateActivity",
                  state: {
                    tripId: localStorage.getItem("tripId"),
                    id: props.thisActivity[0].id,
                    activity_name: props.thisActivity[0].activity_name,
                    activity_description:
                      props.thisActivity[0].activity_description,
                    activity_start_date:
                      props.thisActivity[0].activity_start_date,
                    activity_end_date: props.thisActivity[0].activity_end_date,
                    activity_address: props.thisActivity[0].activity_address,
                    activity_phone: props.thisActivity[0].activity_phone,
                    activity_notes: props.thisActivity[0].activity_notes,
                  },
                }}
              >
                <p>Edit Activity</p>
              </Link>{" "}
              <button
                onClick={() => props.deleteActivity(props.thisActivity[0].id, history)}
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
              <p>
                {props.thisActivity[0].activity_name
                  ? props.thisActivity[0].activity_name
                  : "N/A"}
              </p>
              <p>
                {props.thisActivity[0].activity_description
                  ? props.thisActivity[0].activity_description
                  : "N/A"}
              </p>
              <p>
                {props.thisActivity[0].activity_address
                  ? props.thisActivity[0].activity_address
                  : "N/A"}
              </p>
              <p>
                {props.thisActivity[0].activity_phone
                  ? props.thisActivity[0].activity_phone
                  : "N/A"}
              </p>
              <p>
                {props.thisActivity[0].activity_start_date
                  ? props.thisActivity[0].activity_start_date
                  : "N/A"}
              </p>
              <p>
                {props.thisActivity[0].activity_end_date
                  ? props.thisActivity[0].activity_end_date
                  : "N/A"}
              </p>
              <p>
                {props.thisActivity[0].activity_upvote
                  ? props.thisActivity[0].activity_upvote
                  : "N/A"}
              </p>
              <p>
                {props.thisActivity[0].activity_notes
                  ? props.thisActivity[0].activity_notes
                  : "N/A"}
              </p>
            </div>
          </div>
          <div className="tripstuff2">
            {/* <Link to="/activityDash">
              {props.thisTrip[0].tripName} activities
            </Link>
            <Link to="parkingDash">
              {props.thisTrip[0].tripName} parking lots
            </Link>
            <Link to="shoppingDash">
              {props.thisTrip[0].tripName} shopping lists
            </Link>
            <Link to="/flightDash">{props.thisTrip[0].tripName} flights</Link> */}
          </div>
        </div>
        <Footer />
      </>
    );
  } else {
    return null;
  }
}

const mapStateToProps = (state) => {
  return {
    thisActivity: state.activityReducer.activity,
    thisTrip: state.tripsReducer.trip,
  };
};

const mapDispatchToProps = { getActivity, deleteActivity };

export default connect(mapStateToProps, mapDispatchToProps)(ActivityDetails);
