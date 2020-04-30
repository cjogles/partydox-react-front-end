import React from "react";
import Trip from './Trip';
import { connect } from "react-redux";

function Trips(props) {

  return (
    <>
      <div className="tripList">
        <h2>Your Trips</h2>
        {props.trips.map(trip => {
          return <Trip key={trip.id} trip={trip}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Trips);
