import React from "react";
import Activity from './Activity';
import { connect } from "react-redux";

function Activities(props) {

  let activities = props.location.state.activities;

  return (
    <>
      <div className="activityList">
        <h2>Your Activities</h2>
        {activities.map(activity => {
          return <Activity key={activity.id} activity={activity}/>
        })}
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Activities);