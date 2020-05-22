import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function ProfileList(props) {
  return (
    <>
      <div className="tripList">
        <div className="addtrip1">
          <h2 className="tripListH">Profile Info Below: </h2>
          <div className="addtrip">
            <Link
              to={{
                pathname: "/updateProfile",
                state: {
                  friend: props.profile,
                  tripId: props.tripId,
                },
              }}
            >
              <p>Update Profile</p>
            </Link>
          </div>
        </div>
        <Profile
          friend={props.profile}
          tripName={props.tripName}
          tripId={props.tripId}
        />
      </div>
    </>
  );
}

// necessary state and action creators for activity list component
const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileList);
