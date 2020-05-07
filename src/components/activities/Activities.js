import React from "react";
import Activity from "./Activity";
import { connect } from "react-redux";
import NavFriend from "../friends/NavFriend";
import Footer from "../FooterSignUp";
import { Link } from "react-router-dom";

function Activities(props) {
  return (
    <>
      <NavFriend />
      <div className="dash">
        <div className="dashContainer1">
          <h2 className="dashH">Welcome!</h2>
          <div className="tripList">
          <div className="addtrip1">
          <h2 className="tripListH">{localStorage.getItem("tripName")} activities below: </h2>
          <div className="addtrip">
            <Link
              to={{
                pathname: "/addActivity",
                state: { userId: localStorage.getItem("id") },
              }}
            >
              <p>Add an Activity</p>
            </Link>
          </div>
        </div>
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
