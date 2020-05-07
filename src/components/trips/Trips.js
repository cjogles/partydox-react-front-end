import React from "react";
import Trip from "./Trip";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function Trips(props) {
  return (
    <>
      <div className="tripList">
        <div className="addtrip1">
          <h2 className="tripListH">See Your Trips Here: </h2>
          <div className="addtrip">
            <Link
              to={{
                pathname: "/addTrip",
                state: { userId: localStorage.getItem("id") },
              }}
            >
              <p>Add a Trip</p>
            </Link>
          </div>
        </div>

        {props.trips.map((trip) => {
          return <Trip key={trip.id} trip={trip} />;
        })}
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Trips);
