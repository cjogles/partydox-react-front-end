import React from "react";
import Activity from "./Activity";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function ActivityList(props) {
  return (
    <>
      <div className="tripList">
        <div className="addtrip1">
          <h2 className="tripListH">
            {props.tripName} activities below:{" "}
          </h2>
          <div className="addtrip">
            <Link to={{
                pathname: "/addActivity",
                state: {
                  tripId: props.tripId,
                },
              }}>
              <p>Add an Activity</p>
            </Link>
          </div>
        </div>
        {/* map through the list of users activities as provided 
                via prop drilling from the activity dashboard */}
        {props.activities.map((activity) => {
          return <Activity key={activity.id} activity={activity} tripName={props.tripName} tripId={props.tripId}/>;
        })}
      </div>
    </>
  );
}

// necessary state and action creators for activity list component
const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ActivityList);
