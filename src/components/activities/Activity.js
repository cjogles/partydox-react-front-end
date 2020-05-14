import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { deleteActivity } from "../../actions/activityActions";

function Activity(props) {
  // necessary utils for Activity component
  let history = useHistory();

  return (
    <>
      <div className="trip">
        <div className="tripdiv1">
          <div className="tripname">
            {/* display activity name, description
             and likes as passed down from activity dashboard */}
            <h6>Name:</h6>
            <h2>{props.activity.activity_name}</h2>
          </div>
          <div className="tripdescription">
            <h6>Description:</h6>
            <h2>{props.activity.activity_description}</h2>
          </div>
          <div className="tripdescription">
            <h6>Likes:</h6>
            <h2>{props.activity.activity_upvote}</h2>
          </div>
        </div>

        <div className="tripdiv2">
          <div>
            {/* continue passing down the respective activity 
                from props to activity details page     */}
            <Link
              to={{
                pathname: "/activityDetails",
                state: {
                  activity: props.activity,
                  tripName: props.tripName,
                  tripId: props.tripId,
                },
              }}
            >
              <p>View Activity Details</p>
            </Link>
          </div>
        </div>

        <div className="tripdiv3">
          <div>
            <Link to="/inviteFriend">
              <p>Invite a Friend to Collaborate!</p>
            </Link>
          </div>

          <div>
            {/* continue passing down the respective activity 
                from props to update activity page     */}
            <Link
              to={{
                pathname: "/updateActivity",
                state: {
                  tripId: localStorage.getItem("tripId"),
                  id: props.activity.id,
                  activity_name: props.activity.activity_name,
                  activity_description:
                    props.activity.activity_description,
                  activity_start_date:
                    props.activity.activity_start_date,
                  activity_end_date: props.activity.activity_end_date,
                  activity_address: props.activity.activity_address,
                  activity_phone: props.activity.activity_phone,
                  activity_notes: props.activity.activity_notes,
                },
              }}
            >
              <p>Edit Activity</p>
            </Link>{" "}
          </div>

          <div>
            {/* onClick, delete Activity by activity id and user id and 
            inside action creator, redirect or push to the 
            activity dashboard */}
            <button
              onClick={() => props.deleteActivity(props.activity.id, history)}
            >
              <p>Delete Activity</p>
            </button>{" "}
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = { deleteActivity };

export default connect(mapStateToProps, mapDispatchToProps)(Activity);
