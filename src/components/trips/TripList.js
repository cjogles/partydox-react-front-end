import React from "react";
import Trip from "./Trip";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function TripList(props) {
  return (
    <>
      <div className="tripList">
        <div className="addtrip1">
          <h2 className="tripListH">See Your Trips Here: </h2>
          <div className="addtrip">
            <Link to="/addTrip">
              <p>Add a Trip</p>
            </Link>
          </div>
        </div>
        {/* map through the list of users trips as provided 
        via prop drilling from the dashboard */}
        {props.trips.map((trip) => {
          return <Trip key={trip.id} trip={trip} />;
        })}
      </div>
    </>
  );
}

// necessary state and action creators for TripList component
const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TripList);
