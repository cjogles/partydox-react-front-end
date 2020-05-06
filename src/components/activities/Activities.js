import React from "react";
import Activity from "./Activity";
import { connect } from "react-redux";
import NavFriend from "../friends/NavFriend";
import Footer from "../FooterSignUp";

function Activities(props) {
  console.log.apply("activities in redux store", props.activities);
  return (
    <>
      <NavFriend />
      <div className="dash">
        <div className="dashContainer1">
          <h2 className="dashH">Welcome!</h2>
          <div className="tripList">
            <h2 className="tripListH"> Your Activities</h2>
            {props.activities.map((activity) => {
              return <Activity key={activity.id} activity={activity} />;
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    activities: state.activityReducer.activities,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Activities);
